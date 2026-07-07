/**
 * Simple in-memory rate limiter for API routes.
 * Limits requests per IP to prevent abuse and carding attacks.
 * 
 * Note: In-memory means this resets on function cold start.
 * For production scale, replace with Redis/Upstash.
 */

const requestCounts = new Map<string, { count: number; resetAt: number }>();

const LIMITS: Record<string, { max: number; windowMs: number }> = {
  default: { max: 10, windowMs: 60_000 },      // 10 req/min for forms
  payment: { max: 5, windowMs: 60_000 },         // 5 req/min for payment hooks
  diagnostic: { max: 20, windowMs: 60_000 },     // 20 req/min for diagnostics
};

export function rateLimit(
  ip: string,
  type: keyof typeof LIMITS = "default"
): { allowed: boolean; remaining: number } {
  const limit = LIMITS[type];
  const now = Date.now();
  const key = `${ip}:${type}`;
  const record = requestCounts.get(key);

  if (!record || now > record.resetAt) {
    requestCounts.set(key, { count: 1, resetAt: now + limit.windowMs });
    return { allowed: true, remaining: limit.max - 1 };
  }

  if (record.count >= limit.max) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: limit.max - record.count };
}

export function getIP(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

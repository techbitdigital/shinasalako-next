import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const R2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET = process.env.R2_BUCKET_NAME || "";

/**
 * Generate a pre-signed download URL for a file in R2.
 * Default expiry: 48 hours (172800 seconds).
 */
export async function generateDownloadUrl(
  fileKey: string,
  expiresInSeconds = 172800
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: fileKey,
  });
  return getSignedUrl(R2, command, { expiresIn: expiresInSeconds });
}

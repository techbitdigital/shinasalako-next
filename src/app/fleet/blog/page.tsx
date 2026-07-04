import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "The Practitioner's Blog",
  description:
    "Practitioner writing on fleet management, telematics, and embedded operating discipline. From the seat of the embedded service provider — by Shina Salako, MD/CEO of SALCOMMS.",
  path: "/fleet/blog",
});

const livePosts = [
  {
    slug: "five-mistakes",
    category: "Operations",
    date: "2026",
    title: "The five fleet management mistakes that cost Nigerian cargo-owners the most money.",
    excerpt: "Across fifteen years of embedded service inside cargo-owner operations, the same five mistakes show up in nearly every fleet management programme that fails to produce the outcomes its sponsor expected.",
    readTime: "9 min read",
  },
  {
    slug: "roi-calculation",
    category: "Finance",
    date: "2026",
    title: "How to calculate the real ROI of a fleet management programme.",
    excerpt: "The formula, the cost side, the benefit side, and a worked example using real numbers from a cargo-owner engagement. The framework from Chapter 19, applied step by step.",
    readTime: "7 min read",
  },
  {
    slug: "maturity-model",
    category: "Strategy",
    date: "2026",
    title: "The five-stage fleet maturity model — where most operations actually sit.",
    excerpt: "Tracking, monitoring, discipline, optimisation, strategic asset. The honest distribution across cargo-owner organisations in West Africa today — and what moves an operation up a stage.",
    readTime: "8 min read",
  },
];

const comingSoonPosts = [
  { title: "What a working control tower actually looks like in 2026.", category: "Operations" },
  { title: "Why most telematics implementations fail in West African fleets.", category: "Technology" },
  { title: "Driver behaviour scoring that actually changes driver behaviour.", category: "Operations" },
  { title: "The fuel report your accounts team is not reading — and why.", category: "Finance" },
  { title: "Vendor governance for cargo-owners managing third-party transporters.", category: "Governance" },
  { title: "Incident response when the operating data sits with you, not the transporter.", category: "Operations" },
  { title: "Cost-per-kilometre and the freight-rate model your transporter is using.", category: "Finance" },
  { title: "Building a fleet management programme from scratch — the first 90 days.", category: "Strategy" },
  { title: "From device installer to embedded service — twelve years inside Guinness Nigeria.", category: "Case Study" },
];

const categories = [
  { name: "All", count: 12 },
  { name: "Operations", count: 4 },
  { name: "Technology", count: 1 },
  { name: "Finance", count: 3 },
  { name: "Strategy", count: 2 },
  { name: "Governance", count: 1 },
  { name: "Case Study", count: 1 },
];

export default function BlogPage() {
  return (
    <main style={{ background: "#fff" }}>
      {/* Page header */}
      <section className="py-12 text-center" style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl mb-3" style={{ color: "var(--navy)" }}>
            The Practitioner&rsquo;s <span style={{ color: "var(--amber)" }}>Blog</span>
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Long-form practitioner notes on telematics, fleet operations, and the embedded service model. Written from the seat the author has worked in for fifteen years.
          </p>
        </div>
      </section>

      {/* Featured post hero */}
      <section className="py-8" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ background: "var(--navy)", minHeight: "280px", padding: "48px 44px" }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: "linear-gradient(135deg, var(--amber) 0%, transparent 60%)" }}
            />
            <div className="relative" style={{ maxWidth: "580px" }}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Featured
                </span>
                <span className="text-xs" style={{ color: "rgba(235,243,251,0.6)" }}>2026</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-snug" style={{ color: "#fff" }}>
                {livePosts[0].title}
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(235,243,251,0.85)" }}>
                {livePosts[0].excerpt}
              </p>
              <Link
                href={`/fleet/blog/${livePosts[0].slug}`}
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold border-0"
                style={{ background: "var(--amber)", color: "#fff" }}
              >
                Read the post
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular posts - 3 columns */}
      <section className="py-10" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-6 text-center" style={{ color: "var(--muted)" }}>
            Published Posts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
            {livePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/fleet/blog/${post.slug}`}
                className="rounded-xl overflow-hidden border-0 block group"
                style={{ border: "1px solid var(--line)", background: "#fff" }}
              >
                <div
                  className="h-36 flex items-end p-4"
                  style={{ background: "linear-gradient(135deg, var(--navy) 0%, #0d2744 100%)" }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded"
                    style={{ background: "var(--amber)", color: "#fff" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{post.date} · {post.readTime}</p>
                  <h3 className="font-serif text-base font-bold mb-2 leading-snug" style={{ color: "var(--navy)" }}>
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {post.excerpt.substring(0, 100)}...
                  </p>
                  <p className="text-xs font-semibold mt-3" style={{ color: "var(--amber)" }}>
                    Read post →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main two-column layout */}
      <section className="py-10 pb-16" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

            {/* Left: post list */}
            <div className="space-y-6">
              <h2 className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>All posts</h2>

              {/* Live posts */}
              {livePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/fleet/blog/${post.slug}`}
                  className="flex gap-5 border-0 group"
                  style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--line)" }}
                >
                  <div
                    className="flex-shrink-0 rounded-lg"
                    style={{ width: "140px", height: "100px", background: "linear-gradient(135deg, var(--navy) 0%, #0d2744 100%)" }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{ background: "var(--amber)", color: "#fff" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-base font-bold mb-1.5 leading-snug" style={{ color: "var(--navy)" }}>
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--ink-soft)" }}>
                      {post.excerpt.substring(0, 120)}...
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>By Shina Salako · SALCOMMS</p>
                  </div>
                </Link>
              ))}

              {/* Coming soon posts */}
              {comingSoonPosts.map((post, i) => (
                <div
                  key={i}
                  className="flex gap-5"
                  style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--line)", opacity: 0.5 }}
                >
                  <div
                    className="flex-shrink-0 rounded-lg"
                    style={{ width: "140px", height: "100px", background: "var(--line)" }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{ background: "var(--muted)", color: "#fff" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs italic" style={{ color: "var(--muted)" }}>Coming soon</span>
                    </div>
                    <h3 className="font-serif text-base font-bold leading-snug" style={{ color: "var(--navy)" }}>
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: sidebar */}
            <div className="space-y-8">

              {/* Recent posts */}
              <div>
                <h3 className="font-serif text-base font-bold mb-4 pb-2" style={{ color: "var(--navy)", borderBottom: "2px solid var(--navy)" }}>
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {livePosts.map((post) => (
                    <Link key={post.slug} href={`/fleet/blog/${post.slug}`} className="flex gap-3 border-0 group">
                      <div
                        className="flex-shrink-0 rounded"
                        style={{ width: "56px", height: "44px", background: "linear-gradient(135deg, var(--navy) 0%, #0d2744 100%)" }}
                      />
                      <div>
                        <p className="text-xs font-semibold leading-snug" style={{ color: "var(--navy)" }}>{post.title.substring(0, 55)}...</p>
                        <p className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>{post.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-serif text-base font-bold mb-4 pb-2" style={{ color: "var(--navy)", borderBottom: "2px solid var(--navy)" }}>
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div key={cat.name} className="flex justify-between items-center text-sm py-1" style={{ borderBottom: "1px solid var(--line)" }}>
                      <span style={{ color: "var(--ink-soft)" }}>{cat.name}</span>
                      <span className="text-xs font-bold" style={{ color: "var(--muted)" }}>{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-lg p-5" style={{ background: "var(--navy)" }}>
                <h3 className="font-serif text-base font-bold mb-2" style={{ color: "#fff" }}>Newsletter</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(235,243,251,0.8)" }}>
                  One quarterly note from the author. Substantive. No promotions. Unsubscribe any time.
                </p>
                <Link
                  href="/fleet/firstlook"
                  className="block text-center py-2.5 rounded text-xs font-bold border-0"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Subscribe via First Look
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

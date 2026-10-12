import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts, type Post } from "@/lib/content";

export const metadata = {
  title: "Blog – Barkajaya Indonesia",
  description: "Insights on teak furniture, materials, production planning and sustainable manufacturing from our Jepara workshop.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container flex flex-col items-start gap-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
              Blog
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Insights & Updates
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Practical guides on materials, production planning and sustainable
              manufacturing from our Jepara workshop.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground">{post.date}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:underline group-hover:underline-offset-4">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground">
        Read more <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} – Barkajaya Indonesia`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col">
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            By {post.author}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              This is placeholder article content. In Phase 5 we'll connect the
              blog to Supabase so you can publish and edit posts from a CMS
              without touching code.
            </p>
            <p>
              Barkajaya Indonesia manufactures premium furniture for hospitality,
              commercial and residential clients worldwide. Our Jepara workshop
              combines traditional craftsmanship with modern production lines.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

import type { Metadata } from "next";
import { BlogPostContent } from "@/components/blog/blog-post-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `[ব্লগ] ${slug} — বেস্ট টিউটোরিয়াল হোম`,
    description: "English Grammar, Writing ও Vocabulary সম্পর্কে বাংলায় ব্লগ পোস্ট।",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}

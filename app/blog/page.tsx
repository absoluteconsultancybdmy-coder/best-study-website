import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/blog-page-content";

export const metadata: Metadata = {
  title: "English শেখার ব্লগ — বেস্ট টিউটোরিয়াল হোম",
  description: "Grammar, Writing, Reading ও Vocabulary সম্পর্কে বাংলায় ব্লগ পোস্ট। বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য।",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
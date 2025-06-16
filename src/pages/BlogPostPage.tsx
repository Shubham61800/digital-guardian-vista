import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

// Same DEMO_POSTS as in Blog.tsx for demo purposes
const DEMO_POSTS = [
  {
    id: "1",
    title: "Unlocking HR Efficiency with AI",
    preview:
      "Discover how AI automation is transforming the hiring journey for modern HR teams...",
    content:
      "In this detailed article, we explore how Artificial Intelligence (AI) is revolutionizing the HR space—from automating repetitive tasks to enhancing candidate experience. Learn how companies are leveraging AI-driven tools to improve efficiency, accuracy, and the overall hiring journey for modern HR teams...",
  },
  {
    id: "2",
    title: "Making Recruitment Data-Driven",
    preview:
      "Using analytics tools to power smarter recruiting decisions at scale.",
    content:
      "Data-driven recruitment is reshaping hiring strategies. In this post, we dive into smart analytics, KPIs, and actionable dashboards that allow HR teams to make more informed, agile decisions. Gain insights into how data unlocks competitive advantages for companies looking to attract the best talent rapidly...",
  },
];

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = DEMO_POSTS.find((p) => p.id === id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 md:px-20 py-28">
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 group font-medium"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
        {!post ? (
          <div className="text-center text-muted-foreground">
            Blog post not found.
          </div>
        ) : (
          <Card className="bg-white max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl mb-2">{post.title}</CardTitle>
              <p className="text-muted-foreground text-base">{post.preview}</p>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 text-lg leading-relaxed mt-4 whitespace-pre-line">
                {post.content}
              </div>
            </CardContent>
          </Card>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default BlogPostPage;

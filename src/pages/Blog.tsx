
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  preview: string;
  // Add more fields if needed
};

const DEMO_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Unlocking HR Efficiency with AI",
    preview: "Discover how AI automation is transforming the hiring journey for modern HR teams...",
  },
  {
    id: "2",
    title: "Making Recruitment Data-Driven",
    preview: "Using analytics tools to power smarter recruiting decisions at scale.",
  },
];

const Blog = () => {
  // Replace this with fetching from Notion API when backend is available
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setPosts(DEMO_POSTS);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 md:px-20 py-28">
        <h1 className="text-4xl font-bold text-primary-500 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
            <div className="col-span-2 text-center text-muted-foreground">Loading blog posts...</div>
          ) : posts.length === 0 ? (
            <div className="col-span-2 text-center text-muted-foreground">No blog posts found.</div>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="hover-lift bg-white transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.preview}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        <div className="mt-8 text-gray-500 text-sm text-center">
          <span>
            This is a demo. Connect your project to Supabase and Notion API to fetch real content.
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;

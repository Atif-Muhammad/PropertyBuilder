import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Home Building", "Renovation Tips", "Industry News", "Safety", "Sustainability"];

  const blogPosts = [
    {
      id: 1,
      title: "Essential Home Construction Timeline: What to Expect",
      excerpt: "Planning a new home? Understanding the construction timeline helps you prepare for each phase of your building project.",
      category: "Home Building",
      author: "John Mitchell",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Kitchen Renovation on a Budget: 10 Cost-Saving Tips",
      excerpt: "Transform your kitchen without breaking the bank. Discover smart strategies to maximize your renovation budget.",
      category: "Renovation Tips",
      author: "Sarah Williams",
      date: "2024-01-12",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "2024 Construction Industry Trends: What's Changing",
      excerpt: "Stay ahead of the curve with the latest trends shaping the construction industry in 2024 and beyond.",
      category: "Industry News",
      author: "Mike Thompson",
      date: "2024-01-10",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Safety First: Essential Equipment for Construction Sites",
      excerpt: "A comprehensive guide to safety equipment and protocols that protect workers and ensure project success.",
      category: "Safety",
      author: "John Mitchell",
      date: "2024-01-08",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Building Materials: Eco-Friendly Options",
      excerpt: "Explore environmentally conscious building materials that reduce impact without compromising quality.",
      category: "Sustainability",
      author: "Sarah Williams",
      date: "2024-01-05",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "Bathroom Renovation Mistakes to Avoid",
      excerpt: "Learn from common bathroom renovation pitfalls and how to sidestep costly mistakes in your project.",
      category: "Renovation Tips",
      author: "Mike Thompson",
      date: "2024-01-03",
      readTime: "5 min read",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Construction Insights & Tips</h1>
            <p className="text-xl opacity-90 mb-8">
              Stay informed with expert construction advice, industry insights, and practical tips 
              from our experienced team of building professionals.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 bg-construction-concrete">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-construction-steel mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Badge className="mb-2">{post.category}</Badge>
                      <h3 className="text-lg font-semibold text-construction-steel">Featured Article</h3>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              {searchTerm ? `Search Results for "${searchTerm}"` : 
               selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" && !searchTerm ? regularPosts : filteredPosts).map((post) => (
                <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No articles found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl opacity-90 mb-8">
              Subscribe to our newsletter for the latest construction tips, industry insights, and project updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 flex-1"
              />
              <Button variant="cta" className="sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-construction-concrete">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-construction-steel mb-4">
              More Resources
            </h2>
            <p className="text-xl text-gray-700">
              Explore additional ways to learn about construction and get expert advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Project Gallery</CardTitle>
                <CardDescription>
                  Browse our completed projects for inspiration and ideas for your next construction project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Projects
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Free Consultation</CardTitle>
                <CardDescription>
                  Schedule a free consultation with our experts to discuss your construction project needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="default" className="w-full">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>FAQ Section</CardTitle>
                <CardDescription>
                  Find answers to common construction questions and learn about our processes and policies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ShoppingBag,
  Search,
  User,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Header } from "@/components/header";

export default function JournalPage() {
  const categories = [
    { name: "All", count: 24 },
    { name: "Styling Tips", count: 8 },
    { name: "Cultural Insights", count: 6 },
    { name: "Artisan Stories", count: 5 },
    { name: "Navratri Trends", count: 5 },
  ];

  const featuredPost = {
    title:
      "The Art of Navratri Fashion: Blending Tradition with Contemporary Style",
    excerpt:
      "Discover how to honor traditional Gujarati aesthetics while incorporating modern elements into your Navratri wardrobe this season.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Styling Tips",
    readTime: "5 min read",
    date: "July 5, 2025",
    author: "Priya Sharma",
  };

  const posts = [
    {
      id: 1,
      title: "Navratri Color Guide: The Significance Behind Each Day's Hue",
      excerpt:
        "Explore the meaning behind the nine colors of Navratri and how to style your outfits accordingly for each night of celebration.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Cultural Insights",
      readTime: "4 min read",
      date: "July 2, 2025",
      author: "Maya Patel",
    },
    {
      id: 2,
      title: "Meet the Master Craftswomen Behind THE SAROJ's Mirror Work Blouses",
      excerpt:
        "An intimate conversation with the skilled artisans from rural Gujarat who create our signature mirror-embellished blouses.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Artisan Stories",
      readTime: "7 min read",
      date: "June 28, 2025",
      author: "Neha Joshi",
    },
    {
      id: 3,
      title: "5 Ways to Style Your Chaniya Choli for Different Garba Venues",
      excerpt:
        "From traditional community gatherings to modern club garba nights, adapt your look for every type of Navratri celebration.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Styling Tips",
      readTime: "3 min read",
      date: "June 24, 2025",
      author: "Priya Sharma",
    },
    {
      id: 4,
      title: "The Evolution of Bandhani: From Village Craft to Fashion Statement",
      excerpt:
        "Trace the journey of Gujarat's beloved tie-dye technique and how it became a cornerstone of contemporary Navratri fashion.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Artisan Stories",
      readTime: "6 min read",
      date: "June 19, 2025",
      author: "Maya Patel",
    },
    {
      id: 5,
      title: "Accessorizing for Dandiya Nights: The Complete Guide",
      excerpt:
        "Learn how to select and style the perfect jewelry, footwear, and accessories to complement your Navratri outfits.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Styling Tips",
      readTime: "5 min read",
      date: "June 12, 2025",
      author: "Priya Sharma",
    },
    {
      id: 6,
      title: "Sustainable Celebrations: Eco-Friendly Approaches to Navratri Fashion",
      excerpt:
        "Discover how to honor tradition while making environmentally conscious choices for your festival wardrobe.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Navratri Trends",
      readTime: "4 min read",
      date: "June 5, 2025",
      author: "Neha Joshi",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-rose-900 mb-6">
            THE SAROJ JOURNAL
          </h1>
          <p className="text-lg md:text-xl text-rose-700 max-w-3xl mx-auto leading-relaxed">
            Stories of tradition, craftsmanship, and Navratri celebrations. Discover styling tips,
            cultural insights, and the artisans who bring our festive creations to life.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 px-4 border-b border-rose-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-rose-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10 border-rose-200 focus:border-rose-500"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.name === "All" ? "default" : "outline"}
                  size="sm"
                  className={
                    category.name === "All"
                      ? "bg-rose-600 hover:bg-rose-700 text-white"
                      : "border-rose-300 text-rose-700 hover:bg-rose-50"
                  }
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full"
              />
              <Badge className="absolute top-6 left-6 bg-rose-500 text-white">
                Featured
              </Badge>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-rose-600">
                <Badge
                  variant="secondary"
                  className="bg-rose-100 text-rose-800"
                >
                  {featuredPost.category}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-rose-900 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-rose-700 leading-relaxed text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-rose-600">
                <span>By {featuredPost.author}</span>
              </div>
              <Button
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white"
              >
                Read Full Article
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
              Latest Stories
            </h2>
            <p className="text-rose-700 max-w-2xl mx-auto">
              Explore our latest articles on Navratri fashion, cultural traditions,
              and the stories that inspire our festive collections.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer border-rose-100 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-rose-800">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-rose-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-xl text-rose-900 mb-3 leading-tight group-hover:text-rose-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-rose-700 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-rose-600">
                        By {post.author}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-rose-600 hover:text-rose-800 p-0"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-rose-900 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <BookOpen className="h-12 w-12 text-rose-300 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif">
              Never Miss a Story
            </h2>
            <p className="text-rose-100">
              Subscribe to our journal for the latest articles on Navratri fashion, styling tips,
              and cultural insights to enhance your festive celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-rose-900 border-0"
              />
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-rose-200">
              Join 10,000+ festive fashion enthusiasts who get inspired weekly. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

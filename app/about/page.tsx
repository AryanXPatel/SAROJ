import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ShoppingBag,
  Search,
  User,
  Leaf,
  Users,
  Award,
  Globe,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Header } from "@/components/header";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description:
        "Every piece is designed with care and attention to detail, reflecting our passion for beautiful fashion.",
    },
    {
      icon: Leaf,
      title: "Sustainable Fashion",
      description:
        "We're committed to ethical production and sustainable materials that respect our planet.",
    },
    {
      icon: Users,
      title: "Empowering Women",
      description:
        "Our mission is to help every woman feel confident, beautiful, and authentically herself.",
    },
    {
      icon: Award,
      title: "Quality Promise",
      description:
        "We use only the finest materials and work with skilled artisans to ensure exceptional quality.",
    },
  ];

  const team = [
    {
      name: "Priya",
      role: "Founder & Creative Heart",
      image: "/placeholder.svg?height=300&width=300",
      quote: "Every customer interaction is an opportunity to spread joy and build lasting relationships.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-rose-900 mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-rose-700 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for timeless elegance and sustainable fashion,
            SAROJ celebrates the unique beauty of every woman through carefully
            crafted pieces that tell a story.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Priya, Founder of SAROJ"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <Quote className="h-8 w-8 text-rose-500 mb-2" />
                <p className="text-sm text-rose-700 italic">
                  "Every customer interaction is an opportunity to spread joy and build lasting relationships."
                </p>
              </div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
                  From Her Heart to Yours
                </h2>
                <p className="text-rose-700 leading-relaxed mb-4">
                  SAROJ began in 2025 when founder Priya couldn't find
                  clothing that truly reflected her values of sustainability,
                  quality, and feminine elegance. Frustrated by fast fashion's
                  impact on both women and the environment, she set out to
                  create something different.
                </p>
                <p className="text-rose-700 leading-relaxed mb-4">
                  Starting from her small studio apartment, Priya began
                  designing pieces that would make women feel confident and
                  beautiful while honoring ethical production practices. Each
                  design was carefully considered, from the initial sketch to
                  the final stitch.
                </p>
                <p className="text-rose-700 leading-relaxed">
                  Today, SAROJ has grown into a beloved brand that continues to
                  prioritize quality over quantity, sustainability over speed,
                  and the unique beauty of every woman who wears our pieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
              Our Values
            </h2>
            <p className="text-rose-700 max-w-2xl mx-auto">
              These core principles guide everything we do, from design to
              production to customer care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-rose-100 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-medium text-rose-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-rose-700 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-rose-700 max-w-2xl mx-auto">
              Take a peek into our design process and the craftsmanship that
              goes into every SAROJ piece.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Design sketches"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-xl font-medium text-rose-900">
                Design Process
              </h3>
              <p className="text-rose-700 text-sm">
                Every piece begins with hand-drawn sketches, carefully
                considering fit, comfort, and timeless appeal.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Fabric selection"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-xl font-medium text-rose-900">
                Fabric Selection
              </h3>
              <p className="text-rose-700 text-sm">
                We source only the finest sustainable materials, from organic
                cotton to ethically-produced silk.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Artisan craftsmanship"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-xl font-medium text-rose-900">
                Artisan Craftsmanship
              </h3>
              <p className="text-rose-700 text-sm">
                Our skilled artisans bring each design to life with meticulous
                attention to detail and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
              Meet the Founder
            </h2>
            <p className="text-rose-700 max-w-2xl mx-auto">
              The passionate heart behind SAROJ, bringing a unique vision and perspective to our mission.
            </p>
          </div>
          <div className="grid md:grid-cols-1 max-w-md mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-rose-100 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-rose-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-rose-600 text-sm mb-3">{member.role}</p>
                    <div className="relative">
                      <Quote className="h-4 w-4 text-rose-400 mb-2" />
                      <p className="text-rose-700 text-sm italic leading-relaxed">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-rose-900">
                Our Sustainability Promise
              </h2>
              <p className="text-rose-700 leading-relaxed">
                We believe beautiful fashion shouldn't come at the cost of our
                planet. That's why we're committed to sustainable practices at
                every step of our process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-3 w-3 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-1">
                      Ethical Production
                    </h4>
                    <p className="text-rose-700 text-sm">
                      All our pieces are made in fair-trade certified facilities
                      with safe working conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="h-3 w-3 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-1">
                      Sustainable Materials
                    </h4>
                    <p className="text-rose-700 text-sm">
                      We use organic, recycled, and responsibly sourced
                      materials whenever possible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-3 w-3 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-1">
                      Minimal Waste
                    </h4>
                    <p className="text-rose-700 text-sm">
                      Our zero-waste design process ensures every scrap of
                      fabric is used purposefully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Sustainable fashion practices"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-rose-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Join Our Journey
          </h2>
          <p className="text-rose-100 max-w-2xl mx-auto mb-8">
            Be part of a community that values quality, sustainability, and the
            unique beauty of every woman. Discover pieces that will become
            treasured parts of your wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-rose-900 hover:bg-rose-50"
            >
              Shop Our Collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-rose-900 bg-transparent"
            >
              Follow Our Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

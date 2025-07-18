"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  GitBranch,
  Quote,
  FileText,
  Target,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SessionRedirect } from "@/components/SessionRedirect";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: Users,
    title: "Smart Group Formation",
    description:
      "Connect with researchers who share your interests and expertise. Our AI-powered matching helps you find the perfect collaborators.",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description:
      "Share and discover research materials, datasets, and references in a centralized, searchable repository.",
  },
  {
    icon: FileText,
    title: "Collaborative Writing",
    description:
      "Co-author papers with real-time editing, commenting, and suggestion features designed for academic writing.",
  },
  {
    icon: Target,
    title: "Milestone Tracking",
    description:
      "Set research goals, track progress, and celebrate achievements with visual timelines and progress indicators.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Never lose your work with comprehensive version history, branching, and merge capabilities for all your documents.",
  },
  {
    icon: Quote,
    title: "Citation Management",
    description:
      "Automatically format citations, manage bibliographies, and ensure proper attribution across all your research.",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "PhD Candidate, MIT",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "This platform revolutionized how our research team collaborates. The version control for academic papers is a game-changer.",
  },
  {
    name: "Prof. Michael Rodriguez",
    role: "Research Director, Stanford",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Finally, a tool that understands the unique needs of academic research. The citation management alone saves us hours every week.",
  },
  {
    name: "Emma Thompson",
    role: "Graduate Student, Oxford",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Finding research collaborators has never been easier. I've connected with amazing researchers from around the world.",
  },
];

const pricingPlans = [
  {
    name: "Student",
    price: "Free",
    description: "Perfect for individual students and early-career researchers",
    features: [
      "Up to 3 active projects",
      "5GB storage",
      "Basic citation tools",
      "Community access",
    ],
    popular: false,
  },
  {
    name: "Researcher",
    price: "$19",
    period: "/month",
    description: "Ideal for active researchers and small teams",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Advanced citation management",
      "Priority support",
      "Team collaboration tools",
    ],
    popular: true,
  },
  {
    name: "Institution",
    price: "Custom",
    description:
      "Tailored solutions for universities and research institutions",
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated support",
      "SSO integration",
    ],
    popular: false,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SessionRedirect />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/Hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4">
                🔬 Trusted by 10,000+ researchers worldwide
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              variants={fadeInUp}
            >
              Collaborate. Research.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Discover.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
              variants={fadeInUp}
            >
              The digital workspace where students and researchers form groups,
              share resources, co-author papers, and track milestones with
              powerful version control and citation tools.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <Button size="lg" className="h-12 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 bg-transparent"
              >
                Watch Demo
              </Button>
            </motion.div>

            <motion.div className="mt-16" variants={fadeInUp}>
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
                <Image
                  src="/placeholder.svg?height=600&width=1000"
                  alt="Research collaboration platform dashboard"
                  width={1000}
                  height={600}
                  className="relative rounded-xl border bg-background/50 shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for research collaboration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful tools designed specifically for the academic research
              workflow
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 bg-muted/50 transition-colors hover:bg-muted/80">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: "10,000+", label: "Active Researchers" },
              { number: "50,000+", label: "Papers Collaborated" },
              { number: "500+", label: "Universities" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold sm:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by researchers worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our community has to say about their research experience
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your research plan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free and scale as your research grows
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`relative h-full ${
                    plan.popular ? "border-primary shadow-lg" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <CardDescription className="mt-4">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-8 w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.price === "Custom"
                        ? "Contact Sales"
                        : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your research?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of researchers who are already collaborating more
              effectively
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

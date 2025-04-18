import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger, SlideIn } from "@/components/shared/motion";
import Image from "next/image";

export const metadata: Metadata = constructMetadata({
  title: "Projects",
  description:
    "Explore my portfolio of projects in blockchain development, machine learning, and digital marketing.",
});

// Featured projects data
const featuredProjects = [
  {
    title: "Ignis AI Trading",
    description:
      "An AI-Agent companion that discovers and trades the most promising meme coins on the Solana network. Powered by advanced artificial intelligence for early-stage opportunities with massive growth potential.",
    tags: ["Next.js", "TypeScript", "Solana", "AI", "DeFi"],
    githubUrl: "",
    demoUrl: "https://ignis-client-fe-next.vercel.app/",
    previewImage: "/images/projects/ignis-work.png",
    features: [
      "AI-powered meme coin discovery",
      "Solana network integration",
      "P2E game rewards system",
      "Advanced pattern recognition",
      "Real-time market analysis",
    ],
  },
  {
    title: "Ignis User Authentication",
    description:
      "A secure authentication system for Ignis platform utilizing Telegram's OAuth for seamless user verification and access control. Implements modern security practices with a focus on user experience.",
    tags: ["Next.js", "TypeScript", "Telegram API", "OAuth", "TailwindCSS"],
    githubUrl: "",
    demoUrl: "https://user-ignis.vercel.app/login",
    previewImage: "/images/projects/ignis-login.png",
    features: [
      "Telegram OAuth integration",
      "Secure user authentication flow",
      "Responsive modern UI design",
      "Session management",
      "Protected route handling",
    ],
  },
  {
    title: "FreeTrade Tutor",
    description:
      "A premium trading education platform offering direct support, live trading sessions, and daily trade signals to help traders master the markets.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Trading"],
    githubUrl: "",
    demoUrl: "https://www.freetradetutor.com/",
    previewImage: "/images/projects/work-thing.png",
    features: [
      "Premium Telegram channel access",
      "Live trading sessions",
      "Direct support system",
      "Daily trade signals",
      "5-day trading week coverage",
    ],
  },
  {
    title: "Psycho Logout",
    description:
      "A crazy logout dashboard that doesn't want you to leave. This fun project adds a twist to the traditional logout experience, making users think twice before logging out.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/IamSolomonChika/Psycho_Logout",
    demoUrl: "https://psycho-logout-iota.vercel.app/",
    previewImage: "/images/projects/psycho-logout.png",
    features: [
      "Fun and interactive logout experience",
      "Responsive design",
      "Dark mode support",
      "Modern UI with smooth animations",
    ],
  },
  {
    title: "Smart Money Concepts",
    description:
      "Python package designed for algorithmic trading, implementing ICT's smart money concepts for trading strategies.",
    tags: ["Python", "Trading", "Algorithms"],
    githubUrl: "https://github.com/IamSolomonChika/smart-money-concepts",
    demoUrl: "",
    features: [
      "Algorithmic trading strategies",
      "Smart money concepts implementation",
      "Technical analysis tools",
      "Real-time market data processing",
    ],
  },
  {
    title: "FundWise",
    description:
      "A contracted investment platform that invests public funds in sports games, forex market, crypto market, and flash loans.",
    tags: ["JavaScript", "Investment", "DeFi"],
    githubUrl: "https://github.com/IamSolomonChika/FundWise",
    demoUrl: "",
    features: [
      "Multi-market investment options",
      "Portfolio management",
      "Risk assessment tools",
      "Real-time market tracking",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <SlideIn direction="down">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
      </SlideIn>

      <FadeInStagger>
        <div className="grid grid-cols-1 gap-12">
          {featuredProjects.map((project) => (
            <FadeIn key={project.title}>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {project.previewImage && (
                    <div className="relative h-[300px] lg:h-full">
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {project.githubUrl && (
                          <Link href={project.githubUrl} target="_blank">
                            <Button variant="outline">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Button>
                          </Link>
                        )}
                        {project.demoUrl && (
                          <Link href={project.demoUrl} target="_blank">
                            <Button>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn, FadeInStagger, SlideIn } from "@/components/shared/motion"
import { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { TypewriterEffect } from "@/components/shared/TypewriterEffect"

export const metadata: Metadata = constructMetadata()

const skills = [
  "Full-stack Developer",
  "Blockchain Developer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "Computer Vision Specialist",
  "Digital Marketer",
  "Smart Contract Developer",
  "Python Programmer",
  "DeFi Expert",
  "Web3 Developer",
  "AI Enthusiast",
  "AI Agents Developer",
  "Automation Expert",
  "Machine Learning Pipeline Specialist"
]

export default function Home() {
  return (
    <main className="min-h-[calc(80vh-65px)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-6">
        <SlideIn direction="down">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Solomon C. Chika
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
            <TypewriterEffect 
              words={skills}
              typingSpeed={150}
              deletingSpeed={40}
              pauseDuration={2000}
            />
          </p>
        </SlideIn>
        
        <FadeIn>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button>View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Skills Section */}
      <section className="w-full bg-muted/50 py-8 rounded-lg">
        <div className="container mx-auto px-6">
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Software Engineering</h3>
                  <p className="text-muted-foreground">
                    Crafting innovative solutions through blockchain technology, smart contracts, and full-stack web applications that drive efficiency and transform industries.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Harnessing the power of deep learning and computer vision to create intelligent systems that enhance decision-making and unlock new possibilities.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
                  <p className="text-muted-foreground">
                    Implementing strategic digital marketing campaigns that captivate audiences and elevate brands in the rapidly evolving tech landscape.
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </div>
      </section>
    </main>
  )
}

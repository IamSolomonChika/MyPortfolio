import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, FadeInStagger, SlideIn } from "@/components/shared/motion";
import blockChain from "@/components/lottieFiles/Blockchain";

export const metadata: Metadata = constructMetadata({
  title: "About",
  description:
    "Learn more about Solomon Chika - Full-stack Blockchain Developer, Machine Learning Engineer, and Digital Marketer.",
});

export default function AboutPage() {
  const skills = [
    {
      category: "Software Development",
      items: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "Python",
        "Rust - (In View)",
      ],
    },
    {
      category: "Machine Learning",
      items: [
        "TensorFlow",
        "PyTorch",
        "Deep Learning",
        "Computer Vision",
        "NLP",
        "AI Agents",
      ],
    },
    {
      category: "Blockchain",
      items: [
        "Smart Contracts",
        "DeFi",
        "Web3.js",
        "Ethereum",
        "Solidity",
        "Solana - (In View)",
      ],
    },
    {
      category: "Digital Marketing",
      items: [
        "SEO",
        "Content Strategy",
        "Social Media",
        "Analytics",
        "Growth Hacking",
      ],
    },
  ];

  return (
    <div className="container py-12">
      <SlideIn direction="down">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      </SlideIn>
      <div className="prose dark:prose-invert max-w-none mb-12">
        <FadeIn>
          <blockChain/>
          <p className="text-lg mb-4">
            I am a Full-stack Blockchain Developer, Digital Marketer, Python
            Programmer, and Machine Learning Engineer passionate about creating
            innovative, people-oriented personal projects that solve real-world
            problems. My expertise spans across multiple domains in technology,
            including software development, blockchain, artificial intelligence,
            and digital marketing, with a focus on bridging the gap between
            complex technologies and their practical applications.
          </p>
          <p className="text-lg mb-4">
            In Software Development, I leverage advanced frameworks and
            languages like JavaScript, TypeScript, Next.js, React, and Node.js
            to build scalable and user-friendly applications. My proficiency in
            Python allows me to deliver powerful backend solutions, while my
            exploration of Rust reflects my commitment to embracing cutting-edge
            tools.
          </p>
          <p className="text-lg mb-4">
            In the Machine Learning domain, I specialize in creating AI-driven
            solutions using TensorFlow, PyTorch, and deep learning techniques. I
            have a strong background in computer vision and natural language
            processing (NLP), enabling me to develop AI agents capable of
            solving complex tasks with precision.
          </p>
          <p className="text-lg mb-4">
            In the realm of Digital Marketing, I combine technical analytics
            with creative strategies, excelling in SEO, content strategy, social
            media marketing, and growth hacking. My approach ensures that
            projects not only perform technically but also reach their target
            audience effectively.
          </p>
          <p className="text-lg mb-4">
            My work reflects a commitment to empowering individuals with tools
            for autonomy and privacy in finance, underpinned by blockchain and
            AI. Through my multidimensional skill set and focus on innovation, I
            strive to create impactful solutions that deliver value while
            fostering financial independence and freedom.
          </p>
        </FadeIn>
      </div>

      <SlideIn direction="down">
        <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
      </SlideIn>

      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillSet) => (
            <FadeIn key={skillSet.category}>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4">{skillSet.category}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {skillSet.items.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "A Shared Ambition",
  items = [
    {
      question: "Our team of 19 experienced professionals unites expertise in Satellite, AI, Climate Science, and Earth Observation",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Our diverse team brings together decades of experience in satellite technology, artificial intelligence, climate science, and Earth observation systems.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            We are united by a shared vision to make environmental monitoring accessible and actionable for organizations worldwide.
          </p>
        </>
      ),
    },
    {
      question: "How does RIFFAI achieve 97% accuracy in environmental monitoring?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Our AI models are trained using multi-hyperspectral imaging data from over 20 integrated satellites, processing more than 800 data parameters.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            This comprehensive approach allows us to maintain high accuracy in image classification, quantification, and prediction for reliable, actionable insights.
          </p>
        </>
      ),
    },
    {
      question: "What makes RIFFAI different from traditional satellite monitoring?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Unlike traditional satellite monitoring that requires expensive ground stations and complex infrastructure, RIFFAI brings space-based insights directly to your organization.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our AI-powered platform processes data from multiple satellite sources, providing comprehensive environmental monitoring without the need for dedicated hardware.
          </p>
        </>
      ),
    },
    {
      question: "Which industries can benefit from RIFFAI's solutions?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            RIFFAI's solutions are industry-agnostic and can be applied across various sectors including water management, environmental compliance, renewable energy, agriculture, and urban planning.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our platform adapts to specific use cases, from flood monitoring and illegal dumpsite detection to renewable energy site selection.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
import { Waves, AlertTriangle, Zap } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Industry-Agnostic Solutions",
  description = false,
  plans = [
    {
      name: "Flood & Water Management",
      icon: <Waves className="size-4" />,
      description: "Tracking upstream water levels for coastal change and adaptation planning.",
      price: 0,
      priceNote: "Contact us for custom pricing and implementation.",
      cta: {
        variant: "glow",
        label: "Learn More",
        href: "/solutions/flood-management",
      },
      features: [
        "Real-time water level monitoring",
        "Coastal change prediction",
        "Adaptation planning insights",
      ],
      variant: "default",
      className: "",
    },
    {
      name: "Illegal Dumpsite Detection",
      icon: <AlertTriangle className="size-4" />,
      description: "Using AI land classification for legal and policy enforcement against open dumping sites.",
      price: 0,
      priceNote: "Contact us for custom pricing and implementation.",
      cta: {
        variant: "default",
        label: "Learn More",
        href: "/solutions/dumpsite-detection",
      },
      features: [
        "AI-powered land classification",
        "Automated violation detection",
        "Policy enforcement support",
      ],
      variant: "glow-brand",
    },
    {
      name: "Renewable Energy Site Selection",
      icon: <Zap className="size-4" />,
      description: "Automating the search for buildable areas for wind and solar installations to accelerate lead and sales cycles.",
      price: 0,
      priceNote: "Contact us for custom pricing and implementation.",
      cta: {
        variant: "default",
        label: "Learn More",
        href: "/solutions/renewable-energy",
      },
      features: [
        "Automated site identification",
        "Buildability assessment",
        "Accelerated sales cycles",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
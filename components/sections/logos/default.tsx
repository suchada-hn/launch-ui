import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import Figma from "../../logos/figma";
import React from "../../logos/react";
import ShadcnUi from "../../logos/shadcn-ui";
import Tailwind from "../../logos/tailwind";
import TypeScript from "../../logos/typescript";
import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Events & Press",
  badge = false,
  logos = [
    <Logo key="money2020" image={Figma} name="Money 20/20" />,
    <Logo key="ces" image={React} name="CES" />,
    <Logo key="cop29" image={TypeScript} name="COP29" />,
    <Logo key="gcsp" image={ShadcnUi} name="GCSP" />,
    <Logo key="ted" image={Tailwind} name="TED" />,
    <Logo key="techplanter" image={Figma} name="Tech Planter" />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
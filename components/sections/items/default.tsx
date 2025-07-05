import {
  SatelliteIcon,
  DatabaseIcon,
  TargetIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Clarity from Above, Without the Station",
  items = [
    {
      title: "20+ Satellites Integrated",
      description: "We process data from optical, SAR, and other Earth Observation satellites for a comprehensive view.",
      icon: <SatelliteIcon className="size-5 stroke-1" />,
    },
    {
      title: "800+ Data Parameters",
      description: "Our AI models are trained using multi-hyper spectral imaging to classify and quantify environmental changes.",
      icon: <DatabaseIcon className="size-5 stroke-1" />,
    },
    {
      title: "97% Accuracy",
      description: "We maintain high accuracy in image classification, quantification, and prediction for reliable, actionable insights.",
      icon: <TargetIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
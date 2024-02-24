import {
  FontSize,
  FontType,
  FontWeight,
  fontTypeClasses,
  fontSizeClasses,
  fontWeightClasses,
} from "../../fonts";
import clsx from "clsx";
import { TextTag, TextTags } from "./TextTag";
import { Heading, SubHead, P, Span } from "./SemanticText";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  align?: TextAlignment;
  branded?: boolean; // allows "branded" style to overtake all other styled font types
  className?: string;
  fontSize?: FontSize;
  fontType?: Exclude<FontType, "branded">;
  fontWeight?: FontWeight;
  tag?: TextTag;
}

export type TextAlignment = "left" | "center" | "right";

const Text = ({
  align = "left",
  branded,
  children,
  className,
  fontSize = "md",
  fontType = "content",
  fontWeight = "normal",
  tag = "span",
}: TextProps) => {
  const alignmentClass = textAlignmentClasses[align];
  const fontSizeClass = fontSizeClasses[fontSize];
  const fontTypeClass = branded
    ? fontTypeClasses["branded"]
    : fontTypeClasses[fontType];
  const fontWeightClass = fontWeightClasses[fontWeight];

  const TextTag = TextTags[tag];

  return (
    <TextTag
      className={clsx(
        alignmentClass,
        fontSizeClass,
        fontTypeClass,
        fontWeightClass,
        className
      )}
    >
      {children}
    </TextTag>
  );
};

// Semantic tags decorated with predefined properties
Text.Heading = Heading;
Text.SubHead = SubHead;
Text.P = P;
Text.Span = Span;

export default Text;

const textAlignmentClasses: Record<TextAlignment, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

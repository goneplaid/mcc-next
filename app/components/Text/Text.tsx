import clsx from "clsx";
import { TextTag, TextTags } from "./TextTags";
import { Heading, SubHead, P, Span, Code } from "./SemanticText";
import { ReactNode } from "react";
import { useStyles } from "./Text.styles";

interface TextProps {
  align?: TextAlignment;
  branded?: boolean; // Allows "branded" style to overtake all other styled font types
  children: ReactNode;
  className?: string;
  fontSize?: FontSize;
  fontType?: FontType;
  fontWeight?: FontWeight;
  tagName?: TextTag;
  uppercase?: boolean;
}

export type FontType = "heading" | "content" | "code";
export type FontSize =
  | "inherit"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

export type FontWeight =
  | "inherit"
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type TextAlignment = "left" | "center" | "right";

// Consider making this private by not exporting it.

const Text = ({
  align,
  branded = false,
  children,
  className,
  fontType = "content",
  fontSize = "md",
  fontWeight = "normal",
  tagName: tag = "span",
  uppercase = false,
}: TextProps) => {
  const {
    fontTypeClass,
    sizeClass,
    weightClass,
    alignmentClass,
    uppercaseClass,
  } = useStyles(fontType, branded, fontSize, fontWeight, align, uppercase);

  const TextTag = TextTags[tag];

  return (
    <TextTag
      className={clsx(
        alignmentClass,
        sizeClass,
        fontTypeClass,
        weightClass,
        uppercaseClass,
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
Text.Code = Code;

export default Text;

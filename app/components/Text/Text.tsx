import {
  FontSize,
  FontType,
  FontWeight,
  fontSizeClasses,
  fontTypeClasses,
  fontWeightClasses,
} from "../../typography";
import clsx from "clsx";
import { TextTag, TextTags } from "./util/TextTags";
import { Heading, SubHead, P, Span, Code } from "./util/SemanticText";
import { ReactNode } from "react";

export type TextAlignment = "left" | "center" | "right";

interface TextProps {
  children: ReactNode;
  align?: TextAlignment;
  branded?: boolean; // Allows "branded" style to overtake all other styled font types
  className?: string;
  fontSize?: FontSize | "inherit";
  fontType?: Exclude<FontType, "branded">; // Force consumers to use the boolean
  fontWeight?: FontWeight;
  tagName?: TextTag;
}

// Consider making this private by not exporting it.

const Text = ({
  align = "left",
  branded,
  children,
  className,
  fontSize = "md",
  fontType = "content",
  fontWeight = "normal",
  tagName: tag = "span",
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
Text.Code = Code;

export default Text;

const textAlignmentClasses: Record<TextAlignment, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

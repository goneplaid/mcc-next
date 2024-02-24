import {
  FontSize,
  FontType,
  FontWeight,
  fontSizeClasses,
  fontTypeClasses,
  fontWeightClasses,
} from "../../fonts";
import clsx from "clsx";
import { TextTags } from "./util/TextTag";
import { Heading, SubHead, P, Span } from "./util/SemanticText";
import { ReactNode } from "react";
import { TextAlignment, TextTag } from "./Text.types";

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

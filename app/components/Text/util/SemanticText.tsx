import { ReactNode } from "react";
import Text from "../Text";
import { FontSize } from "@/app/fonts";
import { TextAlignment, TextTag } from "../Text.types";

interface SemanticTextProps {
  children: ReactNode;
  align?: TextAlignment;
  branded?: boolean;
  level?: 1 | 2 | 3;
  className?: string;
}

export const Heading = ({
  children,
  level = 1,
  ...rest
}: SemanticTextProps) => {
  const tags: TextTag[] = ["h1", "h2", "h3"];
  const targetTag = tags[getLevel(level)];

  const fontSizes: FontSize[] = ["4xl", "3xl", "2xl"];
  const targetSize = fontSizes[getLevel(level)];

  return (
    <Text
      tag={targetTag}
      fontSize={targetSize}
      fontType="title"
      fontWeight="bold"
      {...rest}
    >
      {children}
    </Text>
  );
};

export const SubHead = ({
  children,
  level = 1,
  ...rest
}: SemanticTextProps) => {
  const tags: TextTag[] = ["h4", "h5", "h6"];
  const targetTag = tags[getLevel(level)];

  const fontSizes: FontSize[] = ["xl", "lg", "md"];
  const targetSize = fontSizes[getLevel(level)];

  return (
    <Text tag={targetTag} fontSize={targetSize} fontType="title" {...rest}>
      {children}
    </Text>
  );
};

export const P = ({ children, level = 1, ...rest }: SemanticTextProps) => {
  const fontSizes: FontSize[] = ["lg", "md", "sm"];
  const targetSize = fontSizes[getLevel(level)];

  return (
    <Text tag="p" fontSize={targetSize} fontType="content" {...rest}>
      {children}
    </Text>
  );
};

export const Span = ({ children, level = 1, ...rest }: SemanticTextProps) => {
  const fontSizes: FontSize[] = ["lg", "md", "sm"];
  const targetSize = fontSizes[getLevel(level)];

  return (
    <Text tag="span" fontSize={targetSize} fontType="content" {...rest}>
      {children}
    </Text>
  );
};

const getLevel = (specified: number) => specified - 1 ?? 0;

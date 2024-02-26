import { ReactNode } from "react";
import Text, { TextAlignment } from "../Text";
import { FontSize, fontWeightClasses } from "@/app/typography";
import { TextTag } from "./TextTags";
import clsx from "clsx";

interface SemanticTextProps {
  children: ReactNode;
  align?: TextAlignment;
  branded?: boolean;
  level?: 0 | 1 | 2 | 3; // bug, see usage below
  uppercase?: boolean;
  className?: string;
}

export const Heading = ({
  children,
  className,
  level = 1,
  ...rest
}: SemanticTextProps) => {
  const targetLevel = getLevel(level);

  const tags: TextTag[] = ["h1", "h1", "h2", "h3"]; // fix this oversight
  const targetTag = tags[targetLevel];

  const fontSizes: FontSize[] = ["inherit", "4xl", "3xl", "2xl"];
  const targetSize = fontSizes[targetLevel];

  return (
    <Text
      tagName={targetTag}
      fontSize={targetSize}
      fontType="heading"
      fontWeight="bold"
      className={className}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const SubHead = ({
  children,
  className,
  level = 1,
  ...rest
}: SemanticTextProps) => {
  const targetLevel = getLevel(level);

  const tags: TextTag[] = ["h4", "h4", "h5", "h6"]; // fix this oversight
  const targetTag = tags[targetLevel];

  const fontSizes: FontSize[] = ["inherit", "xl", "lg", "md"];
  const targetSize = fontSizes[targetLevel];

  return (
    <Text
      tagName={targetTag}
      fontSize={targetSize}
      fontType="heading"
      className={className}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const P = ({
  children,
  className,
  level = 1,
  ...rest
}: SemanticTextProps) => {
  const targetLevel = getLevel(level);

  const fontSizes: FontSize[] = ["inherit", "lg", "md", "sm"];
  const targetSize = fontSizes[getLevel(level)];

  return (
    <Text
      tagName="p"
      fontSize={targetSize}
      fontType="content"
      className={className}
      {...rest}
    >
      {children}
    </Text>
  );
};

interface SemanticInlineProps extends SemanticTextProps {
  inheritWeight?: boolean;
}

export const Span = ({
  children,
  level = 0,
  inheritWeight = false,
  ...rest
}: SemanticInlineProps) => {
  const fontSizes: FontSize[] = ["inherit", "lg", "md", "sm"];
  const targetSize = fontSizes[getLevel(level)];

  return (
    <Text
      tagName="span"
      fontSize={targetSize}
      fontType="content"
      fontWeight={inheritWeight ? "inherit" : undefined}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const Code = ({
  children,
  level = 0,
  inheritWeight = false,
  className,
  ...rest
}: SemanticInlineProps) => {
  const fontSizes: FontSize[] = ["inherit", "lg", "md", "sm"];
  const targetSize = fontSizes[getLevel(level)]; // default to "inherit"

  return (
    <Text
      tagName="code"
      fontSize={targetSize}
      fontWeight={inheritWeight ? "inherit" : undefined}
      fontType="content"
      className={clsx("bg-slate-200", className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

const getLevel = (specified: number) => specified ?? 1;

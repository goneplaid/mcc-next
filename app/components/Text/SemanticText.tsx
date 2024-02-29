import { ReactNode } from "react";
import Text, { FontSize, TextAlignment } from "./Text";
import { TextTag } from "./TextTags";
import clsx from "clsx";

interface SemanticTextProps {
  children: ReactNode;
  align?: TextAlignment;
  branded?: boolean;
  level?: 1 | 2 | 3;
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

  const tags: TextTag[] = ["h1", "h2", "h3"];
  const targetTag = tags[targetLevel];

  const fontSizes: FontSize[] = ["4xl", "3xl", "2xl"];
  const targetSize = fontSizes[targetLevel];

  return (
    <Text
      tagName={targetTag}
      fontSize={targetSize}
      fontType="title"
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

  const tags: TextTag[] = ["h4", "h5", "h6"];
  const targetTag = tags[targetLevel];

  const fontSizes: FontSize[] = ["xl", "lg", "md"];
  const targetSize = fontSizes[targetLevel];

  return (
    <Text
      tagName={targetTag}
      fontSize={targetSize}
      fontType="title"
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

  const fontSizes: FontSize[] = ["lg", "md", "sm"];
  const targetSize = fontSizes[level];

  return (
    <Text
      tagName="p"
      fontSize={targetSize}
      fontType="body"
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
  level,
  inheritWeight = false,
  ...rest
}: SemanticInlineProps) => {
  const targetLevel = getLevel(level);
  const fontSizes: FontSize[] = ["lg", "md", "sm"];
  const targetSize = targetLevel ? fontSizes[targetLevel] : "inherit";

  return (
    <Text
      tagName="span"
      fontSize={targetSize}
      fontType="body"
      fontWeight={inheritWeight ? "inherit" : undefined}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const Code = ({
  children,
  level,
  inheritWeight = false,
  className,
  ...rest
}: SemanticInlineProps) => {
  const targetLevel = getLevel(level);
  const fontSizes: FontSize[] = ["lg", "md", "sm"];
  const targetSize = targetLevel ? fontSizes[targetLevel] : "inherit";

  return (
    <Text
      tagName="code"
      fontSize={targetSize}
      fontWeight={inheritWeight ? "inherit" : undefined}
      fontType="body"
      className={clsx("bg-slate-200", className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

const getLevel = (level?: number) => (level ?? 1) - 1;

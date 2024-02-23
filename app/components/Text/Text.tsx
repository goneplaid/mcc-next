import { lato, michroma, raleway } from "../../fonts";
import React, { PropsWithChildren } from "react";

type TextType = "branded" | "title" | "content";

interface Text extends PropsWithChildren {
  type: TextType;
}

const Text = ({ children, type }: Text) => {
  return <span className={TEXT_TYPE_MAP[type]}>{children}</span>;
};

export default Text;

const TEXT_TYPE_MAP: Record<TextType, string> = {
  branded: `font-branded ${michroma.className}`,
  title: `font-title ${lato.className}`,
  content: `font-content ${raleway.className}`,
};

Text.branded = TEXT_TYPE_MAP.branded;
Text.title = TEXT_TYPE_MAP.title;
Text.content = TEXT_TYPE_MAP.content;

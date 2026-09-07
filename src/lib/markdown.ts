import { marked } from "marked";

export function renderMarkdown(src: string): string {
  return marked(src, { async: false });
}

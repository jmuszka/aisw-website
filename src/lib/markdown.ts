import { marked, type Tokens } from "marked";

marked.use({
  renderer: {
    link({ href, title, text }: Tokens.Link) {
      const titleAttr = title ? ` title="${title}"` : "";
      const external = /^https?:\/\//.test(href);
      const extra = external ? ` target="_blank" rel="noopener noreferrer"` : "";
      return `<a href="${href}"${titleAttr}${extra}>${text}</a>`;
    },
  },
});

export function renderMarkdown(src: string): string {
  return marked.parseInline(src, { async: false }) as string;
}

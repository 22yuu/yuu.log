import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function MarkdownViewer({ content }: { content: string }) {
  console.log(content);
  return (
    <ReactMarkdown
      className="prose lg:prose-xl text-theme-text"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
}

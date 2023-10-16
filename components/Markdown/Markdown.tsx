import { FunctionComponent } from "preact";
interface Props {
  body: string;
}

const Markdown: FunctionComponent<Props> = ({ body }) => (
  <div>
    <div
      style="text-align: justify; hyphens: auto"
      className="prose markdown-body dark:text-white"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Markdown;

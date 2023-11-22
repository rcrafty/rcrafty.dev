import { FunctionComponent } from "preact";
interface Props {
  body: string;
}

const Markdown: FunctionComponent<Props> = ({ body }) => (
  <div>
    <div
      className="prose markdown-body markdown"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Markdown;

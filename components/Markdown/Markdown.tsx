import { FunctionComponent } from "preact";
interface Props {
  body: string;
}

const Markdown: FunctionComponent<Props> = ({ body }) => (
  <div>
    <div
      style="text-align: justify"
      className="prose markdown-body dark:text-white"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Markdown;

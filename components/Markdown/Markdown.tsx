import { FunctionComponent } from "https://esm.sh/v102/preact@10.11.0/src/index";
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

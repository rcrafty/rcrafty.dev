import { JSX } from "preact";
import { useState } from "preact/hooks";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const [like, setLike] = useState(false);
  return (
    <button
      {...props}
      onClick={() => setLike(!like)}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
    >
      {like ? "Anular me gusta" : "Me gusta"}
    </button>
  );
}

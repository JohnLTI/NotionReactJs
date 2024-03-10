import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import "highlight.js/styles/atom-one-dark.css";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto prose-invert pt-16 prose"
        editor={editor}
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex 
          divide-x divide-zinc-600"
          editor={editor}
        >
          <button className="">bold</button>
          <button className="">bold</button>
          <button className="">bold</button>
        </BubbleMenu>
      )}
    </>
  );
}

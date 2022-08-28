import { BubbleMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function App() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });
  if (!editor) {
    return null;
  }
  return <BubbleMenu editor={editor}>foo</BubbleMenu>;
}

export default App;

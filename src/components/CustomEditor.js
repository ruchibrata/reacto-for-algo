import React, { useState, useRef } from "react";
import { EditorState } from "draft-js";
import Editor from "draft-js-plugins-editor";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import "./CustomEditor.css";
// import editorStyles from './editorStyles.css';

const CustomEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [{ plugins }] = useState(() => {
    const toolbarPlugin = createToolbarPlugin();
    const { Toolbar } = toolbarPlugin;
    const plugins = [toolbarPlugin];
    return {
      plugins,
      Toolbar,
    };
  });

  const editorRef = useRef(null);

  return (
    // <div>
    <div
      className="editor"
      onClick={() => editorRef.current && editorRef.current.focus()}
    >
      <Editor
        editorState={editorState}
        onChange={(newEditorState) => setEditorState(newEditorState)}
        plugins={plugins}
        ref={(editor) => (editorRef.current = editor)}
      />
    </div>
    // </div>
  );
};

export default CustomEditor;

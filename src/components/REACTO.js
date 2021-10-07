import React, { useState } from "react";
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./REACTO.css";
import CustomEditor from "./CustomEditor";

const REACTO = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  // console.log(props);

  return (
    <div className="reacto">
      {props.items.data.map((item) => (
        <React.Fragment key={item.id}>
          <h2>
            {item.name}: {item.desc}{" "}
          </h2>
          <CustomEditor
            editorState={editorState}
            onChange={handleChange}
            props={props}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default REACTO;

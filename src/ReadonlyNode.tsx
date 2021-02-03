import React from "react";
import ReactQuill from "react-quill";

function ReadonlyNode({ node }: { node: KnowNode }): JSX.Element {
  return (
    <div
      className={`scrolling-container ${
        ["TOPIC", "TITLE"].includes(node.nodeType) ? "lead" : ""
      }
            ${node.nodeType === "TOPIC" ? "text-primary" : ""}
            ${node.nodeType === "NOTE" ? "text-muted" : ""}
              `}
    >
      <ReactQuill
        theme="bubble"
        formats={["link", "size"]}
        modules={{ toolbar: false }}
        value={node.text}
        readOnly={true}
      />
    </div>
  );
}

export { ReadonlyNode };

import React, { useState } from "react";

const StampDesign = () => {
  const [name, setName] = useState("");

  return (
    <div className="seal30stamp-container">
      <p
        className="text seal30dynamic-name"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setName(e.currentTarget.textContent)}
      >
        {name || "Enter name"}
      </p>
      <p className="text seal30designation">Manager</p>
      <p className="text seal30emp-no">Emp. No. 12859</p>
      <p className="text seal30branch">Anakkatty Branch</p>
    </div>
  );
};

export default StampDesign;

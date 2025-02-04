import React, { useState } from "react";

const StampDesign = () => {
  const [name, setName] = useState("");

  return (
    <div className="seal28box">
      <div className="seal28stamp">
        <span
          className="seal28name"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setName(e.currentTarget.textContent)}
        >
          {name || "Enter name"}
        </span>
        <div className="seal28emp-id">Emp. Id. 12859</div>
      </div>
    </div>
  );
};

export default StampDesign;

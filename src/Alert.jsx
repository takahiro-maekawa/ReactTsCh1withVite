import { useState } from 'react';
export default function Alert({type, heading, closable, children, onClose}) {
  const [visible, setVisible] = useState(true);
  if (!visible){
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
  }

  return (
    <div>
      <div>
        <span role="img" aria-label={type === "warning" ? "Warning" : "Information"}>
          {type === "warning" ? "⚠️" : "⭕️"}
        </span>
        <span>{heading}</span>
      </div>
      { closable && (
      <button aria-label="Close" onClick={handleCloseClick}>
        <span role = "img"  aria-label="Close">❌</span>
      </button>)}
      <div>{children}</div>
    </div>
  );
}

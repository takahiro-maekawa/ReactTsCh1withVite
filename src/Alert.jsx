import { useState } from 'react';
export default function Alert({type, heading, closable, children, onClose}) {
  // とりあえずStateを準備
  const [visible, setVisible] = useState(true); 
  if (!visible){
    return null;
  }
  // イベントの実体を定義
  function handleCloseClick() {
    setVisible(false);
    if (onClose) { 
      onClose(); // ここでは関数を渡す
    }
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
        </button>)
      }
      <div>{children}</div> { /* childrenは子要素を意味する */}
    </div>
  );
}

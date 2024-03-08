export default function Alert({type, heading, closable, children}) {
  return (
    <div>
      <div>
        <span role="img" aria-label={type === "warning" ? "Warning" : "Information"}>
          {type === "warning" ? "⚠️" : "⭕️"}
        </span>
        <span>{heading}</span>
      </div>
      { closable && (
      <button aria-label="Close">
        <span role = "img" aria-label="Close">❌</span>
      </button>)}
      <div>{children}</div>
    </div>
  );
}

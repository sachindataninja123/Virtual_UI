import react, { useState } from "react";

export const Button = ({
  label = "Click Me",
  onClick = () => {},
  color = "#ffffff",
  backgroundColor = "#1a1a1a",
  hoverBackgroundColor = "#333333",
  size = "md",
  variant = "solid",
  disabled = false,
  rounded = false,
  icon = null,
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const sizeMap = {
    sm: { padding: "6px 14px", fontSize: "12px", gap: "5px" },
    md: { padding: "10px 22px", fontSize: "14px", gap: "7px" },
    lg: { padding: "14px 30px", fontSize: "16px", gap: "9px" },
  };

  const { padding, fontSize, gap } = sizeMap[size] || sizeMap.md;

  const isOutline = variant === "outline";
  const isGhost = variant === "ghost";

  const resolvedBg = isOutline || isGhost
    ? "transparent"
    : hovered
    ? hoverBackgroundColor
    : backgroundColor;

  const resolvedColor = isOutline
    ? backgroundColor
    : isGhost
    ? backgroundColor
    : color;

  const resolvedBorder = isOutline
    ? `2px solid ${backgroundColor}`
    : isGhost
    ? "2px solid transparent"
    : "2px solid transparent";

  const resolvedHoverBg = isOutline || isGhost
    ? `${backgroundColor}18`
    : hoverBackgroundColor;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap,
    padding,
    fontSize,
    fontWeight: 600,
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    border: resolvedBorder,
    borderRadius: rounded ? "999px" : "8px",
    backgroundColor: hovered && !disabled
      ? (isOutline || isGhost ? resolvedHoverBg : hoverBackgroundColor)
      : (isOutline || isGhost ? "transparent" : backgroundColor),
    color: resolvedColor,
    outline: "none",
    letterSpacing: "0.02em",
    transform: pressed && !disabled ? "scale(0.97)" : "scale(1)",
    transition: "background-color 0.18s ease, transform 0.1s ease, box-shadow 0.18s ease",
    boxShadow: hovered && !disabled && !isOutline && !isGhost
      ? `0 4px 14px ${backgroundColor}55`
      : "none",
    userSelect: "none",
  };

  return (
    <button
      style={base}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      disabled={disabled}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
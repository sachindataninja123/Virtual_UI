import react, { useState } from "react";

export const Card = ({
  title = "Card Title",
  description = "This is a short description that gives context about the card content.",
  image = null,
  tag = null,
  tagColor = "#6366f1",
  footer = null,
  backgroundColor = "#ffffff",
  borderColor = "#e5e7eb",
  titleColor = "#111827",
  descriptionColor = "#6b7280",
  width = "320px",
  hoverable = true,
  onClick = null,
  shadow = true,
  rounded = "12px",
}) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    width,
    backgroundColor,
    border: `1px solid ${hovered && hoverable ? borderColor + "aa" : borderColor}`,
    borderRadius: rounded,
    overflow: "hidden",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    cursor: onClick ? "pointer" : "default",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    transform: hovered && hoverable ? "translateY(-4px)" : "translateY(0)",
    boxShadow: shadow
      ? hovered && hoverable
        ? "0 12px 32px rgba(0,0,0,0.12)"
        : "0 2px 10px rgba(0,0,0,0.07)"
      : "none",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
  };

  const imagePlaceholderStyle = {
    width: "100%",
    height: "180px",
    background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdf4 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#a5b4fc",
    fontSize: "36px",
  };

  const bodyStyle = {
    padding: "18px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1,
  };

  const tagStyle = {
    display: "inline-block",
    backgroundColor: tagColor + "18",
    color: tagColor,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    padding: "3px 9px",
    borderRadius: "999px",
    alignSelf: "flex-start",
  };

  const titleStyle = {
    margin: 0,
    fontSize: "16px",
    fontWeight: 700,
    color: titleColor,
    lineHeight: 1.3,
  };

  const descStyle = {
    margin: 0,
    fontSize: "13.5px",
    color: descriptionColor,
    lineHeight: 1.6,
  };

  const footerStyle = {
    padding: "12px 20px",
    borderTop: `1px solid ${borderColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "13px",
    color: descriptionColor,
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      {image ? (
        <img src={image} alt={title} style={imageStyle} />
      ) : (
        <div style={imagePlaceholderStyle}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}

      {/* Body */}
      <div style={bodyStyle}>
        {tag && <span style={tagStyle}>{tag}</span>}
        <h3 style={titleStyle}>{title}</h3>
        <p style={descStyle}>{description}</p>
      </div>

      {/* Footer */}
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};

export default Card;
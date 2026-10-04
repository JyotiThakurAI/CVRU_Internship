const boxStyle = {
  background: "#f0f0f0",
  border: "1px solid #d5d5d5",
  borderRadius: "6px",
  color: "#174b78",
  padding: "16px",
};

function InlineStyle() {
  return <p style={boxStyle}>This box is styled with an inline style object.</p>;
}

export default InlineStyle;
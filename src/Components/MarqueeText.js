import '../../css/common/marquee.css';
function MarqueeText({ text }) {
  return (
    <div className="marquee-container">
      <div className="marquee">{text}</div>
      <div className="marquee">{text}</div>
    </div>
  );
}

export default MarqueeText;

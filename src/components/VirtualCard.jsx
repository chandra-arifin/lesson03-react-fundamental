import Biodata from "./Biodata";
import Header from "./Header";
import Highlight from "./Highlight";
import Identity from "./Identity";

function VirtualCard() {
  return (
    <>
      <div className="card">
        <div className="top">
          <Header />
          <Identity />
        </div>
        <div className="bottom">
          <Biodata />
          <Highlight />
        </div>
      </div>
    </>
  );
}

export default VirtualCard;

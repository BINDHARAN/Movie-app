import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("pink");

  const sytles = {
    backgroundColor: color
  };

  const [colorlist, setColorList] = useState(["red", "teal", "skyblue"]);
  return (
    <div className="total-colorbox">
      <div className="coloritems">

        <input style={sytles} value={color} className="colorbox-input" placeholder="Enter a color" onChange={(event) => setColor(event.target.value)} />
        <button onClick={() => setColorList([...colorlist, color])} className="color-btn">Add</button>

      </div>
      {colorlist.map((clr, index) => <ColorBox key={index} color={clr} />)}
    </div>
  );

}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "40px",
    width: "510px",
    marginTop: "10px",
    borderRadius: "10px"
  };
  return (<div className="addcolors">
    <div style={styles}>
    </div>

  </div>
  );
}
;

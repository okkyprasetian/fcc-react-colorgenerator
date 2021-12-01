import rgbToHex from "../utils";

function Color({ rgb, weight, index }) {
    return (
        <div className="color" style={{ backgroundColor: `rgb(${rgb})`, color: `${index > 10 && 'white'}` }}>
            <p className="perc">{`${weight}%`}</p>
            <p className="hex">{rgbToHex(...rgb)}</p>
        </div>
    );
}

export default Color;
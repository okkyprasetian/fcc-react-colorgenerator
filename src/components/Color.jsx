function Color({ rgb, weight }) {
    return (
        <div className="color" style={{ backgroundColor: `rgb(${rgb})` }}>
        </div>
    );
}

export default Color;
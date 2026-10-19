const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
};

const starContainerStyle = {
    display: "flex",
    gap: "4px",
};

const textStyle = {
    lineHeight: "0",
    margin: "0",
};

function StarRating({ maxRating = 5 }) {
    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }, (_, index) => (
                    <span>{index + 1}</span>
                ))}
            </div>
            <p style={textStyle}>{maxRating}</p>
        </div>
    );
}

function App() {
    return (
        <>
            <StarRating />
            <StarRating maxRating={10} />
        </>
    );
}

export default App;

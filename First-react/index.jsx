 import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById("root"))

root.render(
    <ImageDetails />
)

function ImageDetails() {
    return (
        <div style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden"
    }}>
        <img src="./Lion-king-scaled-1.jpg" alt="lion-of-judah" style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
        }}/>


    </div>

    )
}
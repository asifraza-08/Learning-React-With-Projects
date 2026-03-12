import { useState } from "react";

function App() {
  const [color, setColor] = useState("SpringGreen");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-2.5">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}
            >
              Lavender
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "violet" }}
              onClick={() => setColor("violet")}
            >
              Violet
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "indigo" }}
              onClick={() => setColor("indigo")}
            >
              Indigo
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "turquoise" }}
              onClick={() => setColor("turquoise")}
            >
              Turquoise
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "cyan" }}
              onClick={() => setColor("cyan")}
            >
              Cyan
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "magenta" }}
              onClick={() => setColor("magenta")}
            >
              Magenta
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "maroon" }}
              onClick={() => setColor("maroon")}
            >
              Maroon
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "Pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-"
              style={{ backgroundColor: "Olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

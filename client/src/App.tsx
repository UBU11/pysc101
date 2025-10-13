import { BrowserRouter as Router } from "react-router-dom";
import PixelBlast from "./components/main/background/pixelblast";
import Galery from "./components/main/Galery/Galery";
import { Navbar } from "./components/main/navbar/navbar";
import Main from "./components/main/hero/main"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="relative w-full h-screen">
          <PixelBlast />
          <div className=" absolute inset-0">
          <div style={{ height: '600px', position: 'relative' }}>
    <Main/>
</div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16">
            <Galery />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

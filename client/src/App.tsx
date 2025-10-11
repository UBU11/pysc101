import { BrowserRouter as Router } from "react-router-dom";
import PixelBlast from "./components/main/background/pixelblast";
import Galery from "./components/main/Galery/Galery";
import { Navbar } from "./components/main/navbar/navbar";
import CardSwap,{Card} from "./components/main/hero/CardSwap";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="relative w-full h-screen">
          <PixelBlast />
          <div className=" absolute inset-0">
          <div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
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

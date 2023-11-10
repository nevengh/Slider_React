import logo from './logo.svg';
import './App.css';

import image1 from "./assets/slide_1.jpeg";
import image2 from "./assets/slide_2.jpeg";
import image3 from "./assets/slide_3.jpeg";
import image4 from "./assets/slide_4.jpeg";
import image5 from "./assets/slide_5.jpeg";
import image6 from "./assets/slide_6.jpeg";
import ImageSlider from './Components/SliderImage/ImageSlider';

function App() {
  return (
    <div className="App">
      <div>
        <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <h1>React.js Image Slider</h1>
            <p>Nulla vitae elit libero, a pharetra augue.</p>
          </div>
        </ImageSlider>
      </div>
    </div>
  );
}

export default App;

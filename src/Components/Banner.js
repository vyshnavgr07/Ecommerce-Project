import Carousel from "react-bootstrap/Carousel";
import pic1 from "./Assets/pic1.jpg";
import pic2 from "./Assets/pic2.jpg";
import pic3 from "./Assets/pic3.jpg";
import pic4 from "./Assets/pic4.jpg";
import pic5 from "./Assets/pic5.jpg";
import  "./Banner.css" ;

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          src={pic1}
          className="d-block w-100"
          style={{ objectFit: "cover", height: "85vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={pic2}
          className="d-block w-100"
          style={{ objectFit: "cover", height: "85vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={pic3}
          className="d-block w-100"
          style={{ objectFit: "cover", height: "85vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={pic4}
          className="d-block w-100"
          style={{ objectFit: "cover", height: "85vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={pic5}
          className="d-block w-100"
          style={{ objectFit: "cover", height: "80vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from '../assets/image1.jpg'
import secondImage from '../assets/image2.jpg'
import thirdImage from '../assets/image3.jpg'
function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={firstImage} width="100%" height={250} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image src={secondImage} width="100%" height={250} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Image src={thirdImage} width="100%" height={250} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from '../assets/image4.png';
import secondImage from '../assets/image5.png';
import thirdImage from '../assets/image6.png';

function Banner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src={firstImage} width="100%" height={250} />
        <Carousel.Caption style={{  color: '#000', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Lifetime free credit card</h3>
          <p style={{ color: '#000' }}>
            Apply now & get welcome rewards <span style={{ fontWeight: 'bold' }}>worth ₹2,500*</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={secondImage} width="100%" height={250} />
        <Carousel.Caption style={{  color: '#000', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Big Festive Sale</h3>
          <p>Up to <span style={{ fontWeight: 'bold' }}>60% OFF</span> on top brands. Limited time only!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={thirdImage} width="100%" height={250} />
        <Carousel.Caption style={{  color: '#000', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Lightning-Fast Delivery</h3>
          <p>
            Get your products delivered in <span style={{ fontWeight: 'bold' }}>48 hours</span> – Free shipping above ₹999!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

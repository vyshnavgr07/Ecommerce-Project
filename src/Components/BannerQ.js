import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BannerQ = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Welcome to our store</h1>
          <img
            src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/october/231016-fl-hoka-overcast-1up.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Shob by brand</h1>
          <img
            src="https://3.bp.blogspot.com/-jYviyiH5lCc/U2DDfcOxw0I/AAAAAAAAADk/ktx-5xRBbdA/s1600/10+top+shoe+brands+in+india.PNG"
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>





    </Container>




  );
};

export default BannerQ;

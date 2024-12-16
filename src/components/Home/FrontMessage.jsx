import React from "react";
import { Row, Col, Button, Space } from "antd";

const FrontMessage = () => (
  <>
    <div className="section_frontImage">
      <Row>
        <Col span={24}>
          <h1 className="title">Bienvenido a la Clínica de la Salud</h1>
        </Col>
      </Row>
    </div>
    <section className="section_frontMessage">
      <h1 className="title">Reliable Health Consultations Anytime, Anywhere </h1>
      <Row>
        <Col span={8}>
          <h2>Inmediate Access to Health Professionals</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus finibus quam malesuada lacinia. Nunc mi justo, tincidunt id tristique at, tincidunt commodo augue. Mauris et tempus tellus, non euismod risus. </p>
          <Button type="primary">Make an a Appointment</Button>
        </Col>
        <Col span={8}>
          <img src="../../assets/images/1.jpg" height={300} width={250}></img>
        </Col>
      </Row>
    </section>
  </>
);
export { FrontMessage };
import React from 'react';
import { Card, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPregnantWoman, faHospital, faHeart, faChild, faSpa, faBrain, faBaby } from '@fortawesome/free-solid-svg-icons';
const { Meta } = Card;

const iconMap = {
  // pregnant_woman: faPregnantWoman,
  // local_hospital: faHospital,
  // healing: faHealing,
  // favorite: faHeart,
  // child_care: faChild,
  // local_pharmacy: faPharmacy,
  // spa: faSpa,
  // psychology: faBrain,
  // medical_services: faBaby,
  // local_hospital: faCancer
};

const ServiceCard = ({ icon, title, description }) => (
  <Card
    hoverable
    style={{
      width: 300,
      margin: '10px'
    }}
  >
    <Row justify="center" style={{ marginTop: '10px' }}>
      <Col>
        <FontAwesomeIcon icon={iconMap[icon]} size="3x" color="pink" />
      </Col>
    </Row>
    <Meta title={title} style={{ textAlign: 'center', marginTop: '10px' }} />
    <div style={{ marginTop: '10px', textAlign: 'center' }}>
      <Meta description={description} />
    </div>
  </Card>
);

export { ServiceCard };
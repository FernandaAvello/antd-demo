import React, { useState } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../App.css';
const items = [
  {
    key: 'logo',
    label: (
      <img
        src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1631533101/logo_1x_1_jy6j4v.png"
        alt="logo"
        style={{ width: '100px' }}
      />
    )
  },
  {
    key: 'home',
    label: (
      <Link to="/">Inicio</Link>
    )
  },
  {
    key: 'team',
    label: (
      <Link to="/team">Equipo Médico</Link>
    )
  },
  {
    key: 'services',
    label: (
      <Link to="/services">Servicios</Link>
    )
  },
  {
    key: 'contact',
    label: (
      <Link to="/contact">Contacto</Link>
    )
  },
  {
    key: 'whatsapp',
    icon: <WhatsAppOutlined />,
    label: 'Escribenos por WhatsApp',
    className: 'whatsappButton'
  }
];
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="header"/>;
};
export default Header;
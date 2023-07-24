import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Eliminar from '../imagenes/eliminar.png';
import Agregar from '../imagenes/agregar.png';
import Modificar from '../imagenes/modificar.png';
import Buscar from '../imagenes/buscar.png';
import '../estilos/menuestilos.css';
import Whatsapp from '../imagenes/WhatsApp.png';
import Gmail from "../imagenes/gmail.png";
import facebook from "../imagenes/facebook.png";
import AgregarCliente from './Agregar';
import EliminarCliente from "./Eliminar";
import Principal from './Prinicipal';
import Reporte from '../imagenes/reporte.png';

const Menu = () => {
  const [logout, setLogout] = React.useState(false);

  const handleLogout = () => {
    setLogout(true);
  };

  if (logout) {
    return <Navigate to="/" />;
  }

  return (
      <div className="App">
        <Principal />
      <Container className="card-container">
        <Row className="justify-content-center">
        <Col md={3} sm={6} className="text-center">
            <Card className="custom-card" style={{ border: '2px solid red' }}>
              <Card.Body>
                <Card.Title>Agregar</Card.Title>
                <div className="circle-image">
                  <img src={Agregar} alt="Agregar" className="card-image" />
                </div>
                <AgregarCliente />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="text-center">
            <Card className="custom-card" style={{ border: '2px solid red' }}>
              <Card.Body>
                <Card.Title>Ver Información</Card.Title>
                <div className="circle-image">
                  <img src={Modificar} alt="Ver Información" className="card-image" />
                </div>
                <Link to="/ver-informacion">
                  <Button variant="primary">Ver Datos</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="text-center">
            <Card className="custom-card" style={{ border: '2px solid red' }}>
              <Card.Body>
                <Card.Title>Eliminar</Card.Title>
                <div className="circle-image">
                  <img src={Eliminar} alt="Eliminar" className="card-image" />
                </div>
                <EliminarCliente />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="text-center">
            <Card className="custom-card" style={{ border: '2px solid red' }}>
              <Card.Body>
                <Card.Title>Buscar Cliente</Card.Title>
                <div className="circle-image">
                  <img src={Buscar} alt="Buscar Imagen" className="card-image" />
                </div>
                <Link to="/buscar-cliente">
                  <Button variant="primary">Buscar</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="text-center">
            <Card className="custom-card" style={{ border: '2px solid red' }}>
              <Card.Body>
                <Card.Title>Ver Reporte</Card.Title>
                <div className="circle-image">
                  <img src={Reporte} alt="Modificar" className="card-image" />
                </div>
                <Link to="/reporte">
                  <Button variant="primary">Ver Reporte</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="whatsapp-container">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} alt="WhatsApp" className="whatsapp-image" />
        </a>
      </div>

      <div className="gmail-container">
        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Gmail} alt="Gmail" className="gmail-image" />
        </a>
      </div>

      <div className="facebook-container">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="facebook-image" />
        </a>
      </div>

      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
      <p className="internet-quote">
        Internet es mucho más que una tecnología. Es un medio de comunicación, de interacción y de organización social.
      </p>
    </div>
  );
}

export default Menu;
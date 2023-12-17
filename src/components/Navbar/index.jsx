import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SidebarButton from '../../components/Sidebar/Sidebar-button/index'
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/icons/Logo.svg'
import search from '../../assets/icons/Search.svg'
import discover2 from '../../assets/icons/discover2.svg'
import favorito from '../../assets/icons/favorito.svg'
import newEvent from '../../assets/icons/new-event.svg'
import Filtros from '../Sidebar/Filtros';
import logoUser from '../../assets/userIcons/user1.svg'
import styles from './styles.module.css'
import './bg.css'

export default function Navb() {
    return (
        <Navbar style={{ width: '100%' }} bg='light' data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary bg-dark navbar-dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <figure className={`${styles.figure}`}>
                        <img id='logo-user' className={``} src={logoUser} alt="" />
                        <h1 className='text-4 weight-3'>usuario sobrenome</h1>
                    </figure>

                    <Nav className="me-auto">
                        <Nav.Link className='nav-link' href="#features"><SidebarButton imgWidth={'30px'} id={'2'} icone={discover2} texto={'Inicio'} /></Nav.Link>
                        <Nav.Link className='nav-link' href="#features"><SidebarButton imgWidth={'30px'} id={'3'} icone={favorito} texto={'Favoritos'} /></Nav.Link>
                        <Nav.Link className='nav-link' href="#features"><SidebarButton imgWidth={'30px'} id={'4'} icone={newEvent} texto={'Novo Evento'} /></Nav.Link>
                        <NavDropdown title="Filtrar" id="collasible-nav-dropdown">
                            <div >
                                <Filtros></Filtros>
                            </div>
                        </NavDropdown>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquisar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success"><img src={search} alt="" /></Button>
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

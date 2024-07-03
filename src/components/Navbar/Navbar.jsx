import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./Navbar.scss"

const NavBar = ({ cliente }) => {
    const location = useLocation();

    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark" className="navbar py-2">
                <Container>
                    <Navbar.Brand href="#home"><img src="./logo-bv.png" width={50} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            cliente ? (
                                <Nav className="w-100 d-flex justify-content-end">
                                    <NavLink to="/" className='navbar_link nav-link'>Home</NavLink>
                                    <NavLink to="/login" className='navbar_link nav-link'>Cadastre-se</NavLink>
                                    <NavLink to="/carrinho" className='navbar_link nav-link'><i class="bi bi-cart-fill"></i> Carrinho</NavLink>
                                </Nav>
                            ) : (
                                <Nav className="w-100 d-flex justify-content-end align-items-center">

                                    <NavLink to="/" className='navbar_link nav-link'>Home</NavLink>
                                    <NavLink to="/gerenciamento" className='navbar_link nav-link'>Gerenciamento</NavLink>
                                    <NavLink to="/produtos" className='navbar_link nav-link'>Produtos</NavLink>
                                    <NavLink to="/vendas" className='navbar_link nav-link'>Vendas</NavLink>
                                    <NavLink to="/estoque" className='navbar_link nav-link'>Estoque</NavLink>
                                    <NavLink to="/perfil" className='navbar_link navbar_link_profile nav-link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg>
                                        Olá, cliente
                                    </NavLink>
                                </Nav>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default NavBar;
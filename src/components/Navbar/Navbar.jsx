import { NavLink, Outlet } from 'react-router-dom';
import "./Navbar.scss"

const NavBar = () => {

    return (
        <>
            <nav className='nav'>
                <div className='nav_container container'>
                    <div className='nav_container_slice'>
                        <NavLink to={'/'}>
                            <img src="./logo-bene.png" alt="" width={80} />
                        </NavLink>
                        <div className='nav_input'>
                            <input className='nav_input_input' type="text" placeholder='Pesquise um produto' />
                            <button className='nav_input_button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#7fa653" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='nav_container_slice'>
                        <NavLink to={'/login'} className='nav_container_slice_login'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#7fa653" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            <span className='nav_container_slice_login_text'>Entre ou <br />Cadastre-se</span>
                        </NavLink>

                        <NavLink to={'/'} className='nav_container_slice_carrinho'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1d1d1d" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                            <span className='nav_container_slice_carrinho_counter'>2</span>
                        </NavLink>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default NavBar;
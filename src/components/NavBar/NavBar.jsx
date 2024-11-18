import CartWidget from "./CartWidget"
import "./NavBar.scss"
import {Link, NavLink} from  "react-router-dom"


const NavBar = () => {
    return (
    

    <nav className="navbar navbar-expand-lg navbar-dark main-nav w-100">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav container-fluid d-flex justify-content-center">
            <li className="nav-item category">
                <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className= "nav-item category">
                <NavLink to="/category/vestidos" className="nav-link" >Vestidos</NavLink>
            </li>
            <li className="nav-item category">
                <NavLink to="/category/zapatos" className="nav-link" >Zapatos</NavLink>
            </li>
            <li className="nav-item category">
                <NavLink to="/category/pantalones" className="nav-link" >Pantalones</NavLink>
            </li>
            <li className="nav-item">
                <CartWidget/>
            </li>
        </ul>
        </div>
    </div>
    </nav>

// <nav className="navbar">
// <figure className="navbar__logo">
//     <img className='logoimg' src={logo} alt="" />
// </figure>
// <menu className="navbar__menu">
//     <ItemList label="Comprar" />
//     <ItemList label="Contacto" />
//     <ItemList label="Login" />

//         <li><a href="" className='navbar__link'><CartWidget quantity={4}/>
//         </a>
//     </li>
// </menu>
// </nav>

    )
}
export default NavBar
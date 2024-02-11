import "./NavBar.css"
const NavBar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <h1>logo</h1>
            </div>
            <div className="nav container">
                <a href="/">Home</a>
                <a href="/">About us</a>
                <a href="/">Team</a>
                <a href="/">Contact</a>
            </div>
            <div className="login-btn">
                <a href="/">Login</a>
            </div>

        </div>
    )
}
export default NavBar
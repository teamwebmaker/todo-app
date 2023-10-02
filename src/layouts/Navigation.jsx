import { Link } from "react-router-dom";
function Navigation() {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-4">
            <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/todos">All Todos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/todos/create">Create Todo</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navigation
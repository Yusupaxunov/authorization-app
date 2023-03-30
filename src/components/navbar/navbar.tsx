import useAuth from "../../hooks/useAuth";
import { useAuthStore } from "../../store/auth.store";

const Navbar = () => {

  const {logOut} = useAuth();
  const {loading} = useAuthStore()

  return (
    <div className="d-flex flex-column container flex-md-row align-items-center mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
        <h1>Authorization</h1>
      </a>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <button className="btn btn-outline" onClick={logOut} disabled={loading} >
          {loading ? '...' : 'Log Out'}
        </button>
      </nav>
    </div>
  )
}


export default Navbar;
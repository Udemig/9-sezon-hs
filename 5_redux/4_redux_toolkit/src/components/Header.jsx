import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/counterSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="mb-3 p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="fs-2" to="/">
          TOOLKIT
        </Link>

        <nav className="d-flex align-items-center gap-5 ">
          <NavLink to={'/'}>Sayaç</NavLink>
          <NavLink to={'/crud'}>CRUD</NavLink>
          <button onClick={() => dispatch(toggleTheme())}>Tema Değiş</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

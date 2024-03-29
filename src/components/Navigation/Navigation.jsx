import { useAuth } from 'hooks/useAuth';
// import { NavLink } from 'react-router-dom';
import {Link, NavSt} from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavSt>
      <Link  to="/">Home</Link>
      {isLoggedIn &&
        (<Link  to="/contacts">
          Contacts
        </Link>)}
    </NavSt>
  );
};

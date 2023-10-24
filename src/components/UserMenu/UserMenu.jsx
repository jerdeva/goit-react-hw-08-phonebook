import { useDispatch } from 'react-redux';
import {Paragrapher,BTN} from './UserMenu.styled.js'
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Paragrapher>Welcome, {user.name}</Paragrapher>
      <Paragrapher>{ user.email}</Paragrapher>
      <BTN  type="button" onClick={handleLogOut}>
        Logout
      </BTN>
    </div>
  );
};

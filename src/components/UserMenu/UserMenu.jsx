import { useDispatch } from 'react-redux';
import {Paragrapher,BTN,Wrapper} from './UserMenu.styled.js'
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <div>
      <Paragrapher>Welcome, {user.name}</Paragrapher>
        <Paragrapher>{user.email}</Paragrapher>
        </div>
      <div>
      <BTN  type="button" onClick={handleLogOut}>
        Logout
        </BTN>
        </div>
    </Wrapper>
  );
};

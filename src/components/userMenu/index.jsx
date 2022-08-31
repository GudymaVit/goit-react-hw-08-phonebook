import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div>
      <span>Hi! {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;

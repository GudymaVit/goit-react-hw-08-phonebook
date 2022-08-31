import Navigation from 'components/navigation';
import { AuthNav } from 'components/authNav';
import UserMenu from 'components/userMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './appBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

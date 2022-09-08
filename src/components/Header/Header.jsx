import { Navigation } from '../Navigation/Navigation';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Navigation />
      </div>
    </header>
  );
};

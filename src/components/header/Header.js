import { Navigation } from './navigation/Navigation';
import './Header.css';
export const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <h1>Filmoteka</h1>
    </header>
  );
};

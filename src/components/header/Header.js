import { Navigation } from './navigation/Navigation';
import { SearchForm } from './search-form/SearchForm';
import './Header.css';
export const Header = () => {
  return (
    <header className="header">
      <SearchForm />
      <Navigation />
      <h1>Filmoteka</h1>
    </header>
  );
};

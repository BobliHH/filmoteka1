import './Navigation.css';
export const Navigation = () => {
  return (
    <nav className="header-navigation">
      <input type="search" />
      <a href="x">Home</a>
      <a href="x">My Library</a>
      <a className="float-right" href="x">
        Watched
      </a>
      <a href="x">Queu</a>
    </nav>
  );
};

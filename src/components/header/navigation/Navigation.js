import "./Navigation.css";
export const Navigation = () => {
  return (
    <nav className="header-navigation">
      <input type="search" />
      <a href="#">Home</a>
      <a href="#">My Library</a>
      <a className="float-right" href="#">Watched</a>
      <a href="#">Queu</a>
    </nav>
  );
};

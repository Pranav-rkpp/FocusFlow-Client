const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <h1 style={{ color: "red" }}>{title}</h1>
    </header>
  );
};

export default Header;

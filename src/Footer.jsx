import "./App.css";

const Footer = (props) => {
  const { length } = props;
  return (
    <footer className="footer">
      <h2>
        {length} List {length <= 1 ? "item" : "items"}
      </h2>
    </footer>
  );
};

export default Footer;

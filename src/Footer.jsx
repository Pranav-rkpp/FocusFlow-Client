import "./App.css";

const Footer = (props) => {
  const { length } = props;
  return (
    <footer className="footer">
      <h2>
        {length} Task {length <= 1 ? "Item" : "Items"}
      </h2>
    </footer>
  );
};

export default Footer;

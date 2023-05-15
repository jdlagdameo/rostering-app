/**
 *
 * Footer Component
 *
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 *
 */
const Footer = () => {
  const curDate = new Date();
  const year = curDate.getFullYear();

  return (
    <footer className="bg-dark text-center text-light p-2">
      &copy; {year}{" "}
      <a
        href="https://davelagdameo.com/"
        className="text-white text-decoration-none"
      >
        John Dave lagdameo
      </a>
    </footer>
  );
};

export default Footer;

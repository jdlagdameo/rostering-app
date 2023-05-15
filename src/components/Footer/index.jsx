const Footer = () => {
  const curDate = new Date();
  const year = curDate.getFullYear();

  return (
    <footer className="bg-dark text-center text-light p-2">
      &copy; {year} <a href="https://davelagdameo.com/">John Dave lagdameo</a>.
    </footer>
  );
};

export default Footer;

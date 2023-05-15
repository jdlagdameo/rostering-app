/**
 * Main APP JS File
 *
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 * +
 * +
 */
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RosterCalendar from "./pages/RosterCalendar/";
import "./assets/sass/app.scss";

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <Routes>
        <Route path="/" element={<RosterCalendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Certif from "./components/certif/Certif";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Interests from "./components/interests/Interests";
import Languag from "./components/languag/Languag";
import Profile from "./components/profile/Profile";
import ScrollUp from "./components/scrollup/ScrollUp";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="l-main bd-container">
        <div className="copyright">
          - this website built with ReactJs in January{" "}
          <i className="bx bx-copyright"></i> 2024 -
        </div>
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Home />
            <Profile />
            <Languag />
            <Interests />
            <Certif />
          </div>
          <div className="resume__right">
            <Experience />
            <Education />
            <Skills />
          </div>
        </div>
      </main>
      <ScrollUp />
    </>
  );
}

export default App;

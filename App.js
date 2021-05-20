import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import SideBar from "./Components/Siderbar/SideBar";
// import Header from "./Components/Header/HeaderClass";
// import Footer from "./Components/Footer/FooterClass";
// import Body from "./Components/Body/BodyClass";
// import SideBar from "./Components/Siderbar/SideBarClass";


function App() {
  return (
    <div className="main-background">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

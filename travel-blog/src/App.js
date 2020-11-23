import Navbar from "./Navbar";
import Profile from "./Profile";
import Hero from "./Hero";
import Footer from "./Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;

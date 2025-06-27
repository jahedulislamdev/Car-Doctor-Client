import About from "./Pages/Home/About";
import Banner from "./Pages/Home/Banner";
import Contact from "./Pages/Home/Contact";
import Products from "./Pages/Home/Products";
import Services from "./Pages/Home/Services";

const App = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Contact />
      <Products />
    </div>
  );
};

export default App;
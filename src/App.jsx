import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import FeaturedCategory from "./components/featuredCategory/FeaturedCategory.jsx";
import FindStore from "./components/findStore/FindStore.jsx";
import Footer from "./components/footer/Footer.jsx";
import MarqueeComp from "./components/marquee/MarqueeComp.jsx";
import SearchBar from "./components/searchBar/SearchBar";
import Services from "./components/services/Services.jsx";
import Data from "./db/data.js";

function App() {
  return (
    <>
      <div className="">
        <SearchBar />
        <Category />
        <Banner data={Data} />
        <Services />
        <MarqueeComp />
        <FeaturedCategory />
        <FindStore />
        <Footer />
      </div>
    </>
  );
}

export default App;

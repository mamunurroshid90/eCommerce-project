import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
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
      </div>
    </>
  );
}

export default App;

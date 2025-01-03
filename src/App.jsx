import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import SearchBar from "./components/searchBar/SearchBar";
import Data from "./db/data.js";

function App() {
  return (
    <>
      <div className="">
        <SearchBar />
        <Category />
        <Banner data={Data} />
      </div>
    </>
  );
}

export default App;

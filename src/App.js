import './App.css';
import SerchBar from './components/Searchbar';
import SearchContext from "./context/SearchContext";
import {useState} from "react";
import Results from './views/results';


function App() {
  var searchState = useState([])

  return (
    <SearchContext.Provider value={searchState}>
    <div className="App">
      <SerchBar/>
      <Results/>
    </div>
    </SearchContext.Provider>
  );
}

export default App;

import './App.css';
import SerchBar from './components/Searchbar';
import SearchContext from "./context/SearchContext";
import {useEffect, useState} from "react";
import Results from './views/results';
import { Router } from "@reach/router"
import Movie from './components/Movie';


function App() {
  var searchState = useState([])
  
  useEffect(() => {
    Notification.requestPermission(function(status) {
      console.log('Notification permission status:', status);
    });
  });

  function displayNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Hello world!',{
          vibrate: [200, 100, 200, 500, 100, 300, 200, 400, 2000, 50] //does not work
        });
      });
    }
  }

  return (
    <SearchContext.Provider value={searchState}>
    <div className="App">
      <SerchBar/>
      <Router>
        <Results path = "/"/>
        <Movie path = "/movie/:id"/>
      </Router>
    

      <button onClick={displayNotification}>Notify me</button>
    </div>
    </SearchContext.Provider>
  );
}

export default App;

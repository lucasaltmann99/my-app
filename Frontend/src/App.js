import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Search from './components/search';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';


const App = (title) => {
  const [word, setWord] = useState("");

  const handleSearchSubmit=(e)=> {
    e.preventDefault();
    console.log(word);
  
  }
  
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;

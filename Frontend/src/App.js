import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Search from './components/search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = (title) => {
  const [word, setWord] = useState("");

  const handleSearchSubmit=(e)=> {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random?query=${word}&client_id=OhbVJaTz_-4dJr8YYaXd42usj0kIm7AqVTbTTfdTjE4`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
      })

      .catch((err) => {
        console.log(err);
      })
  }

  console.log(process.env);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;

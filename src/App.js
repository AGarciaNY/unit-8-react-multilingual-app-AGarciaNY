import Button from './componets/button.js'
import './App.css';
import { useState } from 'react'
import languages from './componets/lanuages.js'
function App() {
  let [size, setSize] = useState(20)
  let [word, setWord] = useState("Good Morning")
  const addToSize = () => setSize(size += 2);
  const subToSize = () => setSize(size -= 2);
  const changeLanguage = (val) => setWord(languages[val]);
  const fountSize = { fontSize: size }
  return (
    <div className="App">
      <header className='App-header'>
        <div id="add-buttons">
          <Button val='-' myFunction={subToSize} />
          <Button val='+' myFunction={addToSize} />
        </div>
        <h1 style={fountSize}>{word}</h1>
        <div >
          <Button val="English" myFunction={() => { changeLanguage("English") }} />
          <Button val="chinese" myFunction={() => { changeLanguage("Chinese") }} />
          <Button val="Spanish" myFunction={() => { changeLanguage("Spanish") }} />
          <Button val="Haitian" myFunction={() => { changeLanguage("Haitian") }} />
          <Button val="Poetuguese" myFunction={() => { changeLanguage("Portuguese") }} />
        </div>
      </header>
    </div>
  );
}

export default App;

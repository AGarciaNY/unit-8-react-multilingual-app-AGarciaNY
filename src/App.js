import './App.css';
import { useState } from 'react'
import languages from './componets/lanuages.js'
import GreetingSize from './componets/greeting-size.js'
import LanguageChangeButton from './componets/language-change.js'
import Greeting from './componets/greeting'
function App() {
  let [size, setSize] = useState(20)
  let [word, setWord] = useState("Good Morning")
  const addToSize = () => setSize(size += 2);
  const subToSize = () => setSize(size -= 2);
  const changeLanguage = (val) => setWord(languages[val]);
  //const fountSize = { fontSize: size }
  return (
    <div className="App">
      <header className='App-header'>
        <GreetingSize id="add-buttons" addToSize={addToSize} subToSize={subToSize}/>
        <Greeting text={word} textSize={size} />
        <LanguageChangeButton changeLanguage={changeLanguage} />
      </header>
    </div>
  );
}

export default App;

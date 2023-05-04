import SearchFilter from "./components/SearchFilter";
import MOCK_DATA from './components/MOCK_DATA.json'
import { useState } from 'react';
import ReactSwitch from 'react-switch'
import { createContext } from 'react';

export const themeContext = createContext(null)

function App() {

  const [theme, setTheme]=useState('light')

  
  function toggle(){
    if (theme==='light'){
      setTheme('dark')
    }
    else {setTheme('light')}
  }
  return (
    <themeContext.Provider>
      <div 
      >
   
    <div className="App-header" 
      id={theme}
    >
       <ReactSwitch
       className="toggle"
    onChange={toggle}
    checked={theme==='dark'}
    />
      
      <SearchFilter data={MOCK_DATA}/>
    </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;

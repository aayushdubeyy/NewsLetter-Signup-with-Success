import { useState } from 'react';
import Success from './Success';
import './App.css';
import Card from './Card';

function App() {
  const [signin, setSignin] = useState(false);
  const [eml, setEmail] = useState('');
  console.log(eml);
  const emailGetter = (email) =>{
    setEmail(email);
  }
  return (
    <div className="App">
        {!signin ? <Card signin={signin} setSignin={setSignin} emailGetter={emailGetter}/>  : <Success signin={signin} setSignin={setSignin} eml={eml}/>}
    </div>
  );
}

export default App;

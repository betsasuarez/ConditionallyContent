import { useState } from 'react';
import { Instructions } from './components/Instructions';
import './App.css';

function App() {
  const [alertShow, setAlertShow] = useState(false);

  const handleAlertShow = () => {
    setAlertShow(true);
  };

  const handleAlertHide = () => {
    setAlertShow(false);
  };

  return (
    <>
      <section id='instructions'>
        <Instructions />
      </section>
      
      <div>
        {alertShow ? (
          <div id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={handleAlertHide}>Proceed</button>
          </div>
        ) : (
          <button onClick={handleAlertShow}>Delete</button>
        )}
      </div>    
    </>
  );
}

export default App;

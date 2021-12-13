import React from 'react';

//components
import { Shop } from './components/Shop/Shop';

function App() {
  return (
    <>
      {/* <div className="welcome text-center clear d-flex flex-column justify-center align-center">
        <h1 className="welcome__title blur-bg text-uppercase ">
          Помогите бабушке нарядить елку
        </h1>
        <button className="welcome__button blur-bg">Начать</button>
      </div> */}
      <Shop />
    </>
  );
}

export default App;

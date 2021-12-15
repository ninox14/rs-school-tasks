import React, { useState, useEffect } from 'react';
import { getData } from './components/logic';
//components
import { Shop } from './components/Shop/Shop';

function App() {
  const [data, setData] = useState<ToyItemInterface[]>([]);
  const [activeFormFilters, setActiveFormFilters] = useState<ToyForm[]>([]);
  const [activeColorFilters, setActiveColorFilters] = useState<ToyColor[]>([]);

  const handleAddFormFilter = (toyForm: ToyForm) => {
    setActiveFormFilters((state) => [...state, toyForm]);
  };

  const handleDeleteFormFilter = (toyForm: ToyForm) => {
    setActiveFormFilters((state) => state.filter((i) => i !== toyForm));
  };

  const handleAddColorFilter = (color: ToyColor) => {
    setActiveColorFilters((state) => [...state, color]);
  };

  const handleDeleteColorFilter = (color: ToyColor) => {
    setActiveColorFilters((state) => state.filter((i) => i !== color));
  };

  useEffect(() => {
    // Создать GetData,
    const data = getData();
    setData(data);
    console.log(activeFormFilters);
  }, [activeFormFilters, activeColorFilters]);

  useEffect(() => {
    // set filters from Local Storage
  }, []);

  return (
    <>
      {/* <div className="welcome text-center clear d-flex flex-column justify-center align-center">
        <h1 className="welcome__title blur-bg text-uppercase ">
          Помогите бабушке нарядить елку
        </h1>
        <button className="welcome__button blur-bg">Начать</button>
      </div> */}
      <Shop
        activeFormFilters={activeFormFilters}
        handleAddFormFilter={handleAddFormFilter}
        handleDeleteFormFilter={handleDeleteFormFilter}
        activeColorFilters={activeColorFilters}
        handleAddColorFilter={handleAddColorFilter}
        handleDeleteColorFilter={handleDeleteColorFilter}
      />
    </>
  );
}

export default App;

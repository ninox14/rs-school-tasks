import React, { useState, useEffect } from 'react';
import {
  getData,
  itemYearMin,
  itemYearMax,
  itemCountMin,
  itemCountMax,
} from './components/logic';
//components
import { Shop } from './components/Shop/Shop';

function App() {
  const [data, setData] = useState<ToyItemInterface[]>([]);
  const [activeFormFilters, setActiveFormFilters] = useState<ToyForm[]>([]);
  const [activeColorFilters, setActiveColorFilters] = useState<ToyColor[]>([]);
  const [activeSizeFilters, setActiveSizeFilters] = useState<ToySize[]>([]);
  const [onlyFavourite, setOnlyFavourite] = useState(false);
  const [activeSort, setActiveSort] = useState<SortValue>('');
  const [itemCountRange, setItemCountRange] = useState([
    itemCountMin,
    itemCountMax,
  ]);
  const [itemYearRange, setItemYearRange] = useState([
    itemYearMin,
    itemYearMax,
  ]);

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

  const handleAddSizeFilter = (size: ToySize) => {
    setActiveSizeFilters((state) => [...state, size]);
  };

  const handleDeleteSizeFilter = (size: ToySize) => {
    setActiveSizeFilters((state) => state.filter((i) => i !== size));
  };

  const handleSortChange = (sort: SortValue) => {
    setActiveSort(sort);
  };

  const handleCountRangeChange = (range: number[]) => {
    setItemCountRange(range);
  };
  const handleYearRangeChange = (range: number[]) => {
    setItemYearRange(range);
  };

  const saveFilters = () => {
    console.log('saved');
  };

  const setDefaultFilters = () => {
    console.log('reset filters');
  };

  useEffect(() => {
    // Создать GetData,
    const data = getData();
    setData(data);
    // console.log(activeFormFilters);
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
        activeSizeFilters={activeSizeFilters}
        handleAddSizeFilter={handleAddSizeFilter}
        handleDeleteSizeFilter={handleDeleteSizeFilter}
        onlyFavourite={onlyFavourite}
        setOnlyFavourite={setOnlyFavourite}
        saveFilters={saveFilters}
        setDefaultFilters={setDefaultFilters}
        activeSort={activeSort}
        handleSortChange={handleSortChange}
        itemCountRange={itemCountRange}
        handleCountRangeChange={handleCountRangeChange}
        itemYearRange={itemYearRange}
        handleYearRangeChange={handleYearRangeChange}
      />
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

// import BG from './assets/bg.jpg';
import {
  getData,
  itemYearMin,
  itemYearMax,
  itemCountMin,
  itemCountMax,
  getFavouriteState,
  saveToLocalStorage,
  getSavedFilters,
  sortData,
  searchData,
  DEFAULT_FILTERS,
} from './components/logic';
//components
import { Shop } from './components/Shop/Shop';
import { Header } from './components/Header/Header';
import { Tree } from './components/Tree/Tree';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
  const [favourites, setFavourites] = useState<number[]>([]);
  const [activeSearch, setActiveSearch] = useState('');
  const [showFullNotif, setShowFullNotif] = useState(false);
  const [isOnStart, setIsOnStart] = useState(true);
  const [isOnTree, setIsOnTree] = useState(false);
  const [treeBgIndx, setTreeBgIndx] = useState(0);
  const [treePngIndx, setTreePngIndx] = useState(0);
  const [isSnow, setIsSnow] = useState(false);
  const [isLights, setIsLights] = useState(false);
  const [lightsColor, setLightsColor] = useState<PossibleLights>('multicolor');

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

  const handleAddFavourite = (indx: number) => {
    favourites.length < 20
      ? setFavourites((state) => [...state, indx])
      : setShowFullNotif(true);
  };

  const handleRemoveFavourite = (indx: number) => {
    setFavourites((state) => state.filter((i) => i !== indx));
  };

  const handleSearchChange = (search: string) => {
    setActiveSearch(search);
  };

  const setAllFilterStates = (
    statesObject: LSDataInterface,
    isReset = false
  ) => {
    setActiveFormFilters(statesObject.formFilters);
    setActiveSizeFilters(statesObject.sizeFilters);
    setActiveColorFilters(statesObject.colorFilters);
    if (!isReset) {
      setActiveSort(statesObject.sort);
    }
    setItemYearRange(statesObject.yearRange);
    setItemCountRange(statesObject.conutRange);
    setOnlyFavourite(statesObject.isFavourite);
  };

  const setDefaultFilters = () => {
    setAllFilterStates(DEFAULT_FILTERS, true);
    saveToLocalStorage(DEFAULT_FILTERS);
  };

  const handleTreeBgChange = (idx: number) => {
    setTreeBgIndx(idx);
  };

  const handleTreePngChange = (idx: number) => {
    setTreePngIndx(idx);
  };

  const handleSnowChange = () => {
    setIsSnow(!isSnow);
  };

  const handleLightsChange = (value: boolean) => {
    setIsLights(value);
  };

  const handleLightsColorChange = (color: PossibleLights) => {
    setLightsColor(color);
  };
  useEffect(() => {
    // Создать GetData,
    const data = getData(
      activeFormFilters,
      activeColorFilters,
      activeSizeFilters,
      itemCountRange,
      itemYearRange,
      onlyFavourite,
      favourites
    );
    const sortedData = sortData(data, activeSort);
    const searchedData = searchData(sortedData, activeSearch);
    setData(searchedData);
  }, [
    activeFormFilters,
    activeColorFilters,
    activeSizeFilters,
    itemCountRange,
    itemYearRange,
    onlyFavourite,
    favourites,
    activeSort,
    activeSearch,
  ]);

  useEffect(() => {
    if (showFullNotif) {
      setTimeout(() => {
        setShowFullNotif(false);
      }, 1500);
    }
  }, [showFullNotif]);

  useEffect(() => {
    const statesObject = getSavedFilters();
    setAllFilterStates(statesObject);
    const favouriteState = getFavouriteState();
    setFavourites(favouriteState);
  }, []);
  window.addEventListener('beforeunload', () =>
    saveToLocalStorage({
      favourite: favourites,
      conutRange: itemCountRange,
      yearRange: itemYearRange,
      isFavourite: onlyFavourite,
      sort: activeSort,
      sizeFilters: activeSizeFilters,
      colorFilters: activeColorFilters,
      formFilters: activeFormFilters,
    })
  );
  return (
    <>
      <Header
        setIsOnTree={setIsOnTree}
        setIsOnStart={setIsOnStart}
        isOnStart={isOnStart}
        isOnTree={isOnTree}
        favourites={favourites}
      />
      {isOnStart && !isOnTree ? (
        <div className="welcome text-center clear d-flex flex-column justify-center align-center">
          <h1 className="welcome__title blur-bg text-uppercase ">
            Помогите бабушке нарядить елку
          </h1>
          <button
            className="welcome__button blur-bg"
            onClick={() => {
              setIsOnStart((state) => !state);
            }}
          >
            Начать
          </button>
        </div>
      ) : null}

      {!isOnStart && !isOnTree ? (
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
          setDefaultFilters={setDefaultFilters}
          activeSort={activeSort}
          handleSortChange={handleSortChange}
          itemCountRange={itemCountRange}
          handleCountRangeChange={handleCountRangeChange}
          itemYearRange={itemYearRange}
          handleYearRangeChange={handleYearRangeChange}
          toyData={data}
          favourites={favourites}
          handleAddFavourite={handleAddFavourite}
          handleRemoveFavourite={handleRemoveFavourite}
          handleSearchChange={handleSearchChange}
          showFullNotif={showFullNotif}
        />
      ) : null}
      {isOnTree ? (
        <DndProvider backend={HTML5Backend}>
          <Tree
            treeBgIndx={treeBgIndx}
            handleTreeBgChange={handleTreeBgChange}
            treePngIndx={treePngIndx}
            handleTreePngChange={handleTreePngChange}
            isSnow={isSnow}
            handleSnowChange={handleSnowChange}
            favourites={favourites}
            isLights={isLights}
            handleLightsChange={handleLightsChange}
            lightsColor={lightsColor}
            handleLightsColorChange={handleLightsColorChange}
          />{' '}
        </DndProvider>
      ) : null}
    </>
  );
}

export default App;

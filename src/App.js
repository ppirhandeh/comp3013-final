import './App.css';
import { useState, useEffect } from 'react';
import FoodList from './components/foodList';
import SearchComponent from './components/search';
import { foods } from './foods';

function App() {
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (filteredData, searchItem) => {
    setFilteredFoods(filteredData);
    setSearchTerm(searchItem);
  };

  useEffect(() => {
    //console.log('Filtered Foods Changed:', filteredFoods);
  }, [handleSearchChange, searchTerm]);

  return (
    <div className="App">
      <SearchComponent searchList = {foods} onSearchChange={handleSearchChange}/>
      <FoodList filteredFoods={filteredFoods} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;

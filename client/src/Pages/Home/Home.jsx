import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Buttons from '../../Components/Buttons/Buttons';
import Main from '../../Components/Main/Main';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('FOOD'); 

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <Buttons onCategorySelect={handleCategorySelect} />
      <Main selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;

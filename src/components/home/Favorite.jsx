import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import FavoriteButton from '../common/FavoriteButton';
import Title from './Title';

const Favorite = () => {
  const { categories } = useSelector((state) => state.userFavorite);
  const favoriteCategories = Object.values(categories).map((category) => ({
    category: category.name,
    src: category.src,
  }));
  const [selectedCategory, setSelectedCategory] = useState('전체');

  return (
    <div className="pt-[25px] w-full overflow-hidden min-h-[180px]">
      <Title title={'즐겨찾기'} />
      <div className="flex justify-between ">
        {favoriteCategories.map((item, index) => (
          <FavoriteButton
            key={index}
            category={item.category}
            src={item.src}
            isSelected={selectedCategory === item.category}
            selectCallback={(category) => setSelectedCategory(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;

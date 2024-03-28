import React from 'react'
import Card from '../Card'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useState } from 'react'


const Hero = ({animals}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filteredItems = selectedCategory
    ? animals.filter(item => item.animalClass === selectedCategory)
    : animals;
  return (
    <div className=' flex flex-col items-center gap-12 bg-[#D9EDBF]'>
      <Navbar/>
      <select value={selectedCategory} onChange={handleCategoryChange} className=' h-16 w-36 text-center shadow-lg '>
          <option value="">All classes</option>
          <option value="Mammal">Mammal</option>
          <option value="Fish">Fish</option>
          <option value="Bird">Bird</option>
          <option value="Reptile">Reptile</option>
        </select>
      <div className=' w-full h-fit flex flex-row flex-wrap p-3 gap-12 justify-center items-center '>
        
              {
                  filteredItems && filteredItems.map((animal)=>
                      (
                          <Card id={animal.animalId} name={animal.name} img={animal.image_url}></Card>
                      )
                  )
              }
      </div>
      <Footer/>
    </div>
  )
}

export default Hero
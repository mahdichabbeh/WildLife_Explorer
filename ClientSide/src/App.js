import './index.css';
import api from './api/axiosConfig';
import { useState , useEffect } from 'react';
import Layout from './components/Layout';
import {Routes , Route} from "react-router-dom";
import Home from './components/home/Home';
import Details from './components/Details';



function App() {
  const [animals,setAnimals] = useState();
  const [animal,setAnimal] = useState();

  const getAnimals = async () => {
    try {
      const response = await api.get("http://localhost:8080/api/v1/animals");

      console.log(response.data);

      setAnimals(response.data);

    } catch (err) {

      console.log(err);

    }
  }

  useEffect(()=>{
    getAnimals();
  },[]);

  const getAnimalData = async (animalId) => {
    try {
      const response = await api.get(`http://localhost:8080/api/v1/animals/${animalId}`);
      const singleAnimal = response.data;
      setAnimal(singleAnimal);
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home animals={animals}/>}></Route>
            <Route path='/:animalId' element={<Details getAnimalData={getAnimalData} animal={animal}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

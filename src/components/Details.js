import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../logo.svgz';


const Details = ({getAnimalData,animal}) => {
  let params = useParams();
  const animalId = params.animalId;
  useEffect(()=>{
    getAnimalData(animalId);
  })

  const navigate = useNavigate();
  function back() {
    navigate('/');
  }

    return (
        <div className='w-screen h-screen bg-[#DBE7C9] flex flex-row flex-wrap justify-center items-center'>
            <div className=" flex flex-col w-1/2 justify-start h-full gap-12 items-center bg-[url('../wp3.jpg')] bg-no-repeat bg-center bg-cover ">
                <div className=' w-full h-[60px] flex flex-row justify-center items-center bg-[#2C7865]'>
                    <img src={logo} alt="" className=' cursor-pointer w-[55px]' onClick={()=>back()} />
                    <p className=' text-xl text-[#90D26D] hover:underline hover:cursor-pointer' onClick={()=>back()}>Back</p>
                </div>
                <h2 className=' text-5xl font-semibold text-[#DBE7C9]'>{animal?.name}</h2>
                <div className=' justify-center text-[#90D26D] items-start gap-4 flex flex-col bg-[#2C7865] p-10 rounded-lg'>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Common Name :</h2> {animal?.name}</h2>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Scientific Name :</h2> {animal?.species}</h2>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Animal Class :</h2> {animal?.animalClass}</h2>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Habitat :</h2> {animal?.habitat}</h2>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Diet :</h2> {animal?.diet}</h2>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Average Lifespan :</h2> {animal?.average_lifespan}</h2>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Size :</h2> {animal?.size.length}</h2>
                    <h2 className=' flex flex-row justify-center items-center gap-6'><h2 className=' text-lg font-semibold text-[#FF9800]'>Weight :</h2> {animal?.size.weight}</h2>
                </div>
            </div>
            <div className=' w-1/2 h-full'>
                <img src={animal?.image_url} alt="" className=' object-cover w-full h-full' />
            </div>
        </div>
  )
}

export default Details
import { useNavigate } from 'react-router-dom';

const Card = ({id ='', name='',img=''}) => {
    const navigate = useNavigate();
    function details(animalId){
        navigate(`/${animalId}`);
    }
    return ( 
        <div className=" bg-[#2C7865] shadow-md overflow-hidden  w-[300px] h-[400px]  flex flex-col items-center gap-8 justify-start border-solid cursor-pointer" onClick={()=> details(id)}>
            <img src={img} alt="img" className=" w-full h-3/5 hover:scale-110 " />
            <div className=' flex flex-col gap-3 justify-center items-center'>
                <h2 className='text-[#FF9800] font-extrabold text-center text-2xl'>{name}</h2>
                <div className=" text-[#FF9800] cursor-pointer hover:underline hover:text-[#90D26D]"><h2>More details</h2></div>
            </div>
        </div> 
    );
}
 
export default Card;
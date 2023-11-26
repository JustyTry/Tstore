import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams()
    const viewedData = localStorage.getItem("viewed") ? JSON.parse(localStorage.getItem("viewed")) : []
    !viewedData.includes(id) && viewedData.push(id)
    viewedData.length > 5 && viewedData.splice(0, 1)
    localStorage.setItem("viewed", JSON.stringify(viewedData))
    return (
        <div className='w-full h-full mt-16 mb-48 max-lg:mb-16'>
            <div className='h-full w-full flex justify-center max-lg:flex-col max-lg:justify-start max-lg:items-center max-sm:px-2'>
                <div className='w-4/12 max-lg:w-8/12 max-sm:w-full'><img src='https://tshirtstore.centracdn.net/client/dynamic/images/8359_f9e1d5e837-dedicated_ss23_dag-600993-ded-standard.jpg' alt='' /></div>
                <div className='w-4/12 max-lg:w-8/12 max-sm:w-full flex flex-col items-start pl-32 max-lg:p-0'>
                    <div className='capitalize text-2xl mb-4 max-lg:text-center'>name</div>
                    <div className='font-medium text-xl mb-8'>32$</div>
                    <select className='w-full text-center border-2 py-2'>
                        <option>Choose size</option>
                    </select>
                    <button className='bg-black text-white border-2 w-full py-1 text-center mt-4 mb-8'>Add to bag</button>
                    <div className='mb-6 capitalize'>
                        <div>Description</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veniam ipsa itaque saepe debitis. Aperiam non fugit vitae eligendi totam rem! Eius qui earum optio quam suscipit. Ipsam, atque cupiditate.</div>
                    </div>
                    <div className='mb-6'>fabric</div>
                    <div>made in</div>
                </div>
            </div>
        </div>
    );
};

export default Product;
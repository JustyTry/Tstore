import React from 'react'
import { FaHeart } from 'react-icons/fa';
import Record from '../components/Record';
import useGetData from '../hooks/useGetData';

const Favorites = () => {
    let data = useGetData('products')
    data = data.data.filter((el) => {
        return JSON.parse(localStorage.getItem("favorites")).includes(el.id)
    })
    return (
        <>
            <div className="w-10/12 max-lg:w-full mx-auto flex justify-start flex-wrap mb-16">
                <div className='flex w-full items-center flex-col'><div className='font-medium text-3xl'>Your favorites</div>
                    <div ><FaHeart className='w-12 h-12 text-pink-500' /></div></div>
                {data.length !== 0 ? data.map(doc => {
                    return <Record key={doc.id} data={doc} />
                }) : <>loading...</>
                }
            </div></>
    )
}

export default Favorites
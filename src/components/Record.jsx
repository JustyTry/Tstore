import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Record = ({ data }) => {
    const [liked, setLiked] = useState(
        localStorage.getItem('favorites', data.id)?.includes(data.id) ? true : false
    );
    const changeFavorite = () => {
        let currentData = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
        if (liked) {
            currentData.splice(currentData.indexOf(data.id), 1)
            localStorage.setItem("favorites", JSON.stringify(currentData))
            window.dispatchEvent(new Event("storage"))
        }
        else if (!currentData.includes(data.id)) {
            currentData.push(data.id)
            localStorage.setItem("favorites", JSON.stringify(currentData))
            window.dispatchEvent(new Event("storage"))
        }
        setLiked(!liked);

    };
    return (
        <div className="h-full w-3/12 max-lg:w-4/12 max-md:w-6/12 max-sm:w-screen relative p-4">
            <Link to={`/product/${data.id}`}>
                <div className="w-full h-full overflow-hidden">
                    <img
                        src="https://tshirtstore.centracdn.net/client/dynamic/images/8359_f9e1d5e837-dedicated_ss23_dag-600993-ded-standard.jpg"
                        alt=""
                        className=" hover:scale-150 ease-in-out transition duration-300 object-contain"
                    />
                </div>
            </Link>
            <div className="absolute top-8 bottom-0 right-8 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                {liked ?
                    <FaHeart
                        className={'text-pink-500 w-full h-full p-1.5'}
                        onClick={() => changeFavorite()}
                    /> : <FaRegHeart className={'text-black opacity-60 w-full h-full p-1.5'}
                        onClick={() => changeFavorite()} />}
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>{data.title}</div>
                <div>{`${data.price} USD`}</div>
            </div>
        </div>
    );
};

export default Record;

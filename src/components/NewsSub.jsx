import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsSub = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleFormSubmit} className="w-10/12 max-lg:w-screen m-auto flex flex-col items-center bg-contactImage bg-cover bg-no-repeat bg-center mb-8">
            <h5 className="text-center py-7 font-medium">
                Get the latest T-shirt drops in your inbox! Sign up for our Newsletter.
            </h5>
            <div className="w-full flex justify-center mb-5">
                <input name="email" id="email-input" value={email} onChange={handleEmailChange} className="w-4/12 max-md:w-7/12 max-sm:w-9/12 h-12 rounded-l-full text-center outline-none" type="email" placeholder="Enter email for news updates" required />
                <button type="submit" className="w-1/12 max-md:w-2/12 bg-black text-white rounded-r-full outline-none">
                    SIGN UP!
                </button>
            </div>
            <div className="mb-10">By registering you agree with our <Link to="policy" className='underline'>Integrity Policy</Link></div>
        </form>
    );
};

export default NewsSub;
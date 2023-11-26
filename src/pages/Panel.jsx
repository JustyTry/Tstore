import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase/config';

function Panel() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {

        try {
            await addDoc(collection(db, "products"), {
                title: data.title,
                price: data.price,
                description: data.description,
                article: data.article,
                fabric: data.fabric,
                tags: data.tags,
                sizes: data.sizes,
                amount: data.amount,
                gender: data.gender,
                creationDate: Timestamp.fromDate(new Date()),
            });
            console.log(data);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter title"
                    {...register("title", { required: true })}
                />
                {errors.title && (
                    <p className="text-red-500 text-xs italic">Title is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter price"
                    {...register("price", { required: true })}
                />
                {errors.price && (
                    <p className="text-red-500 text-xs italic">Price is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter description"
                    {...register("description", { required: true })}
                />
                {errors.description && (
                    <p className="text-red-500 text-xs italic">Description is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="article" className="block text-gray-700 font-bold mb-2">
                    Article
                </label>
                <input
                    type="text"
                    name="article"
                    id="article"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter article"
                    {...register("article", { required: true })}
                />
                {errors.article && (
                    <p className="text-red-500 text-xs italic">Article is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="fabric" className="block text-gray-700 font-bold mb-2">
                    Fabric
                </label>
                <input
                    type="text"
                    name="fabric"
                    id="fabric"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter fabric"
                    {...register("fabric", { required: true })}
                />
                {errors.fabric && (
                    <p className="text-red-500 text-xs italic">Fabric is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">
                    Tags
                </label>
                <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter tags"
                    {...register("tags", { required: true })}
                />
                {errors.tags && (
                    <p className="text-red-500 text-xs italic">Tags is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="sizes" className="block text-gray-700 font-bold mb-2">
                    Sizes
                </label>
                <input
                    type="text"
                    name="sizes"
                    id="sizes"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter sizes"
                    {...register("sizes", { required: true })}
                />
                {errors.sizes && (
                    <p className="text-red-500 text-xs italic">Sizes is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
                    Amount
                </label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter amount"
                    {...register("amount", { required: true })}
                />
                {errors.amount && (
                    <p className="text-red-500 text-xs italic">Amount is required</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                    Gender
                </label>
                <select
                    name="gender"
                    id="gender"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...register("gender", { required: true })}
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="female">Unisex</option>
                </select>
                {errors.gender && (
                    <p className="text-red-500 text-xs italic">Gender is required</p>
                )}
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
export default Panel
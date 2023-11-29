import { useState } from "react";
import Record from "../components/Record";
import SortBar from "../components/SortBar";
import ViewedList from "../components/ViewedList";
import useGetData from "../hooks/useGetData";

const Home = () => {
  let data = useGetData("products");
  const [sortSize, setSortSize] = useState("");
  const [sortStyle, setSortStyle] = useState("");
  const [sortType, setSortType] = useState("");
  data = data.data.filter((el) => {
    return el.sizes.includes(sortSize);
  });
  return (
    <>
      <SortBar
        setSortSize={setSortSize}
        setSortStyle={setSortStyle}
        setSortType={setSortType}
        className="absolute"
      />
      <div className="w-10/12 max-lg:w-full mx-auto flex justify-start flex-wrap mb-16">
        {data.length !== 0 ? (
          data.map((doc) => {
            return <Record key={doc.id} data={doc} />;
          })
        ) : (
          <div className="w-full text-center">Ничего подходящего нет:(</div>
        )}
      </div>
      <ViewedList />
    </>
  );
};

export default Home;

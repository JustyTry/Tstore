import React from "react";
import useGetRecordsByIds from "../hooks/useGetRecordsByIds";

const ViewedList = () => {
  const ids = JSON.parse(localStorage.getItem("viewed"));
  const data = useGetRecordsByIds("products", ids);

  return (
    <div
      className={`${
        localStorage.getItem("viewed")
          ? "w-full h-80 bg-gray-200 mb-24 flex  flex-col items-center"
          : "hidden"
      }`}
    >
      <div className="mb-4 text-lg">Your recently viewed products</div>
      <div className="w-full h-64  flex justify-center items-center gap-6 overflow-y-hidden overflow-x-auto max-lg:justify-start">
        {data.data.length ? (
          data.data.map((doc) => {
            return (
              <img
                src="https://tshirtstore.centracdn.net/client/dynamic/images/8359_f9e1d5e837-dedicated_ss23_dag-600993-ded-standard.jpg"
                alt=""
                className="h-full w-auto  max-lg:w-4/12"
                key={doc.id}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ViewedList;

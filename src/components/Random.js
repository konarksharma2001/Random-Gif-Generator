import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";


const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div
      className="w-1/2  bg-green-500 rounded-lg border border-black 
                  flex flex-col items-center gap-y-5  mt-[15px]" >

      <h1 className="text-2xl underline uppercase font-bold">A Random GIF</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" className="border border-black" />)
      }
      

      <button
        onClick={() => (fetchData())}
        className="w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;

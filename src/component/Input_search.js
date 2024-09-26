"use client";

import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Current_show from "./Current_show";
import { current_data } from "@/utils/fetch";

function Input_search() {
  const [current, setCurrent] = useState("");
  const [inputData, setInputData] = useState("Tehran");

  const search = async (city) => {
    const data = await current_data(city);
    setCurrent(data);
  };
  
  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const submit = () => {
    search(inputData); // Pass inputData to search
  };

  const onkeydown = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  }

  useEffect(() => {
    search(inputData); // Will only search when inputData changes
  }, []);

  return (
    <div className="bg-slate-200 h-screen">
      <section className="h-2/3 bg-slate-200 w-full flex items-center justify-center">
        <input
          type="text"
          className="w-3/12 capitalize py-4 px-6 font-bold rounded-l-md border-white border focus:outline-none hover:border-slate-300 focus:border-slate-500 transition"
          placeholder="Search..."
          onChange={handleChange}
          value={inputData}
          onKeyDown={onkeydown}
        />
        <button
          className="px-4 border-white border py-4 rounded-r-md font-bold hover:bg-slate-300 focus:bg-slate-500 transition"
          onClick={submit}
        >
          Search
        </button>
      </section>
      <Current_show data={current} />
    </div>
  );
}

export default Input_search;

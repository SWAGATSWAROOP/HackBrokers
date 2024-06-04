"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Input() {
  const [searchText, setSearchText] = useState("");
  const [ans, setAns] = useState("");

  function handleInputChange(e: any) {
    setSearchText(e.target.value);
  }

  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:4000/query", {
        text: searchText,
      });
      console.log(response);
      setAns(response.data.chatMessage.answer);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 p-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
          className="w-full sm:w-48 rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </div>
      <textarea
        className="w-full sm:w-96 h-64 mt-4 p-4 rounded-md border border-gray-300 bg-gray-100 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 resize-none"
        value={ans}
        readOnly
      />
    </>
  );
}

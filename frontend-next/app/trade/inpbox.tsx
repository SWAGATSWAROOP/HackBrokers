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
      <div className="w-full flex flex-col items-center space-y-4 p-4">
        <div className="w-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleInputChange}
            className="w-full bg-zinc-300 rounded-l-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-200 m-3"
          >
            Submit
          </button>
        </div>
        <textarea
          className="w-full h-64 p-4 rounded-md border border-gray-300 bg-gray-100 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 resize-none mt-4"
          value={ans}
          readOnly
        />
      </div>
    </>
  );
}

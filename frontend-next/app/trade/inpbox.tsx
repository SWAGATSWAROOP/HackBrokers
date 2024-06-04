"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Input() {
  const [searchText, setSearchText] = useState("");
  const [ans, Setans] = useState("");

  useEffect(() => {}, [ans]);

  function handleInputChange(e: any) {
    setSearchText(e.target.value);
  }

  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:4000/query", {
        text: searchText,
      });
      console.log(response);
      Setans(response.data.chatMessage.answer);
      alert(ans);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="flex items-center pr-10">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
          className="w-48 rounded-md border border-gray-300 p-2"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 rounded-md bg-white px-4 py-2 text-black"
        >
          Submit
        </button>
      </div>
      <textarea value={ans} />
    </>
  );
}

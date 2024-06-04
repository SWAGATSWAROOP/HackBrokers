"use client";
import axios from "axios";
import { useState } from "react";

export default function Input() {
  const [searchText, setSearchText] = useState("");
  const [ans,Setans]=useState("")

  function handleInputChange(e: any) {
    setSearchText(e.target.value);
  }

  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:4000/query", {
        text: searchText 
      });
      console.log(response); 
      await Setans(response.data.chatMessage.answer)
      alert(ans)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="pr-10 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
          className="rounded-md border border-gray-300 p-2 w-48"
        />
        <button onClick={handleSubmit} className="ml-2 px-4 py-2 bg-white text-black rounded-md">
          Submit
        </button>
      </div>
    </>
  );
}

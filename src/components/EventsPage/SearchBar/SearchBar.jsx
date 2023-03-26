import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CategoryTag from "../CategoryTag/CategoryTag";
import ListOfCategories from "../ListOfCategories/ListOfCategories";

import "./SearchBar.css";

function SearchBar() {
  const [categories, setCategories] = useState([]);

  const eventListener = (e) => {
    const inputField = document.getElementById("searchbar-input");
    const keyCode = e.key;
    if (
      keyCode === "Enter" &&
      inputField == document.activeElement &&
      inputField.value !== ""
    ) {
      // If there is a text that can be turned into a tag:
      const tagName = inputField.value;
    //   inputField.value = "";
      CategoryTag;
      setCategories([...categories, <CategoryTag tagName={tagName} />]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", eventListener);
  }, [categories]);

  return (
    <div
      className="fixed flex bg-black w-screen text-white z-[100] shadow-xl"
      style={{ justifyContent: "space-between" }}
    >
      <div className="p-4">
        <h2 className="capitalized text-4xl font-semibold">Events</h2>
      </div>
      <div className="p-4">
        <div
          className="w-fit searchbar rounded-md border-red-700 border-2 block p-4"
          id="searchbar"
        >
          <input
            placeholder="enter event categories ..."
            className="outline-none text-slate-400 bg-transparent w-[60vw]"
            id="searchbar-input"
          />
          <button className="" id="search-button" onClick={() => {console.log("Button clicked");}}></button>
        </div>

        <ListOfCategories>{categories}</ListOfCategories>
      </div>
      <div className="p-4">
        <NavLink to={"/"} className="text-4xl">
          <p>back</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBar;

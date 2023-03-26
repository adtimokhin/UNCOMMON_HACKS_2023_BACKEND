import { useEffect } from "react";
import CategoryTag from "../CategoryTag/CategoryTag";
import "./ListOfCategories.css";

function ListOfCategories(props) {
  return <div className="flex gap-4 text-slate-400">
    <h4 className="text-white">Categories selected:</h4>
    {props.children}</div>;
}

export default ListOfCategories;

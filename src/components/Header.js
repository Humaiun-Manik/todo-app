import React, { useState } from "react";
import notesImg from "./../assets/images/notes.png";
import tickImg from "./../assets/images/double-tick.png";
import plusImg from "./../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const completedHandler = () => {
    dispatch(allCompleted());
  };

  const clearHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={notesImg} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInput}
          value={input}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={completedHandler} className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearHandler} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}

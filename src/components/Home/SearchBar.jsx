import React, { useRef } from "react";

export default function SearchBar({ handleClick, setHeroes, setError }) {
  let input = useRef();
  return (
    <form>
      <input className="input" type="text" placeholder="Search hero..." ref={input} />
      <button
        onClick={(e) => {
          handleClick(e, input.current.value)
          .then((data) => {
            setHeroes(data?.data?.results??[]);
          })
          .catch((err) => setError(err));
        }}
      >
        <i className="fas fa-search" style={{ background: "rgb(230,63,54)" }}></i>
         {` Search`}
      </button>
    </form>
  );
}

import React, { useState } from "react";
import image from "../images/virus.png";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { fetchSearches } from "../Reducer/actions";
export default function Header() {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleClick = () => {
    const newCountry = country.trim();
    setCountry(newCountry);

    dispatch(fetchSearches(country));
  };
  return (
    <div className="header">
      <img className="header_logo" alt="Logo" src={image} />
      <input
        onChange={handleChange}
        type="text"
        name="country"
        placeholder="Search Country ..."
      />
      <button onClick={handleClick}>
        <SearchIcon />
      </button>
    </div>
  );
}

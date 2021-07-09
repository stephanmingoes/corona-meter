import React from "react";
import Post from "../post/post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchAll } from "../Reducer/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  const state = useSelector((state) => state.state);
  return state ? (
    <div className="home">
      {state?.map((state) => (
        <Post key={state.country} state={state} />
      ))}
    </div>
  ) : null;
}

import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";

const App = () => {

  const [unicorns, setUnicorns] = useState([])

  const fetchUnicorns = async () => {
    const response = await fetch("/api/v1/unicorns")
    const parsedUnicornData = await response.json()
    setUnicorns(parsedUnicornData.unicorns)
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  const unicornElements = unicorns.map((unicorn) => {
    return <li key={unicorn.id}>{unicorn.name}</li>
  })

  return <div>{unicornElements}</div>;
};

export default hot(App);

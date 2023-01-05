import React, { useState } from "react";
import "./Schema.css";

const Schema = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = { ...userInfo, id: new Date().getTime().toString() };

    setData([...data, newData]);

    setUserInfo({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <div className="maindiv">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Fullname</label>
          <input
            type="text"
            autocomplete="off"
            value={userInfo.username}
            onChange={handleInput}
            name="username"
            id="username"
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autocomplete="off"
            value={userInfo.email}
            onChange={handleInput}
            name="email"
            id="email"
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            autocomplete="off"
            value={userInfo.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autocomplete="off"
            value={userInfo.password}
            onChange={handleInput}
            name="password"
            id="password"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="info">
        {
            data.map((curElem) => {
                return(
                    <div className="showDataStyle">
                        <p>{curElem.username}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.phone}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Schema;

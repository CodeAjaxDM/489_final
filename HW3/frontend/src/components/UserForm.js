import React, { useState } from "react";

function UserForm({ setUsers, setMsg }) {
  const [email, setUserEmail] = useState("");
  const [first_name, setUserFirst_Name] = useState("");
  const [last_name, setUserLast_Name] = useState("");
  const [comment, setUserComment] = useState("");

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("user: ", first_name, " ", last_name, " ", email);
    const new_user = {
      email,
      first_name,
      last_name,
      comment,
    };
    postData("http://localhost:4000/api/user", new_user)
      .then((data) => {
        if (data.error && data.error.includes('duplicate key value')) {
          throw new Error('Duplicate user detected.');
        }
        setMsg(data.msg);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setMsg("Error: Duplicate user detected.");
      });
  }
  

  return (
    <div className="container-lg">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">First Name</label>
          <input
            required
            name="first_name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Jane"
            onChange={(e) => {
              setUserFirst_Name(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Last Name</label>
          <input
            required
            name="last_name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Doe"
            onChange={(e) => {
              setUserLast_Name(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email</label>
          <input
            required
            name="email"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Jane.Doe@gmail.com"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Reason for Signing</label>
          <input
            name="comment"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="This field is optional"
            onChange={(e) => {
              setUserComment(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Sign" className="btn btn-primary" />
        </div>
        {/* <div>
          {userid}
          {username}
        </div> */}
      </form>
    </div>
  );
}

export default UserForm;

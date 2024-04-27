import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

function User(props) {
  const { user, setUsers, setMsg } = props;

  return (
    <div className="card m-5">
      <div className="card-header">{user.first_name} {user.last_name}</div>
      <div className="card-body">
        <h5 className="card-title">{user.email}</h5>
        <p className="card-text">{user.comment}</p>
        {/* <a href="#" className="btn btn-danger">
          Delete
        </a> */}
        {/* // uncomment to return delete function. requeued removal from Subu. */}
        {/* <DeleteModal user={user} setMsg={setMsg} /> */}
      </div>
    </div>
  );
}

export default User;

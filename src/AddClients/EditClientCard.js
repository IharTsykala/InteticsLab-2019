import React, { useState, useEffect } from "react";

import "./EditClientCard.css";

const EditClientCard = props => {
  const [user, setUser] = useState(props.currentUser);
  console.log(user);

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      className="editCard"
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>firstName</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <label>lastName</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <label>dateOfBirth</label>
      <input
        type="text"
        name="dateOfBirth"
        value={user.dateOfBirth}
        onChange={handleInputChange}
      />
      <label>address</label>
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleInputChange}
      />
      <label>phone</label>
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
      />
      <label>email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>make</label>
      <input
        type="text"
        name="make"
        value={user.car[0].make}
        onChange={handleInputChange}
      />
      <label>model</label>
      <input
        type="text"
        name="model"
        value={user.car[0].model}
        onChange={handleInputChange}
      />
      <label>year</label>
      <input
        type="text"
        name="year"
        value={user.car[0].year}
        onChange={handleInputChange}
      />
      <label>vin</label>
      <input
        type="text"
        name="vin"
        value={user.car[0].vin}
        onChange={handleInputChange}
      />
      <label>date</label>
      <input
        type="text"
        name="date"
        value={user.car[0].order.date}
        onChange={handleInputChange}
      />
      <label>orderAmount</label>
      <input
        type="text"
        name="orderAmount"
        value={user.car[0].order.orderAmount}
        onChange={handleInputChange}
      />
      <label>orderStatus</label>
      <input
        type="text"
        name="orderStatus"
        value={user.car[0].order.orderStatus}
        onChange={handleInputChange}
      />
      <ul>
        <li>
          <button>Update user</button>
        </li>
        <li>
          <button
            onClick={() => props.setEditing(false)}
            className="button muted-button"
          >
            Cancel
          </button>
        </li>
      </ul>
    </form>
  );
};

export default EditClientCard;

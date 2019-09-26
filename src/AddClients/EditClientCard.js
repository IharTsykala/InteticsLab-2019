import React, { useState, useEffect } from "react";

import "./EditClientCard.css";

// let flagInputUser = false;
// let flagInputCar = false;
// let flagInputOrder = false;

const EditClientCard = props => {
  const [user, setUser] = useState(props.currentUser);
  // console.log(user);

  const car = user.car[0];
  const [specificationCar, setCar] = useState(car);

  const order = specificationCar.order;
  const [characteristicOrder, setOrder] = useState(order);

  // const toggleFlagInput = input => {
  //   if (input === "flagInputUser") {
  //     flagInputUser = true;
  //   }
  //   if (input === "flagInputCar") {
  //     flagInputCar = true;
  //   }
  //   if (input === "flagInputOrder") {
  //     flagInputOrder = true;
  //   }
  // };

  const handleInputChange = event => {
    const { name, value } = event.target;

    // toggleFlagInput("flagInputUser");

    setUser({ ...user, [name]: value });
  };

  const handleInputChangeCar = event => {
    const { name, value } = event.target;

    // toggleFlagInput("flagInputCar");

    setCar({ ...specificationCar, [name]: value });
  };

  const handleInputChangeOrder = event => {
    const { name, value } = event.target;

    // toggleFlagInput("flagInputOrder");

    setOrder({ ...characteristicOrder, [name]: value });
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

        // if (flagInputUser) props.updateUser(user.id, user);
        // if (flagInputCar) props.updateUser(user.id, specificationCar);
        // if (flagInputOrder) props.updateUser(user.id, characteristicOrder);
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
        value={specificationCar.make}
        onChange={handleInputChangeCar}
      />
      <label>model</label>
      <input
        type="text"
        name="model"
        value={specificationCar.model}
        onChange={handleInputChangeCar}
      />
      <label>year</label>
      <input
        type="text"
        name="year"
        value={specificationCar.year}
        onChange={handleInputChangeCar}
      />
      <label>vin</label>
      <input
        type="text"
        name="vin"
        value={specificationCar.vin}
        onChange={handleInputChangeCar}
      />
      <label>date</label>
      <input
        type="text"
        name="date"
        value={characteristicOrder.date}
        onChange={handleInputChangeOrder}
      />
      <label>orderAmount</label>
      <input
        type="text"
        name="orderAmount"
        value={characteristicOrder.orderAmount}
        onChange={handleInputChangeOrder}
      />
      <label>orderStatus</label>
      <input
        type="text"
        name="orderStatus"
        value={characteristicOrder.orderStatus}
        onChange={handleInputChangeOrder}
      />
      <ul>
        <li>
          <button>Update client data</button>
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

import React, { useState } from "react";

import "./AddClientCard.css";

const AddClients = props => {
  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    phone: "",
    email: "",
    car: [
      {
        make: "",
        model: "",
        year: "",
        vin: "",
        order: {
          date: "",
          orderAmount: "",
          orderStatus: ""
        }
      }
    ]
  };
  const [user, setUser] = useState(initialFormState);
  let flagAdd = true;

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.firstName || !user.lastName) return;
        props.setCurrentClient(user);
        props.clientsList.forEach(client => {
          if (
            client.firstName === user.firstName &&
            client.lastName === user.lastName
          )
            flagAdd = false;
          return;
        });
        if (flagAdd) {
          props.addUser(user);
          setUser(initialFormState);
        }
      }}
    >
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <button>Add client</button>
      <p>
        If the client is already in the database, his (her) individual
        information will be shown in the "View Card" form.
      </p>
      <p className="example">
        For an example of the application, enter "Name: Tanya" and Last Name:
        Brown.
      </p>
    </form>
  );
};

export default AddClients;

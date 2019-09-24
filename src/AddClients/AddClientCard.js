import React, { useState } from "react";

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
          orderStatus: ["complied", "in progress", "canceled"]
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
      <label>Name</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddClients;

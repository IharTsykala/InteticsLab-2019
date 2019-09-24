import React, { useState } from "react";
import "./App.css";

import ClientCardsData from "./ClientDataCards/index";
import AddClients from "./AddClients/AddClientCard";
import EditClientCards from "./AddClients/EditClientCard";

const App = () => {
  const usersData = [
    {
      id: 1,
      firstName: "Tania",
      lastName: "Brown",
      dateOfBirth: "21.09.1984",
      address: "Minsk",
      phone: "+123456789",
      email: "123@tut.by",
      car: [
        {
          make: "Honda",
          model: "Civic",
          year: "2015",
          vin: "123456789",
          order: {
            date: "21.09.2019",
            orderAmount: "100",
            orderStatus: ["complied", "in progress", "canceled"]
          }
        }
      ]
    },
    {
      id: 2,
      firstName: "Tania2",
      lastName: "Brown",
      dateOfBirth: "21.09.1984",
      address: "Minsk",
      phone: "+123456789",
      email: "123@tut.by",
      car: [
        {
          make: "Honda",
          model: "Civic",
          year: "2015",
          vin: "123456789",
          order: {
            date: "21.09.2019",
            orderAmount: "100",
            orderStatus: ["complied", "in progress", "canceled"]
          }
        }
      ]
    },
    {
      id: 3,
      firstName: "Tania3",
      lastName: "Brown",
      dateOfBirth: "21.09.1984",
      address: "Minsk",
      phone: "+123456789",
      email: "123@tut.by",
      car: [
        {
          make: "Honda",
          model: "Civic",
          year: "2015",
          vin: "123456789",
          order: {
            date: "21.09.2019",
            orderAmount: "100",
            orderStatus: ["complied", "in progress", "canceled"]
          }
        }
      ]
    }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const currentInputClient = {
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

  const [currentClient, setCurrentUser] = useState([currentInputClient]);

  const [editing, setEditing] = useState(false);

  const compareDataClients = client => {
    let clientNew = {};
    let flagCompare = false;
    users.forEach(clientData => {
      if (
        clientData.firstName === client.firstName &&
        clientData.lastName === client.lastName
      ) {
        clientNew = Object.assign({}, clientData);
        flagCompare = true;
        setCurrentUser([clientNew]);
      }
    });
    if (flagCompare) {
      setCurrentUser([clientNew]);
    } else {
      setCurrentUser([client]);
    }
  };

  const deleteUser = (firstName, lastName) => {
    setEditing(false);
    for (let i = 0; i < users.length; i++) {
      if (firstName === users[i].firstName && lastName === users[i].lastName) {
        users.splice(i, 1);
      }
    }
    setCurrentUser({});
  };

  const editRow = client => {
    setEditing(true);

    setCurrentUser(client);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>InteticsLab 2019</h1>
      <div className="main">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditClientCards
                editing={editing}
                setEditing={setEditing}
                currentUser={currentClient}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddClients
                addUser={addUser}
                clientsList={users}
                setCurrentClient={compareDataClients}
              />
            </div>
          )}
        </div>
        ;
        <div className="clientCards">
          <h2>View users</h2>
          <ClientCardsData
            currentClient={currentClient}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

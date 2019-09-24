import React from "react";

const ClientCardsData = props => {
  console.log(props.currentClient);
  return (
    <>
      <div>
        <div>Name</div>
        <div>Username</div>
        <div>dateOfBirth</div>
        <div>address</div>
        <div>phone</div>
        <div>email</div>

        <div>make</div>
        <div>model</div>
        <div>year</div>
        <div>vin</div>

        <div>date</div>
        <div>orderAmount</div>
        <div>orderStatus</div>
      </div>

      {props.currentClient.length > 0 ? (
        props.currentClient.map(user => (
          <div key={user.id}>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.dateOfBirth}</div>
            <div>{user.address}</div>
            <div>{user.phone}</div>
            <div>{user.email}</div>
            <div></div>
            <div>{user.car[0].make}</div>
            <div>{user.car[0].model}</div>
            <div>{user.car[0].year}</div>
            <div>{user.car[0].vin}</div>

            <div>{user.car[0].order.date}</div>
            <div>{user.car[0].order.orderAmount}</div>
            <div>{user.car[0].order.orderStatus[0]}</div>

            <div>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                // className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.firstName, user.lastName)}
                className="button muted-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <div colSpan={3}>No users</div>
        </div>
      )}
    </>
  );
};

export default ClientCardsData;

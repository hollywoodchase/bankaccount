import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Photo(props) {
  return (
    <div className="form-group">
      <h2>Photo</h2>
      <img {...props} />
    </div>
  );
}

export function Name(props) {
  return (
    <div className="form-group">
      <h2>Name</h2>
      <h3> {props.value} </h3>
    </div>
  );
}

export function Balance(props) {
  return (
    <div className="form-group">
      <h2>Balance</h2>
      <h3> {props.value} </h3>
    </div>
  );
}

export function Deposit(props) {
    return (
      <div className="form-group">
        <h2>Deposit</h2>
        <input className="form-control" {...props} />
      </div>
    );
  }

export function Withdraw(props) {
  return (
    <div className="form-group">
      <h2>Withdraw</h2>
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

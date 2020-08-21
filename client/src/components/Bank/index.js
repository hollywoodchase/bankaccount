import React from "react";
import { Photo, Name, Deposit, Withdraw, FormBtn } from "../../components/Form";
import "../../style.css";

function Bank(props) {
  return (
    <div className="container bank-container">
      <div className="table-container">
        <form id="form">
        <table class="table">
          <thead>
            <tr className="thead">
              <th scope="col">Account Holder</th>
              <th scope="col">Current Balance</th>
              <th scope="col">Last Transaction</th>
              <th scope="col">Deposit</th>
              <th scope="col">Withdraw</th>
              <th scope="col">Submit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Danny 'Chase' Calise</th>
              <td>10000</td>
              <td>-500</td>
              <td>
                <form action="/action_page.php">
                  <input type="text" id="fname" name="fname" /><br></br><br></br>
                </form>
              </td>
              <td>
                <form action="/action_page.php">
                  <input type="text" id="fname" name="fname" /><br></br><br></br>
                </form>
                </td>
              <td>
                <form action="/action_page.php">
                  <input type="submit" value="Submit" /><br></br><br></br>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="row">William "Will" Hutnick</th>
              <td>5000</td>
              <td>+1200</td>
              <td>
                <form action="/action_page.php">
                  <input type="text" id="fname" name="fname" /><br></br><br></br>
                </form>
              </td>
              <td>
                <form action="/action_page.php">
                  <input type="text" id="fname" name="fname" /><br></br><br></br>
                </form>
              </td>
              <td>
                <form action="/action_page.php">
                  <input type="submit" value="Submit" /><br></br><br></br>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="row">Dave "Curtbowl" Curtis</th>
              <td>20000</td>
              <td>-5000</td>
              <td>
                <form action="/action_page.php">
                  <input type="text" id="fname" name="fname" /><br></br><br></br>
                </form>
              </td>
              <td>
                <form action="/action_page.php">
                  <input type="text" id="fname" name="fname" /><br></br><br></br>
                </form>
              </td>
              <td>
                <form action="/action_page.php">
                  <input type="submit" value="Submit" /><br></br><br></br>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        </form>
      </div>
    </div>
  );
}

export default Bank;

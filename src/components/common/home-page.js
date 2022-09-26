import { blue, green } from "@material-ui/core/colors";
import { yellow100 } from "material-ui/styles/colors";
import { red100 } from "material-ui/styles/colors";
import { white } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import React, { Component } from "react";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../common/Navigations/common-nav";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SuplierName: "",
      SuplierAddress: "",
      SuplierContactNumber: "",
      SuplierAccountNumber: "",
      ContactNumber: "",
      submitted: false,
    };
  }


  render() {
    return (
      <div class="ui two column   grid ">
       



       <NavBar />
      </div>
    );
  }
}

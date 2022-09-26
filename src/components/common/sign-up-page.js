import { blue, green } from "@material-ui/core/colors";
import { yellow100 } from "material-ui/styles/colors";
import { red100 } from "material-ui/styles/colors";
import { white } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import React, { Component } from "react";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../common/Navigations/ManagementNav";

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
    onSubmit(e) {
        e.preventDefault();

        window.location = `/login`


    }


    render() {
        return (
            <div class="ui two column   grid ">
                <div style={{ background: '#DCDFFF', height: '100vh', marginTop: '1.3vh', marginLeft: '0vh' }} class="column">

                    <div style={{ background: white, height: '86vh', marginLeft: '22.5vh', marginTop: '6vh', width: '80vh' }} class="column">
                        <div style={{ background: white, height: '82vh', marginLeft: '9vh', width: '60vh' }} class="column">
                            <div class="column">
                                <Image style={{ height: '90px' }} src="https://www.clipartmax.com/png/middle/124-1249120_different-types-of-casino-bonuses-robot-logo.png" /><br></br>
                                <div class="ui label white" style={{ fontSize: '4vh', color: black, marginLeft: '1vh' }}>
                                    Sign Up
                                </div><br></br><br></br>
                                <div class="ui image" style={{ fontSize: '2vh', marginLeft: '4vh' }}>
                                    See Your Growth By Using STEK And Get Support From Us
                                </div><br></br><br></br><br></br>
                                <center> <button style={{ width: '50vh' }} class="ui google plus button">
                                    <i class="google plus icon"></i>
                                    Sign Up With Google
                                </button></center>
                                <br></br>
                                <div class="separator">
                                    <div class="line"></div>
                                    <h5 style={{ marginTop: '15px' }}>or Sign Up with Email</h5>
                                    <div class="line"></div>
                                </div>
                                <form class="ui form" onSubmit={this.onSubmit}>
                                    <div class="field">
                                        <label style={{ marginLeft: '4vh' }}>Name*</label>
                                        <center> <input style={{ width: '50vh' }} type="text" name="name" placeholder="shehan"></input></center>
                                    </div>
                                    <div class="field">
                                        <label style={{ marginLeft: '4vh' }}>Email*</label>
                                        <center>   <input style={{ width: '50vh' }} type="text" name="email" placeholder="Last Name"></input></center>
                                    </div>
                                    <div class="field">
                                        <label style={{ marginLeft: '4vh' }}>Pasword*</label>
                                        <center>   <input style={{ width: '50vh' }} type="password" name="password" placeholder="Last Name"></input></center>
                                    </div>
                                    <div class="field">
                                        <div class="ui checkbox">
                                            <input type="checkbox" tabindex="0" class="hidden"></input>
                                            <label style={{ marginLeft: '4vh', whiteSpace: 'nowrap' }}>I agree to the Terms &  Conditions</label>

                                        </div>
                                    </div>
                                    <center> <button type='submit'  style={{ width: '50vh' }} class="ui primary button">
                                        Sign Up
                                    </button></center>
                                </form>
                                <h4 style={{ marginLeft: '4vh' }}>Already Have an Account ?  <a class="item" href="/login">
                                    Sign In
                                </a></h4><br></br>
                                <h4 style={{ marginLeft: '1vh' }}>@2022 STEK All rights reserved</h4>

                            </div>



                        </div>

                    </div>
                </div>
                <div style={{ background: '#DCDFFF', height: '100vh', marginLeft: '0vh', marginTop: '1.3vh' }} class="column">
                    <div style={{ background: '#DCDFFF', marginLeft: '-1.2vh', marginTop: '1.3vh' }} class="column">
                        <Image style={{ height: '86vh', width: '80vh', marginTop: '6vh' }} src="https://gcdnb.pbrd.co/images/ImNtZCyZBSvA.jpg?o=1" />
                    </div>

                </div>

            </div>
        );
    }
}

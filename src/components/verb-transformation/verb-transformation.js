import { blue, green } from "@material-ui/core/colors";
import { yellow100 } from "material-ui/styles/colors";
import { red100 } from "material-ui/styles/colors";
import { white } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import React, { Component,useEffect } from "react";
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



    onSubmit(e) {
        e.preventDefault();

        window.location = `/enter-sentence`


    }
    render() {
        return (
            <div class="ui two column   grid ">
                <div style={{ height: '100vh', marginTop: '1.3vh', marginLeft: '0vh', width: '23vh' }} class="column">

                    <NavBar />



                </div>
                <div style={{ background: '', height: '100vh', marginLeft: '-15vh', marginTop: '1.3vh', width: '185vh' }} class="column">
                    <div class="ui center aligned basic segment">
                        <div class="ui left icon action input">

                            <div class="ui steps" style={{ marginLeft: '18vh', marginTop: '10vh' }}>
                                <div class="step">
                                    <i class=" active info   icon"></i>
                                    <div class="content">
                                        <div class="title">Introduction</div>
                                        <div class="description">Introduction To The Verb Transformation</div>
                                    </div>
                                </div>
                                <div class="disabled step">
                                    <i class="keyboard  icon"></i>
                                    <div class="content">
                                        <div class="title">Sentence</div>
                                        <div class="description">Enter The Sentence Required </div>
                                    </div>
                                </div>
                                <div class="disabled step">
                                    <i class="filter icon"></i>
                                    <div class="content">
                                        <div class="title">Select Verb</div>
                                        <div class="description">Select Required Verb Tense </div>
                                    </div>
                                </div>
                                <div class="disabled step">
                                    <i class="eye icon"></i>
                                    <div class="content">
                                        <div class="title">Output</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class=" horizontal divider">

                        </div><br></br>
                        <div class="ui segment" style={{ width: '100vh', marginLeft: '48.5vh' }}>
                            <h1>Welcome To Verb Transformation By STEK</h1><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <form class="ui form" onSubmit={this.onSubmit}>
                                
                           
                            <button class="ui right labeled icon button">
                                <i class="right arrow icon"></i>
                                Next
                            </button>
                            </form>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

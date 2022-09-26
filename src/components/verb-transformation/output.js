import { blue, green } from "@material-ui/core/colors";
import { yellow100 } from "material-ui/styles/colors";
import { red100 } from "material-ui/styles/colors";
import { white } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import React, { Component } from "react";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import NavBar from "../common/Navigations/common-nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
            Output: ""
        };
    }
    componentDidMount() {



        let BaseURl = process.env.REACT_APP_APIURL + "/TransformVerbs"
        console.log(BaseURl)

        axios.get(BaseURl)
            .then(res => {
                const data = res.data;
                console.log(res["data"])
                if (res["data"] == "Invalid") {
                    toast.error('Invalid Options Selected', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });


                } else {
                    this.setState({
                        Output: res["data"],
                    });
                    toast.success('Verb Transformation Sucessfull', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

            })




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
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div style={{ background: '', height: '100vh', marginLeft: '-15vh', marginTop: '1.3vh', width: '185vh' }} class="column">
                    <div class="ui center aligned basic segment">
                        <div class="ui left icon action input">

                            <div class="ui steps" style={{ marginLeft: '18vh', marginTop: '10vh' }}>
                                <div class="step">
                                    <i class=" info  disabled icon"></i>
                                    <div class="content">
                                        <div class="title">Introduction</div>
                                        <div class="description">Introduction To The Verb Transformation</div>
                                    </div>
                                </div>
                                <div class=" disabled step">
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
                                <div class="active step">
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

                            <h1>Output Generated Using STEK Verb Transformation</h1>
                            <br></br><br></br>
                            <div style={{ width: "70%" }} class="ui right labeled left icon input">
                                <i class="book icon"></i>
                                <input type="text" value={this.state.Output} placeholder=".."></input>
                                <a class="ui tag label black">
                                    Output
                                </a>
                            </div><br></br><br></br><br></br>
                            <p style={{ color: "red" }}>*This Output Was Generated Using STEK Verb Transformation</p>

                            <p style={{ color: "red" }}>*The Verb Transformation Algorithm Was Tested For A Set Of Inputs And The Accuracy Will Be Changed According To Gramatical Errors</p>
                            <p style={{ color: "red" }}>*Thank You For Using STEK Verb Trasnformion. </p><br></br>
                            <form class="ui form" onSubmit={this.onSubmit}>
                                <button class="ui right labeled icon button">
                                    <i class="right arrow icon"></i>
                                    Change Another Sentence
                                </button>
                            </form>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

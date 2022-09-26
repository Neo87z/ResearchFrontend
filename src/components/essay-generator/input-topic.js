import { blue, green } from "@material-ui/core/colors";
import { yellow100 } from "material-ui/styles/colors";
import { red100 } from "material-ui/styles/colors";
import { white } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import React, { Component } from "react";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import Verbtrasnform from "../../services/essay-selected-sentence";
import NavBar from "../common/Navigations/common-nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SuplierName: "",
            SuplierAddress: "",
            SuplierContactNumber: "",
            SuplierAccountNumber: "",
            ContactNumber: "",
            Sentence: "",
            submitted: false,
        };
    }


    onChnageAccountNumber = (e) => {

        this.setState({

            Sentence: e.target.value

        });
    };

    onSubmit = (e) => {

        e.preventDefault();
        let Item = {
            SelectedTopic: this.state.Sentence
        }

        


        console.log("dataa", Item);
        Verbtrasnform.create(Item)
            .then(() => {
                toast.error(' Please Select Verb Tense To Change!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });



        window.location = `/essay-output`

    };
    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }




    render() {
        return (
            <div class="ui two column   grid ">
                <div style={{ height: '100vh', marginTop: '1.3vh', marginLeft: '0vh', width: '23vh' }} class="column">

                    <NavBar />



                </div>
                <ToastContainer

                />
                <div style={{ background: '', height: '100vh', marginLeft: '-15vh', marginTop: '1.3vh', width: '185vh' }} class="column">
                    <div class="ui center aligned basic segment">
                        <div class="ui left icon action input">

                            <div class="ui steps" style={{ marginLeft: '18vh', marginTop: '10vh' }}>
                                <div class="step">
                                    <i class=" disabled info   icon"></i>
                                    <div class="content">
                                        <div class="title">Introduction</div>
                                        <div class="description">Introduction To The Essay Generation </div>
                                    </div>
                                </div>
                                <div class="active step">
                                    <i class="keyboard  icon"></i>
                                    <div class="content">
                                        <div class="title">Input Topic</div>
                                        <div class="description">Enter The Topic You Want To Generate</div>
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
                            <h1>Enter The Topic You Want To Generate An Essay</h1><br></br><br></br>

                            <div class="ui right labeled left icon input">
                                <i class="book icon"></i>
                                <input style={{width:'700px'}}type="text"
                                    value={this.state.Sentence}
                                    onChange={this.onChnageAccountNumber}
                                        
                                    placeholder="..."></input>
                                <a class="ui tag label black">
                                    Enter Topic
                                </a>
                            </div><br></br><br></br><br></br><br></br>
                            <p style={{ color: "red" }}>*Please Enter A Part Of The Essay That You Need Generated and Make Sure The Sentence You Entered Is Gramatical Correct </p>

                            <p style={{ color: "red" }}>*The Accuracy Of The Generated Topic Will Be Subjected To Gramatical Correction Of The Sentence </p>


                            <p style={{ color: "red" }}>*Example :- Sri Lanka Is The Indian Ocean</p><br></br>
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

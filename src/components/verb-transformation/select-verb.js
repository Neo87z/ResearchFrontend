import { blue, green } from "@material-ui/core/colors";
import { yellow100 } from "material-ui/styles/colors";
import { red100 } from "material-ui/styles/colors";
import { white } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import React, { Component } from "react";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import Verbtrasnform from "../../services/selected.verbddata";
import NavBar from "../common/Navigations/common-nav";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class LoginPage extends Component {

    constructor(props) {

        super(props);

        this.state = {
            options: [],
            Code: '',
            Ammount: '',
            name: '',
            size: '',
            categories: [],
            Status: '',
            bgColor: '#DDDDDD',
            bgColorSP: '#DDDDDD',

            bgFuture: '#DDDDDD',

            bgCpPast: '#DDDDDD',
            bgCPpresent: '#DDDDDD',
            bgCPFuture: '#DDDDDD',

            ContinoudPast: false,
            ContinoudPresent: false,
            ContinoudFuture: false,

            targetbgColorSP: '#DDDDDD',

            targetbgFuture: '#DDDDDD',

            targetbgCpPast: '#DDDDDD',
            targetbgCPpresent: '#DDDDDD',
            targetbgCPFuture: '#DDDDDD',

            targetContinoudPast: false,
            targetContinoudPresent: false,
            targetContinoudFuture: false,

            targetsimplePast: false,
            targetsimplePresent: false,
            targetsimpleFuture: false,



            bgColorPresentPerfect: '#DDDDDD',
            bgColorPastPerfect: '#DDDDDD',
            bgColorContonousPresent: '#DDDDDD',
            bgColorPastPerfectINT: '#DDDDDD',
            bgColorPastPrectContoINT: '#DDDDDD',
            bgColorPerfectContinous: '#DDDDDD',
            bgColorPastPerfectContinous: '#DDDDDD',
            bgColorContinousPastINT: '#DDDDDD',
            bgColorPresentperfectINT: '#DDDDDD',
            bgColorConitnousPastINT: '#DDDDDD',


            PresentPerfect: false,
            PastPerfect: false,
            ContonousPresent: false,
            PastPerfectINT: false,
            PastPrectContoINT: false,

            PerfectContinous: false,
            PastPerfectContinous: false,
            ContinousPastINT: false,
            PresentperfectINT: false,
            ConitnousPastINT: false,

            targetbgFutureTargetedPastPerfect: '#DDDDDD',
            targetbgFutureTargtedPastPerfectContonus: '#DDDDDD',
            targetbgFutureTragrgtedFurePerfedt: '#DDDDDD',
            targetbgFutureTargtedContonusPresntINT: '#DDDDDD',
            targetbgFutureTargetedContinousFutreINT: '#DDDDDD',
            targetbgFutureTargtedPresentPereftint: '#DDDDDD',
            targetbgFutureTargtedPastPerfteConotnouisInt: '#DDDDDD',
            targetbgFutureTargytedPresntPerfetcContonousINt: '#DDDDDD',
            targetbgFutureTargtedPresenPerfect: '#DDDDDD',
            targetbgFutureTargtedPerfectContinous: '#DDDDDD',
            targetbgFutureTargtedContnouspresntFute: '#DDDDDD',
            targetbgFutureTargtedtContonpisPastINT: '#DDDDDD',
            targetbgFutureTargtedtPastpefetINt: '#DDDDDD',
            targetbgFutureTargtedtFuturepefectInt: '#DDDDDD',
            targetbgFutureTargtedtContnoisPerfectInt: '#DDDDDD',

            TargetedPastPerfect: false,
            TargtedPastPerfectContonus: false,
            TragrgtedFurePerfedt: false,
            TargtedContonusPresntINT: false,
            TargetedContinousFutreINT: false,

            TargtedPresentPereftint: false,

            TargtedPastPerfteConotnouisInt: false,

            TargytedPresntPerfetcContonousINt: false,

            TargtedPresenPerfect: false,

            TargtedPerfectContinous: false,

            TargtedContnouspresntFute: false,

            TargtedtContonpisPastINT: false,

            TargtedtPastpefetINt: false,

            TargtedtFuturepefectInt: false,

            TargtedtContnoisPerfectInt: false







        };
    }





    Alert = (e) => {

    }
    componentDidMount() {






        toast.info('Sentence Saved Sucesffuly!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    onSubmit = (e) => {
        e.preventDefault();
        let choice = ""
        if (this.state.ContinoudPast == true) {
            choice = "ContinousPast"

        } else if (this.state.ContinoudPresent == true) {
            choice = "ContinousPresent"

        } else if (this.state.PresentPerfect == true) {
            choice = "PresentPerfect"

        }
        else if (this.state.PastPerfect == true) {
            choice = "PastPerfect"

        }
        else if (this.state.ContonousPresent == true) {
            choice = "PresentContinousING"


        }
        else if (this.state.PastPerfectINT == true) {
            choice = "PastPerfectING"



        }
        else if (this.state.PastPrectContoINT == true) {
            choice = "PastPerfectContinousING"



        }
        else if (this.state.PerfectContinous == true) {
            choice = "PresentPerfectContinous"


        }
        else if (this.state.PastPerfectContinous == true) {
            choice = "PastPerfectContinous"

        }
        else if (this.state.ContinousPastINT == true) {
            choice = "PastContinousING"

        }
        else if (this.state.PresentperfectINT == true) {
            choice = "PresentPerfectING"

        }
        else if (this.state.ConitnousPastINT == true) {
            choice = "PresentPerfectING"

        }
        else if (this.state.ContinoudFuture == true) {
            choice = "FutureContinous"

        } else if (this.state.simplePast == true) {
            choice = "SimplePast"

        } else if (this.state.simplePresent == true) {
            choice = "SimplePresent"

        } else if (this.state.simpleFuture == true) {
            choice = "SimpleFuture"

        } else {
            toast.error(' Please Select Current Verb!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            toast.error(' Please Select Verb Tense To Change!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }








        let TargetVerb = " "


        if (this.state.targetContinoudPast == true) {
            TargetVerb = "ContinousPast"

        }
        else if (this.state.targetContinoudPresent == true) {
            TargetVerb = "ContinousPresent"
        } else if (this.state.TargetedPastPerfect == true) {
            TargetVerb = "PastPerfect"
        } else if (this.state.TargtedPastPerfectContonus == true) {
            TargetVerb = "PastPerfectContinous"
        } else if (this.state.TragrgtedFurePerfedt == true) {
            TargetVerb = "FuturePerfect"
        } else if (this.state.TargtedContonusPresntINT == true) {
            TargetVerb = "PresentContinousING"
        } else if (this.state.TargetedContinousFutreINT == true) {
            TargetVerb = "FutureContinousING"
        } else if (this.state.TargtedPresentPereftint == true) {
            TargetVerb = "PresentPerfectING"
        } else if (this.state.TargtedPastPerfteConotnouisInt == true) {
            TargetVerb = "PastPerfectContinousING"
        } else if (this.state.TargytedPresntPerfetcContonousINt == true) {
            TargetVerb = "PresentPerfectContinousING"
        }
        else if (this.state.TargtedPresenPerfect == true) {
            TargetVerb = "PresentPerfect"
        } else if (this.state.TargtedPerfectContinous == true) {
            TargetVerb = "PresentPerfectContinous"
        } else if (this.state.TargtedContnouspresntFute == true) {
            TargetVerb = "FutureContinous"
        }
        else if (this.state.TargtedContnouspresntFute == true) {
            TargetVerb = "FutureContinous"

        } else if (this.state.TargtedtContonpisPastINT == true) {
            TargetVerb = "PastContinousING"
        } else if (this.state.TargtedtPastpefetINt == true) {
            TargetVerb = "PastPerfectING"
        }
        else if (this.state.TargtedtFuturepefectInt == true) {
            TargetVerb = "FuturePerfectING"
        } else if (this.state.TargtedtContnoisPerfectInt == true) {
            TargetVerb = "CPastContinousING"


        } else if (this.state.targetContinoudFuture == true) {
            TargetVerb = "ContinousFuture"

        } else if (this.state.targetsimplePast == true) {
            TargetVerb = "SimplePast"

        } else if (this.state.targetsimplePresent == true) {
            TargetVerb = "SimplePresent"

        } else if (this.state.targetsimpleFuture == true) {
            TargetVerb = "SimpleFuture"
        } else {
            toast.error(' Please Select Verb Tense To Change!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        let Item = {
            PrevVerb: choice,
            TargetVrb: TargetVerb
        }
        console.log("dataa", Item);
        Verbtrasnform.create(Item)
            .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });


        window.location = `/output-sentence`


    }
    selectContnousPastInt = () => {

        if (this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.ConitnousPastINT == false) {
                this.setState({
                    bgColorConitnousPastINT: '#05C3DD',
                    ConitnousPastINT: true
                });

            } else {
                this.setState({

                    bgColorConitnousPastINT: '#DDDDDD',
                    ConitnousPastINT: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };


    selectPresntPerfect = () => {

        if (this.state.ConitnousPastINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.PresentperfectINT == false) {
                this.setState({
                    bgColorPresentperfectINT: '#05C3DD',
                    PresentperfectINT: true
                });

            } else {
                this.setState({

                    bgColorPresentperfectINT: '#DDDDDD',
                    PresentperfectINT: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };

    SelectContinousPast = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.ContinousPastINT == false) {
                this.setState({
                    bgColorContinousPastINT: '#05C3DD',
                    ContinousPastINT: true
                });

            } else {
                this.setState({

                    bgColorContinousPastINT: '#DDDDDD',
                    ContinousPastINT: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };

    SelectPContinous = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.PastPerfectContinous == false) {
                this.setState({
                    bgColorPastPerfectContinous: '#05C3DD',
                    PastPerfectContinous: true
                });

            } else {
                this.setState({

                    bgColorPastPerfectContinous: '#DDDDDD',
                    PastPerfectContinous: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };



    selectPerfectContinous = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.PerfectContinous == false) {
                this.setState({
                    bgColorPerfectContinous: '#05C3DD',
                    PerfectContinous: true
                });

            } else {
                this.setState({

                    bgColorPerfectContinous: '#DDDDDD',
                    PerfectContinous: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };


    selectPerfecyContINT = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.PastPrectContoINT == false) {
                this.setState({
                    bgColorPastPrectContoINT: '#05C3DD',
                    PastPrectContoINT: true
                });

            } else {
                this.setState({

                    bgColorPastPrectContoINT: '#DDDDDD',
                    PastPrectContoINT: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };



    SelectPastPerfectInt = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.PastPerfectINT == false) {
                this.setState({
                    bgColorPastPerfectINT: '#05C3DD',
                    PastPerfectINT: true
                });

            } else {
                this.setState({

                    bgColorPastPerfectINT: '#DDDDDD',
                    PastPerfectINT: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };



    SelectContinousPresent = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.ContonousPresent == false) {
                this.setState({
                    bgColorContonousPresent: '#05C3DD',
                    ContonousPresent: true
                });

            } else {
                this.setState({

                    bgColorContonousPresent: '#DDDDDD',
                    ContonousPresent: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };



    SelectpastPerfect = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PresentPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.PastPerfect == false) {
                this.setState({
                    bgColorPastPerfect: '#05C3DD',
                    PastPerfect: true
                });

            } else {
                this.setState({

                    bgColorPastPerfect: '#DDDDDD',
                    PastPerfect: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };



    selectPresentPerfect = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.simplePast != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.PresentPerfect == false) {
                this.setState({
                    bgColorPresentPerfect: '#05C3DD',
                    PresentPerfect: true
                });

            } else {
                this.setState({

                    bgColorPresentPerfect: '#DDDDDD',
                    PresentPerfect: false

                });
            }
            console.log(this.state.PresentPerfect)
        }
    };



    updateTutorial = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
            if (this.state.simplePast == false) {
                this.setState({
                    bgColor: '#05C3DD',
                    simplePast: true
                });

            } else {
                this.setState({

                    bgColor: '#DDDDDD',
                    simplePast: false

                });
            }
            console.log(this.state.simplePast)
        }
    };

    SlelectSimplePresent = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simpleFuture != true) {
            if (this.state.simplePresent == false) {
                this.setState({
                    bgColorSP: '#05C3DD',
                    simplePresent: true
                });

            } else {
                this.setState({

                    bgColorSP: '#DDDDDD',
                    simplePresent: false

                });
            }
            console.log(this.state.simplePast)
        }
    };
    SeleectSimpleFuture = () => {
        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simplePresent != true) {
            if (this.state.simpleFuture == false) {
                this.setState({
                    bgFuture: '#05C3DD',
                    simpleFuture: true
                });

            } else {
                this.setState({

                    bgFuture: '#DDDDDD',
                    simpleFuture: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    selectContinousPast = () => {

        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simpleFuture != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simplePresent != true) {
            if (this.state.ContinoudPast == false) {
                this.setState({
                    bgCpPast: '#05C3DD',
                    ContinoudPast: true
                });

            } else {
                this.setState({

                    bgCpPast: '#DDDDDD',
                    ContinoudPast: false

                });
            }
            console.log(this.state.simplePast)
        }
    };

    SelectContinoudPresent = () => {
        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simpleFuture != true && this.state.ContinoudPast != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simplePresent != true) {
            if (this.state.ContinoudPresent == false) {
                this.setState({
                    bgCPpresent: '#05C3DD',
                    ContinoudPresent: true
                });

            } else {
                this.setState({

                    bgCPpresent: '#DDDDDD',
                    ContinoudPresent: false

                });
            }
            console.log(this.state.simplePast)
        }
    };

    SelectContinoudFuture = () => {
        if (this.state.ConitnousPastINT != true && this.state.PresentperfectINT != true && this.state.ContinousPastINT != true && this.state.PastPerfectContinous != true && this.state.PerfectContinous != true && this.state.PastPrectContoINT != true && this.state.PastPerfectINT != true && this.state.ContonousPresent != true && this.state.PastPerfect != true && this.state.PresentPerfect != true && this.state.simpleFuture != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.simplePast != true && this.state.simplePresent != true) {
            if (this.state.ContinoudFuture == false) {
                this.setState({
                    bgCPFuture: '#05C3DD',
                    ContinoudFuture: true
                });

            } else {
                this.setState({

                    bgCPFuture: '#DDDDDD',
                    ContinoudFuture: false

                });
            }
        }
        console.log(this.state.simplePast)

    };




    TargetupdateTutorial = () => {

        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePresent != true && this.state.targetsimpleFuture != true) {
            if (this.state.targetsimplePast == false) {
                this.setState({
                    targetbgColor: '#ff5c33',
                    targetsimplePast: true
                });

            } else {
                this.setState({

                    targetbgColor: '#DDDDDD',
                    targetsimplePast: false

                });
            }
            console.log(this.state.targetsimplePast)
        }
    };

    TargetSlelectSimplePresent = () => {

        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimpleFuture != true) {
            if (this.state.targetsimplePresent == false) {
                this.setState({
                    targetbgColorSP: '#ff5c33',
                    targetsimplePresent: true
                });

            } else {
                this.setState({

                    targetbgColorSP: '#DDDDDD',
                    targetsimplePresent: false

                });
            }
            console.log(this.state.targetsimplePast)
        }
    };
    TargetSeleectSimpleFuture = () => {
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.targetsimpleFuture == false) {
                this.setState({
                    targetbgFuture: '#ff5c33',
                    targetsimpleFuture: true
                });

            } else {
                this.setState({

                    targetbgFuture: '#DDDDDD',
                    targetsimpleFuture: false

                });
            }
        }
        console.log(this.state.targetsimplePast)

    };

    TargetelectContinousPast = () => {

        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.targetContinoudPast == false) {
                this.setState({
                    targetbgCpPast: '#ff5c33',
                    targetContinoudPast: true
                });

            } else {
                this.setState({

                    targetbgCpPast: '#DDDDDD',
                    targetContinoudPast: false

                });
            }
            console.log(this.state.targetsimplePast)
        }
    };

    TargetSelectContinoudPresent = () => {
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.targetContinoudPresent == false) {
                this.setState({
                    targetbgCPpresent: '#ff5c33',
                    targetContinoudPresent: true
                });

            } else {
                this.setState({

                    targetbgCPpresent: '#DDDDDD',
                    targetContinoudPresent: false

                });
            }
            console.log(this.state.targetsimplePast)
        }
    };

    TargetSelectContinoudFuture = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.targetContinoudFuture == false) {
                this.setState({
                    targetbgCPFuture: '#ff5c33',
                    targetContinoudFuture: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgCPFuture: '#DDDDDD',
                    targetContinoudFuture: false

                });
            }
        }
        console.log(this.state.simplePast)

    };
    TargetedPastPerfedt = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargetedPastPerfect == false) {
                this.setState({
                    targetbgFutureTargetedPastPerfect: '#ff5c33',
                    TargetedPastPerfect: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargetedPastPerfect: '#DDDDDD',
                    TargetedPastPerfect: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargetPastPerContinous = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedPastPerfectContonus == false) {
                this.setState({
                    targetbgFutureTargtedPastPerfectContonus: '#ff5c33',
                    TargtedPastPerfectContonus: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedPastPerfectContonus: '#DDDDDD',
                    TargtedPastPerfectContonus: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargetedFutruePerfect = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TragrgtedFurePerfedt == false) {
                this.setState({
                    targetbgFutureTragrgtedFurePerfedt: '#ff5c33',
                    TragrgtedFurePerfedt: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTragrgtedFurePerfedt: '#DDDDDD',
                    TragrgtedFurePerfedt: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargettedContinousPresntINT = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedContonusPresntINT == false) {
                this.setState({
                    targetbgFutureTargtedContonusPresntINT: '#ff5c33',
                    TargtedContonusPresntINT: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedContonusPresntINT: '#DDDDDD',
                    TargtedContonusPresntINT: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargetedContinousFuteINt = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargetedContinousFutreINT == false) {
                this.setState({
                    targetbgFutureTargetedContinousFutreINT: '#ff5c33',
                    TargetedContinousFutreINT: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargetedContinousFutreINT: '#DDDDDD',
                    TargetedContinousFutreINT: false

                });
            }
        }
        console.log(this.state.simplePast)

    };


    TargtedPresntPerfectINT = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedPresentPereftint == false) {
                this.setState({
                    targetbgFutureTargtedPresentPereftint: '#ff5c33',
                    TargtedPresentPereftint: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedPresentPereftint: '#DDDDDD',
                    TargtedPresentPereftint: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargetedPastPerfectINT = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedPastPerfteConotnouisInt == false) {
                this.setState({
                    targetbgFutureTargtedPastPerfteConotnouisInt: '#ff5c33',
                    TargtedPastPerfteConotnouisInt: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedPastPerfteConotnouisInt: '#DDDDDD',
                    TargtedPastPerfteConotnouisInt: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargetdPresentPerfiectINT = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargytedPresntPerfetcContonousINt == false) {
                this.setState({
                    targetbgFutureTargytedPresntPerfetcContonousINt: '#ff5c33',
                    TargytedPresntPerfetcContonousINt: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargytedPresntPerfetcContonousINt: '#DDDDDD',
                    TargytedPresntPerfetcContonousINt: false

                });
            }
        }
        console.log(this.state.simplePast)

    };


    TargtedPResentPErfect = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedPresenPerfect == false) {
                this.setState({
                    targetbgFutureTargtedPresenPerfect: '#ff5c33',
                    TargtedPresenPerfect: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedPresenPerfect: '#DDDDDD',
                    TargtedPresenPerfect: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargtedPerfectCOntionous = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedPerfectContinous == false) {
                this.setState({
                    targetbgFutureTargtedPerfectContinous: '#ff5c33',
                    TargtedPerfectContinous: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedPerfectContinous: '#DDDDDD',
                    TargtedPerfectContinous: false

                });
            }
        }
        console.log(this.state.simplePast)

    };


    TargtedContonousPerfect = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedContnouspresntFute == false) {
                this.setState({
                    targetbgFutureTargtedContnouspresntFute: '#ff5c33',
                    TargtedContnouspresntFute: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedContnouspresntFute: '#DDDDDD',
                    TargtedContnouspresntFute: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargtedContonousPast = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedtContonpisPastINT == false) {
                this.setState({
                    targetbgFutureTargtedtContonpisPastINT: '#ff5c33',
                    TargtedtContonpisPastINT: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedtContonpisPastINT: '#DDDDDD',
                    TargtedtContonpisPastINT: false

                });
            }
        }
        console.log(this.state.simplePast)

    };


    TargetdPastPerfect = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtFuturepefectInt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedtPastpefetINt == false) {
                this.setState({
                    targetbgFutureTargtedtPastpefetINt: '#ff5c33',
                    TargtedtPastpefetINt: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedtPastpefetINt: '#DDDDDD',
                    TargtedtPastpefetINt: false

                });
            }
        }
        console.log(this.state.simplePast)

    };


    TargtedFuturePereft = () => {
        console.log("tyetststst")
        if (this.state.TargtedtContnoisPerfectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedtFuturepefectInt == false) {
                this.setState({
                    targetbgFutureTargtedtFuturepefectInt: '#ff5c33',
                    TargtedtFuturepefectInt: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedtFuturepefectInt: '#DDDDDD',
                    TargtedtFuturepefectInt: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

    TargtedContinousPastINT = () => {
        console.log("tyetststst")
        if (this.state.TargtedtFuturepefectInt != true && this.state.TargtedtPastpefetINt != true && this.state.TargtedtContonpisPastINT != true && this.state.TargtedContnouspresntFute != true && this.state.TargtedPerfectContinous != true && this.state.TargtedPresenPerfect != true && this.state.TargytedPresntPerfetcContonousINt != true && this.state.TargtedPastPerfteConotnouisInt != true && this.state.TargtedPresentPereftint != true && this.state.TargetedContinousFutreINT != true && this.state.TargtedContonusPresntINT != true && this.state.TragrgtedFurePerfedt != true && this.state.TargtedPastPerfectContonus != true && this.state.TargetedPastPerfect != true && this.state.targetContinoudFuture != true && this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
            if (this.state.TargtedtContnoisPerfectInt == false) {
                this.setState({
                    targetbgFutureTargtedtContnoisPerfectInt: '#ff5c33',
                    TargtedtContnoisPerfectInt: true
                });

            } else {
                console.log("tyetstsssssssssstst")
                this.setState({


                    targetbgFutureTargtedtContnoisPerfectInt: '#DDDDDD',
                    TargtedtContnoisPerfectInt: false

                });
            }
        }
        console.log(this.state.simplePast)

    };

























    changeColor() {
        console.log("test22")
        this.setState({ black: !this.state.black })
    }

    render() {
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
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
                            <div class="ui basic modal">
                                <div class="ui icon header">
                                    <i class="archive icon"></i>
                                    Archive Old Messages
                                </div>
                                <div class="content">
                                    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                                </div>
                                <div class="actions">
                                    <div class="ui red basic cancel inverted button">
                                        <i class="remove icon"></i>
                                        No
                                    </div>
                                    <div class="ui green ok inverted button">
                                        <i class="checkmark icon"></i>
                                        Yes
                                    </div>
                                </div>
                            </div>

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
                                <div class="active step">
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
                            <b><h1>Verb List</h1></b>

                            <div class="ui  segment">
                                <div class="ui two column very relaxed  grid">
                                    <div class="column">
                                        <div class="ui form">
                                            <p>Change From</p>
                                            <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                                <button style={{ backgroundColor: this.state.bgColor }} onClick={this.updateTutorial} class="ui button">Simple Past</button><br></br>
                                                <button style={{ backgroundColor: this.state.bgColorSP }} onClick={this.SlelectSimplePresent} class="ui button">Simple Present</button><br></br>
                                                <button style={{ backgroundColor: this.state.bgFuture }} onClick={this.SeleectSimpleFuture} class="ui button">Simple Future</button><br></br>

                                            </div>

                                            <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                                <button style={{ backgroundColor: this.state.bgCpPast }} onClick={this.selectContinousPast} class="ui button">Past Continous </button><br></br>
                                                <button style={{ backgroundColor: this.state.bgCPpresent }} onClick={this.SelectContinoudPresent} class="ui button">Present Continous </button><br></br>
                                                <button style={{ backgroundColor: this.state.bgCPFuture }} onClick={this.SelectContinoudFuture} class="ui button">Future Continous </button><br></br>

                                            </div>

                                        </div>



                                        <div class="ui form">

                                            <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.bgColorPresentPerfect }} onClick={this.selectPresentPerfect} class="ui button">Present Perfect</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.bgColorPastPerfect }} onClick={this.SelectpastPerfect} class="ui button">Past Perfect</button><br></br>

                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.bgColorContonousPresent }} onClick={this.SelectContinousPresent} class="ui button"> Present Continos(INT)</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.bgColorPastPerfectINT }} onClick={this.SelectPastPerfectInt} class="ui button">Past Perfect(INT)</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.bgColorPastPrectContoINT }} onClick={this.selectPerfecyContINT} class="ui button">Past Perfect C(INT)</button><br></br>




                                            </div>

                                            <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.bgColorPerfectContinous }} onClick={this.selectPerfectContinous} class="ui button">Perfect Continous</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.bgColorPastPerfectContinous }} onClick={this.SelectPContinous} class="ui button">Past P Continous</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.bgColorContinousPastINT }} onClick={this.SelectContinousPast} class="ui button">Continous  Past(INT)</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.bgColorPresentperfectINT }} onClick={this.selectPresntPerfect} class="ui button">Present Perfect(INT)</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.bgColorConitnousPastINT }} onClick={this.selectContnousPastInt} class="ui button">Continous Past(INT)</button><br></br>





                                            </div>


                                        </div>
                                    </div><br></br>
                                    <div class="middle aligned column" style={{ marginTop: '0.5vw' }}>
                                        <p>Change To</p>
                                        <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                            <button style={{ backgroundColor: this.state.targetbgColor }} onClick={this.TargetupdateTutorial} class="ui button">Simple Past</button><br></br>
                                            <button style={{ backgroundColor: this.state.targetbgColorSP }} onClick={this.TargetSlelectSimplePresent} class="ui button">Simple Present</button><br></br>
                                            <button style={{ backgroundColor: this.state.targetbgFuture }} onClick={this.TargetSeleectSimpleFuture} class="ui button">Simple Future</button><br></br>

                                        </div>

                                        <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                            <button style={{ backgroundColor: this.state.targetbgCpPast }} onClick={this.TargetelectContinousPast} class="ui button">Past Continous </button><br></br>
                                            <button style={{ backgroundColor: this.state.targetbgCPpresent }} onClick={this.TargetSelectContinoudPresent} class="ui button">Present Continous </button><br></br>
                                            <button style={{ backgroundColor: this.state.targetbgCPFuture }} onClick={this.TargetSelectContinoudFuture} class="ui button">Future Continous </button><br></br>

                                        </div>
                                        <div class="ui form">

                                            <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTargetedPastPerfect }} onClick={this.TargetedPastPerfedt} class="ui button">Past Perfect</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTargtedPastPerfectContonus }} onClick={this.TargetPastPerContinous} class="ui button">Past P Continous</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTragrgtedFurePerfedt }} onClick={this.TargetedFutruePerfect} class="ui button">Future Perfect</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTargtedContonusPresntINT }} onClick={this.TargettedContinousPresntINT} class="ui button"> Present Continous(INT)</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTargetedContinousFutreINT }} onClick={this.TargetedContinousFuteINt} class="ui button">Future Continous (INT)</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTargtedPresentPereftint }} onClick={this.TargtedPresntPerfectINT} class="ui button">Present Perfect(INT)</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTargtedPastPerfteConotnouisInt }} onClick={this.TargetedPastPerfectINT} class="ui button">Past Perfect C(INT)</button><br></br>
                                                <button style={{ width: '78%', marginLeft: '17%', backgroundColor: this.state.targetbgFutureTargytedPresntPerfetcContonousINt }} onClick={this.TargetdPresentPerfiectINT} class="ui button">Present Perfect C(INT)</button><br></br>

                                            </div>

                                            <div class="ui vertical buttons" style={{ marginRight: '1vw' }}>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.targetbgFutureTargtedPresenPerfect }} onClick={this.TargtedPResentPErfect} class="ui button">Present Perfect</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.targetbgFutureTargtedPerfectContinous }} onClick={this.TargtedPerfectCOntionous} class="ui button">Perfect Continous</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.targetbgFutureTargtedContnouspresntFute }} onClick={this.TargtedContonousPerfect} class="ui button">Future Continous P </button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.targetbgFutureTargtedtContonpisPastINT }} onClick={this.TargtedContonousPast} class="ui button">Continous Past(INT)</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.targetbgFutureTargtedtPastpefetINt }} onClick={this.TargetdPastPerfect} class="ui button">Past Perfect(INT)</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.targetbgFutureTargtedtFuturepefectInt }} onClick={this.TargtedFuturePereft} class="ui button">Future Perfect(INT)</button><br></br>
                                                <button style={{ width: '94%', marginLeft: '-12%', backgroundColor: this.state.targetbgFutureTargtedtContnoisPerfectInt }} onClick={this.TargtedContinousPastINT} class="ui button">Continous P(INT)</button><br></br>


                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="ui vertical divider">
                                    Change To
                                </div>
                            </div>

                            <br></br>

                            <p style={{ color: "red" }}>*Please select the current tense of the sentence provided</p>

                            <p style={{ color: "red" }}>*If you choose an incorrect current tense the output will not be accurate</p><br></br>
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

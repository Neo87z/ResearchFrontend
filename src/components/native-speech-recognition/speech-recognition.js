import { blue, green } from "@material-ui/core/colors";
import { yellow100 } from "material-ui/styles/colors";
import { red100 } from "material-ui/styles/colors";
import { white } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import React, { Component, useEffect } from "react";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import vmsg from "vmsg";
import ReactWaves from '@dschoon/react-waves';
import NavBar from "../common/Navigations/common-nav";
import africa from '../native-speech-recognition/records/africa.mp3';
import { Transform } from "material-ui-icons";
import randomSentence from "random-sentence";
import RecordService from "../../services/recording-data";
import axios from 'axios';
import getFirebase from "../../firebase"
import * as firebase from 'firebase';
import { storage } from "../../firebase";
import WordData from "../../services/word-data";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

var randomWords = require('random-words');



const recorder = new vmsg.Recorder({
    wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"

});

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
            isLoading: false,
            isRecording: false,
            recordings: [],
            isLoading: false,

            isRecording: false,
            recordings: [],
            hasRecords: false,
            count: 0,
            Sentence: '',
            dataXX: [],
            RecordingCount: 0,
            finish: false,
            RecordingOne: false,
            RecordingTwo: false,
            RercordingThree: false,
            RecordingFour: false,
            RecordingFive: false,
            eavluvate: false,


            WordOneStatus: false,
            WordTwoStatus: false,
            WordThreeStatus: false,
            WordFourStatus: false,
            WordFiveStatus: false,
            FinalDoneXX: false

        };
    }


    async componentDidMount() {


        //this.ChangeWordTwo()

        //this.ChangeWordThree()
        //this.ChangeWordFour()
        //this.ChjnageWordFive()
        this.ChangeWordOne()
        if (this.state.RecordingOne == false) {
            this.state.finish = true
        }
        let BaseURl = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

        console.log(BaseURl)
        //   const StorageRef=ref(firebase,'/files/test');
        axios.get(BaseURl)
            .then(res => {
                let dataQuotes = res.data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNum];
                this.setState({
                    dataXX: res.data.quotes,
                });
                console.log(randomWords())
                let dataaa = randomWords()
                console.log("woird" + dataaa)
                this.setState({
                    Sentence: dataaa,
                });
                return

            })


    }

    GenNewSentece = e => {


        this.state.finish = true
        if (this.state.RecordingOne == false) {
            this.state.finish = true
        }

        if (this.state.RecordingCount == 4) {
            this.state.finish = true

        }









        if (this.state.WordOneStatus) {
            this.ChangeWordOne()
            this.ChangeWordTwo()
        } else {
            if (this.state.WordTwoStatus) {
                this.ChangeWordTwo()
                this.ChangeWordThree()
            } else {
                if (this.state.WordThreeStatus) {
                    this.ChangeWordThree()
                    this.ChangeWordFour()

                } else {
                    if (this.state.WordFourStatus) {
                        this.ChangeWordFour()
                        this.ChjnageWordFive()

                    }
                }
            }
        }


        this.state.RecordingCount = this.state.RecordingCount + 1
        let dataQuotes = this.state.dataXX;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        console.log(randomQuote)
        this.setState({
            Sentence: randomWords()
        });

    }



    EnablePLay = e => {
        // firebase = getFirebase();
        // const ref = useRef(undefined);



    }

    async handleUpload() {

        const firebase = firebase.getFirebase();
        const storage = firebase.storage();
        const storageRef = storage.ref("images");
        const uploadedFile = this.state.recordings[this.state.count - 1]
        try {
            await storageRef.child('uploadedFile.name').put(uploadedFile);
            alert("Successfully uploaded picture!");
        } catch (error) {
            console.log("error", error);
        }



    }



    UploadButton = e => {
        this.setState({ hasRecords: !this.state.hasRecords });
    }

    record = async () => {


        this.setState({ isLoading: true });

        let x = this.state.count
        x = x + 1

        if (this.state.isRecording) {
            const blob = await recorder.stopRecording();
            // const file = e.target.files[0];

            if (this.state.RecordingCount == 0) {
                this.state.RecordingOne = true
                this.state.finish = false
                const storageRef = firebase.storage().ref()
                const fileRef = storageRef.child("SentenceRecording0")
                fileRef.put(blob).then(() => {
                    console.log("Uploaded a file")
                })
                let Word = {

                    Word1: this.state.Sentence
                }
                console.log("dataa", Word);
                WordData.create(Word)
                    .then(() => {
                        console.log("Created new item successfully!");
                        this.setState({
                            submitted: true,
                        });
                    })
                    .catch((e) => {
                        console.log(e);
                    });

            } else {
                if (this.state.RecordingCount == 1) {
                    this.state.RecordingTwo = true
                    this.state.finish = false
                    const storageRef = firebase.storage().ref()
                    const fileRef = storageRef.child("SentenceRecording1")
                    fileRef.put(blob).then(() => {
                        console.log("Uploaded a file")
                    })
                    let Word = {

                        Word2: this.state.Sentence
                    }
                    console.log("dataa", Word);
                    WordData.create(Word)
                        .then(() => {
                            console.log("Created new item successfully!");
                            this.setState({
                                submitted: true,
                            });
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                } else {
                    if (this.state.RecordingCount == 2) {
                        this.state.RercordingThree = true
                        this.state.finish = false
                        const storageRef = firebase.storage().ref()
                        const fileRef = storageRef.child("SentenceRecording2")
                        fileRef.put(blob).then(() => {
                            console.log("Uploaded a file")
                        })
                        let Word = {

                            Word3: this.state.Sentence
                        }
                        console.log("dataa", Word);
                        WordData.create(Word)
                            .then(() => {
                                console.log("Created new item successfully!");
                                this.setState({
                                    submitted: true,
                                });
                            })
                            .catch((e) => {
                                console.log(e);
                            });
                    } else {
                        if (this.state.RecordingCount == 3) {
                            this.state.RecordingFour = true
                            this.state.finish = false
                            const storageRef = firebase.storage().ref()
                            const fileRef = storageRef.child("SentenceRecording3")
                            fileRef.put(blob).then(() => {
                                console.log("Uploaded a file")
                            })
                            let Word = {

                                Word4: this.state.Sentence
                            }
                            console.log("dataa", Word);
                            WordData.create(Word)
                                .then(() => {
                                    console.log("Created new item successfully!");
                                    this.setState({
                                        submitted: true,
                                    });
                                })
                                .catch((e) => {
                                    console.log(e);
                                });
                        } else {
                            this.state.RecordingFive = true
                            this.state.finish = true
                            this.state.eavluvate = true
                            this.ChjnageWordFive()
                            this.ChnageFinal()
                            const storageRef = firebase.storage().ref()
                            const fileRef = storageRef.child("SentenceRecording4")
                            fileRef.put(blob).then(() => {
                                console.log("Uploaded a file")
                            })
                            let Word = {

                                Word5: this.state.Sentence
                            }
                            console.log("dataa", Word);
                            WordData.create(Word)
                                .then(() => {
                                    console.log("Created new item successfully!");
                                    this.setState({
                                        submitted: true,
                                    });
                                })
                                .catch((e) => {
                                    console.log(e);
                                });

                        }
                    }
                }
            }


            this.setState({
                isLoading: false,
                isRecording: false,
                recordings: this.state.recordings.concat(URL.createObjectURL(blob))
            });
            this.setState({ hasRecords: true });
            this.setState({ count: x });

        } else {
            try {

                await recorder.initAudio();
                await recorder.initWorker();

                recorder.startRecording();

                this.setState({ isLoading: false, isRecording: true });
            } catch (e) {
                console.error(e);
                this.setState({ isLoading: false });
            }
        }
    };


    async onSubmit(e) {
        e.preventDefault();

        window.location = `/speech-evaluvate`




    }

    ChangeWordOne = e => {
        this.setState({ WordOneStatus: !this.state.WordOneStatus });
    }

    ChangeWordTwo = e => {
        this.setState({ WordTwoStatus: !this.state.WordTwoStatus });
    }

    ChangeWordThree = e => {
        this.setState({ WordThreeStatus: !this.state.WordThreeStatus });
    }
    ChangeWordFour = e => {
        this.setState({ WordFourStatus: !this.state.WordFourStatus });
    }
    ChjnageWordFive = e => {
        this.setState({ WordFiveStatus: !this.state.WordFiveStatus });
    }

    ChnageFinal = e => {
        this.setState({ FinalDoneXX: !this.state.FinalDoneXX });
    }

    onChange = (e) => {

        console.log(this.state.recordings[0])

        const file = e.target.files[0];
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child("Test")
        fileRef.put(this.state.recordings[0]).then(() => {
            console.log("Uploaded a file")
        })
    }




    render() {


        const xx = this.state.WordOneStatus;
        const y = this.state.WordTwoStatus;
        const z = this.state.WordThreeStatus;
        const k = this.state.WordFourStatus;
        const m = this.state.WordFiveStatus;

        const finalX = this.state.FinalDoneXX;


        let btn_class = this.state.black ? "blackButton" : "whiteButton";
        const x = this.state.hasRecords;
        const { isLoading, isRecording, recordings } = this.state;
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
                                        <div class="description">Introduction To The Speech Recognition</div>
                                    </div>
                                </div>
                                <div class=" active step">
                                    <i class="microphone  icon"></i>
                                    <div class="content">
                                        <div class="title">Record</div>
                                        <div class="description">Record The Given Words </div>
                                    </div>
                                </div>
                                <div class=" disabled step">
                                    <i class="filter icon"></i>
                                    <div class="content">
                                        <div class="title">Evaluvate</div>
                                        <div class="description">Select Required Verb Tense </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class=" horizontal divider">

                        </div><br></br>
                        <div class="ui segment" style={{ width: '100vh', marginLeft: '48.5vh' }}>
                            <b><h1>Record Speech</h1></b>

                            <div class="ui  segment">
                                <div class="ui two column very relaxed  grid">
                                    <div class="column">

                                        {
                                            xx && (
                                                <div class="ui mini vertical steps" style={{ marginLeft: '-28vh', }}>
                                                    <div class="active mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 1</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 2</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 3</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 4</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 5</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            )


                                        }



                                        {
                                            y && (
                                                <div class="ui mini vertical steps" style={{ marginLeft: '-28vh', }}>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 1</div>
                                                        </div>
                                                    </div>
                                                    <div class="active mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 2</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 3</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 4</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 5</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            )


                                        }



                                        {
                                            z && (
                                                <div class="ui mini vertical steps" style={{ marginLeft: '-28vh', }}>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 1</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 2</div>
                                                        </div>
                                                    </div>
                                                    <div class="active mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 3</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 4</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 5</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            )


                                        }


                                        {
                                            k && (
                                                <div class="ui mini vertical steps" style={{ marginLeft: '-28vh', }}>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 1</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 2</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 3</div>
                                                        </div>
                                                    </div>
                                                    <div class="active mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 4</div>
                                                        </div>
                                                    </div>
                                                    <div class="disabled mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 5</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            )


                                        }


                                        {
                                            m && (
                                                <div class="ui mini vertical steps" style={{ marginLeft: '-28vh', }}>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 1</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 2</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 3</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 4</div>
                                                        </div>
                                                    </div>
                                                    <div class="active mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 5</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            )


                                        }

                                        {
                                            finalX && (
                                                <div class="ui mini vertical steps" style={{ marginLeft: '-28vh', }}>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 1</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 2</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 3</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone   icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 4</div>
                                                        </div>
                                                    </div>
                                                    <div class="completed mini step">
                                                        <i class="mini microphone slash  icon"></i>
                                                        <div class="content">
                                                            <div class="title">Word 5</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            )


                                        }






                                        <div style={{ height: '120px' }}><center> <h5 style={{
                                            marginLeft: '15vh',

                                            marginTop: '-40%',
                                        }}>{this.state.Sentence}</h5></center></div>
                                        <center> <button class="ui  twitter icon button" style={{ height: '3.6vh', marginLeft: '4.2vh', marginTop: '1.2vh' }} disabled={this.state.finish} onClick={this.GenNewSentece}>
                                            <i class="pencil alternate icon"></i>
                                            Next
                                        </button></center>
                                    </div><br></br>
                                    <div class="middle aligned column" >

                                        <div className={'container example'}>
                                            <center>

                                            </center>
                                            <div style={{ marginLeft: '-50' }}>
                                                <ReactWaves
                                                    audioFile={recordings[this.state.count - 1]}
                                                    className='react-waves'
                                                    options={{
                                                        barHeight: 2,
                                                        cursorWidth: 0,
                                                        height: 200,
                                                        hideScrollbar: true,
                                                        progressColor: '#EC407A',
                                                        responsive: true,
                                                        waveColor: '#D1D6DA',
                                                    }}
                                                    volume={1}
                                                    zoom={1}
                                                    playing={this.state.playing}
                                                    pos={this.state.pos}
                                                    onPosChange={this.onPosChange}
                                                    onSeek={this.onSeek}
                                                /></div>
                                        </div>

                                        <React.Fragment>
                                            <div class="ui icon buttons">
                                                <button class="ui circular twitter icon button" style={{ height: '3.6vh', marginTop: '1.2vh' }} disabled={isLoading} onClick={this.record}>
                                                    <i class="microphone icon"></i>
                                                    {isRecording ? "Stop" : "Record"}

                                                </button>


                                                {
                                                    x && (<div className="play button"
                                                        onClick={() => { this.setState({ playing: !this.state.playing }) }}
                                                        style={{ left: '0' }}
                                                    >
                                                        {!this.state.playing ? <button class="ui button">
                                                            <i class="play icon"></i>
                                                            Play
                                                        </button> : <button class="ui button">
                                                            <i class="pause icon"></i>
                                                            Pause
                                                        </button>}
                                                    </div>)


                                                }

                                            </div>





                                        </React.Fragment>

                                    </div>


                                </div>
                                <div class="ui vertical divider">

                                </div>
                            </div>

                            <br></br>

                            <p style={{ color: "red" }}>*For Best Results Please Speak With A Clear Voice</p>

                            <p style={{ color: "red" }}>*The Score Will Be Affected By background Noise, Please Record In A Suitable Place</p>

                            <p style={{ color: "red" }}>*Complete All The Five Recording For The Most Accurate Results</p>

                            <p style={{ color: "red" }}>*Make Sure You Click Next When After You Record The Word Successfully</p>




                            <br></br>
                            <form class="ui form" onSubmit={this.onSubmit}>
                                <button class="ui right labeled icon button" disabled={!this.state.eavluvate}>
                                    <i class="right arrow icon"></i>
                                    Evaluvate

                                </button>

                            </form>


                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

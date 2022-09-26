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
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactAudioPlayer from 'react-audio-player';

import Audio from '../native-speech-recognition/records/africa.mp3'
import CoolPlayer from 'react-cool-music-player'
import WordData from "../../services/word-data";
import { BoxLoading } from 'react-loadingg';

var randomWords = require('random-words');



const recorder = new vmsg.Recorder({
    wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"

});

export default class LoginPage extends Component {


    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
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
            recordings2: [],
            recordings3: [],
            recordings4: [],
            recordings5: [],
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
            MainLoader: true,
            FinalDoneXX: false,
            modal1Open: false,
            modal2Open: false,
            modal3Open: false,
            modal4Open: false,
            modal5Open: false,

            word1: "Test",
            word2: "Test",
            word3: "Test",
            word4: "Test",
            word5: "Test",


            ProgressColor1: "success",
            ProgressColor2: "success",
            ProgressColor3: "success",
            ProgressColor4: "success",
            ProgressColor4: "success",
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,

            Confidence: "20",
            Accuracy: "20",
            Clarity: "20",
            OverAllScore: "20",

            recordingsPractice: [],



            Confidence: "56",
            Accuracy: "56",
            Clarity: "56",
            OverAllScore: "56",
            Score1: "90",
            Score2: "56",
            Score3: "56",
            Score4: "56",
            Score5: "56",
            IPA1: "56",
            IPA2: "56",
            IPA3: "56",
            IPA4: "56",
            IPA5: "56",
            IPA1Real: "56",
            IPA2Real: "56",
            IPA3Real: "56",
            IPA4Real: "56",
            IPA5Real: "56",
            SimilarWords: "56",
            SimilarWords2: "56",
            SimilarWords3: "56",
            SimilarWords4: "56",
            SimilarWords5: "56"





        };
    }
    onDataChange(items) {
        let tutorials = [];
        console.log(items + "here")
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            console.log(data)
            if (this.state.word1 == "Test") {
                this.setState({
                    word1: data,
                });

            } else if (this.state.word2 == "Test") {
                this.setState({
                    word2: data,
                });

            } else if (this.state.word3 == "Test") {
                this.setState({
                    word3: data,
                });

            } else if (this.state.word4 == "Test") {
                this.setState({
                    word4: data,
                });

            } else if (this.state.word5 == "Test") {
                this.setState({
                    word5: data,
                });

            }
        });


    }



    async componentDidMount() {




        const storageRef = firebase.storage().ref()
        // const fileRef = storageRef.child("SentenceRecording2")

        storageRef.child('SentenceRecording0').getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    var blob = xhr.response;
                    console.log(blob)
                    this.setState({

                        recordings: this.state.recordings = blob
                    });
                    console.log(this.state.recordings + "Okayuyy")

                };

                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element

            })
            .catch((error) => {
                // Handle any errors
            });



        storageRef.child('SentenceRecording1').getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    var blob = xhr.response;
                    console.log(blob)
                    this.setState({

                        recordings2: this.state.recordings2 = blob
                    });
                    console.log(this.state.recordings + "Okayuyy")

                };

                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element

            })
            .catch((error) => {
                // Handle any errors
            });


        storageRef.child('SentenceRecording2').getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    var blob = xhr.response;
                    console.log(blob)
                    this.setState({

                        recordings3: this.state.recordings3 = blob
                    });
                    console.log(this.state.recordings + "Okayuyy")

                };

                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element

            })
            .catch((error) => {
                // Handle any errors
            });


        storageRef.child('SentenceRecording3').getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    var blob = xhr.response;
                    console.log(blob)
                    this.setState({

                        recordings4: this.state.recordings4 = blob
                    });
                    console.log(this.state.recordings + "Okayuyy")

                };

                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element

            })
            .catch((error) => {
                // Handle any errors
            });



        storageRef.child('SentenceRecording4').getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    var blob = xhr.response;
                    console.log(blob)
                    this.setState({

                        recordings5: this.state.recordings5 = blob
                    });
                    console.log(this.state.recordings[4] + "Done")

                };

                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element

            })
            .catch((error) => {
                // Handle any errors
            });


        console.log(this.state.recordings + "Finall")
        WordData.getAll().on("value", this.onDataChange);

        console.log(this.state.tutorials)


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

        let BaseURlX = process.env.REACT_APP_APIURL + "/Shean1Last1donefinal122Score1"
     
            axios.get(BaseURlX)
                .then(res => {
                    const data = res.data;
                    console.log(res)
                    console.log(res["data"]["Accuracy"])

                    this.setState({
                        Accuracy: res["data"]["Accuracy"],
                    });

                    this.setState({
                        Confidence: res["data"]["Confidence"],
                    });

                    this.setState({
                        Clarity: res["data"]["Clarity"],
                    });


                    this.setState({
                        OverAllScore: res["data"]["OverAllScore"],
                    });


                    this.setState({
                        Score1: res["data"]["Score1"],
                    });


                    this.setState({
                        Score2: res["data"]["Score2"],
                    });

                    this.setState({
                        Score3: res["data"]["Score3"],
                    });

                    this.setState({
                        Score4: res["data"]["Score4"],
                    });

                    this.setState({
                        Score5: res["data"]["Score5"],
                    });

                    this.setState({
                        IPA1: res["data"]["IPA1"],
                    });

                    this.setState({
                        IPA2: res["data"]["IPA2"],
                    });

                    this.setState({
                        IPA3: res["data"]["IPA3"],
                    });

                    this.setState({
                        IPA4: res["data"]["IPA4"],
                    });
                    this.setState({
                        IPA5: res["data"]["IPA5"],
                    });


                    this.setState({
                        IPA1Real: res["data"]["IPA1Real"],
                    });

                    this.setState({
                        IPA2Real: res["data"]["IPA2Real"],
                    });

                    this.setState({
                        IPA3Real: res["data"]["IPA3Real"],
                    });

                    this.setState({
                        IPA4Real: res["data"]["IPA4Real"],
                    });
                    this.setState({
                        IPA5Real: res["data"]["IPA5Real"],
                    });

                    this.setState({
                        SimilarWords: res["data"]["SimilarWords1"],
                    });
                    this.setState({
                        SimilarWords2: res["data"]["SimilarWords2"],
                    });
                    this.setState({
                        SimilarWords3: res["data"]["SimilarWords3"],
                    });
                    this.setState({
                        SimilarWords4: res["data"]["SimilarWords4"],
                    });
                    this.setState({
                        SimilarWords5: res["data"]["SimilarWords5"],
                        
                    });this.SetProgressColor()
                    









                })
            

        setTimeout(() => {
            this.ChangeMainLoader()
            console.log("World!");
            this.SetProgressColor();

        }, 12000);



        this.SetProgressColor()


    }

    SetProgressColor = e => {
        if (parseInt(this.state.Score1) < 30) {
            this.state.ProgressColor1 = "danger"
        } else if (parseInt(this.state.Score1) < 55) {
            this.state.ProgressColor1 = "warning"
        } else if (parseInt(this.state.Score1) < 75) {
            this.state.ProgressColor1 = "info"
        } else {
            this.state.ProgressColor1 = "success"
        }


        if (parseInt(this.state.Score2) < 30) {
            this.state.ProgressColor2 = "danger"
        } else if (parseInt(this.state.Score2) < 55) {
            this.state.ProgressColor2 = "warning"
        } else if (parseInt(this.state.Score2) < 75) {
            this.state.ProgressColor2 = "info"
        } else {
            this.state.ProgressColor2 = "success"
        }


        if (parseInt(this.state.Score3) < 30) {
            this.state.ProgressColor3 = "danger"
        } else if (parseInt(this.state.Score3) < 55) {
            this.state.ProgressColor3 = "warning"
        } else if (parseInt(this.state.Score3) < 75) {
            this.state.ProgressColor3 = "info"
        } else {
            this.state.ProgressColor3 = "success"
        }

        if (parseInt(this.state.Score4) < 30) {
            this.state.ProgressColor4 = "danger"
        } else if (parseInt(this.state.Score4) < 55) {
            this.state.ProgressColor4 = "warning"
        } else if (parseInt(this.state.Score4) < 75) {
            this.state.ProgressColor4 = "info"
        } else {
            this.state.ProgressColor4 = "success"
        }

        if (parseInt(this.state.Score1) < 30) {
            this.state.ProgressColor5 = "danger"
        } else if (parseInt(this.state.Score5) < 55) {
            this.state.ProgressColor5 = "warning"
        } else if (parseInt(this.state.Score5) < 75) {
            this.state.ProgressColor5 = "info"
        } else {
            this.state.ProgressColor5 = "success"
        }
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

        window.location = `/speech-Rec`



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

    ChangeMainLoader = e => {
        this.setState({ MainLoader: !this.state.MainLoader });
    }

    ChnageFinal = e => {
        this.setState({ FinalDoneXX: !this.state.FinalDoneXX });
    }

    OpenModal1 = e => {
        this.setState({ modal1Open: !this.state.modal1Open });
    }

    CloseModal2 = e => {
        this.setState({ modal2Open: !this.state.modal2Open });
    }

    CloseModal3 = e => {
        this.setState({ modal3Open: !this.state.modal3Open });
    }

    CloseModal4 = e => {
        this.setState({ modal4Open: !this.state.modal4Open });
    }

    CloseModal5 = e => {
        this.setState({ modal5Open: !this.state.modal5Open });
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

        const data = [
            {
                src: 'http://audio-cdn/Shawn Mendes - Señorita.mp3',
                artist: 'Señorita',
                name: 'Shawn Mendes',
                img: 'http://audio-avatar-cdn/Señorita.jpg',
                id: '66575568423123',
            },
            {
                src: 'http://audio-cdn/MIKA - Lollipop.mp3',
                artist: 'Mika',
                name: 'Lollipop',
                img: 'http://audio-avatar-cdn/mika.jpg',
                id: '66575568425354321',
            },
        ]

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-42%, -39%)',
            width: 900,
            height: 630,
            bgcolor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };

        const xx = this.state.WordOneStatus;
        const y = this.state.WordTwoStatus;
        const z = this.state.WordThreeStatus;
        const k = this.state.WordFourStatus;
        const m = this.state.WordFiveStatus;
        const MainLoader = this.state.MainLoader;

        const finalX = this.state.FinalDoneXX;


        let btn_class = this.state.black ? "blackButton" : "whiteButton";
        const x = this.state.hasRecords;
        const { isLoading, isRecording, recordings, recordings1, recordings2, recordings3, recordings4, recordings5 } = this.state;
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
                                <div class="disbaled step">
                                    <i class=" disbaled info   icon"></i>
                                    <div class="content">
                                        <div class="title">Introduction</div>
                                        <div class="description">Introduction To The Speech Recognition</div>
                                    </div>
                                </div>
                                <div class=" disabled step">
                                    <i class="microphone  icon"></i>
                                    <div class="content">
                                        <div class="title">Record</div>
                                        <div class="description">Record The Given Words </div>
                                    </div>
                                </div>
                                <div class=" acttive step">
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



                            <h1>Evaluvate</h1>
                            <div class="ui segment">
                                {

                                    MainLoader && (
                                        <div class="ui active inverted dimmer" style={{ background: 'white' }}>
                                            <div class="ui text loader">Please Wait While STEK Generate Your Results    </div>
                                        </div>

                                    )

                                }


                                <div class="ui four statistics">
                                    <div class="red statistic">
                                        <div class="value">
                                            {this.state.Confidence}%
                                        </div>
                                        <div class="label">
                                            Confidence
                                        </div>
                                    </div>
                                    <div class="  red statistic">
                                        <div class="value">
                                            {this.state.Accuracy}%
                                        </div>
                                        <div class="label">
                                            Accuracy
                                        </div>
                                    </div>

                                    <div class="red statistic">
                                        <div class="value">
                                            <i class="undo icon"></i>  {this.state.Clarity}%
                                        </div>
                                        <div class="label">
                                            Clarity
                                        </div>
                                    </div>
                                    <div class="red statistic">
                                        <div class="value">
                                            <i class="undo icon"></i> {this.state.OverAllScore}%
                                        </div>
                                        <div class="label">
                                            Overall Score
                                        </div>
                                    </div>
                                </div>


                                <div class="ui  segment">

                                    <div class="ui three column very relaxed  grid">

                                        <div class="middle aligned column">
                                            <b><h3 style={{ transform: 'translateY(-47px)' }}>Word</h3></b>
                                            <div>
                                                <h5 style={{ transform: 'translateY(-24px)' }}>{this.state.word1}</h5>
                                                <h5 style={{ transform: 'translateY(-14px)' }}>{this.state.word2}</h5>
                                                <h5 style={{ transform: 'translateY(-5px)' }}>{this.state.word3}</h5>
                                                <h5 style={{ transform: 'translateY(10px)' }} >{this.state.word4}</h5>
                                                <h5 style={{ transform: 'translateY(21px)' }}>{this.state.word5}</h5>




                                            </div>
                                        </div><br></br>
                                        <div class="middle aligned column" >
                                            <h3>Score</h3>

                                            <ProgressBar style={{ height: '36px' }} now={this.state.Score1} variant={this.state.ProgressColor1} label={`${this.state.Score1}%`} /><br></br>
                                            <ProgressBar style={{ height: '36px' }} now={this.state.Score2} variant={this.state.ProgressColor2} label={`${this.state.Score2}%`} /><br></br>
                                            <ProgressBar style={{ height: '36px' }} now={this.state.Score3} variant={this.state.ProgressColor3} label={`${this.state.Score3}%`} /><br></br>
                                            <ProgressBar style={{ height: '36px' }} now={this.state.Score4} variant={this.state.ProgressColor4} label={`${this.state.Score4}%`} /><br></br>
                                            <ProgressBar style={{ height: '36px' }} now={this.state.Score5} variant={this.state.ProgressColor5} label={`${this.state.Score5}%`} /><br></br>


                                        </div>
                                        <div class="middle aligned column" style={{ marginTop: '-23px' }}>
                                            <h3>Listen</h3>
                                            <div onClick={this.OpenModal1} class="ui labeled button" tabindex="0">
                                                <div class="ui blue button">
                                                    <i class="heart icon"></i> Listen
                                                </div>
                                                <a class="ui basic blue left pointing label">
                                                    More Info
                                                </a>
                                            </div><br></br><br></br>
                                            <div onClick={this.CloseModal2} class="ui labeled button" tabindex="0">
                                                <div class="ui blue button">
                                                    <i class="heart icon"></i> Listen
                                                </div>
                                                <a class="ui basic blue left pointing label">
                                                    More Info
                                                </a>
                                            </div><br></br><br></br>
                                            <div onClick={this.CloseModal3} class="ui labeled button" tabindex="0">
                                                <div class="ui blue button">
                                                    <i class="heart icon"></i> Listen
                                                </div>
                                                <a class="ui basic blue left pointing label">
                                                    More Info
                                                </a>
                                            </div><br></br><br></br>
                                            <div onClick={this.CloseModal4} class="ui labeled button" tabindex="0">
                                                <div class="ui blue button">
                                                    <i class="heart icon"></i> Listen
                                                </div>
                                                <a class="ui basic blue left pointing label">
                                                    More Info
                                                </a>
                                            </div><br></br><br></br>
                                            <div onClick={this.CloseModal5} class="ui labeled button" tabindex="0">
                                                <div class="ui blue button">
                                                    <i class="heart icon"></i> Listen
                                                </div>
                                                <a class="ui basic blue left pointing label">
                                                    More Info
                                                </a>
                                            </div>



                                        </div>

                                    </div>


                                </div>



                                <div>

                                    <Modal
                                        open={this.state.modal1Open}


                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <div class="ui basic">
                                                <i onClick={this.OpenModal1} class="close icon"></i>


                                                <center> <h3>Word 1 Pronounciation Information</h3></center>

                                                <div class="ui  segment">

                                                    <div class="ui two column very relaxed  grid">

                                                        <div class="column">
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty</a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.word1}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA1Real}</b>

                                                                            </div>

                                                                        </div>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            Words With Similar Pronounciation
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.SimilarWords}</b>

                                                                            </div>

                                                                        </div>
                                                                        <center> <button class="positive ui button" >Listen To Correct Pronounciation</button></center>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty Results</a>


                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word1}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA1}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>
                                                                        <center> <button class="positive ui button" >Not Matching, Lets Try Again</button></center>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div>






                                                            </div>
                                                        </div><br></br>
                                                        <div class="middle aligned column" >
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Your Pronounciation </a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Listen To Your Recoding
                                                                            <br></br>


                                                                        </div>
                                                                        <div style={{ marginLeft: '-50', height: '113px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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

                                                                                <div className="play button"
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
                                                                                </div>
                                                                            </div>





                                                                        </React.Fragment>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Practice</a>


                                                                        <br></br>

                                                                        <div style={{ marginLeft: '-50', height: '90px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings[this.state.count - 1]}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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
                                                            </div>



                                                        </div>

                                                    </div>
                                                    <div class="ui vertical divider" >

                                                    </div>
                                                </div>



                                            </div>
                                        </Box>

                                    </Modal>
                                </div>




                                <div>

                                    <Modal
                                        open={this.state.modal2Open}


                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <div class="ui basic">
                                                <i onClick={this.CloseModal2} class="close icon"></i>


                                                <center> <h3>Word 2 Pronounciation Information</h3></center>

                                                <div class="ui  segment">

                                                    <div class="ui two column very relaxed  grid">

                                                        <div class="column">
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty</a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.word2}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA2Real}</b>

                                                                            </div>

                                                                        </div>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            Words With Similar Pronounciation
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.SimilarWords2}</b>

                                                                            </div>

                                                                        </div>
                                                                        <center> <button class="positive ui button" >Listen To Correct Pronounciation</button></center>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty Results</a>


                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word2}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA2}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>
                                                                        <center> <button class="positive ui button" >Not Matching, Lets Try Again</button></center>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div>






                                                            </div>
                                                        </div><br></br>
                                                        <div class="middle aligned column" >
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Your Pronounciation </a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Listen To Your Recoding
                                                                            <br></br>


                                                                        </div>
                                                                        <div style={{ marginLeft: '-50', height: '113px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings2}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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

                                                                                <div className="play button"
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
                                                                                </div>
                                                                            </div>





                                                                        </React.Fragment>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Practice</a>


                                                                        <br></br>

                                                                        <div style={{ marginLeft: '-50', height: '90px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings[this.state.count - 1]}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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
                                                            </div>



                                                        </div>

                                                    </div>
                                                    <div class="ui vertical divider" >

                                                    </div>
                                                </div>



                                            </div>
                                        </Box>

                                    </Modal>
                                </div>












                                <div>

                                    <Modal
                                        open={this.state.modal3Open}


                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <div class="ui basic">
                                                <i onClick={this.CloseModal3} class="close icon"></i>


                                                <center> <h3>Word 3 Pronounciation Information</h3></center>

                                                <div class="ui  segment">

                                                    <div class="ui two column very relaxed  grid">

                                                        <div class="column">
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty</a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word3}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA3Real}</b>

                                                                            </div>

                                                                        </div>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            Words With Similar Pronounciation
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.SimilarWords3}</b>

                                                                            </div>

                                                                        </div>
                                                                        <center> <button class="positive ui button" >Listen To Correct Pronounciation</button></center>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty Results</a>


                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word3}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA3}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>
                                                                        <center> <button class="positive ui button" >Not Matching, Lets Try Again</button></center>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div>






                                                            </div>
                                                        </div><br></br>
                                                        <div class="middle aligned column" >
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Your Pronounciation </a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Listen To Your Recoding
                                                                            <br></br>


                                                                        </div>
                                                                        <div style={{ marginLeft: '-50', height: '113px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings3}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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

                                                                                <div className="play button"
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
                                                                                </div>
                                                                            </div>





                                                                        </React.Fragment>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Practice</a>


                                                                        <br></br>

                                                                        <div style={{ marginLeft: '-50', height: '90px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings[this.state.count - 1]}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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
                                                            </div>



                                                        </div>

                                                    </div>
                                                    <div class="ui vertical divider" >

                                                    </div>
                                                </div>



                                            </div>
                                        </Box>

                                    </Modal>
                                </div>







                                <div>

                                    <Modal
                                        open={this.state.modal4Open}


                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <div class="ui basic">
                                                <i onClick={this.CloseModal4} class="close icon"></i>


                                                <center> <h3>Word 4 Pronounciation Information</h3></center>

                                                <div class="ui  segment">

                                                    <div class="ui two column very relaxed  grid">

                                                        <div class="column">
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty</a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word4}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.IPA4Real}</b>

                                                                            </div>

                                                                        </div>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            Words With Similar Pronounciation
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.SimilarWords4}</b>

                                                                            </div>

                                                                        </div>
                                                                        <center> <button class="positive ui button" >Listen To Correct Pronounciation</button></center>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty Results</a>


                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word4}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA4}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>
                                                                        <center> <button class="positive ui button" >Not Matching, Lets Try Again</button></center>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div>






                                                            </div>
                                                        </div><br></br>
                                                        <div class="middle aligned column" >
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Your Pronounciation </a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Listen To Your Recoding
                                                                            <br></br>


                                                                        </div>
                                                                        <div style={{ marginLeft: '-50', height: '113px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings4}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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

                                                                                <div className="play button"
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
                                                                                </div>
                                                                            </div>





                                                                        </React.Fragment>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Practice</a>


                                                                        <br></br>

                                                                        <div style={{ marginLeft: '-50', height: '90px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings[this.state.count - 1]}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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
                                                            </div>



                                                        </div>

                                                    </div>
                                                    <div class="ui vertical divider" >

                                                    </div>
                                                </div>



                                            </div>
                                        </Box>

                                    </Modal>
                                </div>









                                <div>

                                    <Modal
                                        open={this.state.modal5Open}


                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <div class="ui basic">
                                                <i onClick={this.CloseModal5} class="close icon"></i>


                                                <center> <h3>Word 5 Pronounciation Information</h3></center>

                                                <div class="ui  segment">

                                                    <div class="ui two column very relaxed  grid">

                                                        <div class="column">
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty</a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word5}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA5Real}</b>

                                                                            </div>

                                                                        </div>

                                                                        <div style={{ fontSize: '15px', marginTop: '-2px', marginLeft: '-10px' }} class="ui label">
                                                                            Words With Similar Pronounciation
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.SimilarWords5}</b>

                                                                            </div>

                                                                        </div>
                                                                        <center> <button class="positive ui button" >Listen To Correct Pronounciation</button></center>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Activty Results</a>


                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Word To Record
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>   {this.state.word5}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>

                                                                        <div style={{ fontSize: '15px', marginLeft: '-10px' }} class="ui label">
                                                                            I P A Result
                                                                            <br></br>
                                                                            <div style={{ fontSize: '12px' }} class="ui label">
                                                                                <b>  {this.state.IPA5}</b>

                                                                            </div>

                                                                        </div>
                                                                        <br></br>
                                                                        <center> <button class="positive ui button" >Not Matching, Lets Try Again</button></center>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div>






                                                            </div>
                                                        </div><br></br>
                                                        <div class="middle aligned column" >
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Your Pronounciation </a>
                                                                        <br></br>
                                                                        <div style={{ fontSize: '15px', marginTop: '1px', marginLeft: '-10px' }} class="ui label">
                                                                            Listen To Your Recoding
                                                                            <br></br>


                                                                        </div>
                                                                        <div style={{ marginLeft: '-50', height: '113px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings5}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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

                                                                                <div className="play button"
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
                                                                                </div>
                                                                            </div>





                                                                        </React.Fragment>




                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div class="ui one column grid">
                                                                <div class="column">
                                                                    <div class="ui raised segment">
                                                                        <a class="ui red ribbon label">Practice</a>


                                                                        <br></br>

                                                                        <div style={{ marginLeft: '-50', height: '90px', transform: `translate(30px, -17px)` }} >
                                                                            <center>

                                                                            </center>
                                                                            <div >
                                                                                <ReactWaves


                                                                                    audioFile={recordings[this.state.count - 1]}

                                                                                    options={{
                                                                                        barHeight: 2,
                                                                                        cursorWidth: 0,
                                                                                        height: 80,
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
                                                            </div>



                                                        </div>

                                                    </div>
                                                    <div class="ui vertical divider" >

                                                    </div>
                                                </div>



                                            </div>
                                        </Box>

                                    </Modal>
                                </div>









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
            </div>
        );
    }
}

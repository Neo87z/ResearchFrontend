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

      EssayData: "Invalid",
      divcontainer: false,

      OptimizedLoadingStatus: true,
      WithoutOptimzation: true,
      Loader: false,
      EssayData2: "Invalid",
      ResultLoader: true,
      Accuracy:0,
      Relavance:0,
      Response:0


    };
  }

  Alert = (e) => {

  }
  async componentDidMount() {

    let BaseURl = process.env.REACT_APP_APIURL + "/GenerateWithSTEK12"
    let BaseURl2 = process.env.REACT_APP_APIURL + "/GenerateWithoutSTEK"
    console.log(BaseURl)

    const response = await toast.promise(
       axios.get(BaseURl, { name: 'John' }, { timeout: 500 })
         .then(res => {
           const data = res.data;
           console.log(res["data"])
           console.log(data)
           console.log(res)
           if (res["data"] == "Invalid") {
 
 
           } else {
             this.setState({
               EssayData: res["data"],
             });
             this.setState({
              Relavance: data["Relavance"],
            });
            this.setState({
              Response: data["ResponseTime"],
            });
            this.setState({
              Accuracy: data["Accuracy"],
            });
 
 
             this.ChnageOptimziedLoading()
             this.HandleChange()
 
             
 
 
 
 
           }
 
         })
       ,
       {
         pending: 'STEK Generating Essay Draft',
         success: 'Optimzied Essay Draft Generated👌',
         error: 'Promise rejected 🤯'
       }
 
     );
     const response2 = await toast.promise(
       axios.get(BaseURl2)
         .then(res => {
           const data = res.data;
           console.log(res["data"])
           if (res["data"] == "Invalid") {
 
 
           } else {
             this.setState({
               EssayData2: res["data"],
             });
 
 
 
             this.WithoutHandleChange()
             this.WithoutChnageOptimziedLoading()
             setTimeout(() => {
               this.ChangeResultLoader()
               console.log("World!");
 
             }, 2000);
             console.log("Hieere")
             console.log(this.state.EssayData)
           }
 
         })
       ,
       {
         pending: 'GPT-Neo Essay Generator Still Loading',
         success: 'GPT-NEO Essay Draft Generated👌',
         error: 'Promise rejected 🤯'
       }
     );
     console.log(response)
    axios({
      method: "get",
      url: BaseURl,
      timeout: 1000 * 5100, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json"
      },
     
    })
      .then(response => {
        const serverResponse = response.data;
        // do sth ...
      })
      .catch(error => {
        console.log(error);
      });


  }


  onSubmit(e) {
    e.preventDefault();

    window.location = `/input-topic`


  }

  updateTutorial = () => {

    if (this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePresent != true && this.state.simpleFuture != true) {
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

    if (this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simpleFuture != true) {
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
    if (this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simplePresent != true) {
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

    if (this.state.simpleFuture != true && this.state.ContinoudPresent != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simplePresent != true) {
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
    if (this.state.simpleFuture != true && this.state.ContinoudPast != true && this.state.ContinoudFuture != true && this.state.simplePast != true && this.state.simplePresent != true) {
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
    if (this.state.simpleFuture != true && this.state.ContinoudPast != true && this.state.ContinoudPresent != true && this.state.simplePast != true && this.state.simplePresent != true) {
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

    if (this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePresent != true && this.state.targetsimpleFuture != true) {
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

    if (this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimpleFuture != true) {
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
    if (this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
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

    if (this.state.targetsimpleFuture != true && this.state.targetContinoudPresent != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
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
    if (this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudFuture != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
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
    if (this.state.targetsimpleFuture != true && this.state.targetContinoudPast != true && this.state.targetContinoudPresent != true && this.state.targetsimplePast != true && this.state.targetsimplePresent != true) {
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
  HandleChange = e => {
    this.setState({ divcontainer: !this.state.divcontainer });
  }

  ChnageOptimziedLoading = e => {
    this.setState({ OptimizedLoadingStatus: !this.state.OptimizedLoadingStatus });
  }

  WithoutHandleChange = e => {
    this.setState({ Loader: !this.state.Loader });
  }

  WithoutChnageOptimziedLoading = e => {
    this.setState({ WithoutOptimzation: !this.state.WithoutOptimzation });
  }
  ChangeResultLoader = e => {
    this.setState({ ResultLoader: !this.state.ResultLoader });
  }



  changeColor() {
    console.log("test22")
    this.setState({ black: !this.state.black })
  }

  render() {

    const x = this.state.divcontainer;
    const xy = this.state.OptimizedLoadingStatus;

    const z = this.state.Loader
    const zy = this.state.WithoutOptimzation
    const PU = this.state.ResultLoader
    const PU1 = !this.state.ResultLoader




    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
      <div class="ui two column   grid ">

        <div style={{ height: '100vh', marginTop: '1.3vh', marginLeft: '0vh', width: '23vh' }} class="column">

          <NavBar />



        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
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
                  <i class=" disabled info   icon"></i>
                  <div class="content">
                    <div class="title">Introduction</div>
                    <div class="description">Introduction To The Essay Generation </div>
                  </div>
                </div>
                <div class="disabled step">
                  <i class="keyboard  icon"></i>
                  <div class="content">
                    <div class="title">Input Topic</div>
                    <div class="description">Enter The Topic You Want To Generate</div>
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
              <b><h1>Generated Essay Draft</h1></b><br></br><br></br>

              {

                PU && (<div class="ui segment" style={{ marginTop: '-20px', }}>

                  <div class="ui segment">
                    <div class="ui active inverted dimmer" style={{ background: 'white' }}>
                      <div class="ui text loader">Gnerating Results</div>
                    </div>
                    <p></p>


                    <div class="ui four statistics">
                      <div class="green statistic">
                        <div class="value">
                        {this.state.Accuracy}%
                        </div>
                        <div class="label">
                          Accuracy
                        </div>
                      </div>
                      <div class="green statistic">
                        <div class="value">
                        {this.state.Relavance}%
                        </div>
                        <div class="label">
                          Relavance
                        </div>
                      </div>

                      <div class="green statistic">
                        <div class="value">
                          <i class="undo icon"></i>{this.state.Response}S
                        </div>
                        <div class="label">
                          Response Time
                        </div>
                      </div>
                      <div class="green statistic">
                        <div class="text value">
                          Three<br></br>
                          User
                        </div>
                        <div class="label">
                          Generations
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                )

              }
              {

                PU1 && (<div class="ui segment" style={{ marginTop: '-20px', }}>

                  <div class="ui segment">


                    <div class="ui four statistics">
                      <div class="green statistic">
                        <div class="value">
                        {this.state.Accuracy}%
                        </div>
                        <div class="label">
                          Accuracy
                        </div>
                      </div>
                      <div class="green statistic">
                        <div class="value">
                        {this.state.Relavance}%
                        </div>
                        <div class="label">
                          Relavance
                        </div>
                      </div>

                      <div class="green statistic">
                        <div class="value">
                          <i class="undo icon"></i> {this.state.Response}S
                        </div>
                        <div class="label">
                          Response Time
                        </div>
                      </div>
                      <div class="green statistic">
                        <div class="text value">
                          Three<br></br>
                          User
                        </div>
                        <div class="label">
                          Generations
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                )

              }

              <div class="ui  segment">

                <div class="ui two column very relaxed  grid">

                  <div class="column">
                    <p>Optimized With STEK</p>
                    <div>

                      {
                        x && (<div class="ui form">
                          <div class="ui segment">
                            <p></p>
                            <div class="ui active ">
                              <div class="ui loader"></div>

                              <h6 >{this.state.EssayData}.</h6>



                            </div>
                            <div> </div>
                          </div>

                        </div>)


                      }
                      {
                        xy && (<div class="ui segment">
                          <p></p>
                          <div class="ui active dimmer" >
                            <div class="ui loader"></div>

                          </div>
                          <div> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br></div>

                        </div>)
                      }




                    </div>
                  </div><br></br>
                  <div class="middle aligned column" >
                    <p>Without Optimization</p>
                    <div>

                      {
                        z && (<div class="ui form">
                          <div class="ui segment">
                            <p></p>
                            <div class="ui active ">
                              <div class="ui loader"></div>

                              <h6 >{this.state.EssayData2}.</h6>



                            </div>
                            <div> </div>
                          </div>

                        </div>)


                      }
                      {
                        zy && (<div class="ui segment">
                          <p></p>
                          <div class="ui active dimmer" >
                            <div class="ui loader"></div>

                          </div>
                          <div> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br></div>

                        </div>)
                      }
                    </div>


                  </div>

                </div>
                <div class="ui vertical divider" >

                </div>
              </div>

              <br></br>

              <p style={{ color: "red" }}>*Plese Note That This Algorithm Is Still In Test Phase And Thier Are Many More Improvements Ahead</p>

              <p style={{ color: "red" }}>*Please Use This Draft Only To Take An Idea. STEK Will Not Be Liable To Any Way The User Use The Data</p><br></br>
              <form class="ui form" onSubmit={this.onSubmit}>
                <button class="ui right labeled icon button">
                  <i class="right arrow icon"></i>
                  Generate Again
                </button>
              </form>


            </div>
          </div>


        </div>

      </div>
    );
  }
}

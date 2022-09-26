import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'

import 'react-toastify/dist/ReactToastify.css';
import loginPage from "./components/common/login-page";
import SingUp from "./components/common/sign-up-page";
import Home from "./components/common/home-page";
import Essay from "./components/essay-generator/essay-generator";
import Speech from "./components/native-speech-recognition/speech-recognition";
import Verb from "./components/verb-transformation/verb-transformation";
import Sentence from "./components/verb-transformation/enter-sentence";
import SelectVerb from "./components/verb-transformation/select-verb";
import OutputSentence from "./components/verb-transformation/output";
import InputTopic from "./components/essay-generator/input-topic";
import EssayOutpUt from "./components/essay-generator/output";
import SpeechIntro from "./components/native-speech-recognition/speech-recognition-intro";
import SpeechEvaluvate from "./components/native-speech-recognition/speech-recognition-Evaluvate";
class App extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route exact path={["/", "/login"]} component={loginPage} />
          <Route exact path="/sign-up" component={SingUp} />
          <Route exact path="/home" component={Home} />

          <Route exact path="/essay-generator" component={Essay} />
          <Route exact path="/speech-recognition" component={SpeechIntro} />
          <Route exact path="/verb-transformation" component={Verb} />
          <Route exact path="/enter-sentence" component={Sentence} />
          <Route exact path="/select-verb" component={SelectVerb} />
          <Route exact path="/output-sentence" component={OutputSentence} />
          <Route exact path="/input-topic" component={InputTopic} />
          <Route exact path="/essay-output" component={EssayOutpUt} />
          <Route exact path="/speech-Rec" component={Speech} />
          <Route exact path="/speech-evaluvate" component={SpeechEvaluvate} />
          
        </Switch>
      </div>


    );
  }
}

export default App;

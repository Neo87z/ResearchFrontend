import React, { Component } from "react";

import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
export default class AddTutorial extends Component {


    render() {
        return (
            <div >
                <body>
                    <div class="ui visible sidebar   vertical menu" style={{ background: '#e6e6e6', width: '23 vh' }}>
                        <div class="ui container">
                            <br></br>
                            <center> <a class="item">
                                <Image style={{ height: '5vh', width: '10vh' }} src="https://www.clipartmax.com/png/middle/124-1249120_different-types-of-casino-bonuses-robot-logo.png" />

                            </a></center>
                            <br></br>
                            <a class="item">
                                <i class="home icon"></i> Home
                            </a>
                            <br></br>
                            <a class="item" href="/essay-generator">
                                <i class="text width  icon"></i> Essay Generator
                            </a>
                            <br></br>
                            <a class="item" href="/speech-recognition">
                                <i class="microphone  icon"></i> Speech Recognition
                            </a>
                            <br></br>
                            <a class="item">
                                <i class="mail icon"></i> Summerization
                            </a>  <br></br>
                            <a class="item" href="/verb-transformation">
                                <i class="redo  icon"></i> Verb Transformation
                            </a>
                      

                        </div>
                    </div>
                </body>
            </div>
        );
    }
}


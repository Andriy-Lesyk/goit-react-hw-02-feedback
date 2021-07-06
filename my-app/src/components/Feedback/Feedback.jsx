import React, { Component } from 'react'
import { Title, Btn, ContBtn, StatItem, } from "./Feedback.styled"



export default class Feedback extends Component {

    state = {
        qg: 0
    }

    clickGood = () => {
        this.setState(() => {
            this.state.qg += 0.5;
        })
        console.log(this.state.qg)
    }
    render() {
        return (
            <div>
                <Title>Please leave feedback</Title>
                <ContBtn>
                    <Btn onClick={this.clickGood}>Good</Btn>
                    <Btn>Neutral</Btn>
                    <Btn>Bad</Btn>
                </ContBtn>
                <Title>Statistics</Title>

                <StatItem>Good:{this.state.qg}</StatItem>
                <StatItem>Neutral:</StatItem>
                <StatItem>Bad:</StatItem>
                <StatItem>Total:</StatItem>
                <StatItem>Positive feedback:</StatItem>
            </div>
        )
    }
}




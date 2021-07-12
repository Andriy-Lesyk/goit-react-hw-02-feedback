import React from 'react'
import  PropTypes  from "prop-types"
import { Btn, ContBtn } from "../App/App.styled"

function FeedbackOptions({handleGood, handleBad, handleNeutral}) {
    return (
        <div>
            <ContBtn>
                <Btn type="button" onClick={handleGood}>Good</Btn>
                <Btn type="button" onClick={handleNeutral}>Neutral</Btn>
                <Btn type="button" onClick={handleBad}>Bad</Btn>
            </ContBtn>
        </div>
    )
}

FeedbackOptions.propTypes = {
    handleGood: PropTypes.func,
    handleNeutral: PropTypes.func,
    handleBad: PropTypes.func
}

export default FeedbackOptions

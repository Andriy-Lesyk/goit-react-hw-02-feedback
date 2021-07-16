import React from 'react'
import  PropTypes  from "prop-types"
import { Btn, ContBtn } from "../App/App.styled"

function FeedbackOptions({handleFeedback, options}) {
     
  
    return (
        <div>
            <ContBtn>
            {Object.keys(options).map(option=>(
                  <Btn key={option} name={option} onClick={handleFeedback}>{option}</Btn>
              )) } 
            </ContBtn>
        </div>
    )
}

FeedbackOptions.propTypes = {
    handleFeedback: PropTypes.func.isRequired,
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral:PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired
}

export default FeedbackOptions

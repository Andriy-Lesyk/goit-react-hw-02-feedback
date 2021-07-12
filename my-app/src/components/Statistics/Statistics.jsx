import React from 'react'
import PropTypes from "prop-types"
import { Title, StatItem, Stat, Notification } from "../App/App.styled"


function Statistics({ good, neutral, bad, total, positivePercentage, message }) {
    return (
        <div>
            <Title>Statistics</Title>
            {(good !== 0 || bad !== 0 || neutral !== 0) ?
                <Stat>
                    <StatItem>Good: {good}</StatItem>
                    <StatItem>Neutral {neutral}:</StatItem>
                    <StatItem>Bad: {bad}</StatItem>
                    <StatItem>Total: {total}</StatItem>
                    <StatItem>Positive feedback: {positivePercentage}%</StatItem>
                </Stat>
                :
            <Notification>{ message}</Notification>
            }
        </div>    
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
    message: PropTypes.string,
}

export default Statistics

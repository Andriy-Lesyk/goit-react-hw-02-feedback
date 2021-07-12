import React from 'react'
import PropTypes from "prop-types"
import { Sections }  from "../App/App.styled"

function Section({ title, children}) {
    return (
        <div>
            <Sections>
                {title}
                { children}
            </Sections>
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string
}

export default Section

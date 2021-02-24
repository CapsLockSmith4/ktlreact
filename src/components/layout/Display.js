import React from 'react'
//import { BrowserRouter as Router, Switch} from 'react-router-dom'
import Loan1 from '../infoSpans/Loan1'
import ZLoan1 from '../infoSpans/zLoan1'

const Display = props => {
    return (
        props.lang ? (
            <Loan1 />
        ) : (
            <ZLoan1 />
        )
    );
}

export default Display

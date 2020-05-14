<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> 83ceb0c197fa26c688e66b0756241bc77f39736b

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default Emoji;

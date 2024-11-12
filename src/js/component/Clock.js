import React from 'react';

const Clock = ({ seconds }) => {
    const secondsString = [
        {
            seconds: 0,
        },
        {
            seconds: 0,
        },
        {
            seconds: 0,
        },
        {
            seconds: 0,
        },
        {
            seconds: 0,
        },
        {
            seconds: 0,
        },
    ];

    let secondsText = seconds.toString();

    while (secondsText.length < 6) {
        secondsText = "0" + secondsText;
    }

    const secondsArray = secondsText.split("");

    for (let i = 0; i < secondsArray.length; i++) {
        secondsString[i].seconds = secondsArray[i];
    }

    return (
        <div className="d-flex align-items-center justify-content-center p-3 text-white" style={{ backgroundColor: '#080808' }}>
            <div className="p-3 border border-secondary d-flex align-items-center justify-content-center" style={{ height: '100px', width: '100px' }}>
                <i className="fas fa-clock" style={{ fontSize: '3rem' }}></i>
            </div>
            {secondsString.map((props, index) => (
                <div key={index} className="display-1 ms-2 p-3 border border-secondary d-flex align-items-center justify-content-center"
                    style={{ height: '100px', width: '100px' }}>{props.seconds}
                </div>
            ))}
        </div>
    );
};

export default Clock;
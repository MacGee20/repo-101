import React from 'react';

const Scroll = (props) => {
    return (
        <div style= {{overflowY: 'scroll' , border: '1x solid back', height: '800px'}}>
            {props.children}
        </div>
    );
};


export default Scroll;
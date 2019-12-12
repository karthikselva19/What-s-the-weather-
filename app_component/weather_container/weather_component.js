import React from 'react';

const weatherComponent =(props) =>{
    return(
        <div className="container text-light">
            <div className="cards pt-4">
            <h1>{props.name}</h1>
            <h5 className="py-4">
            <i className={props.className}/>
            </h5>
            <h1 className="py-2">
                {props.temp}&deg;
            </h1>
            {/* {show max and min temp} */}
            <h3>
                <span className="px-4">{props.min}&deg;</span>
                <span className="px-4">{props.max}&deg;</span>
            </h3>
            <h4 className="py-3">{props.desc}</h4>
            </div>
        </div>
    )


   
}

export default weatherComponent;
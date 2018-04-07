import React from 'react';
export const Planet = (props) => {
    let pop = isNaN(props.pop) ? 0 : props.pop;
    return (<div className="col-sm-12 marginbtn">
        <div className="col-sm-5 marginbtn">
            {props.name +"  -  "+ (pop)+"(Population)"}
        </div>
        <div className="col-sm-9 marginbtn minHeight" style={{width:props.width}}>
            
        </div>
    </div>
    )
}


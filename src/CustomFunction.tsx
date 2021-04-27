import React from 'react';
import { NamedTupleMember } from 'typescript';

type Sun = {
    radius?: number;
    color: string;
}

function CustomFunction(props: Sun){
    return (<div>
        <h2>Noroc</h2>
        <h3>The sun has {props.radius} and color is {props.color}</h3> 
    </div>);
}

export default CustomFunction;
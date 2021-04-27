import React from 'react';

type User = {
    name: string;
    telephone?: number;
}

type StateType={
    telephoneNumber: number;
}

class CustomClass extends React.Component<User, StateType>{
    constructor(props: User){
        super(props);
        this.state = {
            telephoneNumber: 888888888
        };
        // this.onClick = this.onClick.bind(this);
    }

    onClick(i: number){
        this.setState({
            telephoneNumber: this.state.telephoneNumber + i
        });
    }

    render(){
        let typeNumber;
        if(this.state.telephoneNumber % 2 === 0){
            typeNumber = <h1>Even Number</h1>
        }
        else{
            typeNumber = <h1>Odd Number</h1>
        }

        let list = [1,2,3,4,5,6,7,8,9]
        let listElement = list.map(x => <p key={x}>{x}</p>)

        return (<div>
            <h2>Coloboc</h2>
            <h3>My Name is {this.props.name} and telephone is {this.props.telephone} and {this.state.telephoneNumber}</h3>
            <a href="#" onClick={this.onClick.bind(this, 3)}>Increment</a>
            
            <p>
            <a href="#" onClick={() => this.onClick(6)}>Second Increment</a>   
            </p>

            {typeNumber}
            {this.state.telephoneNumber % 2 === 0 ? <p>Good</p> : <p>Bad</p>}
            {this.state.telephoneNumber % 2 === 0 && <p>Very Good</p>}

            {listElement}
            <br/>
            {list.map((x, i) => <p key={i}>{x}</p>)}
        </div>);
    }
}

export default CustomClass;
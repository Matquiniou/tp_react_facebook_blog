import React from 'react';
import '../App.css';

class Profils extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: "white"
        }
    }

        changeColor = (e) => {
        if (this.state.bgColor == "white") {
            this.setState({
                bgColor: "blue"
            })
        } else {
            this.setState({
                bgColor: "white"
            })
        }
    }

    render() {
        return(
            <div className="section" style={{backgroundColor: this.state.bgColor}}>
                <img src={this.props.photo}/>
                <div className="info">
                    <a>{this.props.prenom}</a>
                    <a>{this.props.nom}</a>
                    <a>{this.props.date_naissance}</a>
                </div>
                    <button onClick={this.changeColor}>
                        Change style
                    </button>
            </div>
        );
    }
}

export default Profils;

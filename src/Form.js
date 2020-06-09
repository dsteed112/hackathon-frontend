import React, { Component } from 'react';

class Form extends Component {
	state = {
		longitudeInput: '',
        latitudeInput: '',
        dateInput: '',
	};

	handleChange = (event) => {
		const stateKey = event.target.name + 'Input';
		const input = event.target.value;
		this.setState({
			[stateKey]: input
		});
	};

    checkInputValid = () => {
        return(true)
    }


	handleSubmit = (event) => {
		event.preventDefault();
        this.checkInputValid() ? this.sendData() : alert("Input not valid!")
        
    };
    

    
    sendData = () => {
        const {latitudeInput, longitudeInput, dateInput} = this.state
        var requestOptions = {
            method: 'POST',
        };

        fetch(`http://localhost:3000/sunrises?lat=${latitudeInput}&lng=${longitudeInput}&date=${dateInput}`, requestOptions)
        .then(response => response.json())
        .then (this.updateSunriseTime)
        
        // .catch(error => console.log('error', error));
    }

    updateSunriseTime = (arg) => {
        this.props.setTime(arg.results.sunrise)
        console.log(arg)
    }


	render() {
		return (
            <form className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                Longitude:
                <input type="text" name="longitude" />
                Latitude:
                <input type="text" name="latitude" />
                Date:
                <input type="text" name="date" placeholder='YYYY-MM-DD'/>
                <input type="submit" value="Submit" />
                {/* <button onClick={()=>this.props.setTime("asdf")}>BUTTON</button> */}
            </form>

        
		);
	}
}

export default Form;

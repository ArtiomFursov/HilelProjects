import React, {Component} from 'react';
import CitiesList from "../components/CitiesList";
import Input from "../components/Input";
class MainPage extends Component {
    render() {
        return (
            <div>
                <h1>Enter your city name</h1>
                <Input list={this.props.list}/>
                <CitiesList list={this.props.list} />
            </div>
        );
    }
}

export default MainPage;
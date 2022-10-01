import React from "react";
import './App.scss';
import { Routes, Route , Link } from "react-router-dom";
import CitiesList from "./components/CitiesList";
import Input from "./components/Input";
import axios from "axios";
import Page from "./pages/Page";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
let cityArr=[
    'Kyiv',
    'Kharkiv',
    'Poltava',
    'Chernihiv',
    'Odessa',
    'Lviv',
    'Dnipro',
    'Mariupol',
    'Donetsk',
    'Kherson',
    'Lutsk',
    'Berdyansk',
    'Chernivtsi',
    'Avdeevka',
    'Alushta',
    'Autonomous Republic of Crimea',
    'Baturyn',
    'Bilhorod-Dnistrovskyi',
    'Belz',
    'Ternopil',
    'Rivne',
    'Valky',
    'Zaporizhia',
    'Zhytomyr',
    'Ivano-Frankivsk',
    'Izium',
    'Luhansk',
    'Lysychansk'
];
let API_key = 'd48dd8492f2bc25456abd815cfde086a';

class App extends React.Component{
    constructor() {
        super();
        this.state={
            cities_List:[]
        }
    }
    componentDidMount = async () => {
        let res=[];
        // let response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${'Kyiv'}&units=metric&appid=${API_key}`)
        let response = await axios
        for (let i = 0; i < cityArr.length; i++) {
            response=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityArr[i]}&units=metric&appid=${API_key}`);
            res.push(response.data)
        }
        this.setState({
            cities_List:[...this.state.cities_List.concat(res)]
        })
    }

    render(){

        return (

            <div className="App">




             <Routes>
                 <Route path='/' element={<MainPage list={this.state.cities_List}/>} />

                     <Route path='/weather/:name' element={<Page />}></Route>

                 <Route path='*' element={<NotFound />} />

             </Routes>


            </div>




        );
    }
}

export default App;

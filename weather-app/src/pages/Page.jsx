import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

let API_key = 'd48dd8492f2bc25456abd815cfde086a';
class Page extends Component {
    constructor() {
        super();
        this.state={
            cities_List:[]
        }
    }

    componentDidMount = async () => {
        let text = window.location.pathname;
        text=text.split('');
        text=text.splice(9,).join('');
        let response = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&appid=${API_key}`);
        console.log(response.data.list)
        response.data.list.map((el)=>{
            let ms = el.dt*1000;
            el.dt = new Date(ms).toDateString('en', {weekday: 'long'});
        })
            this.setState({
            cities_List:[response.data]
        })
    }

    render() {
        if(this.state.cities_List.length>0){
            return (
                <ul className='pageUl'>

                    { this.state.cities_List.map((el)=>{
                        return <li key={el.city.id} className='DaysOfWeek'>
                            <h2 className='PageCityName'>{el.city.name}</h2>

                            {el.list.map((el)=>{
                                if(el.dt_txt.includes('18:00:00')){
                                    return <div key={el.main.temp} className='NewPageItem'>
                                        <h3>{el.dt}</h3>
                                        <span className='PageWeatherSpan'>temp:{el.main.temp}º</span>
                                        <span className='PageWeatherSpan'>temp min:{el.main.temp_min}º</span>
                                        <span className='PageWeatherSpan'>temp max:{el.main.temp_max}º</span>
                                        <span className='PageWeatherSpan'>wind speed:{el.wind.speed}s</span>
                                        <span className='PageWeatherSpan'>sea level:{el.main.sea_level}</span>
                                        <span className='PageWeatherSpan'>ground level:{el.main.grnd_level}</span>
                                        <span className='PageWeatherSpan'>Feels like:{el.main.feels_like}</span>
                                        <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon }@2x.png`}></img>


                                    </div>
                                }
                            })}
                        </li>


                        // {/*{   el1.list.map((el)=>{*/}
                        {/*    let ms = el.dt*1000;*/}
                        {/*    el.dt = new Date(ms).toDateString('en', {weekday: 'long'});*/}
                        {/*    if(el.dt_txt.includes('18:00:00')){*/}
                        {/*        return <li key={el.main.temp} className='NewPageItem'>*/}
                        {/*            <div>*/}
                        {/*                <h3>{el.dt}</h3>*/}
                        {/*                <span className='PageWeatherSpan'>temp:{el.main.temp}º</span>*/}
                        {/*                <span className='PageWeatherSpan'>temp min:{el.main.temp_min}º</span>*/}
                        {/*                <span className='PageWeatherSpan'>temp max:{el.main.temp_max}º</span>*/}
                        {/*                <span className='PageWeatherSpan'>wind speed:{el.wind.speed}s</span>*/}
                        {/*                <span className='PageWeatherSpan'>sea level:{el.main.sea_level}</span>*/}
                        {/*                <span className='PageWeatherSpan'>ground level:{el.main.grnd_level}</span>*/}
                        {/*                <span className='PageWeatherSpan'>Feels like:{el.main.feels_like}</span>*/}
                        {/*                <span className='PageWeatherSpan'>{el.weather[0].main}</span>*/}
                        {/*            </div>*/}

                        {/*        </li>*/}

                        {/*    }*/}
                        {/*})*/}
                        {/*}*/}







                    })}
                </ul>
            );
        }else{
            setTimeout(() => {
                return <h2>This request doesn't exist</h2>
            }, 5000);
        }

    }
}

export default Page;
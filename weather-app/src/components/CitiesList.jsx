import React, {Component} from 'react';
import { Link } from "react-router-dom";
class CitiesList extends Component {
    render() {
        return (
         <ul className='Cities_List'>
             {this.props.list.map((el)=>{
                 let joinedDescription= el.weather[0].description;
                 joinedDescription=joinedDescription.split(' ').join('_')
                 return <Link to={'/weather/'+el.name} key={el.id}>
                 <li  className={el.name+' '+joinedDescription}><h2>{el.name}</h2>
                         <span  className='weatherSpan'>
                         temp: {Math.round(el.main.temp)} º
                 </span>
                         <span className='weatherSpan' >
                   clouds: {el.weather[0].description}

                 </span>
                         <span  className='weatherSpan'>
                   wind speed: {el.wind.speed}s

                 </span>
                     <span>
                         <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon }@2x.png`}></img>
                    </span>
                     </li>
                 </Link>
             })}
         </ul>
        );
    }
}

export default CitiesList;
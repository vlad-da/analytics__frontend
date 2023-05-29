import React from "react";
import './percent.css';


function Percent(props) {
    return (
        <div className="wrapper--block" >
            <div className="wrapper__percents">
                <div className="wrapper__percents__info">
                    <img src={props.img} alt="micro" />
                    <div className="wrapper__percents__info__block">
                        <span className="wrapper__percents__info__block__title">{props.title}</span>
                        <span className="wrapper__percents__info__block__description">{props.decr}</span>
                    </div>
                </div>
                
                <div className="wrapper__percents__own">
                    <span className="wrapper__percents__own__title">{props.result}</span>
                    <span className="wrapper__percents__own__percent">{props.percent}</span>
                </div>
            </div>

            {/* Полоса прогресса */}
            <div className="wrapper__scale">
                <div className="wrapper__scale__grayback"></div>
            </div>


        </div>

    )
}



export default Percent;
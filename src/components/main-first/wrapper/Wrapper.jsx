import React from "react";
import Percent from '../percent/Percent'
import Smile from '../smile/Smile';

import './wrapper.css';

import DownloadSVG from '../../../asserts/receive-square.svg';
import FrameSVG from '../../../asserts/Frame-2.svg';


function Wrapper(props) {
    return (
        <div className="wrapper">
            <div className="wrapper--width">
                <div className="wrapper__header">
                    
                    <div className="wrapper__header__title">
                        <img src={props.note} alt="note" />
                        <span className="wrapper__title__analytic">{props.title}</span>
                        
                    </div>
                    <button className="wrapper__header__button__upload">
                        <img src={DownloadSVG} alt="download" />
                        <span className="wrapper__header__button__upload--title">{props.titleButton}</span>
                    </button>
                </div>
                <Percent img={FrameSVG} title={props.percent.title} decr={props.percent.description} result={props.percent.result} percent={props.percent.percent}/>
                <Smile title={props.smiles.title} percent={props.smiles.percent} arrow={props.smiles.arrow} smiles={props.smiles.smiles}/>
            </div>
            
        </div>
    )
}

export default Wrapper;
import React from "react";

import './smile.css';

import smileSVG from '../../../asserts/smileBad.svg';
import arrowSVG from '../../../asserts/arrow.svg';


function Smile(props) { 
  return (

        <div className="smile">


          {/* Перебираемый блок */}

          <div className="smile__wrapper">
            <div className="smile__wrapper__speedometr">
              <div className="smile__wrapper__speedometr__sections">
                <div className="smile__wrapper__speedometr__sections__block-1"></div>
                <div className="smile__wrapper__speedometr__sections__block-2"></div>
                <div className="smile__wrapper__speedometr__sections__block-3"></div>
                <div className="smile__wrapper__speedometr__sections__block-4"></div>
                <div className="smile__wrapper__speedometr__sections__block-5"></div> 
              </div>
            </div>
            <div className="smile__wrapper__arrow">
              <img className="smile__wrapper__arrow__index" src={arrowSVG} alt="arrow" />
            </div>
            <div className="smile__wrapper__smile">
             <img className="smile__wrapper__smile__index" src={smileSVG} alt="smile" />
            </div>
            
            <div className="emotions">
              <span className="emotions__title">{props.title}</span>
              <span className="emotions__percent">{props.percent}</span>
            </div>
          </div>

          {/* Перебираемый блок */}

          <div className="smile__wrapper">
            <div className="smile__wrapper__speedometr">
              <div className="smile__wrapper__speedometr__sections">
                <div className="smile__wrapper__speedometr__sections__block-1"></div>
                <div className="smile__wrapper__speedometr__sections__block-2"></div>
                <div className="smile__wrapper__speedometr__sections__block-3"></div>
                <div className="smile__wrapper__speedometr__sections__block-4"></div>
                <div className="smile__wrapper__speedometr__sections__block-5"></div> 
              </div>
            </div>
            <div className="smile__wrapper__arrow">
              <img className="smile__wrapper__arrow__index" src={arrowSVG} alt="arrow" />
            </div>
            <div className="smile__wrapper__smile">
             <img className="smile__wrapper__smile__index" src={smileSVG} alt="smile" />
            </div>
            
            <div className="emotions">
              <span className="emotions__title">{props.title}</span>
              <span className="emotions__percent">{props.percent}</span>
            </div>
          </div>
          <div className="smile__wrapper">
            <div className="smile__wrapper__speedometr">
              <div className="smile__wrapper__speedometr__sections">
                <div className="smile__wrapper__speedometr__sections__block-1"></div>
                <div className="smile__wrapper__speedometr__sections__block-2"></div>
                <div className="smile__wrapper__speedometr__sections__block-3"></div>
                <div className="smile__wrapper__speedometr__sections__block-4"></div>
                <div className="smile__wrapper__speedometr__sections__block-5"></div> 
              </div>
            </div>
            <div className="smile__wrapper__arrow">
              <img className="smile__wrapper__arrow__index" src={arrowSVG} alt="arrow" />
            </div>
            <div className="smile__wrapper__smile">
             <img className="smile__wrapper__smile__index" src={smileSVG} alt="smile" />
            </div>
            
            <div className="emotions">
              <span className="emotions__title">{props.title}</span>
              <span className="emotions__percent">{props.percent}</span>
            </div>
          </div>
          <div className="smile__wrapper">
            <div className="smile__wrapper__speedometr">
              <div className="smile__wrapper__speedometr__sections">
                <div className="smile__wrapper__speedometr__sections__block-1"></div>
                <div className="smile__wrapper__speedometr__sections__block-2"></div>
                <div className="smile__wrapper__speedometr__sections__block-3"></div>
                <div className="smile__wrapper__speedometr__sections__block-4"></div>
                <div className="smile__wrapper__speedometr__sections__block-5"></div> 
              </div>
            </div>
            <div className="smile__wrapper__arrow">
              <img className="smile__wrapper__arrow__index" src={arrowSVG} alt="arrow" />
            </div>
            <div className="smile__wrapper__smile">
             <img className="smile__wrapper__smile__index" src={smileSVG} alt="smile" />
            </div>
            
            <div className="emotions">
              <span className="emotions__title">{props.title}</span>
              <span className="emotions__percent">{props.percent}</span>
            </div>
          </div>
          <div className="smile__wrapper">
            <div className="smile__wrapper__speedometr">
              <div className="smile__wrapper__speedometr__sections">
                <div className="smile__wrapper__speedometr__sections__block-1"></div>
                <div className="smile__wrapper__speedometr__sections__block-2"></div>
                <div className="smile__wrapper__speedometr__sections__block-3"></div>
                <div className="smile__wrapper__speedometr__sections__block-4"></div>
                <div className="smile__wrapper__speedometr__sections__block-5"></div> 
              </div>
            </div>
            <div className="smile__wrapper__arrow">
              <img className="smile__wrapper__arrow__index" src={arrowSVG} alt="arrow" />
            </div>
            <div className="smile__wrapper__smile">
             <img className="smile__wrapper__smile__index" src={smileSVG} alt="smile" />
            </div>
            
            <div className="emotions">
              <span className="emotions__title">{props.title}</span>
              <span className="emotions__percent">{props.percent}</span>
            </div>
          </div>
          <div className="smile__wrapper">
            <div className="smile__wrapper__speedometr">
              <div className="smile__wrapper__speedometr__sections">
                <div className="smile__wrapper__speedometr__sections__block-1"></div>
                <div className="smile__wrapper__speedometr__sections__block-2"></div>
                <div className="smile__wrapper__speedometr__sections__block-3"></div>
                <div className="smile__wrapper__speedometr__sections__block-4"></div>
                <div className="smile__wrapper__speedometr__sections__block-5"></div> 
              </div>
            </div>
            <div className="smile__wrapper__arrow">
              <img className="smile__wrapper__arrow__index" src={arrowSVG} alt="arrow" />
            </div>
            <div className="smile__wrapper__smile">
             <img className="smile__wrapper__smile__index" src={smileSVG} alt="smile" />
            </div>
            
            <div className="emotions">
              <span className="emotions__title">{props.title}</span>
              <span className="emotions__percent">{props.percent}</span>
            </div>
          </div>



        </div>
  )
        
}

export default Smile;
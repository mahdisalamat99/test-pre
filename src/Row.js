import React from 'react';
import './Row.styles.css';
import {ReactComponent as FirstDoctor} from './doctor-image.svg';
import {ReactComponent as SecondDoctor} from './doctor-image-2.svg'
import {ReactComponent as ThirdDoctor} from './doctor-image-3.svg'


function Row () {

    return (
        <div className="row-section" >
            <div className="row" >
                <div className="row-number" >
                    62.
                </div>
                <div className="row-info" >
                    <div className="doctor-image" >
                        <FirstDoctor/>
                    </div>
                    <div className="name-code" >
                        <p className="doctor-name" >Sean Jackson</p>
                        <p className="doctor-code" >D-916329</p>
                    </div>
                    <div className="department" >
                        Heart Surgery
                    </div>
                    <div className="last-login" >
                        11 April 21
                    </div>
                    <div className="surgery-number" >
                        2
                    </div>
                </div>
            </div>

            <div className="row" >
                <div className="row-number" >
                    61.
                </div>
                <div className="row-info" >
                    <div className="doctor-image" >
                        <FirstDoctor/>
                    </div>
                    <div className="name-code" >
                        <p className="doctor-name" >Kate Roberts</p>
                        <p className="doctor-code" >D-687329</p>
                    </div>
                    <div className="department" >
                        Brain Surgery 
                    </div>
                    <div className="last-login" >
                        9 Jan 21
                    </div>
                    <div className="surgery-number" >
                        4
                    </div>
                </div>
            </div>

            <div className="row" >
                <div className="row-number" >
                   60.
                </div>
                <div className="row-info" >
                    <div className="doctor-image" >
                        <FirstDoctor/>
                    </div>
                    <div className="name-code" >
                        <p className="doctor-name" >Jcob Connor</p>
                        <p className="doctor-code" >D-201839</p>
                    </div>
                    <div className="department" >
                        Therapy 
                    </div>
                    <div className="last-login" >
                         9 Jan 21
                    </div>
                    <div className="surgery-number" >
                        10
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row;
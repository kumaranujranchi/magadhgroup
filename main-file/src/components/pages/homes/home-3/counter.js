import React from 'react';
import Count from '../../common/count';

const CounterUp = () => {
    return (
        <>
            <div className="counter__two section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="counter__one-area">
                                <div className="counter__two-area-item item_bounce">
                                    <h2><Count number={5000}/>+</h2>
                                    <p>Trusted Clients</p>
                                </div>
                                <div className="counter__two-area-item item_bounce">
                                    <h2><Count number={20}/>+</h2>
                                    <p>Warehouses</p>
                                </div>
                                <div className="counter__two-area-item item_bounce">
                                    <h2><Count number={65}/>+</h2>
                                    <p>Product Portfolio</p>
                                </div>
                                <div className="counter__two-area-item item_bounce">
                                    <h2><Count number={30}/>+</h2>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default CounterUp;
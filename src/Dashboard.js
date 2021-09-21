import React from 'react';
import './Dashboard.css';

function Dashboard (){

    return(
        <div className="dashboard-section" >
            <div className="licence-information" >
                <p>Welcome,Milad</p>
                <p>50 Total Available Licence</p>
                <p>32 Assigned Licence</p>
                <p>256 days until expiration</p>
            </div>
            <div className="quick-view-section" >
                <h2>Quick View</h2>
                <div className="cards-container" >
                    <div className="vertical-cards" >
                        <div className="vartical-card" >
                            card1
                        </div>
                        <div className="vartical-card" >
                            card2
                        </div>
                        <div className="vartical-card" >
                            card3
                        </div>
                        <div className="vartical-card" >
                            card4
                        </div>
                    </div>
                    <div className="horizontal-cards" >
                        <div className="horizontal-card" >
                            card5
                        </div>
                        <div className="horizontal-card" >
                            card6
                        </div>
                    </div>
                </div>
            </div>
            <div className="doctors-section" >
                <div className="above-table" >
                    <p className="members-doctors" >Members/Doctors</p>
                    <div className="search-bar" >
                        <input type="text" />

                    </div>

                </div>
                <div className="table-section" >

                </div>
            </div>
        </div>
    )
}

export default Dashboard;
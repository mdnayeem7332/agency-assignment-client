import React from 'react';
import OrderHistory from '../../Admin/OrderHistory/OrderHistory';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    return (
        <section>
            <div className="row">
                <div >
                    <Sidebar/>
                </div>
                <div className="col-md-6">
                    <OrderHistory/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
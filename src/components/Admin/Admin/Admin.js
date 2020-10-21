import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderHistory from '../OrderHistory/OrderHistory';

const Admin = () => {

    return (
        <div className="row">
            <div>
                <Sidebar/>
            </div>
            <div>
                <OrderHistory/>
            </div>
        </div>
    );
};

export default Admin;
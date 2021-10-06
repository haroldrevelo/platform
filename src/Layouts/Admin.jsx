import React, { useState } from 'react';
import AdminHeader from "../Components/Header/AdminHeader";
import HeaderMobile from '../Components/Header/Mobile/HeaderMobile';
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from '../Views/Dashboard';
import useWindowDimensions from './useWindowDimensions';
import Search from '../Components/Header/Mobile/Search';

function AdminLayout(props) {

    const [size, setSize] = useState(useWindowDimensions())

    return (
        <>
            {size.width > 768 ?
                <div style={{ backgroundColor: '#F5F5FB' }}>
                    <AdminHeader />
                    <Sidebar />
                    <section >
                        <Dashboard />
                    </section>
                </div>
                :
                <div style={{ backgroundColor: '#F5F5FB' }}>
                    <HeaderMobile />
                    <Search />
                    <Dashboard />
                </div>
            }

        </>
    )
}

export default AdminLayout;
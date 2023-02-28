import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import Toolbar from './Toolbar'

export default function Layout() {
    return (
        <>
            <Header />
            <div role="main" id="main" className="container_12 clearfix">       
                <Toolbar />
                <Aside />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}


import { Component } from "react";
import Header from "./Header";
import classes from './app.module.scss'
import Footer from "./Footer";
import { Outlet } from "react-router";

class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={classes.pageContainer}>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        )
    }
}
export default Layout;
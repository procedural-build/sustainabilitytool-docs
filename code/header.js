import React from "react";
import { SearchBar} from "./searchBar";

export class Header extends React.Component {

    render() {
        let { extraClass } = this.props;
        return (
            <div className="navbar-area">
                <nav
                    className={`navbar navbar-expand-lg navbar-light bg-light navbar-static-top ${extraClass}`}
                    role="navigation"
                >
                    <div className="container-fluid">
                        <div className="navbar-brand">

                            <a href="https://uk.sustainabilitytool.com"><img src="/assets/images/logo.png" alt="logo" /></a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
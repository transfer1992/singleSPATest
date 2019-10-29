import React, { Component } from "react";
import { navigateToUrl } from "single-spa";

export class Navbar extends Component {
    render() {
        return (
            <div>
                Go to:
                <ul>
                    <li>
                        <a href="/home" onClick={navigateToUrl}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/users" onClick={navigateToUrl}>
                            Users
                        </a>
                    </li>
                    <li>
                        <a href="/angularJS" onClick={navigateToUrl}>
                            AngularJS App
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

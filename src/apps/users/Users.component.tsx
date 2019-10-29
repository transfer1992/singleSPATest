import React, { Component } from "react";

export class Users extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "green" }}>
                <h1>Let me give you some users in React</h1>
                <ul>
                    {[1, 2, 3, 4, 5].map(userNo => (
                        <li key={userNo}>{`User ${userNo}`}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

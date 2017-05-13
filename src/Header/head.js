import React from 'react';

import TopNav from './topNav';

export default class Head extends React.Component {
    render() {
        return (
            <div id="header">
                <TopNav />
            </div>
        );
    }
}
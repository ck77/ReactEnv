import React from 'react';

import Clock from '../Common/clock';
import ToggleButton from '../Common/toggleButton';

export default class Body extends React.Component {
    render() {
        return (
            <div id="body">
                <Clock />
                <ToggleButton />
            </div>
        );
    }
}
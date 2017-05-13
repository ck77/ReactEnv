import React from 'react';

import Head from './Header/head';
import Body from './Body/body';

export default class Container extends React.Component {
    render() {
        return (
            <div id="container">
                <Head />
                <Body />
            </div>
        );
    }
}
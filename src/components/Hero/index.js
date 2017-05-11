import React, { Component } from 'react';

import HeroList from './HeroList'

class Hero extends Component {
    render() {
        return (
            <div>
                <br/>
                <HeroList />
            </div>
        );
    }
}

export default Hero;
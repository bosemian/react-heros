import React, { Component } from 'react'

import Header from './Header'
import Hero from '../Hero'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Hero />
            </div>
        )
    }
}

export default App;
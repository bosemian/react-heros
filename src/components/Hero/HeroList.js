import React, { Component } from 'react';
import heros from '../../../heros'

class HeroList extends Component {

    renderHero = () => {
        return heros.map(hero => {
            return (
                <div key={hero.id} className="column is-one-quarter">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={hero.avatar} alt="avartar"/>
                            </figure>
                        </div>
                        <div className="card-content">     
                            <div className="content">
                                <p className="subtitle is-4"><a className="is-primary">{hero.name}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                 <div className="columns is-multiline">
                    { this.renderHero() }
                </div>
            </div>
        );
    }
}

export default HeroList;
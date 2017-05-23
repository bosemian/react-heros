import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import heros from '../../../heros'

class Hero extends Component {

    renderHero = () => {
        return heros.map(hero => {
            return (
                <div key={hero.id} className="column is-one-quarter">
                    <div className="card hero">
                        <Link to={`/hero/${hero.id}`}>
                            <div className="card-image">
                                <figure className="image is-4by3 button is-dark">
                                    <img src={hero.avatar} alt={hero.name} title={hero.name} />
                                </figure>
                            </div>
                        </Link>
                        <div className="card-content"> 
                                <div className="media-left">
                                    <p className="title is-4 hero-name"><Link to={`/hero/${hero.id}`} className="is-primary">{hero.name}</Link></p>
                                    <p className="is-6">Skills</p>
                                    { this.renderSkill(hero.skill)}

                                </div>
                            <div className="content">
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderSkill = (skills) => {
        return skills.map((skill, i) => {
            return (
                <figure key={i +1} className="skill">
                    <img className="img-circle" src={skill.img} alt="skillname" title="skill" />
                </figure>
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

export default Hero;
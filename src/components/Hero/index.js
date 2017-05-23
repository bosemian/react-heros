import React, { Component } from 'react';

import heros from '../../../heros'

import ModalHero from './ModalHero'

class Hero extends Component {

    state = {
        isOpen: false
    }

    open = () => {
        this.setState({ isOpen: true })
    }

    close = () => {
        this.setState({ isOpen: false })
    }

    renderHero = () => {
        return heros.map(hero => {
            return (
                <div key={hero.id} className="column is-one-quarter">
                    <div className="card hero" onClick={this.open}>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={hero.avatar} alt="avartar" title={hero.name} />
                            </figure>
                        </div>
                        <div className="card-content"> 
                                <div className="media-left">
                                    <p className="title is-4 hero-name"><a className="is-primary">{hero.name}</a></p>
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
                    <img className="img-circle" src={skill.img} title="skill" />
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
                { this.state.isOpen ?
                    <ModalHero
                        status={this.state.isOpen}
                        close={this.close} />
                    : null}
            </div>
        );
    }
}

export default Hero;
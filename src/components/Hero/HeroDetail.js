import React, { Component } from 'react';
import _ from 'lodash'
import { Link } from 'react-router-dom'

import heros from '../../../heros'

class HeroDetail extends Component {

  renderHero = () => {
    const id = this.props.match.params.id
    const hero = _(heros).find((hero => +id === hero.id))
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent animated fadeInRight">
          <article className="tile is-child box is-paddingless button is-dark">
            <div className="content">
              <figure className="image is-square">
                <img src={hero.avatar} alt={hero.name} />
              </figure>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8 animated fadeInRight">
          <article className="tile is-child box">
            <p className="title">My name is: <strong>{hero.name}</strong></p>
            <div className="content">
              <p>{hero.history}</p>
            </div>
            <div className="content">
              <h4 className="title is-4">Skills</h4>
            </div>
            <div className="content">
              { this.renderSkill(hero.skill) }
            </div>
          </article>
        </div>
      </div>
    )
  }

  renderSkill = (skills) => {
    return skills.map((skill, i) => {
      return (
        <div key={i} className="box">
          <article className="media">
            <div className="media-left">
              <figure>
                <img className="skill-img" src={skill.img} title={skill.skillname} alt={skill.skillname} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{skill.skillname}</strong>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <br/>
          <Link to="/">
            <span className="is-pulled-left tag is-info is-large">Back</span>
          </Link>
          <h2 className="has-text-centered title is-2">Hero Detail</h2>
        </div>
        <br />
        { this.renderHero() }
      </div>
    );
  }
}

export default HeroDetail;
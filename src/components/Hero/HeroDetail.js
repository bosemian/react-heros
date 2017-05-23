import React, { Component } from 'react';
import _ from 'lodash'

import heros from '../../../heros'

class HeroDetail extends Component {

  renderHero = () => {
    const id = this.props.match.params.id
    const hero = _(heros).find((hero => +id === hero.id))
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box is-paddingless button is-dark">
            <div className="content">
              <figure className="image is-square">
                <img src={hero.avatar} alt={hero.name} />
              </figure>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title">My name is: <strong>{hero.name}</strong></p>
            <div className="content">
              <p>{hero.history}</p>
            </div>
            <div className="content">
              <h4 className="title is-4">Skills</h4>
            </div>
            <div className="content">
              { this.renderSkill() }
            </div>
          </article>
        </div>
      </div>
    )
  }

  renderSkill = () => {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure>
              <img className="skill-img" src="http://bulma.io/images/placeholders/64x64.png" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Skill Name</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="has-text-centered">
          <h2 className="title is-2">Hero Detail</h2>
        </div>
        <br />
        { this.renderHero() }
      </div>
    );
  }
}

export default HeroDetail;
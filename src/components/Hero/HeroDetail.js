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
            <p className="title">My name is: <a className="is-info is-4">{hero.name}</a></p>
            <div className="content">
              <p>{hero.history}</p>
            </div>
          </article>
        </div>
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
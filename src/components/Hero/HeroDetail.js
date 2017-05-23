import React, { Component } from 'react';
import _ from 'lodash'

import heros from '../../../heros'

class HeroDetail extends Component {

  state = {
    hero: null
  }

  renderHero = () => {
    const id = this.props.match.params.id
    const hero = _(heros).find((hero => +id === hero.id))
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content">
              
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title">Main column</p>
            <p className="subtitle">With some content</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props)
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
import React, { Component } from 'react';

class HeroList extends Component {
    render() {
        return (
            <div>
                 <div className="columns is-multiline is-mobile">
                    <div className="column is-one-quarter">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <img className="img-circle" src="http://bulma.io/images/placeholders/48x48.png" alt="Image"/>
                                        <img className="img-circle" src="http://bulma.io/images/placeholders/48x48.png" alt="Image"/>
                                        <img className="img-circle" src="http://bulma.io/images/placeholders/48x48.png" alt="Image"/>
                                        <img className="img-circle" src="http://bulma.io/images/placeholders/48x48.png" alt="Image"/>
                                    </div>
                                </div>      
                                <div className="content">
                                    <p className="subtitle is-4"><a className="is-primary">Hero name</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroList;
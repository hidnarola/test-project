import React from 'react';
import './Home.scss';

const Home = (props) => {

    const clickHandler = (page) => {
        props.history.push(`/${page}`)
    }

    return (
        <div className="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 collection">
                        <div className="item" onClick={() => clickHandler('series')}>
                            <div className="item-name">
                                <h3>Series</h3>
                            </div>
                            <div className="action-icon">
                                <i className="fa fa-video-camera" />
                            </div>
                        </div>
                        <p>Populer Series</p>
                    </div>
                    <div className="col-md-2 collection">
                        <div className="item" onClick={() => clickHandler('movies')}>
                            <div className="item-name">
                                <h3>Movies</h3>
                            </div>
                            <div className="action-icon">
                                <i className="fa fa-video-camera" />
                            </div>
                        </div>
                        <p>Populer Movies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

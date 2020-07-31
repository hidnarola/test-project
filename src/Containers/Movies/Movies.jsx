import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions';
import PosterImg from '../../components/Poster';
import _map from 'lodash/map';
import '../Series/WebSeries.scss';

const Movies = (props) => {

    useEffect(() => {
        props.dispatch(getMovies())
    }, [])

    const renderWebMovies = (data, i) => {
        return (
            <div key={i} className="col-md-2 series">
                <div className="item">
                    <PosterImg imgSrc={data.images['Poster Art'].url} />
                </div>
                <p>{data.title}</p>
            </div>
        )
    }

    const { isloading, webMovies } = props;
    return (
        <div className="series-section">
            <div className="container">
                <div className="row">
                    {isloading ? <div className="loader">Loading....</div> :
                        _map(webMovies, (item, i) => renderWebMovies(item, i))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = ({ movies }) => {
    return {
        webMovies: movies.movies,
        isloading: movies.loading
    }
}
export default connect(mapStatetoProps)(Movies);

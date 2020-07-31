import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions';
import '../Series/WebSeries.scss';

const Movies = (props) => {

    useEffect(() => {
        props.dispatch(getMovies())
    }, [])

    const renderWebMovies = (data, i) => {
        return (
            <div key={i} className="col-md-2 series">
                <div className="item">
                    <img src={data.images['Poster Art'].url} alt={`series_${i}`} width="200px" height="250px" />
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
                        webMovies.map((item, i) => renderWebMovies(item, i))
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

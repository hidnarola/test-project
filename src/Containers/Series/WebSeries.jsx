import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWebSeries } from '../../store/actions';
import './WebSeries.scss';
const WebSeries = (props) => {

    useEffect(() => {
        props.dispatch(getWebSeries())
    }, [])

    const renderWebSeries = (data, i) => {
        return (
            <div key={i} className="col-md-2 series">
                <div className="item">
                    <img src={data.images['Poster Art'].url} alt={`series_${i}`} width="200px" height="250px" />
                </div>
                <p>{data.title}</p>
            </div>
        )
    }

    const { isloading, webSeries } = props;
    return (
        <div className="series-section">
            <div className="container">
                <div className="row">
                    {isloading ? <div className="loader">Loading....</div> :
                        webSeries.map((item, i) => renderWebSeries(item, i))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = ({ series }) => {
    return {
        webSeries: series.webSeries,
        isloading: series.loading
    }
}

export default connect(mapStatetoProps)(WebSeries);

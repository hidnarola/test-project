import React from 'react';
import Img from 'react-cool-img';
import LoadingImage from '../../assets/images/loading-7.gif';
import NoImage from '../../assets/images/no-image.png';

const PosterImg = ({ imgSrc }) => {
    return (
        <Img
            placeholder={LoadingImage}
            src={imgSrc}
            error={NoImage}
            alt="poster-image"
        />
    )
}

export default PosterImg;

import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart); // adds an icon to lib

class Detail extends Component {
    render() {
        const { imgIndex } = this.props.item;

        return (
            <div id='detailWrapper w-100'>
                <div id='detailContainer' className='d-flex d-col justify-center align-center w-100'>

                    <div id='detailImgWrapper' className='d-flex align-center justify-center w-100'>
                        <img src={`https://picsum.photos/400/400?${imgIndex}`} alt='alt text' />
                    </div>

                    <DetailArea item={this.props.item} />

                </div>
            </div>
        );
    }
}

class DetailArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loveAnimation: false,
        };
        this.showLove = this.showLove.bind(this);
        this.loveShown = this.loveShown.bind(this);
    }

    loveShown() {
        this.setState({
            loveAnimation: false,
        });
    }

    showLove() {
        this.setState({
            loveAnimation: true,
        });
    }

    render() {
        const { title, director, description, producer, release_date, rt_score } = this.props.item;
        const loveAnimation = this.state.loveAnimation;

        return (
            <div id='detailTxtContent'>
                <div id='detailTxtMain'>
                    <h2>{title}</h2>
                    <p id='detailTxtDescription'>{description}</p>
                </div>
                <div id='detailTxtExtra'>
                    <div>
                        <span className='key'>Director:</span> <span>{director}</span>
                    </div>
                    <div>
                        <span className='key'>Producer:</span> <span>{producer}</span>
                    </div>
                    <div>
                        <span className='key'>Year:</span> <span>{release_date}</span>
                    </div>
                    <div>
                        <span className='key'>Rating:</span> <span>{rt_score}</span>
                    </div>
                </div>
                <div>
                    <div className='loveBtnWrapper'>
                        <button className='btn loveBtn' onClick={this.showLove}>
                            Love
                        </button>
                        < FontAwesomeIcon onAnimationEnd={this.loveShown} className='heart heart1' style={loveAnimation ? {animationName: 'showLove'} : ''} icon={faHeart} />
                        < FontAwesomeIcon className='heart heart2' style={loveAnimation ? {animationName: 'showLove'} : ''} icon={faHeart} />
                        < FontAwesomeIcon className='heart heart3' style={loveAnimation ? {animationName: 'showLove'} : ''} icon={faHeart} />
                    </div>
                </div>
            </div>
        );

    }
}

export default Detail;
import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const {imgIndex} = this.props.item;

        return (
            <div id='detailWrapper w-100'>
                <div id='detailContainer' className='d-flex d-col justify-center align-center w-100'>

                    <div id='detailImgWrapper' className='d-flex align-center justify-center w-100'>
                        <img src={`https://picsum.photos/400/400?${imgIndex}`} alt='alt text' />
                    </div>

                    <DetailArea item={this.props.item}/>
                    
                </div>
            </div>
        );
    }
}

class DetailArea extends Component {
    render() {
        const { title, director, description, producer, release_date, rt_score} = this.props.item;

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
                    <button className='btn loveBtn'>Love</button>
                </div>
            </div>
        );

    }
}

export default Detail;
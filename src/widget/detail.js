import React, { Component } from 'react';

class Detail extends Component {
    render() {

        return (
            <div id='detailWrapper w-100'>
                <div id='detailContainer' className='d-flex d-col justify-center align-center w-100'>

                    <div id='detailImgWrapper' className='d-flex align-center justify-center w-100'>
                        <img src='https://picsum.photos/400/400' alt='alt text' />
                    </div>

                    <DetailArea />
                    
                </div>
            </div>
        );
    }
}

class DetailArea extends Component {
    render() {

        return (
            <div id='detailTxtContent'>
                <div id='detailTxtMain'>
                    <h2>Title</h2>
                    <p id='detailTxtDescription'>Description</p>
                </div>
                <div id='detailTxtExtra'>
                    <div>
                        <span className='key'>Director:</span> <span>Name</span>
                    </div>
                    <div>
                        <span className='key'>Producer:</span> <span>Name</span>
                    </div>
                    <div>
                        <span className='key'>Year:</span> <span>Release date</span>
                    </div>
                    <div>
                        <span className='key'>Rating:</span> <span>Rating</span>
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
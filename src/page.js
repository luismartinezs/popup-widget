import React, { Component } from 'react';
import './page.css';

class PageWrapper extends Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.children}
            </div>
        );
    }
}

class Page extends Component {
    render() {
        let itemList = [];

        for (let i = 0; i < 12; i++) {
            itemList.push((<Item />));
        }

        console.log(itemList);

        return (
            <PageWrapper>
                <div className='headContainer'>
                    <h1>Product page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className='smText'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='itemListContainer'>
                    {itemList}
                </div>
            </PageWrapper>
        );
    }
}

class Item extends Component {
    render() {
        return (
            <div className='itemBox'>

                <div className='thumbnailWrapper'>
                    <div className='thumbnailMask'>
                        <h2 className='itemTitle'>Title</h2>
                        <p className='itemSubtitle'>Subtitle</p>
                        <button className='btn btnCircle btnSeeMore'>+</button>
                    </div>
                    <img src='https://picsum.photos/200/200/?random' />
                </div>
            </div>
        );
    }
}

export default Page;
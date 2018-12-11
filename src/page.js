import React, { Component } from 'react';
import Widget from './widget/widget';
import { asyncCall } from './asyncCall';
import { makeData } from './model/data';
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
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isError: false,
        }
    }

    componentDidMount() {
        let dataArr;
        let url = 'https://ghibliapi.herokuapp.com/films';

        asyncCall(url)
            .then((response) => {
                dataArr = makeData(response);
                this.setState({
                    data: dataArr,
                    isLoading: false,
                })
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    isError: true,
                });
            });

    }

    render() {

        if (this.state.isLoading) return (<p>Loading...</p>);

        if (this.state.isError) return (<p>There was some error while loading the data! Try again later...</p>);

        if (!this.state.isLoading) {

            let itemList = [];

            for (let i = 0; i < 12; i++) {
                let otherItems = this.state.data.slice(0, i).concat(this.state.data.slice(i + 1));
                itemList.push((<Item key={i} item={this.state.data[i]} otherItems={otherItems} />));
            }

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
}

class Item extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        const { title, imgIndex } = this.props.item;

        return (
            <div>
                <div className='itemBox'>
                    <div className='thumbnailWrapper'>
                        <div className='thumbnailMask'>
                            <h2 className='itemTitle'>{title}</h2>
                            <button className='btn btnCircle btnSeeMore' onClick={this.handleOpenModal}>+</button>
                        </div>
                        <img src={`https://picsum.photos/200/200/?image=${imgIndex}`} alt={title} />
                    </div>
                </div>
                <Widget item={this.props.item} otherItems={this.props.otherItems} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
            </div>
        );
    }
}

export default Page;
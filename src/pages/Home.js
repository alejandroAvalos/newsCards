import React, { Fragment, Component } from 'react';

import Header from '../components/Header';
import News from '../components/News';
import Footer from '../components/Footer';

class Home extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <News />
                <Footer />
            </Fragment>
        )
    }
}

export default Home;
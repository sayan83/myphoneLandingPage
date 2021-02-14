import React, {Component} from 'react';
import Header from './header/header';
import SectionHero from './section-hero/section-hero';

class Home extends Component {
    render() {
        return(
            <div className="page-container">
                <Header />
                <SectionHero />
            </div>
        )
    }
}
export default Home;
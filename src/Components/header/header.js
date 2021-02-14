import React,{Component} from 'react';
import './header.css';

class Header extends Component {
    componentDidMount = function() {
        console.log('mounting');
        window.addEventListener('scroll', this.handleScroll);
    };
    componentWillUnmount = function() {
        console.log('unmounting');
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = function(event) {
        console.log(window.pageXOffset,window.pageYOffset)
        var headerTop = document.getElementsByClassName('header-top')[0];
        if((headerTop.clientHeight+headerTop.scrollHeight) <= window.pageYOffset) {
            document.getElementsByClassName('header')[0].style.position = "fixed";
            document.getElementsByClassName('header')[0].style.top = 0;
            document.getElementsByClassName('header')[0].style.background = "#383838";
        }
        else {
            document.getElementsByClassName('header')[0].style.position = "relative";
            document.getElementsByClassName('header')[0].style.background = "none";
        }
    }
    render(){
        return(
            <div className="header-wrapper">
                <div className="header-top">
                    <div className="header-top-elements">Pac</div>
                    <div className="header-top-elements">myPad</div>
                    <div className="header-top-elements">myPhone</div>
                    <div className="header-top-elements">Watch</div>
                    <div className="header-top-elements">TV</div>
                    <div className="header-top-elements">Music</div>
                    <div className="header-top-elements">Support</div>
                    <div className="header-top-elements">Where To Buy</div>
                </div>
                <div className="header">
                    <div className="header-left">
                        myPhone SE
                    </div>
                    <div className="header-right">
                        <div className="header-right-elements active">Overview</div>
                        <div className="header-right-elements">Why Upgrade</div>
                        <div className="header-right-elements">Tech Specs</div>
                        <div className="header-right-elements"><button className="buy-button">Buy</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
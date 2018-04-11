import React, {Component} from 'react'
import {Menu, Segment, Image} from 'semantic-ui-react'
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Pesulad from "./pesulad";
import Container from "./Container";
import Contact from "./meist";


export class MenuExampleInvertedSecondary extends Component {
    state = {activeItem: 'home'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <BrowserRouter>
                <div>
                    <Segment inverted>
                        <Menu inverted pointing secondary>
                            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}
                                       as={Link} to="/"/>
                            <Menu.Item name='pesulad' active={activeItem === 'pesulad'} onClick={this.handleItemClick}
                                       as={Link} to="/pesulad"/>
                            <Menu.Item name='meist' active={activeItem === 'meist'} onClick={this.handleItemClick}
                                       as={Link} to="/meist"/>

                            <Menu.Menu position='right'>
                                <Image src={logo} style={{width: '180px', height: '40px'}}/>
                            </Menu.Menu>
                        </Menu>
                    </Segment>
                    <div className="content" key={"pages"}>
                        <Route exact path="/" component={Container}/>
                        <Route path="/pesulad" component={Pesulad}/>
                        <Route path="/meist" component={Contact}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

let logo = require('./selvelogo.png');


export default MenuExampleInvertedSecondary;
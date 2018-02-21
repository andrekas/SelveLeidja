
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Pesulad from "./pesulad";
import MapContainer from "./App";
import Contact from "./meist";


export class MenuExampleInvertedSecondary extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <BrowserRouter>
                <div>
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/"/>
                    <Menu.Item name='pesulad' active={activeItem === 'pesulad'} onClick={this.handleItemClick} as={Link} to="/pesulad" />
                    <Menu.Item name='meist' active={activeItem === 'meist'} onClick={this.handleItemClick} as={Link} to="/meist" />

                    <Menu.Menu position='right' >
                        <Menu.Item>
                           <h3>SelveLeidja</h3>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
                <div className="content">
                    <Route exact path="/" component={MapContainer}/>
                    <Route path="/pesulad" component={Pesulad}/>
                    <Route path="/meist" component={Contact}/>
                </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default MenuExampleInvertedSecondary;
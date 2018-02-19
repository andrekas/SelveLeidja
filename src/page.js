import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import './App.css';
export default class MenuExampleInvertedSecondary extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='pesulad' active={activeItem === 'pesulad'} onClick={this.handleItemClick} />
                    <Menu.Item name='meist' active={activeItem === 'meist'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right' >
                        <Menu.Item>
                           SelveLeidja
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

            </Segment>
        )
    }
}

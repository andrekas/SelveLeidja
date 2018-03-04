import React, { Component } from "react";
import './pesulad.css';

class Pesulad extends Component {
    ShowDetails(event){
       var comment =
       "<Form><Input id='CommentInput' type='text' placeholder='Lisa kommentaar' class='unhidden'/></Form>";
       var submitInput = "<Input id='SubmitInput' type='submit' value='Submit'/>";
       document.getElementById('DetailsHeading').innerHTML = event.currentTarget.textContent;
       document.getElementById('PriceDiv').innerHTML = "1€ minut";
       document.getElementById('LocationsDiv').innerHTML = "Siin ja seal";
       document.getElementById('CommentDiv').innerHTML = comment + submitInput;
    }

    render() {
        return ([
            <div id="HeadingDiv"><h2>Pesulate nimekiri ja andmed</h2></div>,
            <div id="ContainerDiv">
                <div id="ButtonsDiv">
                    <h2>Pesulad</h2>
                    <a className='PesulaLink' onClick={this.ShowDetails}>Jazz Selvepesula</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>Mündipesula</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>SmartWash</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>NB Carwash. Self Wash</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>Kärcher Selvepesula</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>Isepesula 24</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>SV pesula</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>Aqua Pesulad OÜ</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>Wash24</a><br/>
                    <a className='PesulaLink' onClick={this.ShowDetails}>Linnapesulad</a><br/>
                </div>
                <div id="DetailDiv">
                    <h2 id='DetailsHeading'>Siit leiad infot selvepesulate kohta</h2>
                    <div id="PriceDiv"></div>
                    <div id="LocationsDiv"></div>
                    <div id="CommentDiv">
                        <div id="CommentsDiv"></div>
                    </div>
                </div>
            </div>
        ]);
    }
}

export default Pesulad;
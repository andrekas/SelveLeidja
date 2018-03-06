import React from "react";
import './pesulad.css';

class Pesulad extends React.Component {
    static ShowDetails(event){
      let comment =
          "<Form><Form.Field><input id='CommentInput' placeholder='Kommenteeri' /></Form.Field></Form>";

      let submitInput = "<Button class='ui button' id='SubmitInput' type='submit'>Submit</Button>";

       document.getElementById('DetailsHeading').innerHTML = event.currentTarget.textContent;
       document.getElementById('PriceDiv').innerHTML = "1€ = 100 sekundit";
       document.getElementById('LocationsDiv').innerHTML = "Siin ja seal";
       document.getElementById('CommentDiv').innerHTML = comment + submitInput;
    }

    render() {
        return ([
            <div id="HeadingDiv"><h2>Pesulate nimekiri ja andmed</h2></div>,
            <div id="ContainerDiv">
                <div id="ButtonsDiv">
                    <h2>Pesulad</h2>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Jazz Selvepesula</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Mündipesula</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >SmartWash</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >NB Carwash</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Kärcher Selvepesula</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Isepesula 24</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >SV pesula</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Aqua Pesulad </a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Wash24</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Linnapesulad</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Pese Ise</a><br/>
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
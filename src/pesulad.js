import React from "react";
import './pesulad.css';

class Pesulad extends React.Component {
      static ShowDetails(event){
      let commentInput =
          "<Form><Form.Field><input id='CommentInput' placeholder='Kommenteeri'/></Form.Field></Form>";

      let submitInput =
          "<button onClick={this.AddComment} class='ui button' id='SubmitButton' type='submit'>Esita</button>";

       document.getElementById('DetailsHeading').innerHTML = event.currentTarget.textContent;
       document.getElementById('PriceDiv').innerHTML = "1€ = 100 sekundit";
       document.getElementById('LocationsDiv').innerHTML = "Siin ja seal";
       document.getElementById('CommentElementsDiv').innerHTML = commentInput + submitInput;
       document.getElementById('CommentsDiv').innerHTML = "Kommentaarid siia";
    }
    static AddComment(){
       let comment = document.getElementById('CommentInput').value;
       console.log(comment);
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
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Aqua Pesulad </a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Wash24</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Linnapesulad</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >Pese Ise</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} >EHRLE Autopesula</a><br/>
                </div>
                <div id="DetailDiv">
                    <h2 id='DetailsHeading'>Siit leiad infot selvepesulate kohta</h2>
                    <div id="PriceDiv"></div>
                    <div id="LocationsDiv"></div>
                    <div id="CommentElementsDiv"></div>
                    <div id="CommentsDiv"></div>
                </div>
            </div>
        ]);
    }
}

export default Pesulad;
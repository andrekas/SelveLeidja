import React from "react";
import './pesulad.css';
import * as ReactDOM from "react-dom";

class Pesulad extends React.Component {
        static ShowDetails(event) {
            console.log(event.currentTarget.getAttribute("id"));
            window['selectedID'] = event.currentTarget.getAttribute('id');
            document.getElementById('DetailsHeading').innerHTML = event.currentTarget.textContent;
            ReactDOM.render(React.createElement(Info, null), document.getElementById('InfoDiv'));
            ReactDOM.render(React.createElement(Form, null), document.getElementById('CommentElementsDiv'));
            ReactDOM.render(React.createElement(Comments, null), document.getElementById('CommentsDiv'));
        }
    render() {
        return ([
            <div id="HeadingDiv"><h2>Pesulate nimekiri ja andmed</h2></div>,
            <div id="ContainerDiv">
                <div id="ButtonsDiv">
                    <h2>Pesulad</h2>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="1">Jazz Selvepesula</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="2">Mündipesula</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="3">SmartWash</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="4">NB Carwash</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="5">Nutipesu</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="6">Isepesula 24</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="7">Aqua Pesulad </a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="8">Wash24</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="9">Linnapesulad</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="10">Pese Ise</a><br/>
                    <a className='PesulaLink' onClick={Pesulad.ShowDetails} id="11">EHRLE Autopesula</a><br/>
                </div>
                <div id="DetailDiv">
                    <h2 id='DetailsHeading'>Siit leiad infot selvepesulate kohta</h2>
                    <div id="InfoDiv">

                    </div>
                    <div id="CommentElementsDiv">

                    </div>
                    <div id="CommentsDiv">

                    </div>
                </div>
            </div>
        ]);
    }
}
export default Pesulad;

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {info: [], isLoading: false, error: null,};
    }

    componentDidMount() {
        this.setState({info: [], isLoading: true});

        fetch('http://localhost:8080/info')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {console.log(data); this.setState({info: data , isLoading: false })})
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const {info, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return <div>
            {info.filter(x => {
                return x.id + '' === window['selectedID']
            }).map(pesulad_info =>
                <div key={pesulad_info.id}>
                    <span id="info">{pesulad_info.address}</span> <br/>
                    <span>  </span> <br/>
                    <span id="info">{pesulad_info.hind}</span> <br/>
                </div>
            )}
        </div>;
    }
}

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {comments: [], isLoading: false, error: null,};
    }

    componentDidMount() {
        this.setState({comments: [], isLoading: true});

        fetch('http://localhost:8080/comments')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {console.log(data); this.setState({comments: data , isLoading: false })})
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { comments, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
                <div>
                    <h3>Kommentaarid</h3>
                    {comments.map((comment) =>
                        <div key={comment.id}>
                            <span id="comments">{comment.content}</span>
                        </div>
                    )}
                </div>
        );
    }
}
class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(event){
        event.preventDefault();
        await fetch('http://localhost:8080/comments/add', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({"content": this.content.value,})
        });
        window.location.reload();
    };

    render () {
        return (
            <div id="addComment">
                <form onSubmit={this.handleSubmit}>
                    <input ref={(ref) => {this.content = ref}} placeholder="Kommentaar" type="textarea" name="content"/><br />
                    <button type="Submit">Saada</button>
                </form>
                ​
            </div>);
    }
}
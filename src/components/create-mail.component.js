import React, { Component } from 'react'
import axios from 'axios';

export default class CreateMail extends Component {
    constructor(props) {  
        super(props); 
        
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {  
          firstname: '',  
          lastname: '',  
          emailaddress: '',  
          description: '',  
          mail: []
        }  
      }

    componentDidMount() {
        this.setState({
            mail: ['test mail'],
        })
    }

    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        });
    }
    
    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeEmailAddress(e) {
        this.setState({
            emailaddress: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const mail = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            emailaddress: this.state.emailaddress,
            description: this.state.description
        }

        console.log(mail);

        axios.post('http://localhost:5000/mail/add', mail)
            .then(res => console.log(res.data));
            

        // window.location = '/';
    }

    render() {
        return (
            <div className="header-text-container container">
                <h2 className="text-center">Questions?</h2>
                <h1 className="text-center mb-5">Contact Us</h1>
                <p className="text-center mb-5 mt-5">Aliqua occaecat ea laborum culpa deserunt Lorem sint.</p>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-2">
                                <svg width="2rem" height="2rem" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/></svg>
                            </div>
                            <div className="col-sm-10">
                                <h5>1-800-555-3692</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/></svg>
                        <h5>Explorecincy@explore.com</h5>
                    </div>
                    <div className="col">
                        <h5>Cincinnati, Ohio</h5>
                    </div>
                </div>
                <form className="formToRight" onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <div className="row">
                            <div className="col">
                                <input  type="text"
                                required
                                className="form-control"
                                placeholder="First Name"
                                value={this.state.firstname}
                                onChange={this.onChangeFirstName}
                                />
                            </div>
                            <div className="col">
                                <input  type="text"
                                required
                                className="form-control"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                onChange={this.onChangeLastName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Email Address"
                            value={this.state.emailaddress}
                            onChange={this.onChangeEmailAddress}
                            />
                    </div>
                    <div className="form-group">
                        <textarea 
                            type="text" 
                            className="form-control form-description"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
            
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

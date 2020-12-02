import React, { Component } from 'react'
import axios from 'axios';
import phone from '../assets/icons/phone.png'
import email from '../assets/icons/mail.png'
import location from '../assets/icons/location.png'

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
            <div className="contact-header-container container">
                <h2 className="text-center">Questions?</h2>
                <h1 style={{color:'#FE5000'}} className="text-center mb-5">Contact Us</h1>
                <p className="text-center mb-5 mt-5">Aliqua occaecat ea laborum culpa deserunt Lorem sint.</p>
                <div className="row mb-5">
                    <div className="col">
                        <img className="mr-2" style={{width:'3rem'}}src={phone}/>
                        <h4 style={{display: 'inline-block'}}>1-800-555-3692</h4>
                    </div>
                    <div className="col">
                        <img className="mr-2" style={{width:'3rem'}}src={email}/>
                        <h4 style={{display: 'inline-block'}}>Explorecincy@explore.com</h4>
                    </div>
                    <div className="col">
                        <img className="mr-2" style={{width:'3rem'}}src={location}/>
                        <h4 style={{display: 'inline-block'}}>Cincinnati, Ohio</h4>
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
                        <input type="submit" value="Submit" className="btn contactSubmit" />
                    </div>
                </form>
            </div>
        )
    }
}

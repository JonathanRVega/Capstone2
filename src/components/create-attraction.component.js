import React, { Component } from 'react';

export default class CreateAttraction extends Component {
    constructor(props) {  
        super(props); 
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeZipcode = this.onChangeZipcode.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {  
          name: '',  
          description: '',  
          address: '',  
          zipcode: 0,  
          website: '',
          attractions: []
        }  
      }

      componentDidMount() {
        this.setState({ 
          name: 'test user',
          website: 'test user',
          attractions: ['test user']
        });
      }

      onChangeName(e) {  
        this.setState({  
          name: e.target.value  
        });  
      }onChangeDescription(e) {  
        this.setState({  
          description: e.target.value  
        });  
      }onChangeAddress(e) {  
        this.setState({  
          address: e.target.value  
        });  
      }onChangeZipcode(e) {  
        this.setState({  
          zipcode: e.target.value  
        });  
      }onChangeWebsite(e) {  
        this.setState({  
          website: e.target.value  
        });  
      }
      
      onSubmit(e) {
        e.preventDefault();
        const attraction = {
          name: this.state.name,
          description: this.state.description,
          address: this.state.address,
          zipcode: this.state.zipcode,
          website: this.state.website
        };
      console.log(attraction);
      window.location = '/';
      }

    render() {
        return (
            <div>
            <h3>Add a new attraction!</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Attraction name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.Description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <div className="form-group">
                <label>Address: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    />
              </div>
              <div className="form-group">
                <label>Zipcode: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.zipcode}
                    onChange={this.onChangeZipcode}
                    />
              </div>
              <div className="form-group">
                <label>Website: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.website}
                    onChange={this.onChangeWebsite}
                    />
              </div>
    
    
              <div className="form-group">
                <input type="submit" value="Create New Attraction" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}

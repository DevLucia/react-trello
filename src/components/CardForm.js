import React, { Component } from 'react';
import service from '../services/TrelloService'

class CardForm extends Component {
  
  state={
    title:"",
    description: '',
    label: '',
    imageUrl: ''
  }

  handleChange = (event) => {
    const {name, value, files} = event.target;
    
    this.setState({
      card: {
        ...this.state.card,
        // en caso de que sea un campo normal coge el value, si es un fichero, como files
        // es un array de ficheros cogemos el 0
        [name]: files && files[0] ? files[0] : value
      }
    })
  }

  handleSubmit= (event) => {
    event.preventDefault();
    // service.createCard({ 
    //   ...this.state,
    //   position: this.props.
    // })
      // .then((response) => this.props.onAddColumn())
  }


  render = () => {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="col-4">
          <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Card title</label>
                <input type="text" className="form-control" placeholder="title" name="title"
                value={this.state.title} onChange={this.handleChange}/>
                {/* <small id="emailHelp" className="form-text text-muted">validations</small> */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Label</label>
                <input type="text" className="form-control" placeholder="label" name="label"
                value={this.state.label} onChange={this.handleChange}/>
                {/* <small id="emailHelp" className="form-text text-muted">validations</small> */}
              </div>
              <div className="custom-file">
                <label htmlFor="exampleInputEmail1">Image</label>
                <input type="file" className="custom-file-input" placeholder="file" name="image"
                onChange={this.handleChange}/>
                {this.state.attachment && <img src={URL.createObjectURL(this.state.card.attachment)} alt="preview"/>}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
                <input type="text" className="form-control" placeholder="description" name="description"
                value={this.state.description} onChange={this.handleChange}/>
                {/* <small id="emailHelp" className="form-text text-muted">validations</small> */}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form >
    )
  }
}


export default CardForm;










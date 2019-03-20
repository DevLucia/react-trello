import React, { Component } from 'react';
import Column from './Column';
import service from '../services/TrelloService'
import ColumnForm from './ColumnForm';


class Board extends Component {

  state = {
    columns: [],
    error: ""
  }

  getColumns = () => {
    service.getColumns()
      .then(
        response => this.setState({ columns: response.data}, () =>console.log(this.state.columns)), 
        err => this.setState({error: err})
      )
  }

  componentDidMount = () => {
    this.getColumns()
  }


  columnList = () => this.state.columns.map(column => <Column key={column.position} {...column} />)
  
  render = () => 
  <div className="container-fluid">
    <div className="row">
      {this.columnList()}
      <ColumnForm  position={this.state.columns.length + 1} onAddColumn={this.getColumns}/>
    </div>
  </div>
};

export default Board;
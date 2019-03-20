import React, { Component } from 'react';
import authService from '..//../services/AuthService';
import { Redirect }  from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthStore';

const validators = {
  email: (value) => {
    if(!value){
      return 'Email is required';
    } else if (value.legnth <3){
      return 'At least 3 chars...'
    } else {
      return false
    }
  },
  password: (value) => false
}

class Login extends Component {
  state = {
    user: {
      email: '',
      password:''
    },
    errors: {},
    touch: {},
    isAuthenticated: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const isValid = validators[name] && validators[name](value);
    this.setState({
      user: {...this.state.user, [name]:value},
      errors: {
        ...this.state.user,
        [name]:isValid
      }
    })
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    authService.authenticate(this.state.user)
    .then((user) => {
      this.setState({isAuthenticated: true});
      this.props.onUserChanged(user)
  },
    (error) => console.error(error))
  }

  handleBlur = () => {

  }

  render(){
    if(this.state.isAuthenticated){
      return (<Redirect to="/board"/>)
    } else {
      return(
        <div className="row">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="email" onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.user.email}/>
              <p>{this.state.errors.email}</p>
              <input type="text" name="password" onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.user.password}/>
              <p>{this.state.errors.password}</p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

// para poder utilizar el provider en los componentes que queramos tenemos que meter un
// consumer y decirle que el componente llevará las props que queramos que lleve
// está función es anónima por lo que si inspeccionamos veremos un componente Unknown
export default () => {
  return(
    <AuthContext.Consumer>
      {(props) => (<Login {...props}/>)}
    </AuthContext.Consumer>
  );
}

// En caso de que el componente ya tuviera props se meterían como atributo de la función
// y se cargan junto con las del contexto, se meten las dos
// export default (loginProps) => {
//   return(
//     <AuthContext.Consumer>
//       {(props) => (<Login {...props} {...loginProps}/>)}
//     </AuthContext.Consumer>
//   );
// }

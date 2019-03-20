import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthStore extends Component{
  state = {
    user: {}
  }

  handleUserChange = (user) => {
    this.setState({user: user})
  }

  render(){
    return(
      // el value son las props que heredarán todas los componentes que cuelguen de AuthContext.Provider
      // al cambiar el usuario al hacer un this.setState se renderizan todos lo componentes que lo usen
      // EL provider se pone al nivel del que cuelguen todos los componentes que necesiten losd atos que provee
      <AuthContext.Provider value={{
        user: this.state.user,
        onUserChanged: this.handleUserChange
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthStore }
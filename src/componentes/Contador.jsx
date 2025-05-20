import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial,
  };

  maisUm = () => {
    this.alterarNumero(1);

    // this.setState({ numero: this.state.numero + 1-});
    // this.state.numero = this.state.numero + 1
  };

  menosUm = () => {
   this.alterarNumero(-1);
  };

  alterarNumero = diferenca => {
    this.setState({
      numero: this.state.numero + diferenca,
    });
  };

  render() {
    return (
      <div>
        <div>Numero: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
        <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
      </div>
    );
  }
}

// Solução 01 - Bind no construtor
// constructor(props){
//   super(props)
//   this.maisUm = this.maisUm.bind(this)
// }

// Solução 02 - Arrow Function (onClick)
// <button onClick={() => this.maisUm()}>Inc</button>

// Solução 03 - Arrow Function
// maisUm = () => {
//   this.props.numero++
// console.log(this)
// }

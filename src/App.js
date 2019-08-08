import React from 'react';
import './App.css';
import CardList from './cardlist/CardList-component'
import SearchBox from './serchbox/SearchBox-Component';

class App extends React.Component {

  state = {
    monsters: [],
    filter:''
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.ir/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }

  handelChange =(e) => {
       this.setState({filter : e.target.value})
  }


  render() {
    const {monsters , filter} = this.state;
    const userFiltred = monsters.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <SearchBox onChangeHandeler={this.handelChange} placeholder="search ..."/>
        <CardList users={userFiltred} />
      </>
    )
  }
}

export default App;

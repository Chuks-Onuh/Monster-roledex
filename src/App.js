import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box.jsx';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }; 

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters: users}))
  }

  handleChange(e){
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return ( 
      <div className = 'App'>  
        <h1> Monsters Roledex </h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters}/ >
      </div>
    )
  }
}

export default App;

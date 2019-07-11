import React,{Component} from 'react';
// import logo from './logo.svg';

import  { Cardlist } from './components/card-list/card-list.component';

import {SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
  
    this.state = {
      monsters: [
        {
          name: 'Moe Latt',
          id: '4?set=set5',
          email: 'HandsomeBoy@gmail.com'
        },
        {
          name: 'Htoo Htoo',
          id: '23?set=set4',
          email: 'BeautifulGirl@gmail.com'
        },
        {
          name: 'Kzin',
          id: '8?set=set4',
          email: 'ForeverAlone@gmail.com'
        },
        { 
          name: 'Monster',
          id: '3?set=set2',
          email: 'monster@gmail.com'
        },
        {
          name: 'Dracula',
          id: '2?set=set2',
          email: 'dracula@gmail.com'
        },
        {
          name: 'Evil',
          id: '6?set=set2',
          email: 'evil@gmail.com'
        },
        {
          name: 'Zombie',
          id: '7?set=set2',
          email: 'zombie@gmail.com'
        },
        {
          name: 'Ghost',
          id: '9?set=set2',
          email: 'ghost@gmail.com'
        }
      ],
      searchField: ''
    };
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({monsters: users}))
  // }
  
  render(){
     const{monsters, searchField} = this.state;
    // const monsters = this.state.monsters; same with above line
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
        <div className = 'App'>
            <h2> Welcome to Animated World</h2>
            <SearchBox placeholder = 'search monsters' 
            handelChange = {e => this.setState({searchField: e.target.value})}
             />
          <Cardlist monster = {filteredMonsters}/>
        </div>
    );
  }
}

export default App;

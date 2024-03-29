import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';



class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField:''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }
    handalChange=(e)=> {
        this.setState({ searchField: e.target.value });
    }
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
        return (
            <div>
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="search monsters"
                    handleChange={this.handalChange}
                />

                <CardList monsters={filteredMonsters} />

            </div>
        );
    }
}

export default App;


import { Component } from 'react';
import AppFilter from '../AppFiter/AppFilter';
import AppInfo from '../AppInfo/AppInfo';
import MoviesAddForm from '../MoviesAddForm/MoviesAddForm';
import SearchPanel from '../SerachPanel/SearchPanel';
import MovieList from '../movieList/MovieList';
import './App.css'

class App extends Component() {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          name: 'Osmon of Imperia',
          viewers: 969,
          increase: false
        },
        {
          id: 2,
          name: 'Sulton Abdulhamidhon',
          viewers: 979,
          increase: true
        },
        {
          id: 3,
          name: 'Ertugru',
          viewers: 452,
          increase: false
        },
      ]
    }
  }




   onDelete = id => {
    console.log(id);
  }

  render() {

    const {data} = this.state
    return (
      <div className="app font-monospace">
        <div className='content'>
          <AppInfo />
          <div className='serach-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <div>
            <MovieList onDelete={this.onDelete} data={data} />
            <MoviesAddForm />
          </div>
        </div>
      </div>
    );
  }

}

export default App;

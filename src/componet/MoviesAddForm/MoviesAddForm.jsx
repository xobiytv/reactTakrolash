import React, { Component } from 'react'
import './MoviesAddForm.css'

class MoviesAddForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '+998 (90)-',
      views: ''
    }
  }

  changeHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      // [e.target.views]: e.target.value,
    })
  }
  render() {
    const {name, views} = this.state
    return (
      <div className='MoviesAddForm'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex' action="">
          <input  type="text " className='form-control new-post-label' placeholder='Qanday kino ?' onChange={this.changeHandleInput} name='name' value={name} />
          <input type="number " className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan ?" onChange={this.changeHandleInput} name='views' value={views} />
          <button type='submit' className='btn btn-outline-dark'>
            Qo'shish
          </button>
        </form>
      </div>
    )
  }
}
export default MoviesAddForm 


// export default function MoviesAddForm() {
//   return (
//     <div className='MoviesAddForm'>
//         <h3>Yangi kino qo'shish</h3>
//         <form className='add-form d-flex' action="">
//             <input type="text " className='form-control new-post-label' placeholder='Qanday kino ?' />
//             <input type="number " className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan ?" />
//             <button type='submit' className='btn btn-outline-dark'>
//                 Qo'shish
//             </button>
//         </form>
//     </div>
//   )
// }

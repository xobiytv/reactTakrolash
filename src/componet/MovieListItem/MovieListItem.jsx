import React, { Component } from 'react'
import './MovieListItem.css'

class MovieListItem extends Component {
    constructor (props) {
        super(props)
        this.state = {increase: false, like: false }
        
    }
    onFeveret = () => {
        this.setState(({increase}) => ({
            increase: ! increase
        }))
    }
    onLike = () => {
        this.setState(({like}) => ({
            like: ! like
        }))
    }
    render() {
        const { name, viewers, id, onDelete } = this.props
        const {increase, like} = this.state
        return (
            <li key={id} className={`MovieListItem d-flex justify-content-between ${increase && 'increase'} ${like && 'like'} `}>
                <span onClick={this.onLike} className='list-group-item-label'>{name}</span>
                <input type="number" className='list-group-item-input' defaultValue={viewers} />

                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onFeveret} className='btn-sm btn-cookie '>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button className='btn-sm btn-trash ' onClick={onDelete}>
                        <i className='fas fa-trash'></i>
                    </button>

                    <i className='fas fa-star'></i>

                </div>
            </li>
        )

    }
}

export default MovieListItem
// export default function MovieListItem({name, viewers, increase, id}) {
//     return (
//         <li key={id} className={`MovieListItem d-flex justify-content-between ${increase && 'increase'} `}>
//             <span className='list-group-item-label'>{name}</span>
//             <input type="number" className='list-group-item-input' defaultValue={viewers} />

//             <div className='d-flex justify-content-center align-items-center'>
//                 <button className='btn-sm btn-cookie '>
//                     <i className='fas fa-cookie'></i>
//                 </button>
//                 <button className='btn-sm btn-trash '>
//                     <i className='fas fa-trash'></i>
//                 </button>

//                 <i className='fas fa-star'></i>

//             </div>
//         </li>
//     )
// }

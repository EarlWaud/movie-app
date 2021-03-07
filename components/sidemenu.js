// import { useState } from 'react'
import { useRouter } from 'next/router'
// import { getCategories } from "../actions"
import Modal from "../components/modal"
import MovieCreateForm from "./moviecreateform"
// import MovieList from "./movielist"
import { createMovie } from "../actions"

// Containment
const SideMenu = (props) => {

  const { categories } = props
  const router = useRouter()
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      // close modal after create
      // console.log(JSON.stringify(movies))
      modal.closeModal()
      router.push('/')
    })
  }

  return (
    <div>
      <Modal ref={ele => modal = ele} needsSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        { categories.map(c =>
            <a 
              onClick={() => props.changeCategory(c.name)}
              key={c.id}
              className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name} 
            </a>
          )
        }
      </div>

    </div>
  )
}

export default SideMenu
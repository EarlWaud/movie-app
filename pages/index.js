import React, { useState, useEffect } from 'react'
import SideMenu from '../components/sidemenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movielist'

import { getMovies, getCategories } from '../actions'

const Home = (props) => {

  // console.log(JSON.stringify(props.images))
  const { images, categories, movies } = props
  const [ filter, setFilter ] = useState('all')

  const changeCategory = category => {
    setFilter(category)
  }

  const filterMovies = movies => {
    if (filter === 'all') {
      return movies
    }
    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter)
    })
  }

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">

          <div className="col-lg-3">
            <SideMenu
              changeCategory={changeCategory}
              activeCategory={filter}
              categories={categories}
              appName={"Categories"}
            />
          </div>

          <div className="col-lg-9">

            <Carousel images={images} />
            <h2>Displaying {filter} movies</h2>
            <div className="row">
              <MovieList movies={filterMovies(movies) || []} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

//[{id: 'image-1', image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'}]

Home.getInitialProps = async () => {

  // console.log('Calling getInitialProps from Home')
  const movies = await getMovies()
  const categories = await getCategories()
  const images = movies.map(movie => ({
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name }))

  return {
    movies,
    images,
    categories
  }
}


// class Home extends React.Component {

//   static async getInitialProps() {
//     const movies = await getMovies()

//     return {
//       movies
//     }
//   }

//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     movies: [],
//   //     errorMessage: ''
//   //   }
//   // }

//   // state = {
//   //   movies: []
//   // }

//   // // Called only once when a component is mounted
//   // async componentDidMount() {
//   //   const movies = await getMovies()   
//   //   this.setState({movies})
//   // }

//   // // This function is only called on client side
//   // componentDidMount() {
//   //   getMovies()
//   //     .then((movies) => {
//   //       this.setState({movies})
//   //     })
//   //     .catch((error) => {
//   //       this.setState({errorMessage: error})
//   //       console.log(error)
//   //     })
//   // }


//   render() {
//     const { movies } = this.props
//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//         </Head>

//         <NavBar />
//         <div className="home-page">
//           <div className="container">
//             <div className="row">

//               <div className="col-lg-3">
//                 <SideMenu
//                   appName={"Movie DB"}
//                 />
//               </div>

//               <div className="col-lg-9">

//                 <Carousel />
//                 <div className="row">
//                   {/* { errorMessage && 
//                     <div className="alert alert-danger" role="alert">
//                       There is a problem: {errorMessage }
//                     </div>
//                   } */}
//                   <MovieList movies={movies} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <style jsx>{`
//             .home-page {
//                 padding-top: 60px;
//               }
//             `}
//         </style>
//       </div>
//     )
//   }
// }

export default Home
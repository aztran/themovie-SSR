import { useState } from 'react'
import axios from 'axios';
import api from "utils/api";
import MoviesCard from 'components/MoviesCard';
import PaginationMovie from 'components/Pagination';
import Search from 'components/Search';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../action';
import Select from 'components/Select';


const Home = (props) => {
  const Sorting = [
    {
      value: 'popularity.asc',
      label: 'Popularity Ascending'
    },
    {
      value: 'popularity.desc',
      label: 'Popularity Descending'
    },
    {
      value: 'vote_average.asc',
      label: 'Rating Ascending'
    },
    {
      value: 'vote_average.desc',
      label: 'Rating Descending'
    },
  ]
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [valuSort, setValueSort] = useState(Sorting[0].value)

  const { movies, total_pages, isSearch } = props;
  const dispatch = useDispatch();



  const handlePageClick = data => {
    setPage(data);
    dispatch(fetchMovies(search, data));
  };

  const onSearch = () => {
    setPage(1);
    dispatch(fetchMovies(search, page));
  }

  const handleSort = event => {
    setValueSort(event.target.value);
    dispatch(fetchMovies(search, page, event.target.value));
  }

  return (
    <div className="container home">
      <div className="row">
        <div className="col-md-6">
          <Search handleSearch={onSearch} name="searchTerm" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="col-md-6">
          <Select lists={Sorting} onChange={handleSort} />
        </div>
      </div>
      <div className="row">
        {movies.length > 0 ? movies.map(movie => {
          const { poster_path, title, release_date, overview, id, vote_average } = movie;
          return (
            <div className="col-md-6 mb-5" key={id}>
              <MoviesCard title={title} image={poster_path} release_date={release_date} overview={overview} vote_average={vote_average} />
            </div>
          )
        }) : <div className="container">
            <h2>There are no movies that matched your query.</h2>
          </div>}
      </div>
      <div className="row">
        {movies.length > 0 && <PaginationMovie
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={total_pages}
          pageRangeDisplayed={5}
          onChange={handlePageClick}
        />}
      </div>

      <style jsx>{`
          .home {
            padding-top: 120px;
          }

          
    `}</style>

      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

    `}</style>
    </div>
  )
}

Home.getInitialProps = async ({ store, query: { page = 1 } }) => {
  const movies = await axios({
    method: 'GET',
    url: `${api.BASE_URL}${api.DISCOVER_MOVIE}`,
    params: {
      api_key: api.API_KEY,
      language: api.LANG,
      page: parseInt(page),
    },
  });

  store.dispatch({ type: 'FETCH_MOVIES', payload: movies.data.results, totalPages: movies.data.total_pages, isSearch: null });
};

const mapStateToProps = state => ({
  movies: state.movies,
  total_pages: state.total_pages,
  isSearch: state.isSearch
})

export default connect(mapStateToProps)(Home)

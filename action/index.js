import axios from 'axios';
import api from "utils/api";
export const fetchMovies = (isSearch, page, sort = '') => async dispatch => {
    // console.log(sort)
    try {
        const res = await axios({
            method: 'GET',
            url: isSearch === '' ? `${api.BASE_URL}${api.DISCOVER_MOVIE}` : `${api.BASE_URL}${api.SEARCH_MOVIES}`,
            params: {
                api_key: api.API_KEY,
                language: api.LANG,
                query: isSearch === '' ? '' : isSearch,
                page: page,
                sort_by: sort
            },
        });

        let data = [];
        data = res.data.results.filter(filter => { return filter !== null })
        // console.log(res.data.results);

        dispatch({
            type: 'FETCH_MOVIES',
            payload: data,
            totalPages: res.data.total_pages,
            isSearch: isSearch,
            sortBy: sort
        })
        // console.log(dispatch)

    } catch (error) {

    }
}
import App from 'next/app';
import Navbar from '../components/Navbar';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import thunkMiddleware from 'redux-thunk'

const initialState = {
    movies: null,
    total_pages: null,
    isSearch: null,
    sortBy: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return { ...state, movies: action.payload, total_pages: action.totalPages, isSearch: action.isSearch, sortBy: action.sortBy };
        default:
            return state
    }
};

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

class _app extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps };
    };
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Provider store={store}>
                <Navbar />
                <div>
                    <Component  {...pageProps} />
                </div>
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

                    .movie-wrapper {
                            padding-top: 120px;
                        }

                    `}
                </style>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(_app);

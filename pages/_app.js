import App from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import "@fortawesome/fontawesome-free/css/all.min.css";
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

}

const reducer = (state = initialState, action) => {
    console.log(action, 'action');
    switch (action.type) {
        case 'FETCH_MOVIES':
            return { ...state, movies: action.payload, total_pages: action.totalPages, isSearch: action.isSearch };
        default:
            return state
    }
};

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
    // const store = createStore(
    //     reducer,
    //     initialState,
    //     composeWithDevTools(applyMiddleware(...middleware))
    // );
    // return store
};

// const makeStore = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );



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
                <Head>
                    <title>The Movie DB</title>
                    {/* <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <script
                        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossorigin="anonymous"
                    ></script>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"
                    ></script> */}
                </Head>
                <Navbar />
                <div>

                    <Component  {...pageProps} />
                </div>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(_app);

import React from 'react';

const MoviesCard = ({ image, title, release_date, overview, vote_average }) => {
    return (
        <div className="card card-movie">
            <img className="card-img-top img-movie" src={`https://image.tmdb.org/t/p/w500/${image}`} alt="Card image cap" />
            <div className="card-body-movie">
                <div className="title-wrapper">
                    <h5 className="card-title">{title}</h5>
                    <span className="bg-warning text-white text-rounded">{vote_average}</span>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{release_date}</h6>
                <h6>Overview</h6>
                <hr />
                <p className="card-text">{overview.substr(0, 200)} ...</p>
            </div>
            <style jsx>
                {`
                    .card-movie {
                        flex-direction: row !important;
                    }

                    .img-movie {
                        width: 185px;
                        height: 278px;
                    }

                    .title-wrapper {
                        display: flex;
                        justify-content: space-between;
                    }

                    .text-rounded {
                        border-radius: 50%;
                        font-size: 10px;
                        padding: 2px;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                    }

                    .card-body-movie {
                        padding: 1.25rem;
                    }
                `}
            </style>
        </div>
    );

}

export default MoviesCard;

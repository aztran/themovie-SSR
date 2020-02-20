import React from 'react';

const Search = ({ handleSearch, ...props }) => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Movie" {...props} />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={handleSearch} type="button">Search</button>
            </div>
        </div>
    );
}

export default Search;

import React from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from "react-js-pagination";
// import "bootstrap/less/bootstrap.less";

const PaginationMovie = (props) => {
    return (
        <div className="pagination-wrapper">
            <Pagination {...props} itemClass="page-item"
                linkClass="page-link">
            </Pagination>
            <style jsx> {`
                .pagination-wrapper {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                }

              .pagination-movie {
                    margin-top: 30px;
                    color: #000;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    align-content: center;
                    max-width: 500px;
                    width: auto;
                    padding-left: 0;
                    list-style: none;
                }

                .previous, .next {
                    padding: 2px 8px;
                    margin-right: 4px;
                    font-style: normal;
                    font-weight: 400;
                }

                
            `}
            </style>
        </div>
    );
}

export default PaginationMovie;

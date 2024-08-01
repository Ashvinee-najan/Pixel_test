import React from "react";

import "./pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, id) => {
                return (
                    <button
                        key={id}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
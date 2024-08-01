import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import UserList from './componenet/UserList';
import Filters from './componenet/Filters';
import Sorting from './componenet/Sorting';
import Pagination from './componenet/pagination';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

const App = () => {

  const[users , setUsers] =useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [genderFilter, setGenderFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const[currentPage , setCurrentPage] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, [page, sortBy, sortOrder, genderFilter, countryFilter]);

  const fetchUsers = async () => {
    const limit = 10;
    const skip = page * limit;
    const response = await axios.get('https://dummyjson.com/users', {
      params: {
        limit,
        skip,
        sortBy,
        sortOrder,
        gender: genderFilter,
        country: countryFilter,
      },
    });
    const newUsers = response.data.users;
    setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    if (newUsers.length < limit) {
      setHasMore(false);
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSort = (field) => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(field);
    setSortOrder(order);
    setPage(0);
    setUsers([]);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setPage(0);
    setUsers([]);
  };
  //pagination
  const postperpage=10;
  const lastPostIndex = currentPage * postperpage;
  const firstPostIndex = lastPostIndex - postperpage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);
 
  return (
    <div className="container">
     <div>
      <h2>User List</h2>
     </div>

      <Filters handleFilterChange={handleFilter}   />
    <Sorting /> 
      <UserList users={currentPosts}  />
      <Pagination
                totalPosts={users.length}
                postperpage={postperpage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            
            /> 
             <InfiniteScroll
        dataLength={users.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>loading...</h4>}
      />
    
    </div>
  );
};

export default App;

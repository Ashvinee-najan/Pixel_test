import React from 'react';

const Filters = ({ handlefilterChange }) => {
  return (
    <div className="filters">
         <div className="filter">
      <label>
        Gender:
        </label>
        <select name="gender" onChange={handlefilterChange}>
          <option value="">All</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
    
     
      <label>
        Country:
        </label>
        <input type="text" name="country" onChange={handlefilterChange}  placeholder='serach'/>
        </div>
    </div>
  );
};

export default Filters;

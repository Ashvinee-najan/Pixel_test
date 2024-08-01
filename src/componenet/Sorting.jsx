import React from 'react';

const Sorting = ({ requestSort }) => {
  return (
    <div className="sorting">
      <button onClick={() => requestSort('id')}>Sort by ID</button>
      <button onClick={() => requestSort('firstName')}>Sort by Name</button>
      <button onClick={() => requestSort('age')}>Sort by Age</button>
    </div>
  );
};

export default Sorting;

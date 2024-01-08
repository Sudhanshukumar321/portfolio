import React from 'react'
import './blogFooter.css';
import { useContext } from 'react';
import { BlogContext } from '../../../context/BlogContext';

export const BlogFooter = () => {
  const {page,totalPages,pageChangeHandler} = useContext(BlogContext);

  return (
    <div className='blogPagination'>
      <div className="button">
        {
          page > 1 && <button onClick={()=>pageChangeHandler(page-1)}>Previous</button>
        }
        
        {
          page < totalPages && <button onClick={()=>pageChangeHandler(page+1)}>Next</button>
        }
        
      </div>
      <div className='pageIndex'>
        <p>page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

import React from 'react';
import CategoryComponent from '../../utils/categoryComponent/categoryComponent';

const Posts = () => {
    const categoryName = "Posts";
    const baseURL = "https://61c03bd033f24c00178231de.mockapi.io/resources";
    const getParams = {category: "posts"};

    return(
        <CategoryComponent 
        categoryName={categoryName} 
        baseURL={baseURL} 
        getParams={getParams}
        pagination={true}
        />
    );
}

export default Posts;
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import _ from 'lodash/flatten'


export const Reddit = props => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);

  
  // instead of using promises and `.then()s`, we can use 
  // asynchronous programming with async await. 
  const callWithFetch = async urls => {
    const promises = urls.map(async url => {
      const response = await fetch(`https://www.reddit.com/r/${url}.json`);
      const json = await response.json();
      const results = json.data.children.map(obj => obj.data);

      return results
    })

    const resolvedPromises = await Promise.all(promises)    

    console.log(resolvedPromises)

    const resolvedPromisesArray = _.flatten(resolvedPromises)

    const shuffledPromises = _.shuffle(resolvedPromisesArray)

    setAllPosts(shuffledPromises)
    setPosts(shuffledPromises)
  };

  // Use effect allows for us to program side effects with our
  // functional componennts. This way we can kick off a side
  // effect like a network call. What should be noted is that
  // this should be treated as if it were an equivalent to both
  // component did mount, and component did update. Basically, 
  // it's a question of whether or not we called render.
  useEffect(() => {
    if (allPosts.length === 0) {
      callWithFetch(['birdswitharms', 'aviation'])
    }
  });



  // UPDATE THE TITLE!
  // This code will get run after every update and update
  // the title of the page/tab
  useEffect(() => {
    document.title = `Showing ${posts.length} posts`
  })



  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setPosts(allPosts.filter(post => post.title.includes(event.target.value)));
  };

  return (
    <div>
      <h1>r/{props.subreddit}</h1>
      <div> FILTER </div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <br />
            <img alt='loading' src={post.thumbnail} />
            {post.title}
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};


ReactDOM.render(<Reddit subreddit={'birdswitharms'} />, document.querySelector("#root"));

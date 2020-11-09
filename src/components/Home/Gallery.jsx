import React, { useState, useEffect } from "react";
import "../../styles/Gallery.scss";
import Pagination from "./Pagination";
import axios from "axios";

const PAGE_POSTS = "posts";
const PAGE_LIKES = "likes";

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [like, setLike] = useState([]);
  const [page, setPage] = useState(PAGE_POSTS);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addLike = (post) => {
    setLike([...like, { ...post }]);
  };

  const removeFromLike = (postToRemove) => {
    setLike(like.filter((post) => post !== postToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const renderPosts = () => (
    <>
      <ul className="Gallery-Con">
        {currentPosts.map((post) => (
          <li key={post.id} className="Gallery-Item-Con">
            <img src={post.download_url} alt="" />
            <div className="Author-Btn-Con">
              <p>{post.author}</p>
              <p onClick={() => addLike(post)}>Like</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  const renderLikes = () => (
    <>
      <ul className="Gallery-Con">
        {like.map((post) => (
          <li key={post.id} className="Gallery-Item-Con">
            <img src={post.download_url} alt="" />
            <div className="Author-Btn-Con">
              <p>{post.author}</p>
              <p onClick={() => removeFromLike(post)}>Remove</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="Gallery">
      <header>
        <div className="Header-Btns-Con">
          <button onClick={() => navigateTo(PAGE_LIKES)}>
            Go to Like Page({like.length})
          </button>
          <button onClick={() => navigateTo(PAGE_POSTS)}>View Gallery</button>
        </div>
      </header>
      {page === PAGE_POSTS && renderPosts()}
      {page === PAGE_LIKES && renderLikes()}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
export default Gallery;

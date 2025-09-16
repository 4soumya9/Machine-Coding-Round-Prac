import React, { useEffect, useState } from "react";
import { useCallback } from "react";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(-1);
  //   const [page, setPage] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  //throttle function
  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  //Fetch posts
  const fetchPosts = async () => {
    if (!hasMore || loading) {
      return;
    }
    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10}`
      );
      const data = await res.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // load first page on mount
  useEffect(() => {
    setPage(0);
  }, []);

  // fetch when page changes
  useEffect(() => {
    if (page >= 0) {
      fetchPosts();
    }
  }, [page]);

  //Memorized scroll handler with usecallback

  const handleScroll = useCallback(
    throttle(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.scrollHeight
      ) {
        console.log("jiii");
        setPage((prev) => prev + 1);
      }
    }, 5000),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Infinite Scroll</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.id}</h3>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
      <button onClick={handleMore}>Add more</button>
    </div>
  );
};

export default InfiniteScroll;

/*The DummyJSON API supports pagination using:

limit → how many items to fetch per request.

skip → how many items to skip from the start before fetching.*/

/*Why skip = page * 10?

Each page skips everything that came before.

If limit = 10, then:

Page 0 skips 0 × 10 = 0 → start at item 1

Page 1 skips 1 × 10 = 10 → start at item 11

Page 2 skips 2 × 10 = 20 → start at item 21

This way, you get unique items each time, no duplicates ✅*/

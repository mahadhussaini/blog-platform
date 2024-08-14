import React from "react";
import BlogList from "../components/blog/BlogList";
import BlogPost from "../components/blog/BlogPost";
import "../pages/Home.css";
import { usePosts } from "../contexts/PostContext ";

const Home = () => {
  const { posts, isLoading, error, deletePost } = usePosts();

  const defaultPosts = [
    {
      id: 1,
      title: "Introduction to React",
      content:
        "React is a powerful JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components.",
      author: "John Doe",
      featured: true,
      isCreatedByUser: false,
    },
    {
      id: 2,
      title: "React Component Lifecycle",
      content:
        "Understanding the component lifecycle in React is essential for managing how your components behave at different stages of their existence. This includes mounting, updating, and unmounting.",
      author: "Jane Smith",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 3,
      title: "Using React Hooks",
      content:
        "React Hooks, such as useState and useEffect, allow you to use state and other React features in functional components. Hooks have revolutionized how we write React components.",
      author: "Alice Johnson",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 4,
      title: "State Management in React",
      content:
        "State management is a crucial aspect of React development. From simple local state management using useState to more complex solutions like Redux, this article covers the basics and advanced techniques.",
      author: "Michael Lee",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 5,
      title: "React Router: A Complete Guide",
      content:
        "React Router is a powerful tool for managing navigation in your React applications. This guide covers how to set up and use React Router to create dynamic routing in your apps.",
      author: "Sarah Brown",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 6,
      title: "Optimizing React Performance",
      content:
        "Performance optimization is key in large React applications. Learn about techniques such as memoization, lazy loading, and code splitting to improve the performance of your React apps.",
      author: "David Clark",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 7,
      title: "Building Forms in React",
      content:
        "Forms are a fundamental part of web applications. This post covers how to build and manage forms in React, including form validation, controlled components, and form libraries like Formik.",
      author: "Emma Wilson",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 8,
      title: "Testing React Applications",
      content:
        "Testing is crucial to ensure your React components work as expected. This post explores various tools and approaches for testing React applications, including Jest and React Testing Library.",
      author: "Olivia Martinez",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 9,
      title: "React Context API: An Alternative to Redux",
      content:
        "The Context API in React provides a way to share state across the entire app without passing props down manually. This post compares Context API with Redux and explores when to use each.",
      author: "James Anderson",
      featured: false,
      isCreatedByUser: false,
    },
    {
      id: 10,
      title: "Building Custom Hooks in React",
      content:
        "Custom Hooks allow you to extract and reuse logic across multiple components. This article demonstrates how to build your own custom hooks and when it’s appropriate to use them.",
      author: "Sophia Taylor",
      featured: false,
      isCreatedByUser: false,
    },
  ];

  const activePosts = posts.length > 0 ? posts : defaultPosts;

  const featuredPost = activePosts.find((post) => post.featured);

  return (
    <div className="home">
      <h1>Welcome to Bloggify</h1>

      {featuredPost && (
        <div className="featured-post">
          <h2>Featured Post</h2>
          <BlogPost post={featuredPost} />
        </div>
      )}

      <h2>Latest Posts</h2>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>Error loading posts: {error}</p>
      ) : (
        <BlogList
          posts={activePosts}
          onDelete={deletePost}
          loading={undefined}
        />
      )}
    </div>
  );
};

export default Home;

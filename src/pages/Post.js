import React from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/blog/BlogPost";
import Comments from "../components/blog/Comments";
import "../pages/Post.css";

const mockPosts = [
  {
    id: "1",
    title: "Getting Started with React",
    content:
      "React is a JavaScript library for building user interfaces. Learn how to set up your first React app and understand the basics of components and JSX.",
    author: "John Doe",
  },
  {
    id: "2",
    title: "Understanding React State and Props",
    content:
      "State and props are key concepts in React. This post explains how to manage state and pass data between components using props.",
    author: "Jane Smith",
  },
  {
    id: "3",
    title: "A Deep Dive into React Lifecycle Methods",
    content:
      "React components go through different phases during their existence. Explore the lifecycle methods and how to use them effectively in class components.",
    author: "Alice Johnson",
  },
  {
    id: "4",
    title: "Building a To-Do App with React",
    content:
      "Learn how to build a simple and functional To-Do app using React. This tutorial covers component structure, state management, and event handling.",
    author: "Michael Lee",
  },
  {
    id: "5",
    title: "React Hooks: Revolutionizing Functional Components",
    content:
      "React Hooks, like useState and useEffect, allow you to use state and other React features without writing a class. Discover how hooks work and why they are so powerful.",
    author: "Sarah Brown",
  },
  {
    id: "6",
    title: "Using React Context for State Management",
    content:
      "React Context API provides a way to share state across the entire app without passing props manually. Learn how to set up and use Context effectively.",
    author: "David Clark",
  },
  {
    id: "7",
    title: "Handling Forms in React",
    content:
      "Forms are a common part of web applications. This post covers best practices for handling forms in React, including controlled and uncontrolled components.",
    author: "Emma Wilson",
  },
  {
    id: "8",
    title: "Optimizing Performance in React Applications",
    content:
      "Performance is crucial in large React apps. Learn about techniques like memoization, lazy loading, and code splitting to keep your apps running smoothly.",
    author: "Olivia Martinez",
  },
  {
    id: "9",
    title: "Introduction to React Router",
    content:
      "React Router is a popular library for handling navigation in React apps. This post walks you through the basics of setting up and using React Router in your project.",
    author: "James Anderson",
  },
  {
    id: "10",
    title: "Testing React Components with Jest and Enzyme",
    content:
      "Testing is a critical part of software development. Learn how to test your React components using Jest and Enzyme to ensure they work as expected.",
    author: "Sophia Taylor",
  },
];

const mockComments = {
  1: [
    {
      id: "1",
      postId: "1",
      content:
        "Great introduction to React! I found the explanation of components and JSX very helpful.",
    },
    {
      id: "2",
      postId: "1",
      content:
        "Thanks for this post. It really helped me get started with React.",
    },
    {
      id: "3",
      postId: "1",
      content:
        "Can you also explain how to set up a React project with Create React App?",
    },
    {
      id: "4",
      postId: "1",
      content:
        "Nice article! Looking forward to more beginner-friendly content.",
    },
  ],
  2: [
    {
      id: "5",
      postId: "2",
      content:
        "The distinction between state and props is really clear now, thanks!",
    },
    {
      id: "6",
      postId: "2",
      content:
        "I was struggling with passing data between components, but this post cleared it up for me.",
    },
  ],
  3: [
    {
      id: "7",
      postId: "3",
      content:
        "Lifecycle methods were always confusing to me, but your explanation made it easier to understand.",
    },
    {
      id: "8",
      postId: "3",
      content:
        "Very informative! I didn’t know about the use of `componentDidUpdate` before this.",
    },
  ],
  4: [
    {
      id: "9",
      postId: "4",
      content:
        "I built the To-Do app following your tutorial. It was a great hands-on learning experience!",
    },
    {
      id: "10",
      postId: "4",
      content:
        "Could you add a section on how to handle completed tasks in the To-Do app?",
    },
    {
      id: "11",
      postId: "4",
      content: "This was really fun! The app works perfectly.",
    },
  ],
  5: [
    {
      id: "12",
      postId: "5",
      content:
        "React Hooks have completely changed the way I write React components. Thanks for the detailed explanation!",
    },
    {
      id: "13",
      postId: "5",
      content:
        "I love using hooks! `useState` and `useEffect` make the code so much cleaner.",
    },
  ],
  6: [
    {
      id: "14",
      postId: "6",
      content:
        "The Context API is so much easier to work with compared to Redux for smaller projects.",
    },
    {
      id: "15",
      postId: "6",
      content:
        "Great overview of Context! Can you also cover how to use it with hooks?",
    },
  ],
  7: [
    {
      id: "16",
      postId: "7",
      content:
        "Forms have always been tricky in React, but this guide helped me a lot. Thank you!",
    },
    {
      id: "17",
      postId: "7",
      content: "Would love to see more examples of form validation in React.",
    },
  ],
  8: [
    {
      id: "18",
      postId: "8",
      content:
        "I applied the optimization techniques from this post, and my app runs much smoother now.",
    },
    {
      id: "19",
      postId: "8",
      content: "The section on memoization was really helpful. Thanks!",
    },
  ],
  9: [
    {
      id: "20",
      postId: "9",
      content:
        "This is exactly what I needed to start using React Router. Great guide!",
    },
    {
      id: "21",
      postId: "9",
      content:
        "Could you explain nested routing in more detail? It’s still a bit confusing.",
    },
  ],
  10: [
    {
      id: "22",
      postId: "10",
      content:
        "Testing has always been challenging for me, but this post made it easier to understand.",
    },
    {
      id: "23",
      postId: "10",
      content:
        "Great examples! Jest and Enzyme are a powerful combination for testing React components.",
    },
  ],
};

const Post = () => {
  const { id } = useParams();
  const post = mockPosts.find((post) => post.id === id);
  const comments = mockComments[id] || [];

  if (!post) {
    return <p>Post Loading...</p>;
  }

  return (
    <div className="post">
      <BlogPost post={post} />
      <Comments comments={comments} onAddComment={() => {}} error={undefined} />
    </div>
  );
};

export default Post;

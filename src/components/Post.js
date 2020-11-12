import React from "react";

export default function Post({ post }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h1>Post work! {post.title}</h1>
        </div>
      </div>
    </div>
  );
}

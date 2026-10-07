import React, { useState } from 'react';

function Likesdislikes() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="likes-dislikes">
      <h2>Likes & Dislikes</h2>

      <div className="like-section">
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>👍 Like</button>
      </div>

      <div className="dislike-section">
        <p>Dislikes: {dislikes}</p>
        <button onClick={handleDislike}>👎 Dislike</button>
      </div>
    </div>
  );
}

export default Likesdislikes;

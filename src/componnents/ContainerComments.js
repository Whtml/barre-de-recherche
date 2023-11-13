import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
   {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: -200px;
  }

  .comment-flexbox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .comment-text {
    margin: 12px 0;
    font-size: 1.15rem;
    font-weight: 600;
  }

  .input-box {
    height: 75px;
    width: 465px;
    background-color: #ffffff;
  }

  .comment-button {
    height: 40px;
    width: 80px;
    background-color: #1b0fff;
    color: white;
    font-size: 1.05rem;
    margin-top: 10px;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
  }

  .comment-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 465px;
    background-color: #f0f0f0;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    margin: 10px 0;
    word-break: break-all;
  }

  .user-name {
    font-weight: bold;
  }
`;

function ContainerComments({ teamId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Charger les commentaires depuis le stockage local lorsque la page se charge
    const storedComments = localStorage.getItem(`teamComments-${teamId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [teamId]);

  const saveCommentsToLocalStorage = (teamId, comments) => {
    // Enregistrer les commentaires dans le stockage local
    localStorage.setItem(`teamComments-${teamId}`, JSON.stringify(comments));
  };

  const onClickHandler = () => {
    if (userName && email && comment) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
      const newComment = { userName, comment, date: formattedDate };

      const updatedComments = [...comments, newComment];
      setComments(updatedComments);

      // Enregistrer les commentaires mis à jour dans le stockage local
      saveCommentsToLocalStorage(teamId, updatedComments);

      setUserName("");
      setEmail("");
      setComment("");
    }
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <input
          type="text"
          value={userName}
          onChange={onUserNameChange}
          placeholder="User Name"
          className="input-box"
        />
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="input-box"
        />
        <textarea
          value={comment}
          onChange={onChangeHandler}
          placeholder="Your comment..."
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
        {comments.map((entry, index) => (
          <div className="comment-container" key={index}>
            <span className="user-name">{entry.userName}:</span>
            <span className="comment-date">{entry.date}</span>
            {entry.comment}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ContainerComments;

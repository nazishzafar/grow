import {FaReply,FaEdit,FaTrashAlt,FaThumbsUp,FaThumbsDown} from 'react-icons/fa'
import React, { useState } from "react";


const CommunityBtn = ({commentData, setReplying, setDeleting, setDeleteModalState, setEditing}) => {
  // adding reply

  // console.log(setReplying, setDeleting, se)

  const [like,setLike]=useState(100)
  const [dislike,setDisLike]=useState(4)
  const [likeActive,setLikeActive]=useState(false)
  const [dislikeActive,setDisLikeActive]=useState(false)
  
function likeFunc(){
  if(likeActive){
    setLikeActive(false)
    setLike(like-1)
  }
  else{
    setLikeActive(true)
    setLike(like+1)
    if(dislikeActive){
      setDisLikeActive(false)
      setLike(like+1)
      setDisLike(dislike-1)
    }
  }
}


function dislikeFunc(){
  if(dislikeActive){
    setDisLikeActive(false)
    setDisLike(dislike-1)
  }
  else{
    setDisLikeActive(true)
    setLike(dislike+1)
    if(likeActive){
      setLikeActive(false)
      setDisLike(dislike+1)
      setLike(like-1)
    }
  }
}

  let counter = false;
  const showAddComment = () => {
    counter ? setReplying(false) : setReplying(true);
    counter = true;
  };

  // delete comment
  const showDeleteModal = () => {
    setDeleting(true);
    setDeleteModalState(true);
  };

  // edit comment
  const showEditComment = () => {
    setEditing(true);
  };

  return (
    <div className="comment--btn">
      <button
        className={`reply-btn ${
          !commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showAddComment}
      >
      


        <FaReply /> Reply
      </button>
      <button onClick={likeFunc}><FaThumbsUp/>Like{like}</button>
        <button onClick={dislikeFunc}><FaThumbsDown/>Dislike{dislike}</button>
      <button
        className={`delete-btn ${
          commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showDeleteModal}
      >
        <FaTrashAlt /> Delete
      </button>
      <button
        className={`edit-btn ${commentData.currentUser ? "" : "display--none"}`}
        onClick={showEditComment}
      >
        <FaEdit /> Edit
      </button>
    </div>
  );
};

export default CommunityBtn;

import {FaReply,FaEdit,FaTrashAlt} from 'react-icons/fa'


const CommunityBtn = ({commentData, setReplying, setDeleting, setDeleteModalState, setEditing}) => {
  // adding reply

  // console.log(setReplying, setDeleting, se)

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
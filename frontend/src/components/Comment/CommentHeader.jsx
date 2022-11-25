const CommentHeader = ({
  commentData,
  setReplying,
  setDeleting,
  setDeleteModalState,
  setEditing,
  time,
}) => {
  return (
    <div className="comment--header ">
      <div className="">
        <div className="flex gap-9">
          <div className="username font-bold">{commentData.username}</div>
          {commentData.currentUser ? <div className="you-tag">you</div> : ""}
          <div className="comment-posted-time italic">{`${time} ago`}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentHeader;

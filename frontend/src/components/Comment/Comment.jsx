import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import ReplyContainer from "./ReplyContainer";
import DeleteModal from "./DeleteModal";
import CommentVotes from "./CommentVotes";
import CommentHeader from "./CommentHeader";
import CommentFooter from "./CommentFooter";
import { commentPostedTime } from "../../data/fakedata/time";
import CommentBtn from "./CommentBtn";
const styles = {
  content_comment: {
    maxWidth: "50%",
  },
  comment: {
    backgroundColor: "#FBEAAB",
  },
};
const Comment = ({
  commentData,
  updateScore,
  updateReplies,
  editComment,
  commentDelete,
  setDeleteModalState,
}) => {
  const [replying, setReplying] = useState(false);
  const [time, setTime] = useState("");
  const [vote, setVoted] = useState(false);
  const [score, setScore] = useState(commentData.score);
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(commentData.content);
  const [deleting, setDeleting] = useState(false);

  // get time from comment posted
  const createdAt = new Date(commentData.createdAt);
  const today = new Date();
  const differenceInTime = today.getTime() - createdAt.getTime();

  useEffect(() => {
    setTime(commentPostedTime(differenceInTime));
    localStorage.setItem("voteState", vote);
  }, [differenceInTime, vote]);

  const addReply = (newReply) => {
    const replies = [...commentData.replies, newReply];
    updateReplies(replies, commentData.id);
    setReplying(false);
  };

  const updateComment = () => {
    editComment(content, commentData.id, "comment");
    setEditing(false);
  };

  const deleteComment = (id, type) => {
    const finalType = type !== undefined ? type : "comment";
    const finalId = id !== undefined ? id : commentData.id;
    commentDelete(finalId, finalType, commentData.id);
    setDeleting(false);
  };

  return (
    <div className=" w-6/12 ml-5">
      <div
        className={`comment-container ${
          commentData.replies[0] !== undefined ? "reply-container-gap" : ""
        }`}
      >
        <div
          className="comment flex flex-col p-3 rounded-md"
          style={styles.comment}
        >
          {/* <CommentVotes
                        vote={vote}
                        setVoted={setVoted}
                        score={score}
                        setScore={setScore}
                        updateScore={updateScore}
                        commentData={commentData}
                    /> */}
          <div className="comment--body">
            <CommentHeader
              commentData={commentData}
              setReplying={setReplying}
              setDeleting={setDeleting}
              setDeleteModalState={setDeleteModalState}
              setEditing={setEditing}
              time={time}
            />
            {!editing ? (
              <div className="comment-content whitespace-pre-line	break-words">
                {commentData.content}
              </div>
            ) : (
              <textarea
                className="content-edit-box h-40 p-5 rounded-md border border-black w-full"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            )}
            {editing && (
              <button
                className="update-btn flex font-bold px-5 py-2 cursor-pointe rounded-md 
                            transition ease-in-out hover:opacity-70"
                onClick={updateComment}
              >
                update
              </button>
            )}
            <div className="mt-5">
              <CommentBtn
                commentData={commentData}
                setReplying={setReplying}
                setDeleting={setDeleting}
                setDeleteModalState={setDeleteModalState}
                setEditing={setEditing}
              />
            </div>
          </div>
          {/* <CommentFooter
                        vote={vote}
                        setVoted={setVoted}
                        score={score}
                        setScore={setScore}
                        updateScore={updateScore}
                        commentData={commentData}
                        setReplying={setReplying}
                        setDeleting={setDeleting}
                        setDeleteModalState={setDeleteModalState}
                        setEditing={setEditing}
                    />{" "} */}
        </div>

        {replying && (
          <AddComment
            buttonValue={"reply"}
            addComments={addReply}
            replyingTo={commentData.username}
          />
        )}
        {commentData.replies !== [] && (
          <ReplyContainer
            key={commentData.replies.id}
            commentData={commentData.replies}
            updateScore={updateScore}
            commentPostedTime={commentPostedTime}
            addReply={addReply}
            editComment={editComment}
            deleteComment={deleteComment}
            setDeleteModalState={setDeleteModalState}
          />
        )}

        {deleting && (
          <DeleteModal
            setDeleting={setDeleting}
            deleteComment={deleteComment}
            setDeleteModalState={setDeleteModalState}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;

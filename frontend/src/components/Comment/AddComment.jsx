import { useState } from "react";
import logo from "../../data/homepage/user.png";
import User from "../../data/fakedata/User.json";
const styles = {
  comment: {
    backgroundColor: "#fbeaab",
  },
  button: {
    backgroundColor: "#BC3030",
  },
};
const AddComment = ({ buttonValue, addComments, replyingTo }) => {
  const loggedUser = JSON.parse(localStorage.getItem("userID"));
  var user_name = "";
  if (loggedUser) {
    user_name = User.find((index) => index.id === loggedUser);
    user_name = user_name.name;
  }
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
  const [comment, setComment] = useState("");

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;

    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: replyingToUser + comment,
      createdAt: new Date(),
      score: 0,
      username: user_name,
      currentUser: true,
      replies: [],
    };

    addComments(newComment);
    setComment("");
  };

  return (
    <div
      className="add-comment flex flex-col p-2 rounded-md mt-2 w-6/12 ml-5"
      style={styles.comment}
    >
      <div className="profile-pic rounded-3xl mr-2">
        <img src={logo} alt="profile pic" width="30px" height="30px" />
      </div>
      <textarea
        className="comment-input relative h-24 resize-none border border-black rounded-xl pl-5 pt-2 mt-5"
        placeholder="Add a comment"
        value={replyingToUser + comment}
        onChange={(e) => {
          setComment(
            e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
          );
        }}
      />
      <div className="send-btn-container flex justify-between align-middle">
        <div className="profile-pic"></div>
        <button
          className="add-btn font-bold transition ease-in-out rounded-2xl px-5 py-1 mt-3 hover:opacity-75 text-white"
          style={styles.button}
          onClick={clickHandler}
        >
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default AddComment;

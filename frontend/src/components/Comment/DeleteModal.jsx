const DeleteModal = ({ setDeleting, deleteComment, setDeleteModalState }) => {
  const cancelDelete = () => {
    setDeleting(false);
    setDeleteModalState(false);
  };

  const deleteBtnClick = () => {
    deleteComment();
    setDeleteModalState(false);
  };

  return (
    <div className="delete-confirmation-wrapper flex justify-center items-center">
      <div className="delete-container flex flex-col gap-1.5 p-5 rounded-md border border-black">
        <div className="title font-bold">Delete comment</div>
        <div className="confirmation-message leading-6">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </div>
        <div className="btn-container flex justify-between uppercase font-bold">
          <button className="cancel-btn" onClick={cancelDelete}>
            No, cancel
          </button>
          <button className="delete-btn" onClick={deleteBtnClick}>
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

// Write your code here
import './index.css'

const CommentItem = props => {
  const {arrayList, deleteComment, toggleIsFavorite} = props
  const {
    id,
    firstNames,
    names,
    comments,
    newClass,
    dates,
    isFavorite,
  } = arrayList
  const likedImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const addClass = isFavorite ? 'sky-blue' : ''

  const likeButton = () => {
    toggleIsFavorite(id)
  }
  const delButton = () => {
    deleteComment(id)
  }
  return (
    <li className="commentItems" key={id}>
      <div className="content">
        <p className={`user-icon ${newClass}`}>{firstNames}</p>
        <div className="itemsDirection">
          <div className="names">
            <h1 className="username">{names}</h1>
            <p className="time">{dates}</p>
          </div>
          <p className="commentDescription">{comments}</p>
        </div>
      </div>
      <div className="iconsPlace">
        <button type="button" className="likeButton" onClick={likeButton}>
          <img src={likedImgUrl} className="likeImg" alt="like" />
        </button>
        <p className={`icon-name ${addClass}`}>Like</p>
        <button
          type="button"
          className="deleteButton"
          onClick={delButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="del-image"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem

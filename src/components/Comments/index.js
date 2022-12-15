import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    arrayList: [],
    count: 0,
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      arrayList: prevState.arrayList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isFavorite: !eachComment.isFavorite}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {arrayList} = this.state
    const filteredList = arrayList.filter(eachItem => eachItem.id !== id)
    this.setState(prevState => ({
      arrayList: filteredList,
      count: prevState.count - 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const firstName = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const newComment = {
      id: uuidv4(),
      firstNames: firstName,
      names: name,
      comments: comment,
      dates: date,
      newClass: index,
      isFavorite: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  render() {
    const {name, comment, arrayList, count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Comments</h1>
        <div className="contentAndImg_Direction">
          <div className="formElements">
            <p className="para1">Say something about 4.0 Technologies</p>
            <form className="formElements" onSubmit={this.addComment}>
              <input
                type="text"
                className="name-field"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                className="comment-field"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="mainImage"
            alt="comments"
          />
        </div>
        <hr />
        <p className="comments">
          <span className="numberCount">{count}</span> Comments
          <ul className="commentPlace">
            {arrayList.map(eachObject => (
              <CommentItem
                key={eachObject.id}
                arrayList={eachObject}
                deleteComment={this.deleteComment}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </p>
      </div>
    )
  }
}
export default Comments

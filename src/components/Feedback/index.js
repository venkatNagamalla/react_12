// Write your React code here.

import {Component} from 'react'

import './index.css'

import Emojis from '../Emojis'

class Feedback extends Component {
  state = {isFeedBackSent: true}

  onEmojiClick = () => {
    this.setState({isFeedBackSent: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedBackSent} = this.state

    return (
      <div className="bg-container">
        {isFeedBackSent ? (
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachEmoji => (
                <Emojis
                  emojiDetails={eachEmoji}
                  onEmojiClick={this.onEmojiClick}
                  key={eachEmoji.id}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img className="love-image" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="thank-you-text">Thank you!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback

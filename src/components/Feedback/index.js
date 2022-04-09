// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  onRenderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                onClick={this.onClickEmoji}
                type="button"
                className="emoji-btn"
              >
                <img
                  className="emoji"
                  alt={eachEmoji.name}
                  src={eachEmoji.imageUrl}
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  onRenderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img alt="love emoji" src={loveEmojiUrl} className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {!isFeedbackSelected
            ? this.onRenderFeedbackQuestion()
            : this.onRenderThankYou()}
        </div>
      </div>
    )
  }
}

export default Feedback

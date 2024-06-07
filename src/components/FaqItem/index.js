// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isButtonClicked: false}

  toggleButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  showFaqAnswer = () => {
    const {faqsList} = this.props

    return (
      <div className="answer-container">
        <hr className="seperator" />
        <p className="answer-text">{faqsList.answerText}</p>
      </div>
    )
  }

  render() {
    const {faqsList} = this.props
    const {id, questionText, answerText} = faqsList
    const {isButtonClicked} = this.state
    const btnImgUrl = isButtonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isButtonClicked ? 'minus' : 'plus'

    return (
      <li className="column-container">
        <div className="faq-item">
          <h1 className="question-text">{questionText}</h1>
          <button type="button" className="btn" onClick={this.toggleButton}>
            <img src={btnImgUrl} alt={altText} />
          </button>
        </div>
        {isButtonClicked && this.showFaqAnswer()}
      </li>
    )
  }
}

export default FaqItem

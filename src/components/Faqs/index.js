// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="faq-item-container">
            {faqsList.map(each => (
              <FaqItem faqsList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

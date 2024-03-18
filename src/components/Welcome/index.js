// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}
  onWelcome = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  onRenderButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return <button>Subscribed</button>
    }
    return <button>Subscribe</button>
  }

  render() {

    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button onClick={this.onWelcome}>{this.onRenderButton()}</button>
      </div>
    )
  }
}
export default Welcome

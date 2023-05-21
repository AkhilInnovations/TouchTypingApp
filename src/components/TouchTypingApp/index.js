import {Component} from 'react'

// import Loader from 'react-loader-spinner'

import './index.css'

class TouchTypingApp extends Component {
  state = {
    inputValue: '',
    targetKeys: '',
    keyCount: 0,
    findIndex: 0,
    accuracy: 100,
    startTime: null,
    endTime: null,
    wordsPerMinute: 0,
    counter: 60,
    isLoading: false,
  }

  componentDidMount() {
    this.generateTargetKeys()
    this.accuracyTimer = setInterval(this.calculateAccuracy, 5000)
    this.countdownTimer = setInterval(this.decrementCounter, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.accuracyTimer)
    clearInterval(this.countdownTimer)
  }

  generateTargetKeys = () => {
    const keys = 'asdfjkl;'
    const randomIndex = keys[Math.floor(Math.random() * keys.length)]
    const randomIndex2 = keys[Math.floor(Math.random() * keys.length)]
    const randomIndex3 = keys[Math.floor(Math.random() * keys.length)]
    const randomIndex4 = keys[Math.floor(Math.random() * keys.length)]
    const randomIndex5 = keys[Math.floor(Math.random() * keys.length)]
    const randomIndex6 = keys[Math.floor(Math.random() * keys.length)]
    const spaced = ' '
    const randomText =
      randomIndex +
      randomIndex2 +
      randomIndex3 +
      randomIndex4 +
      randomIndex5 +
      randomIndex6 +
      spaced
    const targetText = randomText.repeat(20)
    console.log(targetText)

    this.setState({targetKeys: targetText, isLoading: true})
  }

  calculateWPM = () => {
    const {keyCount, startTime, endTime, inputValue} = this.state
    if (startTime && endTime) {
      const elapsedTimeInSeconds = (endTime - startTime) / 1000
      const wordsPerMinute = (keyCount / 5) * (60 / elapsedTimeInSeconds)
      const accuracy = (keyCount / (keyCount + inputValue.length)) * 100
      this.setState({wordsPerMinute, accuracy})
    }
  }

  decrementCounter = () => {
    const {counter} = this.state
    this.setState(
      prevState => ({
        counter: prevState.counter - 1,
      }),
      () => {
        if (counter === 0) {
          this.calculateWPM()
          clearInterval(this.countdownTimer)
          this.setState({counter: 0})
        }
      },
    )
  }

  handleInputChange = e => {
    const typedKey = e.target.value

    const {findIndex} = this.state
    console.log(typedKey)
    console.log(findIndex)

    this.setState({inputValue: e.target.value})
    const {targetKeys} = this.state
    const targetKey = targetKeys[findIndex]

    if (typedKey[findIndex] === targetKey) {
      this.setState(prevState => ({
        keyCount: prevState.keyCount + 1,
        findIndex: prevState.findIndex + 1,
      }))
    } else {
      this.setState(prevState => ({
        findIndex: prevState.findIndex + 1,
      }))
    }
    const {startTime} = this.state
    if (!startTime) {
      this.setState({startTime: new Date()})
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState({inputValue: ''})
      this.setState({endTime: new Date()}, this.calculateWPM)
      clearInterval(this.countdownTimer)
      this.setState({counter: 0})
    }
  }

  calculateAccuracy = () => {
    const {keyCount, inputValue} = this.state
    if (keyCount > 0) {
      const currentAccuracy = (keyCount / (keyCount + inputValue.length)) * 100
      this.setState({accuracy: currentAccuracy.toFixed(2)})
    }
  }

  render() {
    const {
      inputValue,
      targetKeys,
      keyCount,
      accuracy,
      isLoading,
      wordsPerMinute,
      counter,
    } = this.state

    return (
      <div className="Typing-container">
        <h1>Touch Typing Practice</h1>
        {isLoading ? (
          <>
            <p className="counter">
              Time Remaining:
              <span className="span"> {counter} </span>Seconds
            </p>
            <div className="typing-card">
              <p className="target-para">{targetKeys}</p>
              <textarea
                rows="6"
                cols="54"
                className="textArea"
                type="text"
                value={inputValue}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className="conclusion">
              <p className="accuracy">Key Count: {keyCount}</p>
              <p className="accuracy">Accuracy: {accuracy}%</p>
              <p className="accuracy">
                Words per Minute: {wordsPerMinute.toFixed(0)}
              </p>
            </div>
          </>
        ) : null}
      </div>
    )
  }
}

export default TouchTypingApp

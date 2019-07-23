class App extends React.Component {
  constructor(){
    super()
    this.state = {
      result1: 0,
      result2: 0
    }
    this.t0 = new Date()
  }
  success1(){
    this.setState({
      result1: new Date() - this.t0
    })
  }
  success2(){
    this.setState({
      result2: new Date() - this.t0
    })
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <App1 result={this.state.result1}/>
          <Judge/>
          <App2 result={this.state.result2}/>
        </div>
        <div className="playground">
          <Tack1 success={this.success1.bind(this)}/>
          <Tack2 success={this.success2.bind(this)}/>
        </div>
      </div>
    )
  }
}

class Judge extends React.Component {
  render() {
    return (
      <div>🕺</div>
    )
  }
}

class App1 extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div>🐇</div>
        <div>{this.props.result}ms</div>
      </div>
    )
  }
}

class App2 extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div>🐢</div>
        <div>{this.props.result}ms</div>
      </div>
    )
  }
}

class Tack1 extends React.Component {
  constructor() {
    super()
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 25
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        clearInterval(timerId)
        this.props.success()
      }
    }, 1000)
  }

  render() {
    return (
      <div className="track">
        <div style={this.state.style}>🐇</div>
      </div>
    )
  }
}

class Tack2 extends React.Component {
  constructor() {
    super()
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 20
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        clearInterval(timerId)
        this.props.success()
      }
    }, 1000)
  }

  render() {
    return (
      <div className="track">
        <div style={this.state.style}>🐢</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
)

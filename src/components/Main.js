import React, { Component } from 'react'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import Single from './Single'

class Main extends Component {

  //component state to control refreshing single photo
  state = { loading: true }

  componentDidMount() {
    this.props.startLoadingPosts().then(() => { this.setState({ loading: false }) })
    this.props.startLoadingComments()
  }

  render() {
    if (this.state.loading) {
      return <div className="loader">...loading</div>
    } else {
      return (
        <div>
          <h1>
            <Link to="/">Photo Gallery</Link>
          </h1>
          <Route exact path="/" render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )} />

          <Route path="/AddPhoto" render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )} />

          <Route path="/single/:id" render={(params) => (
            <Single loading={this.state.loading} {...params} {...this.props} />
          )} />

        </div>

      )
    }
  }
}

export default Main


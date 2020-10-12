import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'
import { Link } from 'react-router-dom'

class Single extends Component {
  render() {
    const { match, posts } = this.props
    const id = Number(match.params.id)
    const post = posts.find((post) => post.id === id)
    const comments = this.props.comments[id] || []
    const index = posts.findIndex(post => post.id === id)

    if (this.props.loading) {
      return <div className="loader">...loading</div>
    } else if (post) {
      return <div className='single-photo'>
        <Photo post={post} {...this.props} index={index} />
        <Comments startAddComment={this.props.startAddComment} comments={comments} id={id} />
      </div>
    } else {
      return <div className="loader">
        <p className="textalign-center">
          Photo has been deleted!
          <br />
          <Link to="/">Home</Link>
        </p>
      </div >
    }
  }
}


export default Single
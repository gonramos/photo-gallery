import React, { Component } from 'react'

class AddPhoto extends Component {

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const imgLink = e.target.elements.link.value
    const imgDesc= e.target.elements.description.value
    const post = {
      id: Number(new Date()),
      description: imgDesc,
      imageLink: imgLink
    }
    if(imgDesc && imgLink){
      this.props.startAddingPost(post)
      this.props.onHistory.push('/')
    }
  }

  render() {
    return (
      <div>
        <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="link to photo" name="link"/>
          <input type="text" placeholder="description" name="description"/>
          <button>Post</button>
        </form>
        </div>
      </div>
    )
  }
}

export default AddPhoto
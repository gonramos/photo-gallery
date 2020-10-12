import { database } from '../database/config'

export const startAddingPost = post => {
  return (dispatch) => {
    return database.ref('posts').update({ [post.id]: post }).then(() => {
      dispatch(addPost(post))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const startLoadingPosts = () => {
  return (dispatch) => {
    return database.ref('posts').once('value').then((snapshot) => {
      let posts = []
      snapshot.forEach((child) => {
        posts.push(child.val())
      })
      //console.log(posts)
      dispatch(loadPosts(posts))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const startRemovingPost = (index, id) => {
  const changes = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null
  }

  return (dispatch) => {
    return database.ref().update(changes).then(() => {
      dispatch(removePost(index))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const startAddComment = (comment, id) => {
  return (dispatch) => {
    return database.ref(`comments/${id}`).push(comment).then(() => {
      dispatch(addComment(comment, id))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const startLoadingComments = () => {
  return (dispatch) => {
    return database.ref('comments').once('value').then((snapshot) => {
      let comments = {}
      snapshot.forEach((child) => {
        comments[child.key] = Object.values(child.val())
      })
      dispatch(loadComments(comments))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const loadComments = (comments) => {
  return {
    type: 'LOAD_COMMENTS',
    comments
  }
}

export const removePost = index => {
  return {
    type: 'REMOVE_POST',
    index
  }
}

export const addPost = post => {
  return {
    type: 'ADD_POST',
    post
  }
}

export const addComment = (comment, postId) => {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  }
}

export const loadPosts = (posts) => {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}

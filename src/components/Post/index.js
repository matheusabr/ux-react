import React from 'react'
import './styles.css'
import 'normalize.css'
import Avatar from '../../assets/asset0.jpeg'
import asset1 from '../../assets/asset1.svg'

const Post = () => {
  return (
    <div className='wrapper'>
      <div className='top-bar'>
        <div className='back-wrapper'>
          <a href='#a'>
            <img className='btn-back' src={asset1} alt='Go back' />
          </a>
        </div>
        <button className='post-submit'>Post</button>
      </div>

      <div className='post'>
        <div className='post-avatar'>
          <img className='avatar-img' src={Avatar} alt='Avatar' />
        </div>

        <div className='post-content'>
          <textarea
            className='post-textarea'
            name='post-textarea'
            id='post-text'
            placeholder='What is happening?'
          />

          <div className='post-actions'>
            <div>actions left</div>
            <div>actions right</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

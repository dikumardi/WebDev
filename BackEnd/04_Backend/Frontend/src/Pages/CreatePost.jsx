import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post-section'>
    <h1>CreatePost</h1>
    <form>
    <input type="file" name='image' accept='image/*'/>
    <textarea type="text" name='caption' placeholder='Enter Caption' required  />
    <button type="submit">Submit</button>
    </form>
    </section>
  )
}

export default CreatePost
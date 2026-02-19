import axios  from "axios"
import { Form, useNavigate } from "react-router-dom"
const CreatePost = () => {

    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
      console.log(res);
      navigate('/feed')
    })
    .catch((err)=>{
      console.log(err);
      alert("unable to create post")
      
    })
  }
  return (
    <section className='create-post-section'>
    <h1>CreatePost</h1>
    <form onSubmit={handleSubmit}>
    <input type="file" name='image' accept='image/*'/>
    <textarea type="text" name='caption' placeholder='Enter Caption' required  />
    <button type="submit">Submit</button>
    </form>
    </section>
  )
}

export default CreatePost
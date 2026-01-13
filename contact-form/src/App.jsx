import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  function handleForm(e){
    e.preventDefault();

    console.log({
      name,
      email,
      message
    });

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <>
    <form
      action=""
      onSubmit={handleForm}
    >
      <div className='form-group'>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name='name'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor="email">Email </label>
        <input
          type="text"
          name='email'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor="message">Message </label>
        <textarea
          name="message"
          id="message"
          cols={20}
          rows={5}
          placeholder='Enter your message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App

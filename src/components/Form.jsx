import React from 'react'

const Form = ({ text }) => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <input type='submit' value={text} />
    </form>
  )
}

export default Form

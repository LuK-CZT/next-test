import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useUsername } from '../components/usernameContext';

export default function Home() {

  const router = useRouter()
  const { username, setUsername } = useUsername();


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/chat");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  return (
    <div className="page-container">
      <div className="login-container">
        <h1 className='text'> Choose a Username</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <input required type="text" onChange={handleChange} />
            <button type='submit' className='submit-btn'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

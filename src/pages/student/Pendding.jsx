import React from 'react'
import { Link } from 'react-router-dom'

function Pendding() {
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Please waiting...</h1>
      <p class="py-6">You will be in the class automatic when your teacher accept or back to login</p>
      <Link to="/" class="btn btn-primary">Back</Link>
    </div>
  </div>
</div>
  )
}

export default Pendding
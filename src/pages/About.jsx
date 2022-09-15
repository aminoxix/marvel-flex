import React from 'react'
import Container from '../components/Home/Container'

export default function About() {
  return (
    <Container>
      <div className="title">
        <h1>About</h1>
      </div>
      <p>
        This is a simple project to learn how to use the Marvel API. It is
        developed using React.
        <br />
        <br />
        Marvel API is a RESTful API that allows you to access information about
        Marvel's vast library of comics, characters, creators, events, series,
        stories, and more. You can find more information about the API
        <a href="https://developer.marvel.com/"> here</a>.
      </p>
    </Container>
  )
}

import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'

const Home = () => {
  return (
    <section className='conteiner mainConteiner'>
      <Head title="Fotos"/>
      <Feed />
    </section>
  )
}

export default Home

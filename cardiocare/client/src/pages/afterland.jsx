import React from 'react'

import '../pages/landing.css'
import { Footer, Possibility, Features, WhatGPT3, Header } from '../containers';
import { Navbar } from '../components';
export default function Landing() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    {/* <CTA /> */}
    {/* <Blog /> */}
    <Footer />
  </div>
  )
}

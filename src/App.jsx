// import { useState } from 'react'
import Header from './components/Header';
import Collections from './components/Collections';
import Card from './components/Cards';
// import './App.css'

function App() {

  return (
    <div className='App'>
      <Header />
      <Collections />
      <div className='card-style1'>
        <Card
          images='images/image1.png'
          name='swimmer'
          phone='+2348135922644'
          email='bolarinwa@gmail.com'
        />

        <Card
          images='images/mountainBike.png'
          name='Bike'
          phone='+2347065551350'
          email='akeem@gmail.com'
        />

        <Card
          images='images/weddingPhotography.png'
          name='Wedding'
          phone='+2348089031806'
          email='bolarinwabdulakeem@gmail.com'
        />

        <Card
          images='images/image1.png'
          name='swimmer'
          phone='08135922644'
          email='bolarinwabdulakeem@gmail.com'
        />
      </div>
    </div>
  );
}

export default App;

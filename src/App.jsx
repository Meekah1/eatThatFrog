import React from 'react'
import Header from './components/Header';
import Collections from './components/Collections';
import Card from './components/Cards';
import data from './components/data';
// import './App.css'

function App() {
    const cards = data.map(arrayOfData => {
      return (
        <Card
          img={arrayOfData.coverImg}
          key={arrayOfData.id}
          title={arrayOfData.title}
          price={arrayOfData.price}
          rating={arrayOfData.stats.rating}
          reviewCount={arrayOfData.stats.reviewCount}
          location={arrayOfData.location}
        />
      );
    })

  return (
    <div className='App'>
      <Header />
      <Collections />
      <div className='card-style1'>
        {cards}
        {/* {data.map((arrayOfData) => (
          <Card
            key={arrayOfData.id}
            title={arrayOfData.title}
            price={arrayOfData.price}
            rating={arrayOfData.stats.rating}
            reviewCount={arrayOfData.stats.reviewCount}
            location={arrayOfData.location}
          />
        ))} */}
      </div>
    </div>
  );
}

export default App;

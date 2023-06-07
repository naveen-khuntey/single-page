import React from 'react'
import Card from './Card'
import Data from '../data/Data.json';
export default function Content() {
  const arr = Data.data;
  console.log(arr);
  return (
    <div className='content'>
      {arr.map(content => (
        <Card id={content.id} 
          url={content.url} 
          title={content.title} 
          subtitle={content.subtitle}
        />
      ))}
    </div>
  )
}

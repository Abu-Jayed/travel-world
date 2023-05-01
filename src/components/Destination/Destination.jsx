import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DestinationCard from './DestinationCard';

const Destination = () => {
  const allDestination = useLoaderData()
  console.log(allDestination);
  return (
    <div className='text-white'>
      <h1 className='text-5xl uppercase'>Our travel destination....</h1>
      {
        allDestination.map(singleDestination => <DestinationCard
        key={singleDestination.id}
        singleDestination={singleDestination}
        >

        </DestinationCard>)
      }
    </div>
  );
};

export default Destination;
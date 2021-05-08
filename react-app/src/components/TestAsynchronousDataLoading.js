// J'ai suivi ce tutorial:
// https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react

import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';

export default function TestAsynchronousDataLoading() {
  const [river, setRiver] = useState('nile');
  const [show, toggle] = useReducer(state => !state, true);

  return (
    <div>
      <h1>TestAsynchronousDataLoading</h1>
      <div><button onClick={toggle}>Toggle Details</button></div>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      {show && <RiverInformation name={river} />}
    </div>
  );
}

function RiverInformation({ name }) {
  const [riverInformation, setRiverInformation] = useState();

  useEffect(() => {
    let mounted = true;
    getRiverInformation(name)
      .then(data => {
        if (mounted) {
          setRiverInformation(data)
        }
      });
    return () => {
      mounted = false;
    }
  }, [name])

  return (
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
  )
}

RiverInformation.propTypes = {
 name: PropTypes.string.isRequired
}


const rivers = {
  nile: {
    continent: 'Africa',
    length: '6,650 km',
    outflow: 'Mediterranean'
  },
  amazon: {
    continent: 'South America',
    length: '6,575 km',
    outflow: 'Atlantic Ocean'
  },
  yangtze: {
    continent: 'Asia',
    length: '6,300 km',
    outflow: 'East China Sea'
  },
  mississippi: {
    continent: 'North America',
    length: '6,275 km',
    outflow: 'Gulf of Mexico'
  }
}

function getRiverInformation(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        rivers[name]
      )
    }, 1500)
  })
}
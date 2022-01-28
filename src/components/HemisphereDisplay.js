import React from 'react';

function HemisphereDisplay({latitude}) {
  console.log(latitude);

  const hemisphere = latitude > 0? "Northern hemisphere":"Southern hemisphere";
  
  return (
  <div>
      <p>You are in {hemisphere}!</p>
  </div>
  );
}

export default HemisphereDisplay;

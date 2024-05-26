import React, { useEffect } from 'react';

const Home = ({ visits, setVisits }) => {
  useEffect(() => {
    setVisits(visit => visit + 1);
  }, [setVisits]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Banner ID: B00949856</p>
      <p>Home page visited {visits} times</p>
    </div>
  );
};

export default Home;

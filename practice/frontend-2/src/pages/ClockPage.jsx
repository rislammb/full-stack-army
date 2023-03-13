import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';

function ClockPage() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clockInterval(clockInterval);
    };
  }, []);

  return (
    <Layout>
      <h1>Clock</h1>
      <h1>
        {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
      </h1>
    </Layout>
  );
}

export default ClockPage;

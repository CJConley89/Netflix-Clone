import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    const rows = [
        {title: 'UpComing', fetchURL: requests.requestUpcoming, rowID: 1},
        {title: 'Popular', fetchURL: requests.requestPopular, rowID: 2},
        {title: 'Trending', fetchURL: requests.requestTrending, rowID: 3},
        {title: 'Top Rated', fetchURL: requests.requestTopRated, rowID: 4},
        {title: 'Horror', fetchURL: requests.requestHorror, rowID: 5}
    ];

  return (
    <>
        <Main />
        {rows.map((row) => {
            return (
                <Row title={row.title} key={row.rowID} rowID={row.rowID} fetchURL={row.fetchURL} />
            )
        })};
    </>
  )
}

export default Home
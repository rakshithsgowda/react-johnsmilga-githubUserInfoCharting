import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import { GithubContext } from '../context/context';
import loadingImage from '../images/preloader.gif';
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext)
  if (isLoading) {
    return <main>
      <Navbar></Navbar>
      <Search></Search>
      <img src={loadingImage} alt='loading' className="loading-img" />
    </main>
  } else {
    return (
      <main>
        <Navbar></Navbar>
        <Search></Search>
        <Info></Info>
        <User></User>
        <Repos></Repos>
      </main>
    );
  }
};

export default Dashboard;

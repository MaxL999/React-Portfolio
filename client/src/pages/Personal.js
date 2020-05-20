import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Navbar from '../components/Navbar';

function Personal() {
  return <>
    <Navbar />


    {/* <div className="card m-3">
      <div className="card-header">
        <h2>Maximilian A. Lewis</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">Personal Interests</h5>
        <p className="card-text">I enjoy skeet shooting and skiing, video games suffice when the weather isnt agreable</p>
      </div>
      <div className="card-body">
        <h5 className="cart-title">Born and raised</h5>
        <p className="card-text"> Originally born in Indiana, my family moved to Arizona when I was a toddler.</p>
      </div>
    </div> */}

    {/* d-none d-md-block means "this isnt displayed unless size md or larger, then its a block" */}
    <nav className="d-none d-md-block">
      <ul>
        <li><a href='#section1'> Go to section 1 </a></li>
        <li><a href='#section2'> Go to section 2 </a></li>
      </ul>
    </nav>

    <ScrollableAnchor id={'section1'} >
      <div className="min-height">
        <div> Hello World </div>
      </div>
    </ScrollableAnchor>
    <ScrollableAnchor id={'section2'}>
      <div className="min-height">
        <div> How are you world? </div>
      </div>
    </ScrollableAnchor>

  </>
}

export default Personal
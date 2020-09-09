import React from 'react';
import '../assets/styles/components/NotFound.scss'
import tv from '../assets/static/2.png'
const NotFound = ()=>(
    <React.Fragment>

 <div className="mars"></div>
<img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
<img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
<p className="title">Oh no!!</p>
<p className="subtitle">
	You’re either misspelling the URL <br></br> or requesting a page that's no longer here.
</p>
<div align="center">
	<a className="btn-back" href="#">Back to previous page</a>
</div>
<img src={tv} className="astronaut" />
<img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" />
    </React.Fragment>
)

export default NotFound;
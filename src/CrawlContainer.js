import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import './CrawlContainer.scss'

const CrawlContainer = ({title, episode_id, opening_crawl, release_date}) => {
  let whatToRender;
  const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
  if(title) { 
    whatToRender = <Crawl 
                      title={ `Episode ${romans[episode_id - 1]}` }
                      year= { release_date }
                      subTitle={ title }
                      text={ opening_crawl } 
                  />
    
  } else {
    whatToRender = <p className='long-time-ago'> A long time ago in a galaxy far, far away....</p>
  }
  return(
    <div className='crawl-container'>
      {whatToRender}
    </div>
  )
}

export default CrawlContainer;
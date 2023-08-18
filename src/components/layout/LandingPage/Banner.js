import React, { Fragment, useState, useEffect} from "react";

const Banner = () => {
  const [bannerHeight, setBannerHeight] = useState(0)

  const updateImageSize = () => {
    const bannerWidth = window.innerWidth;
    setBannerHeight(bannerWidth / 16 * 9)
  }
  
  useEffect(() => {
    updateImageSize()
  }, [])

  window.addEventListener('resize', updateImageSize)

  return (
    <Fragment>
      {/* <div style={{ backgroundColor: 'black', padding: 1 }}>
        <h1 style={{ marginLeft: '20px', color: 'white' }}>Mystery Stuff</h1>
      </div> */}
      <img style={{ width: "100%", height: bannerHeight }} src='./landingpagebanner.png' alt='banner' />
    </Fragment>
  );
};

export default Banner;

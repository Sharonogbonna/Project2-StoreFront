const React =require('react');
const DefaultLayout = require('./Default.jsx');

class Home extends React.Component {  
  render() {
        return(
            <DefaultLayout title="Sharomatherapy">
              <div className="images-container">
                <a href="/products"><div className="overlay"></div></a>
                <div className="stock-image">
                  <img src="https://media.gettyimages.com/id/1333713382/photo/ayurveda-aromatherapy-with-essential-oil-diffuser.jpg?s=612x612&w=0&k=20&c=RauVrbIFEl49GuSehYUU-DlW_WhVpPENqIGjs_wQU6I=" alt="photo" />
                </div>
                <div className="stock-image">
                  <img src="https://media.gettyimages.com/id/1305112924/photo/electric-essential-oils-aroma-diffuser-oil-bottles-and-flowers-on-gray-surface-with-reflection.jpg?s=612x612&w=0&k=20&c=NZspDgJzFO4Qj1Gck5776qJEkjh-ynXN8sY4IHL-sac=" alt="photo" />
                </div>
                <div className="stock-image">
                  <img src="https://media.gettyimages.com/id/169946754/photo/stacks-homemade-organic-bars-of-soap-with-lavender-on-top.jpg?s=612x612&w=0&k=20&c=GP-wCfaoN99un_87RhSR3QZSX1GzT9895EXRWsSG-6Q=" alt="photo" />
                </div>
              </div>
          <div className='container'>
            <link rel="stylesheet" type="text/css" href="../css/home.css"/>
                  <h3>Welcome to our aromatherapy store!</h3>
                  <p className='indent'>At our store, we offer a wide range of high-quality essential oils and aromatherapy products to help you relax, rejuvenate, and find balance in your daily life.
                    </p>
                  <p className='indent'>Our selection includes a wide range of pure essential oils, blends, diffusers, and other products for you to choose from. Whether you are looking for a natural solution to support your health and wellness, or simply want to create a pleasant and soothing atmosphere in your home, we have something for everyone.</p>
                  <p className='indent'>
                  Thank you for choosing our store for all of your aromatherapy needs. We hope you find what you are looking for and enjoy your shopping experience with us.</p>
          </div>
          
          </DefaultLayout>
        )
    }
}
module.exports = Home
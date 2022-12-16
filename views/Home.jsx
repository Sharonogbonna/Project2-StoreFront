const React =require('react');
const DefaultLayout = require('./Default.jsx');

class Home extends React.Component {
    render() {
        return(
            <DefaultLayout title="Sharomatherapy">
          <div className='container'>
            <link rel="stylesheet" type="text/css" href="../css/home.css"/>
                  <h3>Welcome to our aromatherapy store!</h3>
                  <p>At our store, we offer a wide range of high-quality essential oils and aromatherapy products to help you relax, rejuvenate, and find balance in your daily life. <br />
                  Our selection includes a wide range of pure essential oils, blends, diffusers, and other products for you to choose from. Whether you are looking for a natural solution to support your health and wellness, or simply want to create a pleasant and soothing atmosphere in your home, we have something for everyone. <br />
                  Thank you for choosing our store for all of your aromatherapy needs. We hope you find what you are looking for and enjoy your shopping experience with us.</p>
          </div>
          </DefaultLayout>
        )
    }
}
module.exports = Home
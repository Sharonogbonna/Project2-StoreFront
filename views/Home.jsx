const React =require('react');
const DefaultLayout = require('./Default.jsx');

class Home extends React.Component {
    render() {
        return(
            <DefaultLayout title="Sharomatherapy">
          <div>
            <link rel="stylesheet" type="text/css" href="../css/home.css"/>
                  <h3>Welcome to the Shop</h3>
          </div>
          </DefaultLayout>
        )
    }
}
module.exports = Home
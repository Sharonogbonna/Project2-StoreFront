const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title></head>
                <link rel="icon" href="/images/anotherLogo.png" type="image/gif"></link>
            <body>
            <div className='Logo'>
            <a href="/"><img src='/images/anotherLogo.png' alt="logo"/></a>
                </div>
                <div className='menu-bar'>
                <a href="/">Home</a>  | <a href="/products">Store Front</a> | <a href="/products/new">Create Product</a>
                </div>
            <h1>{this.props.title}</h1>
            
            {this.props.children}
            </body>
          </html>
        )
    }
}
module.exports = DefaultLayout
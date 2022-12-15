const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head><title>{this.props.title}</title></head>
            <body>
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
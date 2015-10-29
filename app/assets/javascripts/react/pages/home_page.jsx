import React from 'react';

/*
Note that the <div> tags here aren't
actual DOM nodes, they are instantiations of React's div component. The JSX
compiler automatically rewrites the HTML tags to React.createElement(tagName)
*/

export default React.createClass({
   render(){
       return(
           <div>
               Welcome to the home page!
           </div>
       )
   }
});

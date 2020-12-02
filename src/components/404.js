import React from 'react';
import { Link } from 'react-router-dom';
class PageNotFound extends React.Component{


    render(){
        return <div className="404">

            <p style={{textAlign:"center"}}>
          <h1>  Error 404 </h1>
          
            The page you're looking for no longer exists. 
           <br />   <Link to="/"><b>Home</b> </Link> </p>
            
              
           
          </div>;
    }
}
export default PageNotFound;






//jonathon remove this line
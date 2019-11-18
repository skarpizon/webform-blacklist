import React from 'react';
import { Link } from 'react-router-dom'

const ListPanel = () => {
    return(
        <div className = "wrapper panel">
            <div className= "panel__item"> 
                <Link to="/lists/blacklist/">
                <i className="fa fa-ban" aria-hidden="true"></i><p>Черный список</p>
                </Link>
            </div>
            
            <div className= "panel__item"> 
                <Link to="/lists/emails/">
                <i className="fa fa-envelope" aria-hidden="true"></i><p>Список e-mail</p>
                </Link>
            </div>
            
        </div>
    );
}

export default ListPanel;
import React from 'react';

const Header = ({isLoggedIn, logOut}) => {
    let logOutBut = isLoggedIn ? <a className = "exit" onClick={()=>logOut()}> Выйти</a> : null; 
    return(
        <header>
            <div className = "wrapper">
                <div className = "name">Web-Form</div>
                {logOutBut}
            </div>
        </header>

    );
}

export default Header;
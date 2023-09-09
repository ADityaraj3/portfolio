import React from 'react';
import '../CSS/Fonts.css';

const Navbar = () => {
    
  const navbarStyle = {
    backgroundColor: '#dcdcdc',   // Very light gray background color
    color: '#000',               // Text color (black)
    padding: '3px 100px',        // Padding (top/bottom: 10px, left/right: 20px)
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Box shadow
  };

  const ulStyle = {
    listStyleType: 'none', // Remove bullet points
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the far right
  };

  const liStyle = {
    marginLeft: '100px', // Add spacing between list items
  };

    const linkStyle = {
        // fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#808080',             // Default text color (gray)
        textDecoration: 'none',
        fontSize: '18px',
        // fontWeight: 'bold',
        transition: 'color 0.3s',     // Smooth color transition on hover
    };

    const iconStyle = {
        // fontFamily: 'Comic Sans MS, cursive',
        marginRight:'290px',
        color: '#808080',             // Default text color (gray)
        textDecoration: 'none',
        fontSize: '22px',
        // fontWeight: 'bold',
        transition: 'color 0.3s', 
    }
    
    // Add a :hover pseudo-class to change the color on hover
    // linkStyle[':hover'] = {
    //     color: '#000',                // Text color (black) on hover
    // };

  

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={iconStyle} ><a href="/" style={iconStyle} >Aditya Raj</a></li>
        <li style={liStyle} ><a href="/" style={linkStyle} className='Exo'>Home</a></li>
        <li style={liStyle} ><a href="/about" style={linkStyle} className='Exo'>About</a></li>
        <li style={liStyle} ><a href="/projects" style={linkStyle} className='Exo'>Projects</a></li>
        <li style={liStyle} ><a href="/contact" style={linkStyle} className='Exo'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

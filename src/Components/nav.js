import React from 'react';

export const Menu = ()=>{
  return(
    <nav id='navbar' >
      <ul>
        <li><a href="#welcome-section">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact-info">Contact</a></li>
      </ul>
    </nav>
  );
}

export const Footer = ()=>{
  return(
    <footer id='contact-info' >
      <h2 class="contact"> Contact</h2>
      <div class="contact-links">

        <a id="profile-link" href="https://github.com/nhope123"   target="_blank"><i class="fa fa-github ."></i> Github</a>
        <a  href="mailto:nhope@ryerson.ca" ><i class="fa fa-at ." ></i> Email</a>
        <a  href="tel:647-409-0734" ><i class="fa fa-mobile-phone ." ></i> Phone</a>
      </div>
    </footer>
  );
}


export const Welcome = ()=>{
  return(
    <section id="welcome-section">
      <h1>Hey I am Nial</h1>
      <h2>a Web Developer</h2>
    </section>
  );
}

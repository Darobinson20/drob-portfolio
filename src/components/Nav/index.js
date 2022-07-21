import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const  categories = [

    { name: 'portfolio', description: 'Previous work' },
    { name: 'Resume', description: 'resume' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
   
      <nav>

        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className="mx-2">
          <a href="#contact-form" onClick={() => handleClick()}>
              Contact me
            </a>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
    
  );
}

export default Nav;
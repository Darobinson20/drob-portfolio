import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio() {
  const portfo = [
    {name: 'run buddy', description: 'HTML'},
    {name: 'code quiz', description: 'Javascript'},
    {name: "night in", description: 'front-end'},
    {name: 'windows-shopper', description: 'Node'},
    {name: 'wheres-my-money', description: 'MongoDB'}
  ]

  const handleClick = () => {
    console.log("click handled")
  }
  return (
    <header data-testid="header" className="flex-row px-1">
  
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about" onClick={() => handleClick()}>
                
              </a>
            </li>
            <li className={"mx-2"}>
              <span onClick={() => handleClick()}>
                
              </span>
            </li>
            {
              portfo.map((portfo) => (
                <li className="mx-1" key={portfo.name} >
                  <span onClick={() => { handleClick(); }}>
                   {capitalizeFirstLetter(portfo.name)}
                  </span>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
    );
  }
  
 
export default Portfolio;
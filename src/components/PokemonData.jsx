import React from 'react';
import { Container, Card as div} from 'react-bootstrap';
import styled from 'styled-components';
import Search from '../components/Search';

export default function PokemonData(props) {

  const div = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #ffff;
    overflow: hidden;
    padding: 50px;
`;

  return (
    <div className="Flex mt-2">
          
            
                <div className="mt-2" >
                  <img src={props.sprite} alt={props.name} />
                </div>
                
                <h5 className="mt-2">No {props.id} {props.name}</h5>

            <div className="mt-2" Style="text-align:justify;">
            
                <h5>About</h5>
                {props.ability} 
                <p>Lorem ipsum dolor sit amet consectetur adipiscing 
                  elit platea cum ornare, quisque ultricies habitant luctus 
                  taciti molestie hendrerit aenean nisi habitasse mollis, torquent
                  ante fermentum vitae erat id nibh eleifend dictumst.</p>
              
            </div> 
            
              <div Style="display:flex; text-align:justify;">
                <div Style="flex-grow: 4">
                
                    <h5>Types</h5>
                    {props.types.map((type, key) => (
                    <div key={key}>
                      <span>{type.type.name}</span>
                    </div>
                    ))}
                  
                </div>
              <div Style="flex-grow: 1">
              
                  <h4>Stats</h4>
                  <div className="row" >
                    <h6 className="col-6 col-sm-7">Stats</h6>
                    <h6 className="col-6 col-sm-4">Value</h6>
                  </div>
                  
                  {props.stats.map((stat, key) => (
                    <div className="row" key={key}>
                      <div className="col-6 col-sm-7">
                      {stat.stat.name}</div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="col-6 col-sm-4">
                      {stat.base_stat}</div> 
                    </div>
                  ))}
                
              </div>
            </div> 
          
    </div>
  )
}
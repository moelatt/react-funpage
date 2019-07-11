import React from 'react'

import {Card} from '../card/card.component'
import './card-list.style.css';

export const Cardlist = props => (
    <div className = 'card-list'>
        
            {/* <div className = 'card-container'> 
                <img alt = "monsters" src = {`https://robohash.org/3?set=set8&size=180x180`}/>
                <h1>Moe Latt</h1>
                <p>HandsomeBoy@gmail.com</p>
            </div>
            <div className = 'card-container'>
                <img alt = "monsters" src = {`https://robohash.org/${<h1>Htoo Htoo</h1>}5?set=set4&size=180x180`}/>
                <h1>Htoo Htoo</h1>
                <p>BeautifulGirl@gmail.com</p>
            </div> */}
         {
           props.monster.map(monsters => (
           <Card key = {monsters.id} monster = {monsters}/>))
         }
    </div>
);
    

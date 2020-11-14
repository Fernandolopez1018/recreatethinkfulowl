import React from 'react';
import participants from './participants'
import './list.css'

class List extends React.Component {
    render(){
        return (
        <div id='participants'>
            <div>
                <ul id="ulMap">
                {participants.map((participant) => (
                <li id="liMap2">
                <div id="liMap">
                <h3>{participant.name}</h3>
                <img class="img" src={participant.avatar} alt={participant.name} />
                </div>
                <p>{participant.onStage&&<span>on stage</span>}</p>

                </li>
                ))}
                </ul>
            </div>
        </div>
        )
    }
}


export default List;
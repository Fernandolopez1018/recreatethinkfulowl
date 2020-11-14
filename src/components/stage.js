import React from 'react';
import participants from './participants'
import './stage.css'

class Stage extends React.Component {
    render(){
        return (
        <div id='parent2'>
            <h1>Stage</h1>
            <ul>
            {participants.map((participant) => {
                if(participant.onStage === true){
                    return <img class="img" src={participant.avatar} alt={participant.name} />
                }
            })}
            </ul>
        </div>
        )
    }
}


export default Stage;
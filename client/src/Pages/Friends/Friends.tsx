import React, { useState } from 'react';
import "./Friends.css"

function Friend() {
    // const [friendName1, setFriendName] = useState('Pick');
    // const [friendName2, setFriend] = useState('Nick');
    // const [battles, setBattles] = useState([]);
    // const [selectedGame, setSelectedGame] = useState(null);

    // const handleLookGame = (gameId) => {
    //     // Logic to look at the selected game
    //     console.log('Looking at game with ID:', gameId);
    //     setSelectedGame(gameId);
    // };

    // const handleSendInvite = () => {
    //     // Logic to send an invite to the friend
    //     console.log('Invite sent to friend:', friendName);
    // };

    // const handleGenerateLink = () => {
    //     // Logic to generate an invite link
    //     console.log('Invite link generated for friend:', friendName);
    // };

    return (
        <div className='mainContainer'>
            <h1 className='titleFriends'>Friends</h1>
            <div className='mainFriendContainer'>
                <h3 className='onlineFriends'>Игры онлайн</h3>
                <div>
                    <ul className='flexLook'>
                        {/* <h2>{friendName1} vs {friendName2}</h2> */} <div className='FriendVsFriend'>Nick vs Petiya</div>
                        {/* {battles.map((battle) => (
                        <>
                            <li key={battle.id}>
                                {battle.startTime} - {battle.endTime}: {battle.status}
                                <button onClick={() => handleLookGame(battle.id)}>Look this game</button>
                            </li>
                        </>
                    ))} */}
                        <button>Look this game</button>
                    </ul>
                </div>
                <h3>Отправить вызов другу</h3>
                <div className='flexLook'>
                    {/* <h2>{friendName1}</h2> */}
                    <div className='FriendVsFriend'>Nick</div>
                    <button>Send Invite</button>
                    <button>Generate Invite Link</button>
                </div>
            </div>
        </div>


    );
}

export default Friend;


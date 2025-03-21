// src/App.jsx
import './App.css'
import { useState } from 'react'
const App = () => {


  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]

  );


  const handleAddFighter = (fighter) => {
    // Check if we have enough money to add this fighter
    if (money >= fighter.price) {
      setTeam([...team, fighter]); // Add the fighter to the team
      setMoney(money - fighter.price); // deduct the money
      const updatedFighters = zombieFighters.filter((player) => player.id !== fighter.id);
      setZombieFighters(updatedFighters);
    } else {
      console.log("Not enough money to add this fighter!");
    }
  };

  const handleRemoveFighter = (fighter) => {
    // remove the fighter from the team
    const updatedTeam = team.filter((player) => player.id !== fighter.id);
    setTeam(updatedTeam);
    setMoney(money + fighter.price);
    setZombieFighters([...zombieFighters, fighter]);
  };
  

   let totalStrength = 0;
   for (let fighter of team)  {
    totalStrength += fighter.strength;
   }

   let totalAgility = 0;
   for (let fighter of team) {
    totalAgility += fighter.agility
   }

  return (
    <>
      <h1>Zombie Fighter</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength} </h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team:</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter) => (
            <div key={fighter.id}>
              <p>{fighter.name}</p>
              <img src={fighter.img}></img>
             <p>Price: ${fighter.price}</p>
             <p>Strength: {fighter.strength}</p>
             <p>Agility: {fighter.agility}</p>
             <button onClick={() => handleRemoveFighter(fighter)}>Remove Fighter</button>
              </div>
          ))}
        </ul>
      )}
      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((zombieFighter) =>
          <div key={zombieFighter.id}>
          <img src={zombieFighter.img}></img>
          <p>{zombieFighter.name}</p>
          <p>Price: ${zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add Fighter</button>
          </div>
        )}
      </ul>
      <p>Money Left: {money}</p>
    </>
  );
};


export default App







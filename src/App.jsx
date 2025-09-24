import { useState } from 'react'
import './App.css'
import { knighthoods } from './data/knighthoods'
import { seers } from './data/seers'

function App() {
  const [selectedAge, setSelectedAge] = useState(null)
  const [character, setCharacter] = useState(null)

  const ageOptions = [
    {
      name: 'Wanderer',
      description: 'Young and inexperienced',
      stats: {
        guard: { dice: '1d6', bonus: 0 },
        vigor: { dice: '1d12+1d6', bonus: 0 },
        clarity: { dice: '1d12+1d6', bonus: 0 },
        spirit: { dice: '1d12+1d6', bonus: 0 }
      }
    },
    {
      name: 'Courtier',
      description: 'Mature and skilled',
      stats: {
        guard: { dice: '2d6', bonus: 0 },
        vigor: { dice: '1d12', bonus: 6 },
        clarity: { dice: '1d12', bonus: 6 },
        spirit: { dice: '1d12', bonus: 6 }
      }
    },
    {
      name: 'Ruler',
      description: 'Experienced and powerful',
      stats: {
        guard: { dice: '1d6', bonus: 6 },
        vigor: { dice: '1d12', bonus: 6 },
        clarity: { dice: '1d12', bonus: 6 },
        spirit: { dice: '1d12', bonus: 6 }
      }
    }
  ]

  const rollDice = (diceString) => {
    // Simple dice rolling function
    // e.g., "1d12+1d6" -> roll 1d12 + 1d6
    const parts = diceString.split('+')
    let total = 0

    parts.forEach(part => {
      const [count, sides] = part.trim().split('d').map(Number)
      for (let i = 0; i < count; i++) {
        total += Math.floor(Math.random() * sides) + 1
      }
    })

    return total
  }

  const generateCharacter = (ageOption) => {
    // Roll stats
    const stats = {
      guard: rollDice(ageOption.stats.guard.dice) + ageOption.stats.guard.bonus,
      vigor: rollDice(ageOption.stats.vigor.dice) + ageOption.stats.vigor.bonus,
      clarity: rollDice(ageOption.stats.clarity.dice) + ageOption.stats.clarity.bonus,
      spirit: rollDice(ageOption.stats.spirit.dice) + ageOption.stats.spirit.bonus
    }

    // Random knighthood
    const knighthood = knighthoods[Math.floor(Math.random() * knighthoods.length)]

    // Generate random properties for the knighthood's feature components
    const featuresWithProperties = {
      ...knighthood.feature,
      components: knighthood.feature.components.map(component => ({
        ...component,
        randomProperty: component.properties[Math.floor(Math.random() * component.properties.length)]
      }))
    }

    // Random seer
    const seer = seers[Math.floor(Math.random() * seers.length)]

    return {
      age: ageOption.name,
      stats,
      knighthood: {
        ...knighthood,
        feature: featuresWithProperties
      },
      seer
    }
  }

  const handleAgeSelection = (ageOption) => {
    setSelectedAge(ageOption.name)
    const newCharacter = generateCharacter(ageOption)
    setCharacter(newCharacter)
  }

  const resetCharacter = () => {
    setSelectedAge(null)
    setCharacter(null)
  }

  return (
    <div className="app">
      <h1>Knight Smith Character Generator</h1>

      {!character ? (
        <div className="age-selection">
          <h2>Choose your character's experience level:</h2>
          <div className="age-options">
            {ageOptions.map((option) => (
              <button
                key={option.name}
                className="age-option"
                onClick={() => handleAgeSelection(option)}
              >
                <h3>{option.name}</h3>
                <p>{option.description}</p>
                <div className="stats-preview">
                  <p>Guard: {option.stats.guard.dice}{option.stats.guard.bonus > 0 ? `+${option.stats.guard.bonus}` : ''}</p>
                  <p>Vigor: {option.stats.vigor.dice}{option.stats.vigor.bonus > 0 ? `+${option.stats.vigor.bonus}` : ''}</p>
                  <p>Clarity: {option.stats.clarity.dice}{option.stats.clarity.bonus > 0 ? `+${option.stats.clarity.bonus}` : ''}</p>
                  <p>Spirit: {option.stats.spirit.dice}{option.stats.spirit.bonus > 0 ? `+${option.stats.spirit.bonus}` : ''}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="character-display">
          <button onClick={resetCharacter} className="reset-btn">Generate New Character</button>

          <div className="character-info">
            <h2>Your {character.age} Knight</h2>

            <div className="stats">
              <h3>Stats</h3>
              <p>Guard: {character.stats.guard}</p>
              <p>Vigor: {character.stats.vigor}</p>
              <p>Clarity: {character.stats.clarity}</p>
              <p>Spirit: {character.stats.spirit}</p>
            </div>

            <div className="knighthood">
              <h3>{character.knighthood.name}</h3>
              <p><strong>Special Ability:</strong> {character.knighthood.specialAbility}</p>
              <p><strong>Passion:</strong> {character.knighthood.passion}</p>

              <div className="feature">
                <h4>{character.knighthood.feature.name}</h4>
                {character.knighthood.feature.components.map((component, index) => (
                  <div key={index} className="component">
                    <h5>{component.name} ({component.randomProperty})</h5>
                    <p>{component.characteristic}</p>
                  </div>
                ))}
              </div>

              <div className="properties">
                <h4>Property</h4>
                <ul>
                  {character.knighthood.properties.map((property, index) => (
                    <li key={index}>{property}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="seer">
              <h3>Knighted by: {character.seer.title}</h3>
              <p><strong>Seer Stats:</strong></p>
              <p>Guard: {character.seer.guard}, Vigor: {character.seer.vigor}, Clarity: {character.seer.clarity}, Spirit: {character.seer.spirit}</p>

              <div className="seer-characteristics">
                <h4>Seer Characteristics</h4>
                <ul>
                  {character.seer.characteristics.map((characteristic, index) => (
                    <li key={index}>{characteristic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

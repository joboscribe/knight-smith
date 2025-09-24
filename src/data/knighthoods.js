// Knight Smith - 72 Knighthoods
// TODO: Replace with actual rulebook data

export const knighthoods = [
  {
    id: 1,
    name: "Order of the Golden Dawn",
    specialAbility: "Light Magic Mastery",
    passion: "Justice",
    feature: {
      name: "Dawn's Blessing",
      components: [
        {
          name: "Golden Sigil",
          characteristic: "Glows brightly at sunrise",
          properties: ["Radiant", "Warm", "Gleaming", "Pure", "Luminous", "Brilliant"]
        },
        {
          name: "Morning Light Aura",
          characteristic: "Illuminates dark places with warm light",
          properties: ["Gentle", "Penetrating", "Hopeful", "Cleansing", "Revealing", "Comforting"]
        }
      ]
    },
    properties: [
      "A small chapel dedicated to the morning sun",
      "Ceremonial golden chalice",
      "Collection of sacred dawn prayers"
    ]
  },
  {
    id: 2,
    name: "Order of the Silver Moon",
    specialAbility: "Night Vision",
    passion: "Mystery",
    feature: {
      name: "Lunar Connection",
      components: [
        {
          name: "Silver Eyes",
          characteristic: "Reflect moonlight and see through darkness",
          properties: ["Piercing", "Ethereal", "Reflective", "Ancient", "Wise", "Haunting"]
        },
        {
          name: "Starlight Cloak",
          characteristic: "Shimmers with constellation patterns",
          properties: ["Flowing", "Mystical", "Shifting", "Celestial", "Elegant", "Protective"]
        }
      ]
    },
    properties: [
      "A tower observatory for studying the night sky",
      "Telescope made of silver and crystal",
      "Star charts dating back centuries",
      "Collection of rare moonstones"
    ]
  }
];

// Generate remaining placeholder knighthoods (3-72)
const orderAdjectives = ['Ancient', 'Noble', 'Sacred', 'Eternal', 'Wise', 'Iron', 'Stone', 'Fire', 'Storm', 'Shadow', 'Crystal', 'Thunder', 'Frost', 'Crimson', 'Azure'];
const orderNouns = ['Eagle', 'Wolf', 'Dragon', 'Phoenix', 'Bear', 'Lion', 'Hawk', 'Serpent', 'Raven', 'Stag', 'Griffin', 'Falcon', 'Boar', 'Ox', 'Hound'];
const passions = ['Honor', 'Courage', 'Wisdom', 'Justice', 'Compassion', 'Duty', 'Truth', 'Freedom', 'Peace', 'Strength', 'Loyalty', 'Faith', 'Hope', 'Valor', 'Grace'];

// Sample property sets for placeholder generation
const sampleProperties1 = ["Strong", "Swift", "Fierce", "Noble", "Ancient", "Mighty"];
const sampleProperties2 = ["Glowing", "Sharp", "Heavy", "Light", "Curved", "Straight"];

for (let i = 3; i <= 72; i++) {
  const propertyCount = Math.floor(Math.random() * 4) + 1; // 1-4 properties per knighthood
  const properties = [];
  for (let j = 0; j < propertyCount; j++) {
    properties.push(`Property item ${j + 1} for ${orderAdjectives[i % orderAdjectives.length]} ${orderNouns[i % orderNouns.length]}`);
  }

  knighthoods.push({
    id: i,
    name: `Order of the ${orderAdjectives[i % orderAdjectives.length]} ${orderNouns[i % orderNouns.length]}`,
    specialAbility: `${orderAdjectives[i % orderAdjectives.length]} ${orderNouns[i % orderNouns.length]} Mastery`,
    passion: passions[i % passions.length],
    feature: {
      name: `${orderAdjectives[i % orderAdjectives.length]} ${orderNouns[i % orderNouns.length]} Mark`,
      components: [
        {
          name: `${orderAdjectives[i % orderAdjectives.length]} Emblem`,
          characteristic: `Bears the mark of the ${orderAdjectives[i % orderAdjectives.length]} ${orderNouns[i % orderNouns.length]}`,
          properties: [...sampleProperties1] // Each component gets its own set of 6 properties
        },
        {
          name: `${orderNouns[i % orderNouns.length]} Spirit`,
          characteristic: `Channels the essence of the ${orderNouns[i % orderNouns.length]}`,
          properties: [...sampleProperties2] // Each component gets its own set of 6 properties
        }
      ]
    },
    properties: properties
  });
}
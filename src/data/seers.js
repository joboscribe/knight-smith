// Knight Smith - 72 Seers
// TODO: Replace with actual rulebook data

export const seers = [
  {
    id: 1,
    title: "Seer 1",
    vigor: 15,
    clarity: 18,
    spirit: 20,
    guard: 12,
    characteristics: [
      "Speaks only in whispers that carry on the wind",
      "Eyes that change color with the seasons",
      "Always carries a staff made of living reed"
    ]
  },
  {
    id: 2,
    title: "Seer 2",
    vigor: 10,
    clarity: 22,
    spirit: 16,
    guard: 8,
    characteristics: [
      "Cannot remember their own true name",
      "Sees visions of places that may not exist",
      "Wanders endlessly but always arrives where needed"
    ]
  }
];

// Generate remaining placeholder seers (3-72)
const characteristicTemplates = [
  "Bears a distinctive mark of",
  "Speaks only through",
  "Can only be found during",
  "Always carries a",
  "Never removes their",
  "Has the ability to",
  "Cannot touch anything made of",
  "Sees visions when",
  "Remembers everything about",
  "Has forgotten how to"
];

for (let i = 3; i <= 72; i++) {
  const characteristics = [];
  for (let j = 0; j < 3; j++) {
    characteristics.push(`${characteristicTemplates[j % characteristicTemplates.length]} [unique trait ${i}-${j + 1}]`);
  }

  seers.push({
    id: i,
    title: `Seer ${i}`,
    vigor: Math.floor(Math.random() * 15) + 10, // 10-24
    clarity: Math.floor(Math.random() * 15) + 10, // 10-24
    spirit: Math.floor(Math.random() * 15) + 10, // 10-24
    guard: Math.floor(Math.random() * 15) + 8, // 8-22
    characteristics: characteristics
  });
}
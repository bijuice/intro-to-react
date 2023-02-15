const personDetails = [
  {
    name: "Abdul",
    age: 27,
    skills: "React",
  },
  {
    name: "Sheila",
    age: 23,
    skills: "Angular",
  },
  {
    name: "Festus",
    age: 24,
    skills: "PHP",
  },
]

export default function handler(req, res) {
  const { name } = req.query

  const person = personDetails.find((p) => p.name == name)
  res.status(200).json(person)
}

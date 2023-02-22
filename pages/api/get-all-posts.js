const posts = [
  {
    profileName: "Abdul",
    imageUrl: "/cat.jpg",
    content: "I really love KamiLimu although some people say it's a cult :/",
  },
  {
    profileName: "Muoki",
    imageUrl: "/muoki.jpg",
    content: "Hohoho I'm a hackerman!",
  },
  {
    profileName: "KamiLimu",
    imageUrl: "/kamilimu.jpg",
    content:
      "We're excited to welcome a new cohort of 34 mentees this Saturday, from 15 universities studying across 18 tech disciplines.",
  },
]

export default function handler(req, res) {
  res.status(200).json(posts)
}

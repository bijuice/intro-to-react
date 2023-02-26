const posts = [
  {
    profileName: "Abdul",
    imageUrl: "/cat.jpg",
    content: "I really love KamiLimu although some people say it's a cult :/",
  },
  {
    profileName: "Muoki",
    imageUrl: "/muoki.jpg",
    content:
      "Manifesting a cross platform app that turns off you phone and forces you to take a break.",
  },
  {
    profileName: "KamiLimu",
    imageUrl: "/kamilimu.jpg",
    content:
      "We're excited to welcome a new cohort of 34 mentees this Saturday, from 15 universities studying across 18 tech disciplines.",
  },
]

export default function handler(req, res) {
  const { name } = req.query

  const userPost = posts.find((post) => {
    return post.profileName === name
  })

  if (userPost) {
    res.status(200).json(userPost)
  } else {
    res.status(404).json({ message: "Post could not be found" })
  }
}

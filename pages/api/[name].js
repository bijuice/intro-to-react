const posts = [
  {
    profileName: "Abdul",
    imageUrl: "/cat.jpg",
    content: "I really love KamiLimu although some people say it's a cult :/",
  },
  {
    profileName: "Chao",
    imageUrl: "/cat.jpg",
    content: "I really love KamiLimu although some people say it's a cult :/",
  },
  {
    profileName: "Muoki",
    imageUrl: "/cat.jpg",
    content:
      "We're excited to welcome a new cohort of 34 mentees this Saturday, from 15 universities studying across 18 tech disciplines.",
  },
]

export default function handler(req, res) {
  const { name } = req.query

  console.log(name)

  const post = posts.find((post) => {
    return post.profileName === name
  })

  console.log(post)

  if (post) {
    res.status(200).json(post)
  } else {
    res.status(404).json({ message: "Profile not found." })
  }
}

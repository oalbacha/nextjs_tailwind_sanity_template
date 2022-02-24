import sanityClient from '@sanity/client'
const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}
const client = sanityClient(config)

export default async function createComment(req, res) {
  const { _id, name, email, phone, message} = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'contactForm',
      name,
      email,
      phone,
      message
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit contact form message`, err})
  }
  return res.status(200).json({ message: 'Message submitted' })
}

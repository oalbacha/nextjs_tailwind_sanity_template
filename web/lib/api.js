import client, { previewClient } from './sanity'
const getClient = (preview) => (preview ? previewClient : client)

// ==========PRODUCTS===============
const productFields = `
  _id,
  title,
  slug,
  excerpt,
  category,
  images,
  price,
`

const getUniqueProducts = (products) => {
  const slugs = new Set()
  return products.filter((product) => {
    if (slugs.has(product.slug)) {
      return false
    } else {
      slugs.add(product.slug)
      return true
    }
  })
}

export async function getPreviewProductBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "product" && slug.current == $slug] {
      ${productFields},
      images,
      description,
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllProductsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "product"] | order(category desc){
      ${productFields}
    }`)
  return getUniqueProducts(results)
}

export async function getAllProductsWithSlug() {
  const data = await client.fetch(`*[_type == "product"]{ 'slug': slug.current }`)
  return data
}

export async function getProductAndMoreProducts(slug, preview) {
  const curClient = getClient(preview)
  const [product, moreProducts] = await Promise.all([
    curClient.fetch(
        `*[_type == "product" && slug.current == $slug] | order(_updatedAt desc) {
        ${productFields}
        description,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "product" && slug.current != $slug] | order(category desc, _updatedAt desc){
        ${productFields}
        description,
      }[0...3]`,
      { slug }
    ),
  ])
  return { product, moreProducts: getUniqueProducts(moreProducts) }
}


// ==========POSTS==================
const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`
const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient.fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" &&
                      post._ref == ^._id &&
                      approved == true] {
          _id,
          name,
          email,
          comment,
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}




// ==========STATIC PAGES===============

export async function getHomePageData(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type in ["siteSettings", "homePage", "servicesPage"]]{
      ...
    }`)
  return results
}

export async function getAboutPageData(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type in ["aboutPage", "siteSettings", "reviews"]]{
      ...
    }`)
  return results
}

export async function getServicesPageData(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type in ["servicesPage", "siteSettings"]]{
      ...
    }`)
  return results
}

export async function getPackagesPageData(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type in ["packagesPage", "siteSettings"]]{
      ...
    }`)
  return results
}

export async function getContactPageData(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "siteSettings"]{
      ...
    }`)
  return results
}

export async function getGalleryPageData(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "gallery"]{
      ...
    }`)
  return results
}
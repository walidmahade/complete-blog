interface Post {
  id: string
  Title: string
  content: string
  updated_at: string
  slug: string
  post_categories: [
    {
      name: string
    }
  ]
  featured_image: {
    url: string
    alternativeText: string
  }
}

export type allWpPostType =  {
  allWpPost?: {
    nodes?: {
      authorDatabaseId?: number,
      authorId?: number,
      blocksJSON?: string,
      content?: string,
      title?: string,
      categories?: {
        nodes?: {
          id?: number
        }
      },
      commentCount?: number,
      comments?: {
        nodes?: {
          id?: number
        }
      },
      date?: string,
      featuredImageId?: number,
      slug?: string
    }[]
  }
}

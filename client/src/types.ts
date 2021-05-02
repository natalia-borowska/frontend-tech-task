export type ICategory = {
  name: string
  categoryArticles: ICategoryArticle
  articleCount: number
  childrenCategories: IChildCategory[]
}

export type IArticle = {
  name:  string
  variantName: string
  prices: IPrices
  images: IImage[]
}

export type IChildCategory = {
  name: string
  urlPath: string
}

export type IPrices = {
  currency: string
  regular: {
    value: number
  }
}

export type IImage = {
  path: string
}

export type ICategoryArticle = {
  articles: IArticle[]
}

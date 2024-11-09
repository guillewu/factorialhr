import Product from '#models/product'

export class ProductService {
  public static async getProductsWithVariantsAndConditions({ family }: { family?: string }) {
    const query = Product.query()
      .preload('productVariants')
      .preload('conditions', (conditionsQuery) => {
        conditionsQuery.preload('products', (productsQuery) => {
          productsQuery.select('id')
        })
      })

    if (family) {
      query.where('family', family)
    }
    const results = await query
    return results.reduce((acc: any, curr) => {
      acc[curr.id] = curr
      return acc
    }, {})
  }
}

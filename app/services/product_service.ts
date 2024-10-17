import Product from '#models/product'

export class ProductService {
  public static async getProductsWithVariantsAndConditions({ family }: { family: string }) {
    return await Product.query()
      .where('family', family)
      .preload('productVariants')
      .preload('conditions', (conditionsQuery) => {
        conditionsQuery.preload('products', (productsQuery) => {
          productsQuery.select('id')
        })
      })
  }
}

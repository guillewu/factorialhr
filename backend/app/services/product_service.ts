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

    const resultsJson = results.map((res) =>
      res.serialize({
        fields: {
          pick: ['id', 'name', 'family'],
        },
        relations: {
          productVariants: {
            fields: ['id', 'name', 'imageUrl', 'price', 'productId'],
          },
          conditions: {
            fields: ['rule'],
            relations: {
              products: {
                fields: ['id'],
              },
            },
          },
        },
      })
    )

    return resultsJson.reduce((acc: any, product) => {
      const requiredProductIds: any[] = []

      product.conditions.forEach((condition: { products: any[] }) => {
        condition.products.forEach((prod) => {
          if (prod.id !== product.id) {
            requiredProductIds.push(prod.id)
          }
        })
      })
      delete product.conditions
      product.requiredProductIds = requiredProductIds
      acc[product.id] = product
      return acc
    }, {})
  }
}

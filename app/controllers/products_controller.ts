import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ request }: HttpContext) {
    const { family } = request.qs()

    return Product.query()
      .where('family', family)
      .preload('productVariants')
      .preload('conditions', (conditionsQuery) => {
        conditionsQuery.preload('products', (productsQuery) => {
          productsQuery.select('id')
        })
      })
  }
}

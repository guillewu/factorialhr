import ProductVariant from '#models/product_variant'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductVariantsController {
  async show({ request }: HttpContext) {
    console.log(request.qs())
    return ProductVariant.all()
  }
}

import { ProductService } from '#services/product_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ request, response }: HttpContext) {
    try {
      const { family } = request.qs()
      return ProductService.getProductsWithVariantsAndConditions({ family })
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: 'An error occurred while fetching products',
        error: error.message,
      })
    }
  }
}

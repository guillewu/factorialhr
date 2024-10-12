/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ProductVariantsController = () => import('#controllers/product_variants_controller')
import router from '@adonisjs/core/services/router'

router.get('product_variants', [ProductVariantsController, 'index'])

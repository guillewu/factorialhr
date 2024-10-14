/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ProductsController = () => import('#controllers/products_controller')
const CartController = () => import('#controllers/cart_controller')
import router from '@adonisjs/core/services/router'

router.get('products', [ProductsController, 'index'])
router.post('cart', [CartController, 'create'])

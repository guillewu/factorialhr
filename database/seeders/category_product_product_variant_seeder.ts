import Category from '#models/category'
import Product from '#models/product'
import ProductVariant from '#models/product_variant'
import Condition, { RuleOptions } from '#models/condition'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ConditionProduct from '#models/condition_product'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      { id: 1, name: 'Bicycle' },
      { id: 2, name: 'Ski' },
    ])
    await Product.createMany([
      { id: 1, categoryId: 1, name: 'Full-suspension frame', family: 'frame' },
      { id: 2, categoryId: 1, name: 'Diamond frame', family: 'frame' },
      { id: 3, categoryId: 1, name: 'Step-through frame', family: 'frame' },
      { id: 4, categoryId: 1, name: 'Road wheels', family: 'wheel' },
      { id: 5, categoryId: 1, name: 'Mountain wheels', family: 'wheel' },
      { id: 6, categoryId: 1, name: 'Fat bike wheels', family: 'wheel' },
      { id: 7, categoryId: 1, name: 'Chain', family: 'chain' },
    ])
    await ProductVariant.createMany([
      { id: 1, productId: 1, name: 'Matte', stock: 10, price: 130 },
      { id: 2, productId: 1, name: 'Shiny', stock: 10, price: 100 },
      { id: 3, productId: 2, name: 'Matte', stock: 10, price: 200 },
      { id: 4, productId: 2, name: 'Shiny', stock: 10, price: 120 },
      { id: 5, productId: 3, name: 'Matte', stock: 10, price: 150 },
      { id: 6, productId: 3, name: 'Shiny', stock: 10, price: 130 },
      { id: 7, productId: 4, name: 'Red', stock: 10, price: 50 },
      { id: 8, productId: 4, name: 'Black', stock: 10, price: 24 },
      { id: 9, productId: 5, name: 'Blue', stock: 10, price: 80 },
      { id: 10, productId: 6, name: 'Red', stock: 10, price: 39 },
      { id: 11, productId: 7, name: 'Single', stock: 10, price: 10 },
      { id: 12, productId: 7, name: '8-speed chain', stock: 10, price: 15 },
    ])

    await Condition.createMany([{ id: 1, rule: RuleOptions.Required }])

    await ConditionProduct.createMany([
      { id: 1, conditionId: 1, productId: 5 },
      { id: 2, conditionId: 1, productId: 1 },
    ])
  }
}

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
      {
        id: 1,
        productId: 1,
        name: 'Matte',
        stock: 10,
        price: 130,
        imageUrl: '/full_suspension_frame.webp',
      },
      {
        id: 2,
        productId: 1,
        name: 'Shiny',
        stock: 10,
        price: 100,
        imageUrl: '/full_suspension_frame.webp',
      },
      {
        id: 3,
        productId: 2,
        name: 'Matte',
        stock: 10,
        price: 200,
        imageUrl: '/diamond_frame.webp',
      },
      {
        id: 4,
        productId: 2,
        name: 'Shiny',
        stock: 10,
        price: 120,
        imageUrl: '/diamond_frame.webp',
      },
      {
        id: 5,
        productId: 3,
        name: 'Matte',
        stock: 10,
        price: 150,
        imageUrl: '/step_through_frame.webp',
      },
      {
        id: 6,
        productId: 3,
        name: 'Shiny',
        stock: 10,
        price: 130,
        imageUrl: '/step_through_frame.webp',
      },
      {
        id: 7,
        productId: 4,
        name: 'Red',
        stock: 10,
        price: 50,
        imageUrl: '/red_road_wheel.jpg',
      },
      {
        id: 8,
        productId: 4,
        name: 'Black',
        stock: 10,
        price: 24,
        imageUrl: '/black_road_wheel.webp',
      },
      {
        id: 9,
        productId: 5,
        name: 'Blue',
        stock: 10,
        price: 80,
        imageUrl: '/blue_mtn_wheel.jpg',
      },
      {
        id: 10,
        productId: 6,
        name: 'Red',
        stock: 10,
        price: 39,
        imageUrl: '/red_road_wheel.jpg',
      },
      {
        id: 11,
        productId: 7,
        name: 'Single',
        stock: 10,
        price: 10,
        imageUrl: 'single_speed_chain.jpg',
      },
      {
        id: 12,
        productId: 7,
        name: '8-speed chain',
        stock: 10,
        price: 15,
        imageUrl: 'eight_speed_chain.jpg',
      },
    ])

    await Condition.createMany([{ id: 1, rule: RuleOptions.Required }])

    await ConditionProduct.createMany([
      { id: 1, conditionId: 1, productId: 5 },
      { id: 2, conditionId: 1, productId: 1 },
    ])
  }
}

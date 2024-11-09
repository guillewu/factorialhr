import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('products', (table) => {
      table.integer('category_id').references('categories.id')
    })
  }

  async down() {
    this.schema.alterTable('products', (table) => {
      table.dropColumn('category_id')
    })
  }
}

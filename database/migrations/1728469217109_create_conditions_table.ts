import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'conditions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('rule', ['EXCLUDES', 'REQUIRED']).notNullable()
      table.text('description')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

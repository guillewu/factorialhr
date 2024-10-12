import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Product from './product.js'

export enum RuleOptions {
  Excludes = 'EXCLUDES',
  Required = 'REQUIRED',
}

export default class Condition extends BaseModel {
  @belongsTo(() => Product, {
    foreignKey: 'product_1_id',
  })
  declare product1: BelongsTo<typeof Product>

  @belongsTo(() => Product, {
    foreignKey: 'product_2_id',
  })
  declare productVariant2: BelongsTo<typeof Product>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare product1Id: number

  @column()
  declare product2Id: number

  @column()
  declare rule: RuleOptions

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Product from './product.js'
import Condition from './condition.js'

export default class ProductVariant extends BaseModel {
  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productId: number

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare stock: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

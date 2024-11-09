import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Product from './product.js'

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

  @column()
  declare imageUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

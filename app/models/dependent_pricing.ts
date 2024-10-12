import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import ProductVariant from './product_variant.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class DependentPricing extends BaseModel {
  @belongsTo(() => ProductVariant, {
    foreignKey: 'product_variant1_id',
  })
  declare productVariant1: BelongsTo<typeof ProductVariant>

  @belongsTo(() => ProductVariant, {
    foreignKey: 'product_variant2_id',
  })
  declare productVariant2: BelongsTo<typeof ProductVariant>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productVariant1Id: number

  @column()
  declare productVariant2Id: number

  @column()
  declare price: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

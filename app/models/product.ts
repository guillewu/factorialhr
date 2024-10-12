import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Category from './category.js'
import ProductVariant from './product_variant.js'
import Condition from './condition.js'

export default class Product extends BaseModel {
  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @hasMany(() => ProductVariant)
  declare productVariants: HasMany<typeof ProductVariant>

  @hasMany(() => Condition)
  declare conditions: HasMany<typeof Condition>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoryId: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

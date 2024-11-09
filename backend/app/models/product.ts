import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Category from './category.js'
import ProductVariant from './product_variant.js'
import Condition from './condition.js'
import ConditionProduct from './condition_product.js'

export default class Product extends BaseModel {
  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @hasMany(() => ProductVariant)
  declare productVariants: HasMany<typeof ProductVariant>

  @hasMany(() => ConditionProduct)
  declare conditionProducts: HasMany<typeof ConditionProduct>

  @manyToMany(() => Condition, {
    pivotTable: 'condition_products',
  })
  declare conditions: ManyToMany<typeof Condition>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoryId: number

  @column()
  declare name: string

  @column()
  declare family: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

import { DateTime } from 'luxon'
import {
  BaseModel,
  belongsTo,
  column,
  hasMany,
  hasManyThrough,
  manyToMany,
} from '@adonisjs/lucid/orm'
import type {
  BelongsTo,
  HasMany,
  HasManyThrough,
  ManyToMany,
} from '@adonisjs/lucid/types/relations'
import Product from './product.js'
import ConditionProduct from './condition_product.js'

export enum RuleOptions {
  Excludes = 'EXCLUDES',
  Required = 'REQUIRED',
}

export default class Condition extends BaseModel {
  @manyToMany(() => Product, {
    pivotTable: 'condition_products',
  })
  declare products: ManyToMany<typeof Product>

  @hasMany(() => ConditionProduct)
  declare conditionProducts: HasMany<typeof ConditionProduct>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare rule: RuleOptions

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

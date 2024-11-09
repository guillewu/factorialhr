import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Product from './product.js'
import Condition from './condition.js'

export default class ConditionProduct extends BaseModel {
  @belongsTo(() => Condition)
  declare condition: BelongsTo<typeof Condition>

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productId: number

  @column()
  declare conditionId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

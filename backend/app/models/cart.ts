import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import ProductVariant from './product_variant.js'

export default class Cart extends BaseModel {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => ProductVariant)
  declare productVariants: HasMany<typeof ProductVariant>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

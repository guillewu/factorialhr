import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cart from './cart.js'
import ProductVariant from './product_variant.js'

export default class CartProductVariant extends BaseModel {
  @belongsTo(() => Cart)
  declare cart: BelongsTo<typeof Cart>

  @belongsTo(() => ProductVariant)
  declare productVariant: BelongsTo<typeof ProductVariant>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cartId: number

  @column()
  declare productVariantId: number

  @column()
  declare quantity: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Absence extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_musicien: number

  @column()
  declare raison: string | null
}

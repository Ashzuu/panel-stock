import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Musicien extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column()
  declare prenom: string

  @column()
  declare instrument: string

  @column()
  declare chef_pupitre: boolean

  @column()
  declare renfort: boolean

  @column()
  declare dimanche_only: boolean

  @column()
  declare naissance: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'musiciens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('nom').notNullable()
      table.string('prenom').notNullable()
      table.string('instrument').notNullable()
      table.boolean('chef_pupitre').notNullable()
      table.boolean('renfort').notNullable()
      table.boolean('dimanche_only').notNullable()
      table.date('naissance').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

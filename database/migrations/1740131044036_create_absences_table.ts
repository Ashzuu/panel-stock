import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'absences'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.integer('id_musicien').notNullable()
      table.string('raison').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

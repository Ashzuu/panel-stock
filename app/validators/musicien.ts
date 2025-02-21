import vine from '@vinejs/vine'

export const musicienValidator = vine.compile(
  vine.object({
    prenom: vine.string(),
    nom: vine.string(),
    instrument: vine.string(),
    naissance: vine.date(),
    dimancheOnly: vine.accepted().optional(),
    renfort: vine.accepted().optional(),
  })
)

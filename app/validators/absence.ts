import vine from '@vinejs/vine'

export const absenceValidator = vine.compile(
  vine.object({
    prenom: vine.string(),
    nom: vine.string(),
    dateAbsence: vine.date().after('today'),
    raison: vine.string().nullable(),
  })
)

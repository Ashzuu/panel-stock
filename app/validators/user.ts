import vine from '@vinejs/vine'

export const userValidator = vine.compile(
  vine.object({
    nom: vine.string(),
    email: vine.string().email(),
    password: vine.string(),
    passwordConfirm: vine.string().sameAs('password'),
    role: vine.string(),
  })
)

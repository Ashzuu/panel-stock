/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Route from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import { main } from 'ts-node-maintained/dist/bin'

const mainController = () => import('#controllers/main_controller')
const loginController = () => import('#controllers/login_controller')
const userController = () => import('#controllers/users_controller')
const absenceController = () => import('#controllers/absences_controller')
const musicienController = () => import('#controllers/musiciens_controller')

// Views
Route.get('/', [mainController, 'displayHome']).as('home')
Route.get('/authenticate', [loginController, 'displayLogin']).as('loginView')
Route.get('/utilisateurs', [userController, 'displayUser'])
  .as('userView')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
Route.get('/absences', [absenceController, 'displayAbsence'])
  .as('absenceView')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
Route.get('/musiciens', [musicienController, 'displayMusiciens'])
  .as('musicienView')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )

Route.get('/report', [mainController, 'displayReport']).as('reportView')

// Views create
Route.get('/utilisateurs/create', [userController, 'displayCreateUser'])
  .as('createUserView')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
Route.get('/musiciens/create', [musicienController, 'displayCreateMusicien'])
  .as('createMusicienView')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
Route.get('/absences/create', [absenceController, 'displayCreateAbsence']).as('createAbsenceView')

// Authentification
Route.post('/login/connexion', [loginController, 'login']).as('login')
Route.post('/login/deconnexion', [loginController, 'logout'])
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
  .as('logout')

// Create
Route.post('/utilisateurs/create', [userController, 'create'])
  .as('createUser')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
Route.post('/absences/create', [absenceController, 'create'])
  .as('createAbsence')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
Route.post('/musiciens/create', [musicienController, 'create'])
  .as('createMusicien')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )

// Delete
Route.post('/musiciens/delete/:id', [musicienController, 'delete'])
  .as('deleteMusicien')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )

Route.post('/absences/delete/:id', [absenceController, 'delete'])
  .as('deleteAbsence')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )

Route.post('/utilisateurs/delete/:id', [userController, 'delete'])
  .as('deleteUser')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )

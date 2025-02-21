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

const mainController = () => import('#controllers/main_controller')
const loginController = () => import('#controllers/login_controller')
const userController = () => import('#controllers/users_controller')
const absenceController = () => import('#controllers/absences_controller')
const musicienController = () => import('#controllers/musiciens_controller')

// Views
Route.get('/', [mainController, 'displayHome']).as('home')
Route.get('/authenticate', [loginController, 'displayLogin']).as('loginView')
Route.get('/utilisateurs', [userController, 'displayUser']).as('userView')
Route.get('/absences', [absenceController, 'displayAbsence']).as('absenceView')
Route.get('/musiciens', [musicienController, 'displayMusiciens']).as('musicienView')

// Views create
Route.get('/utilisateurs/create', [userController, 'displayCreateUser']).as('createUserView')
Route.get('/musiciens/create', [musicienController, 'displayCreateMusicien']).as(
  'createMusicienView'
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
Route.post('/utilisateurs/create', [userController, 'create']).as('createUser')

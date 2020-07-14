'use strict'

const Route = use('Route')

// Startups
Route.get('/users', 'UserGuestController.index')
Route.post('/users', 'UserGuestController.store')
Route.get('/users/:id', 'UserGuestController.show')
Route.put('/users/:id', 'UserGuestController.update')


// Authentication
Route.post('/sessions/users', 'UserGuestSessionController.store')
Route.post('/sessions/admins', 'UserGuestSessionController.store')

// Forgot Password
Route.post('/forgot', 'ForgotPasswordController.store')
Route.get('/forgot', 'ForgotPasswordController.verifyToken')
Route.put('/forgot/:token', 'ForgotPasswordController.update')

// Jobs
Route.get('/jobs', 'JobController.index')

// Permission
Route.group(() => {
  Route.get('/permissions', 'PermissionController.index')
  Route.post('/permissions', 'PermissionController.store')
  Route.put('/permissions/:id', 'PermissionController.update')
  Route.delete('/permissions/:id', 'PermissionController.destroy')
}).middleware(['auth', 'is:(admin)'])

// Role
Route.group(() => {
  Route.get('/roles', 'RoleController.index')
  Route.get('/roles/:id', 'RoleController.show')
  Route.post('/roles', 'RoleController.store')
  Route.put('/roles/:id', 'RoleController.update')
  Route.delete('/roles/:id', 'RoleController.destroy')
}).middleware(['auth', 'is:(admin)'])


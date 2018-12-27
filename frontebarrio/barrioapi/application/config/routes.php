<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
| example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
| https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
| $route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
| $route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
| $route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples: my-controller/index -> my_controller/index
|   my-controller/my-method -> my_controller/my_method
*/
$route['default_controller'] = 'proyectos';
$route['404_override'] = '';
$route['translate_uri_dashes'] = TRUE;

/*
| -------------------------------------------------------------------------
| Sample REST API Routes
| -------------------------------------------------------------------------
*/
// Routes for proyectos
$route['proyectos']['get'] = 'proyectos/index';
$route['proyectos/(:num)']['get'] = 'proyectos/find/$1';
$route['proyectos']['post'] = 'proyectos/index';
$route['proyectos/(:num)']['put'] = 'proyectos/index/$1';
$route['proyectos/(:num)']['delete'] = 'proyectos/index/$1';
// Routes for usuarios
$route['usuarios']['get'] = 'usuarios/index';
$route['usuarios/(:num)']['get'] = 'usuarios/find/$1';
$route['usuarios']['post'] = 'usuarios/index';
$route['usuarios/(:num)']['put'] = 'usuarios/index/$1';
$route['usuarios/(:num)']['delete'] = 'usuarios/index/$1';
//routes for consumo
$route['consumodiario']['get'] = 'consumodiario/index';
$route['consumodiario/(:num)']['get'] = 'consumodiario/find/$1';
$route['consumodiario']['post'] = 'consumodiario/index';
$route['consumodiario/(:num)']['put'] = 'consumodiario/index/$1';
$route['consumodiario/(:num)']['delete'] = 'consumodiario/index/$1';
//routes for info
$route['proyectuser']['get'] = 'proyectuser/index';
$route['proyectuser/(:num)']['get'] = 'proyectuser/find/$1';
$route['proyectuser']['post'] = 'proyectuser/index';
$route['proyectuser/(:num)']['put'] = 'proyectuser/index/$1';
$route['proyectuser/(:num)']['delete'] = 'proyectuser/index/$1';
//routes for consumomes
$route['consumomes']['get'] = 'consumomes/index';
$route['consumomes/(:num)']['get'] = 'consumomes/find/$1';
$route['consumomes']['post'] = 'consumomes/index';
$route['consumomes/(:num)']['put'] = 'consumomes/index/$1';
$route['consumomes/(:num)']['delete'] = 'consumomes/index/$1';
//routes for participantes
$route['participantes']['get'] = 'participantes/index';
$route['participantes/(:num)']['get'] = 'participantes/find/$1';
$route['participantes']['post'] = 'participantes/index';
$route['participantes/(:num)']['put'] = 'participantes/index/$1';
$route['participantes/(:num)']['delete'] = 'participantes/index/$1';;
//routes for meta
$route['participantes']['get'] = 'participantes/index';
$route['participantes/(:num)']['get'] = 'participantes/find/$1';
// Routes for region
$route['regiones']['get'] = 'regiones/index';
$route['regiones/(:num)']['get'] = 'regiones/find/$1';
$route['regiones']['post'] = 'regiones/index';
$route['regiones/(:num)']['put'] = 'regiones/index/$1';
$route['regiones/(:num)']['delete'] = 'regiones/index/$1';
// Routes for monitor
$route['monitor']['get'] = 'monitor/index';
$route['monitor/(:num)(\.)([a-zA-Z0-9_-]+)(.*)']['get'] = 'monitor/find/$3$4';
$route['monitor']['post'] = 'monitor/index';
$route['monitor/(:num)']['put'] = 'monitor/index/$1';
$route['monitor/(:num)']['delete'] = 'monitor/index/$1';
// Routes for efficient
$route['efficient']['get'] = 'efficient/index';
$route['efficient/(:num)']['get'] = 'efficient/find/$1';
$route['efficient']['post'] = 'efficient/index';
$route['efficient/(:num)']['put'] = 'efficient/index/$1';
$route['efficient/(:num)']['delete'] = 'efficient/index/$1';



//+++++++++++++++++++++++++++++++
// $route['api/example/users/(:num)'] = 'api/example/users/id/$1'; // Example 4
// $route['api/example/users/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/example/users/id/$1/format/$3$4'; // Example 8

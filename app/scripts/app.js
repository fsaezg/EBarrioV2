'use strict';

/**
 * @ngdoc overview
 * @name frontEbarrioApp
 * @description
 * # frontEbarrioApp
 *
 * Main module of the application.
 */
angular
  .module('frontEbarrioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/inicio', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'inicio'
      })
      .when('/casillaproyectos', {
        templateUrl: 'views/casillaproyectos.html',
        controller: 'CasillaproyectosCtrl',
        controllerAs: 'casillaproyectos'
      })
      .when('/crearproyecto', {
        templateUrl: 'views/crearproyecto.html',
        controller: 'CrearproyectoCtrl',
        controllerAs: 'crearproyecto'
      })
      .when('/listaproyectos', {
        templateUrl: 'views/listaproyectos.html',
        controller: 'ListaproyectosCtrl',
        controllerAs: 'listaproyectos'
      })
      .when('/hcarbono', {
        templateUrl: 'views/hcarbono.html',
        controller: 'HcarbonoCtrl',
        controllerAs: 'hcarbono'
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/editar/:id', {
        templateUrl: 'views/editar.html',
        controller: 'EditarCtrl',
        controllerAs: 'editar'
      })
      .when('/detallecasilla/:id', {
        templateUrl: 'views/detallecasilla.html',
        controller: 'ViewCtrl',
        controllerAs: 'detallecasilla'
      })
      .when('/proyectos', {
        templateUrl: 'views/proyectos.html',
        controller: 'ProyectosCtrl',
        controllerAs: 'proyectos'
      })
      .when('/efficient', {
        templateUrl: 'views/efficient.html',
        controller: 'EfficientCtrl',
        controllerAs: 'efficient'
      })
      .when('/aportes', {
        templateUrl: 'views/aportes.html',
        controller: 'AportesCtrl',
        controllerAs: 'aportes'
      })
      .when('/loginadmin', {
        templateUrl: 'views/loginadmin.html',
        controller: 'LoginadminCtrl',
        controllerAs: 'loginadmin'
      })
      .when('/ingresoconsumo', {
        templateUrl: 'views/ingresoconsumo.html',
        controller: 'IngresoconsumoCtrl',
        controllerAs: 'ingresoconsumo'
      })
      .when('/reloj', {
        templateUrl: 'views/reloj.html',
        controller: 'RelojCtrl',
        controllerAs: 'reloj'
      })
      .when('/detalles/:id', {
        templateUrl: 'views/detalles.html',
        controller: 'ViewCtrl',
        controllerAs: 'detalles'
      })
      .when('/subir/:id', {
        templateUrl: 'views/subir.html',
        controller: 'SubirCtrl',
        controllerAs: 'subir'
      })
      .when('/verconsumo', {
        templateUrl: 'views/verconsumo.html',
        controller: 'VerconsumoCtrl',
        controllerAs: 'verconsumo'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('HomeCtrl', ['$scope', 'Proyectos', '$route', function ($scope, Proyectos, $route) {
  var vm=this;
    vm.menutemplate={
    url:'views/menu.html'
    };
        Proyectos.get(function (data) {
            $scope.proyectos = data.response;
        })

        $scope.remove = function (id) {
          var result = confirm("¿Seguro que quiere eliminar este proyecto?");
    if (result) {
            Proyectos.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        }}
    }])

  .controller('CreateCtrl', ['$scope', 'Proyectos', function ($scope, Proyectos) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        $scope.settings = {
            pageTitle: "Agregar Proyecto",
            action: "Agregar"
        };

        
        $scope.proyecto = {
            idproyecto: "",
            descripcion: "",
            region: "",
            ciudad: "",
            estado: "",
            requisito: "",
            ahorro: "",
            duracion: ""
        };

        $scope.submit = function () {
          var result = confirm("Se agregará un nuevo proyecto, ¿Desea continuar?");
          if (result) {
            Proyectos.save({proyecto: $scope.proyecto}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.proyecto);
                    $scope.settings.success = "El Proyecto ha sido creado correctamente!";
                    alert("El proyecto ha sido guardado con exito");
                     window.location.href='#!/listaproyectos';
                }
                else{
                  alert("no se pudo guardar el proyecto");
                }
            })
        }}
    }])

    .controller('EditCtrl', ['$scope', 'Proyectos', '$routeParams', function ($scope, Proyectos, $routeParams) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        $scope.settings = {
            pageTitle: "Editar Proyectos",
            action: "Editar"
        };

        var id = $routeParams.id;

        Proyectos.get({id: id}, function (data) {
            $scope.proyecto = data.response;
        });

        $scope.submit = function () {
          var result = confirm("¿Seguro que quiere editar este proyecto?");
    if (result) {
            Proyectos.update({proyecto: $scope.proyecto}, function (data) {
                $scope.settings.success = "El usuario ha sido editada correctamente!";
                alert("El proyecto ha sido editado con exito");
                     window.location.href='#!/listaproyectos';
            });
        }}
    }])

    .controller('AddUserCtrl', ['$scope', 'Proyectos', 'Usuarios', '$route', function ($scope, Proyectos, Usuarios, $route) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        Usuarios.get(function (data) {
            $scope.proyecto = data.response;
        })

        $scope.settings = {
            pageTitle: "Agregar usuario a un Proyecto",
            action: "Agregar"
        };

        $scope.usuario = {
            idusuario: "",
            nombre: "",
            apellido: "",
            contrasena: "",
            correo: ""
        };

        $scope.submit = function () {
          var result = confirm("Se registrara como nuevo usuario ¿Desea continuar?");
    if (result) {
            console.log("estoy agreango usuario");
            Usuarios.save({usuario: $scope.usuario}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.proyecto);
                    $scope.settings.success = "El usuario ha sido vinculado correctamente!";
                    console.log("agregue un usuario");
                }
            })
        }}
    }])

        .controller('AddEfficientCtrl', ['$scope', 'Proyectos', 'Efficient', '$route', function ($scope, Proyectos, Efficient, $route) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        Proyectos.get(function (data) {
            $scope.proyecto = data.response;
        })

        $scope.settings = {
            pageTitle: "Agregar usuario a un Proyecto",
            action: "Agregar"
        };

        $scope.efficient = {
            nombre: "",
            apellido: "",
            apikey: ""
        };

        $scope.submit = function () {
          var result = confirm("Se registrara una nueva instancia de efficient home ¿Desea continuar?");
    if (result) {
            Efficient.save({efficient: $scope.efficient}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.efficient);
                    $scope.settings.success = "Efficient home ha sido agregado exitosamente!";
                    console.log("agregue un usuario");
                }
            })
        }}
    }])


    .controller('ViewCtrl', ['$scope', 'Proyectos', 'Usuarios', 'Participante','Region','Efficient','$routeParams', '$route', function ($scope, Proyectos, Usuarios, Participante, Region, Efficient, $routeParams, $route) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        var id = $routeParams.id;

        Usuarios.get({id: id}, function (data) {
            $scope.usuario = data.response;
        });

        Proyectos.get({id: id}, function (data) {
            console.log(data.response);
            $scope.proyectos = data.response;
        });

        Participante.get({id: id}, function (data) {
            console.log(data.response);
            $scope.participante = data.response;
        });
        Region.get({id: id}, function (data) {
            console.log(data.response);
            $scope.regiones = data.response;
        });
        Efficient.get({id: id}, function (data) {
            console.log(data.response);
            $scope.efficient = data.response;
        })

        $scope.remove = function (id) {
            Proyectos.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        }
    }])

    .factory('Usuarios', ['$resource', function ($resource) {
        return $resource('http://localhost:8081/dashboard/BarrioAPI/usuarios/id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])

    .factory('Proyectos', ['$resource', function ($resource) {
        return $resource('http://localhost:8081/dashboard/BarrioAPI/proyectos/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
    .factory('Participante', ['$resource', function ($resource) {
        return $resource('http://localhost:8081/dashboard/BarrioAPI/participantes/', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
    .factory('Region', ['$resource', function ($resource) {
        return $resource('http://localhost:8081/dashboard/BarrioAPI/region/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
    .factory('Efficient', ['$resource', function ($resource) {
        return $resource('http://localhost:8081/dashboard/BarrioAPI/efficient/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])


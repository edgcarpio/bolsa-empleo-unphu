'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:adminHomeCTRL
 * @description
 * # adminHomeCtrl
 * Controller to display the dashboard admin
 */
angular.module('jobApp')
  .controller('adminHomeCtrl', function(userTypeService, mockDataService, $scope, $location) {
    
    $scope.student = userTypeService.student;
    $scope.employer = userTypeService.employer;
    $scope.admin = userTypeService.admin;
    $scope.userData = userTypeService.getProfile;
    
    $scope.userList = this;
    $scope.employeesList = this;

    $scope.studentList = this;
    $scope.isStudentSelected = false;
    $scope.selectedStudent = {id: null, user_id: null, study_area: null, name: null, last_name: null, date_birth: null, registration: null, email: null, tel_1: null, cel: null, desc_profile: null};
   
    $scope.setSelected = function(selectedStudent){
        if(selectedStudent == null){
            
            $scope.selectedStudent.id = selectedStudent;
            $scope.selectedStudent.user_id = selectedStudent;
            $scope.selectedStudent.study_area = selectedStudent;
            $scope.selectedStudent.name = selectedStudent;
            $scope.selectedStudent.last_name = selectedStudent;
            $scope.selectedStudent.date_birth = selectedStudent;
            $scope.selectedStudent.registration = selectedStudent;
            $scope.selectedStudent.email = selectedStudent;
            $scope.selectedStudent.tel_1 = selectedStudent;
            $scope.selectedStudent.cel = selectedStudent;
            $scope.selectedStudent.desc_profile = selectedStudent;
           }
        else{
            $scope.selectedStudent.id = selectedStudent.id_empleo;
            $scope.selectedStudent.user_id = selectedStudent.id_usuario;
            $scope.selectedStudent.study_area = selectedStudent.area_estudio;
            $scope.selectedStudent.name = selectedStudent.nombre;
            $scope.selectedStudent.last_name = selectedStudent.apellido;
            $scope.selectedStudent.date_birth = selectedStudent.fecha_nacimiento;
            $scope.selectedStudent.registration = selectedStudent.matricula;
            $scope.selectedStudent.email = selectedStudent.email;
            $scope.selectedStudent.tel_1 = selectedStudent.tel_1;
            $scope.selectedStudent.cel = selectedStudent.cel;
            $scope.selectedStudent.desc_profile = selectedStudent.desc_perfil;
            
        }
        $scope.isStudentSelected = !$scope.isStudentSelected;
    }
    
    $scope.setTimeout = function(){
        if ($('#dtUsers').length > 0){
            setTimeout(function(){ $('#dtUsers').DataTable({
                responsive: true,
                "lengthMenu": [ [5, 10, 15, -1], [5, 10, 15, "All"] ],
                "language": {
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "Nada encontrado - disculpas",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "No hay registros disponibles",
                "infoFiltered": "(Filtrado de los registros totales de _MAX_)",
                "search":         "Buscar:",
                "paginate": {
                    "first":      "Primera",
                    "last":       "Ultima",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                }
            }
            }) }, 1000);    
        }
        
        if ($('#dtRequests').length > 0){
        setTimeout(function(){ $('#dtRequests').DataTable({
            responsive: true,
            "lengthMenu": [ [5, 10, 15, -1], [5, 10, 15, "All"] ],
            "language": {
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "Nada encontrado - disculpas",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(Filtrado de los registros totales de _MAX_)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Siguiente",
                "previous":   "Anterior"
            }
        }
        }) }, 1000);
    }

    if ($('#dtEmployees').length > 0){
           setTimeout(function(){ $('#dtEmployees').DataTable({
            responsive: true,
            "lengthMenu": [ [5, 10, 15, -1], [5, 10, 15, "All"] ],
            "language": {
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "Nada encontrado - disculpas",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(Filtrado de los registros totales de _MAX_)",
            "search":         "Buscar:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Siguiente",
                "previous":   "Anterior"
            }
        }
        }) }, 1000);
    }

    if ($('#dtContacts').length > 0){
        setTimeout(function(){ $('#dtContacts').DataTable({
         responsive: true,
         "lengthMenu": [ [5, 10, 15, -1], [5, 10, 15, "All"] ],
         "language": {
         "lengthMenu": "Mostrar _MENU_ registros por página",
         "zeroRecords": "Nada encontrado - disculpas",
         "info": "Mostrando página _PAGE_ de _PAGES_",
         "infoEmpty": "No hay registros disponibles",
         "infoFiltered": "(Filtrado de los registros totales de _MAX_)",
         "search":         "Buscar:",
         "paginate": {
             "first":      "Primera",
             "last":       "Ultima",
             "next":       "Siguiente",
             "previous":   "Anterior"
         }
     }
     }) }, 1000);
 }
    };
    
    $scope.setTimeout();
    
    mockDataService.getStudents().then(function(res){
       $scope.studentList = res.data; 
    });

    mockDataService.getUserData().then(function(res){
        $scope.userList = res.data;
    });

    mockDataService.getEmployees().then(function(res){
        $scope.employeesList = res.data;
    });
    
  });
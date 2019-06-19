
var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.EmpList = []; //Empty array of employees

    $scope.AddData = function(){ //add data to table or array

        var emp = { //complete object
            id: $scope.EmpList.length +1,
             name: $scope.name, 
             salary: $scope.salary
        };
        // console.log(id);

        $scope.EmpList.push(emp); //push the emp object to the array
        ClearModel(); //Reset all the values to default         
    };

    //function to delete data
    $scope.DeleteData = function(emp){
        var index = $scope.EmpList.indexOf(emp); // what index we want to delete in array
        $scope.EmpList.splice(index,1);
    };

    //function to bind data to input fields
    $scope.BindSelectedData = function(emp){ 
        $scope.id = emp.id;
        $scope.name = emp.name;
        $scope.salary = emp.salary;
    };

    //function to update data
    $scope.UpdateData = function(){
        $.grep($scope.EmpList, function(e){ //using jQuery feature grep. It takes array and function
            if(e.id == $scope.id){
                e.name = $scope.name;
                e.salary = $scope.salary; 
            }
        });
    }


    function ClearModel(){
        $scope.id = 0; 
        $scope.name = '';
        $scope.salary = 0;
    }
});
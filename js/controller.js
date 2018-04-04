app.controller("mycontroller",function ($scope,myfactory){

    
    $scope.addItem=function (){

        var itemObject={};
        itemObject.id=$scope.id;
        itemObject.name=$scope.name;
        itemObject.url=$scope.url;
        itemObject.desc=$scope.desc;
        itemObject.date=$scope.date;
        itemObject.color=$scope.color;
        itemObject.price=$scope.price;
        itemObject.isRed=false;
        itemObject.isFound=false;
        itemObject.isUpdate=false;
        

        console.log("the itemObject is",itemObject);
  myfactory.itemList.push(itemObject);
        console.log(myfactory.itemList);
        $scope.items=myfactory.itemList;
        
    }

    $scope.markForDelete=(item)=>{

    console.log("we are at ",item);
    item.isRed=!item.isRed;
    
    }

    $scope.deleteItem=()=>{

        var temparray=[];

        for(let i=0;i<myfactory.itemList.length;i++){

            if(myfactory.itemList[i].isRed==false){

                temparray.push(myfactory.itemList[i]);
            }

        }

        myfactory.itemList=temparray;
        $scope.items=temparray;
    }

    $scope.searchItem=()=>{

        console.log("inside search...",$scope.searchinput);
        for(let i=0;i<myfactory.itemList.length;i++){

            if($scope.searchinput==myfactory.itemList[i].id){

                
                myfactory.itemList[i].isFound=!myfactory.itemList[i].isFound;

            }
        }

        $scope.items=myfactory.itemList;
    }

    $scope.markForUpdate=(item)=>{

        console.log("inside markforupdate",$scope.items);
       item.isUpdate=!item.isUpdate;

       for(let i=0;i<$scope.items.length;i++){

        if($scope.items[i].isUpdate==true){

            $scope.id=$scope.items[i].id;
            $scope.name=$scope.items[i].name;
            $scope.desc=$scope.items[i].desc;
            $scope.url=$scope.items[i].url;
            $scope.date=$scope.items[i].date;
            $scope.price=$scope.items[i].price;
        }

        else{

            $scope.items[i].isUpdate=false;
        }

    }
       

    }

    $scope.updateItem=()=>{

        for(let i=0;i<$scope.items.length;i++){

            if($scope.items[i].isUpdate==true){

                $scope.items[i].id=$scope.id;
                $scope.items[i].name= $scope.name;
                $scope.items[i].url= $scope.url;
                $scope.items[i].desc= $scope.desc;
                $scope.items[i].date=$scope.date;
                $scope.items[i].price= $scope.price;


            }
        }


    
    }

});

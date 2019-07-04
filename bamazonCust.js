// js here for sql

// don't forget to do your npm inits to create your package jSON file 

// make sure to require inquire    

// npm i mysql inquirer console.table 

var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889
    user: "root",
    database: "bamazon"
})

connection.connect(function (error) {
    if (error) throw error;
    showItems()
    })

function showItems(){
    connection.query("select * from products", function (error, response) {
        if (error) throw error;
        console.table(response)
    })
    question()
}

function question(){
    
}

prompt.start();

prompt.get(["id", "inStock"], function (err, result) {
	if (err){
	    console.log(err)
	}

	var CustomerPickID = parseInt(result.id);
	var CustomerQuantity = parseInt(result.howMany);

	console.log("id=" + CustomerPickID, "in stock =" + CustomerQuantity);

	function selectID(){
		connection.query('SELECT * FROM Products WHERE ItemID =' + CustomerPickID, function(err, res) { 
			if (err) throw err;
			console.log(res);
			var want = CustomerQuantity;
   			var have = res[0].StockQuantity;
   			var individPrice = res[0].Price;
   			newQuantity = have - want;
   			if (newQuantity >= 0){
          		console.log('we have stock '+res[0].ProductName+' in stock.');
          		var totalCost= individPrice * CustomerQuantity;
          		console.log("The total is " +totalCost);
          		connection.query('UPDATE Products SET StockQuantity = '+newQuantity+' WHERE ItemID ='+CustomerPickID, function(err, res){
        		if (err) throw err;
        			connection.query('SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM products WHERE ItemID ='+CustomerPickID, function(err, res){
          				console.log(res);
          			});	
        		});
          	}	
   			else if(want>have && have !=0){
			    console.log('Our apologies. We only have '+have+' in stock.');
		  	}
		  	else{
	          return false
	        }
		});
	};
	selectID();	
	});
// });

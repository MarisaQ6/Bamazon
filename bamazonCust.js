// js here for sql

// don't forget to do your npm inits to create your package jSON file 

// make sure to require inquire    

// npm i mysql inquirer console.table 

var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port:
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

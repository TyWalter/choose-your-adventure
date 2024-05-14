// let uname = document.querySelector('#uname');
// let upass = document.querySelector('#upass');
// let sname = document.querySelector('#sname');
// let semail = document.querySelector('#sname');
// let snamp = document.querySelector('#sname');
// let usubmit = document.querySelector('#usubmit')
// let ssubmit = document.querySelector('#ssubmit')



// function loginUser(){
//   usubmit.addEventListener('click', function (){
//     //will need to check to see if user exists
//     //if user does exist and username/passwords match log in user
//   })
// }

// function createUser(){
//   ssubmit.addEventListener('click', function () {
//     if(uname != " "){
//       //save name to login model user_name
//     }else{
//       return err;
//     }
//     if(upass != " "){
//       //save password to login model password
//     }else{
//       return err;
//     }
//     if(email != " "){
//       //save name to login model user_name
//     }else{
//       return err;
//     }

   


//   })
// }





const express = require('express');
const { Pool } = require('pg');


let uname = document.querySelector('#uname');
let upass = document.querySelector('#upass');
let sname = document.querySelector('#sname');
let semail = document.querySelector('#sname');
let snamp = document.querySelector('#sname');
let usubmit = document.querySelector('#usubmit')
let ssubmit = document.querySelector('#ssubmit')

const pool = new Pool(
  {
    user: DB_USER,
    password: DB_PW,
    host: 'localhost',
    database: 'adventure_db'
  }
)

pool.connect();

pool.query('CREATE TABLE loginInfo');

pool.query('INSERT INTO loginInfo', )
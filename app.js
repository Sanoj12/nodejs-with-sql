var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_details"
})

connection.connect((error) => {
    if (error) {

        console.log(error);
    } else {
        console.log("database connected successfully");
    }

    //database created
    //connection.query("create database employee_details",(err)=>{
    //if(err) throw err;
    //console.log("database created");
    //})

    //table creation

    //    const sql="create table employee(id int auto_increment primary key,  name varchar(25)  not null, email varchar(25) not null,phone varchar(10))"
    //      connection.query(sql,(error,data)=>{
    //         if(error) throw error;

    //         console.log("table created")

    //  })
    // const sql="create table employee_job_status(id int auto_increment primary key,empid int not null,jobsts varchar(20) not null  )"
    //    connection.query(sql,(error,data)=>{
    //       if(error) throw error;

    //  console.log("table created")

    //    })

    //insert records



    // var emp_query="insert into employee VALUES(null,'abc', 'abc@example.com', '1234567890'),(null,'xyz', 'xyz@example.com', '1234567890'),(null,'qwerty', 'qwerty@example.com', '1234567890'),(null,'mno', 'mno@example.com', '1234567890'),(null,'sanoj', 'sanoj@example.com', '1234567890')";
    // connection.query(emp_query, function (err, result) {
    //     if (err) throw err;
    //     console.log("record inserted");
    //   });

   
    
    //join two  tables

   var join="SELECT emp.id, emp.name, emp.email, emp.phone, job.jobsts AS job_status FROM employee AS emp JOIN ( SELECT empId, jobsts FROM employee_job_status ORDER BY id DESC ) AS job ON emp.id = job.empId GROUP BY emp.id, emp.name, emp.email, emp.phone;"
   connection.query(join,(err,reult)=>{
       if(err)  throw err;
       console.log("join success");
   })


 
});
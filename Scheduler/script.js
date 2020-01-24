//Setting an array of times
var workHours=[9, 10, 11, 12, 13, 14, 15, 16, 17];

// var rightNow=moment()
//Function to display planner..setting a var for moment with a for loop describing the hours
//starting from 9am to 5pm(17)
function displayPlanner(){
var currentHour=moment().hour()
const now = moment().format('MMMM Do YYYY');

$("#now").text(now);
for (let index = 0; index < workHours.length; index++) {
      
    //Creating a row dynamically for HTML
     var row=$("<div class='row'>")
     //Col 1 is for hours. creating dynamically
    var columnOne=$("<div class='col-sm-2'>")
    //Col 1 attribute setting up dynamically to center the text(css)
    columnOne.attr("style","text-align:center")
    //My 9-17 array which are just numners are now am if the hour is less than 12pm
    columnOne.text(workHours[index] + ":00 am")
    //This is saying if my hours are greater than 12 or equal to then label as pm and also
    //that if the index is greater or equal to minus 12 to get to non millitary time
    if (workHours[index]>= 12){
        columnOne.text(workHours[index] + ":00 pm")
        var standardHour=workHours[index]-12
        if (workHours [index]>= 13)
        columnOne.text(standardHour + ":00 pm")
    }
  
    //Creating a second column dynamically with a text area.The "danger" and "success" and "secondary"
    //are just bootstrap colors for the text according ti time.the danger color is red and is for 
    //the current hour
    var columnTwo=$("<div class='col-sm-8'>")
    //form control = 100% width
    var textarea=$("<textarea class='bg-danger form-control'>")
    //This is explaining if the current hour is less than working hour then change color grey
    if (currentHour<workHours[index]){
        textarea=$("<textarea class='bg-success  form-control'>")  
    }
    //changing color to green if current hour is greater
    else if (currentHour>workHours[index]){
     textarea=$("<textarea class='bg-secondary  form-control'>")
    }
    
    //Creating a text area dynamically...also for jquery if you use an id you use a #, if it's
    //a class use .
    textarea.attr("id","textarea" +index) 
    //This var is for grabbing the text the user puts in and storing it in local storage
    var getValueTextArea=localStorage.getItem("textarea"+index)
    //actually putting in a text box
    textarea.text(getValueTextArea)
    //making the whole column a textbox
    columnTwo.append(textarea)

    var columnThree=$("<div class='col-sm-2'>")
    var Button=$("<button class='btn-primary'>")
      Button.attr("class","saveBtn")
       Button.text("Save")
    columnThree.append(Button)
    //appending all columns 
    row.append(columnOne,columnTwo,columnThree)
  
    //show planner is my div class in my html
    $(".showPlanner").append(row)
    
}
}
//calling to display the planner
displayPlanner()


//The save button to a on click func
$(".saveBtn").on("click", function(){
   //for loop to grab value from text area and save it to local storage
   for (let index = 0; index < workHours.length; index++) {
    var getValueTextArea=$("#textarea"+index).val()
    localStorage.setItem("textarea" +index,getValueTextArea)
   }

     
})      
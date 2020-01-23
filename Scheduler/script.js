var workHours=[9, 10, 11, 12, 13, 14, 15, 16, 17];



function displayPlanner(){
var currentHour=moment().hour()
for (let index = 0; index < workHours.length; index++) {
       
     var row=$("<div class='row'>")
    var columnOne=$("<div class='col-sm-2  '>")

    columnOne.attr("style","text-align:center")

    columnOne.text(workHours[index] + ":00 am")
    
    if (workHours[index]>= 12){
        columnOne.text(workHours[index] + ":00 pm")
        var standardHour=workHours[index]-12
        if (workHours [index]>= 13)
        columnOne.text(standardHour + ":00 pm")
    }
  

    var columnTwo=$("<div class='col-sm-8'>")
    var textarea=$("<textarea class='bg-danger form-control'>")
    if (currentHour<workHours[index]){
        textarea=$("<textarea class='bg-success  form-control'>")  
    }
    else if (currentHour>workHours[index]){
     textarea=$("<textarea class='bg-secondary  form-control'>")
    }
    

    textarea.attr("id","textarea" +index) 
    var getValueTextArea=localStorage.getItem("textarea"+index)
    textarea.text(getValueTextArea)
    columnTwo.append(textarea)

    var columnThree=$("<div class='col-sm-2'>")
    var Button=$("<button class='btn-primary'>")
      Button.attr("class","saveBtn")
       Button.text("save")
    columnThree.append(Button)

    row.append(columnOne,columnTwo,columnThree)
  

    $(".showPlanner").append(row)
    
}
}

displayPlanner()

$(".saveBtn").on("click", function(){
   
   for (let index = 0; index < workHours.length; index++) {
    var getValueTextArea=$("#textarea"+index).val()
    localStorage.setItem("textarea" +index,getValueTextArea)
   }

     
})
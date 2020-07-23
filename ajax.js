// $(document).ready(function(){
//   //  alert("helo");
//  loadAttendenceData();
// });
function loadAttendenceData()
{
    xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange =function()
    {

     if (this.readyState == 4 && this.status == 200)
      {
           var stdData=JSON.parse (this.responseText);
           $("#class").text(stdData.class);
           $("#course").text(stdData.course);
           
          // alert(stdData.course+","+stdData.attendence[0].student_id);
          var contents ="<table>";
          contents+="<tr>";
          contents+="<th>Student ID</th>";
          contents+="<th>Student Name</th>";
          contents+="<th>Student status</th>";
          contents+="</tr>";
          for(var i=0;i<stdData.attendence.length;i++)
          {
            var attendence_data = stdData.attendence[i];

            if(attendence_data.std_status =="a"){
                contents+="<tr style='background-color:yellow'>";
            }
            else
                contents+="<tr>";

                contents+="<td>"+attendence_data.student_id+"</td>";
                contents+="<td>"+attendence_data.name+"</td>";
                contents+="<td>"+attendence_data.std_status+"</td>";
                contents+="</tr>";
            
          
          }
          contents+= "</table>";

          $("#attendance-data").html(contents);
      }
   }
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}
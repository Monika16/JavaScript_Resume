/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Monika Thokala");
var bio = {

	"name" : "Monika Thokala",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "206-637-7371",
		"email" : "monikathokala16@gmail.com",
		"github" : "Monika16",
		"location" : "Bellevue"
	},
	"welcomeMsg" : "Welcome Message from Monika Thokala",
	"skills" : [ "HTML5", "CSS3", "JavaScript","Python","Java","Selenium","Testing"] ,
	"biopic" : "images/fry.jpg"
}


var education = {
	"schools": {
		"name" : "P.I.E.T",
		"location" : "Nagpur",
		"degree" : "B.E",
		"majors" : ["CSE"],
		"dates" : "2008"
	},
	"onlineCourses" : [
	 {
		"title" : "JavaScript Crash Course",
		"school" : "Udacity",
		"dates" : "2018",
		"url" : "https://classroom.udacity.com/courses/ud804"
	 },
	 {
		"title" : "HTML-CSS",
		"school" : "Udacity",
		"dates" : "2018",
		"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud001"
	 }
	]
}

var work = {
	"jobs" : [
	  {
		"employer" : "Global Edge Software",
		"title" : "Software Engineer 2",
		"dates" : "July 2012 - Dec 2014",
		"location" : "Hyderabad",
		"description" : "Worked at Client Location - Qualcomm,Hyderabad. Worked as Software tester for 2G and 3G RF and Protocol."
	  } ,
	  {
		"employer" : "WIPRO",
		"title" : "Software Developer",
		"dates" : "Dec 2009 - July 2012",
		"location" : "Hyderabad",
		"description" : "Worked on feature development for 3g and 4g Softwares."
	  }
	]
}


var projects = {

	"projects" :[
	  {
		"title" : "Building Resume",
		"dates" :"2018",
		"description" : "Building dynamic resume with HTML, CSS, and JavaScript",
		"images" : ["https://s3.amazonaws.com/tjn-blog-images/wp-content/uploads/2015/11/20001153/4-Resume-Building-Tips-for-2016-810x540.jpg",
					 "http://computerlearningcenteronline.com/wp-content/uploads/2016/04/resume-600x338-600x338-600x338.jpg"]
	  }
	]
}

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);
	for(var i in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
	}
	
}
function  displayEducation(){
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append("<h3>College</h3>");
	var formattedName = HTMLschoolName.replace("%data%",education.schools.name);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools.degree);
	var formattedNameDegree = 	formattedName + formattedDegree;
	$(".education-entry:last").append(HTMLschoolName.replace("%data%",formattedNameDegree));
	$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools.dates));
	$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools.location));
	for(var major in education.schools.majors){
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools.majors[major]));
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for(var onlineCourse in education.onlineCourses){
		var formattedName = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
		var formattedNameSchool = 	formattedName + formattedSchool;
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",formattedNameSchool));
		//$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url));
	}
}
function displayWork(){

	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	} 
}
displayEducation();
displayWork();

/*

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}*/

$("#main").append(internationalizeButton);

projects.display = function() {
	for(var i=0; i<projects.projects.length; i++){

		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[i].images.length > 0){
			for(image in projects.projects[i].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}
projects.display();

$("#mapDiv").append(googleMap);

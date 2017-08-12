//var edu = {
//    "school": [
//        {
//            "name": "Nova Southeastern University",
//            "city": "Seoul",
//            "degree": "CS",
//            "dates": 2013,
//            "url": "https://example.com"
//        },
//        {
//            "name": "Eckerd College",
//            "city": "Seoul",
//            "degree": "CS",
//            "dates": 2013,
//            "url": "http://example.com"
//        }
//    ],
//    "onlineCourses": [
//        {
//            "title": "Javascirpt Crash Course",
//            "school": "Udacity",
//            "dates": 2014,
//            "url": "http://example.com"
//        }
//    ]
//};


(function (window) {
	'use strict';
//
//	
//<div class="row">
//	<div id="header" class="col-md-12">
//		<h1>카카오스토리<span class="badge">14</span></h1>
//	</div>
//</div>
//	
	
	
	// Your starting point. Enjoy the ride!
    var user = {
        "number": "14",
        "subName": "bill",
    };
	
var projects = {};
projects.headerfooter = function(){
        var HTMLheaderName = '<h1>카카오스토리<span class="badge">%data%</span></h1>';
        var HTMLheaderSubName = '<h2 id="subname" class="supertitle text-uppercase">%data%</h2>';
    
        // var forMattedName = HTMLheaderName.replace("%data%", edu.school[0].name);
        var forMattedName = HTMLheaderName.replace("%data%", user.number);
        var forMattedSubName = HTMLheaderSubName.replace("%data%", user.subName);
    
        $('#header').append(forMattedName);
        $('#header').append(forMattedSubName);
    };
projects.headerfooter();

    var link = {
        "number": "14",
        "subName": "bill",
    };
	
var projects = {};
projects.headerfooter = function(){
        var HTMLheaderName = '<h1>카카오스토리<span class="badge">%data%</span></h1>';
        var HTMLheaderSubName = '<h2 id="subname" class="supertitle text-uppercase">%data%</h2>';
    
        // var forMattedName = HTMLheaderName.replace("%data%", edu.school[0].name);
        var forMattedName = HTMLheaderName.replace("%data%", user.number);
        var forMattedSubName = HTMLheaderSubName.replace("%data%", user.subName);
    
        $('#header').append(forMattedName);
        $('#header').append(forMattedSubName);
    };
projects.headerfooter();
})(window);

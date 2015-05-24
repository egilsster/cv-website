angular.module('HomeApp').controller('CVController', ["$scope", "$rootScope", "$location", function ($scope, $rootScope, $location) {
    $scope.education = [
        {
            school: "Reykjavík University",
            degree: "B.Sc. Computer Science",
            date: "2013 - 2016"
        },
        {
            school: "Community College of Breiðholt",
            degree: "Natural Sciences",
            date: "2007 - 2011"
        }
    ];

    $scope.experience = [
        {
            company: "Nýherji",
            position: "Field Service Technician",
            date: "february 2012 - august 2013, summer 2014, summer 2015",
            description: "Finished the Windows XP to Windows 7 transition for Icelandair in Keflavik (february 2012 - march 2012). Worked in field service and was assisting Icelandair Group (and daughter corporations) employees with technical problems (april 2012 - august 2013, summer 2014 and summer 2015).",
            location: "Keflavik and Reykjavík, Iceland",
            recommendations: "Sigurður Vignir Sigurðsson (group leader) - P. 859 - 1149"
        },
        {
            company: "Hurðaborg / Crawford-hurðir",
            position: "Contractor",
            date: "june 2012 - july 2012",
            description: "A month gardening project.",
            location: "Garðabær, Iceland",
            recommendations: "Stefán B. Ólafsson – P. 869 - 7012"
        },
        {
            company: "Orkuveita Reykjavíkur",
            position: "Summer employee",
            date: "summer of 2008, 2009, 2010 and 2011",
            description: "General gardening work, fix fences around Nesjavelli and some painting.",
            location: "Reykjavík, Nesjavellir, Hellisheiði",
            recommendations: ""
        },
        {
            company: "T.G.I. Friday’s",
            position: "Busboy",
            date: "june 2007 - february 2008",
            description: "Handed customers their dishes from the kitchen, cleaned tables and helped with everything that was needed.",
            location: "Kópavogur, Iceland",
            recommendations: ""
        },
        {
            company: "City of Reykjavík",
            position: "Summer employee",
            date: "summer of 2005, 2006 and 2007",
            description: "Work-school: general work. Recognition for punctuality and efficiency.",
            location: "Keflavik and Reykjavík, Iceland",
            recommendations: ""
        },
    ];

    $scope.projects = [
        {
            workplace: "Reykjavík University",
            name: "PandaBase",
            url: "https://github.com/egilsster/Panda2014",
            date: "april 2014",
            location: "Reykjavík, Iceland",
            description: "A project from three week course at Reykjavik University. A web system where users could upload and download subtitles (in the “srt” format) for movies and TV shows. On the website, every user could download subtitles but only registered users could modify and upload subtitles. The system was written in Visual Studio using MVC. Websites were written in HTML5 and the form to change subtitles was done with JavaScript and jQuery. The system never went live for real usage."
        },
        {
            workplace: "Reykjavík University",
            name: "Mini Mooshak",
            url: "https://github.com/egilsster/Python/tree/master/Verkefni%205/Mini%20Mooshak",
            date: "may 2015",
            location: "Reykjavík, Iceland",
            description: "A server written in Python 3.4 using the Flask microframework. Its a server that automatically grades solutions sent in by students. It's a project I made in a Python course. The real Mooshak is a system that Reykjavík University uses to grade solutions by students and gives feedback. The problem descriptions were taken from the real Mooshak and Kattis. See the projects GitHub page for more information."
        }
    ];

    $scope.technical = {
        Programming: "C++, Python, JavaScript, Java, C#",
        Web: "HTML, CSS, jQuery, AngularJS, Flask",
        Databases: "MySQL",
        Methods: "Lean, Agile, Scrum, Dynamic Programming",
        Tools: "Vim, Nano, Sublime Text, Excel, Word, PowerPoint, TeX, Git"
    };


}]);
/* 
    Build Resume page using JS objects for data storage and
    js functions with jQuery to render the various sections
*/

// Bio
var bio = {
    "name" : "James Ruggieri",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "415-225-7896",
        "email" : "james.ruggieri@yahoo.com",
        "github" : "hellbertos",
        "githubLink" : "https://github.com/hellbertos",
        "linkedin" : "james_ruggieri",
        "linkedinLink" : "https://www.linkedin.com/in/jamesruggieri",
        "location" : "San Francisco"
    },
    "bioPic" : "images/gravitar.jpg",
    "welcomeMsg" : "I am a web designer and front end web developer with a passion for creating functional, accessible, informative and aesthetically pleasing web sites. I am continually striving to learn and progress in all phases of the craft. Currently I'm studying React and ES6 as well as taking online instruction to build my first Wordpress plugin.<br><br>When I'm not coding or pondering the latest web trends, techniques and advancements, I enjoy: a multitude of activities and outdoor endeavors, motorcycle restoration projects, home-brewing and learning to play guitar. Thanks for stopping by and don't hesitate to contact me via the email link above.",
    "skills" : [
        '<img class="skillsIco htmlSkill" src="./images/ico-html5.svg">',
        '<img class="skillsIco cssSkill" src="./images/ico-css3.svg">',
        '<img class="skillsIco jsSkill" src="./images/ico-js.svg">',
        '<img class="skillsIco wpSkill" src="./images/ico-wp.svg">',
        '<img class="skillsIco bsSkill" src="./images/ico-bs3.svg">',
        '<img class="skillsIco psSkill" src="./images/ico-ps.svg">',
        '<img class="skillsIco ilSkill" src="./images/ico-il.svg">'
        
    ],
    "display" : function() {
        // Append values from the BIO object to the page



                var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
                $('#header').prepend(formattedRole);

                var formattedName = HTMLheaderName.replace("%data%", bio.name);
                $("#header").prepend(formattedName);

                // Contacts
                var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
                $('#topContacts, #footerContacts').append(formattedMobile);

                var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
                $("#topContacts, #footerContacts").append(formattedEmail);

                var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.linkedin).replace("%data2%",bio.contacts.linkedinLink);
                $("#topContacts, #footerContacts").append(formattedTwitter);

                var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%data2%", bio.contacts.githubLink);
                $("#topContacts, #footerContacts").append(formattedGithub);

                var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $("#topContacts, #footerContacts").append(formattedLocation);

                // Pic
                var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
                $("#header").append(formattedPic);

                // Welcome Message
                var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
                $("#header").append(formattedMsg);

                // The Skills section
                if ((bio.skills.length > 0) === true ) {
                    $('#header').append(HTMLskillsStart);
                    for(var i = 0; i <= bio.skills.length - 1; i++) {
                        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                        $('#skills').append(formattedSkills);
                        }

                    }
                }
            }

// Work Object
var work = {
    "jobs" : [
        {
            "employer" : "Mineral Media Labz",
            "title" : "Web Designer and Developer",
            "location" : "San Francisco, CA",
            "dates" : "2013 - Present",
            "description" : "Cupcake ipsum dolor sit amet fruitcake bonbon apple pie I love. Dessert cake I love lemon drops cookie gummi bears jelly-o chocolate I love. I love tiramisu bonbon gummies gingerbread dragée marshmallow. Powder muffin gummi bears oat cake. Danish sugar plum caramels caramels topping jelly. Marzipan tiramisu macaroon gummies marzipan I love pudding"
        },
        {
            "employer" : "Circle Dog Media",
            "title" : "Web Designer/Developer",
            "location" : "San Francisco, CA",
            "dates" : "2010 - 2012",
            "description" : "Cupcake ipsum dolor sit amet muffin. I love I love ice cream. Marzipan ice cream oat cake halvah icing tart biscuit halvah pudding. Dessert cake jelly beans sweet roll candy canes cake chupa chups chupa chups icing. Chocolate bar I love jelly beans ice cream. Icing tiramisu muffin lollipop ice cream. Jujubes halvah marshmallow chocolate cookie bonbon liquorice cake."
        },
        {
            "employer" : "Brayton Hughes Design",
            "title" : "Server Administrator/LAN Analyst",
            "location" : "San Francisco CA",
            "dates" : "2005 - 2008",
            "description" : "Flagfish Black scabbardfish sarcastic fringehead barred danio. Cutthroat trout cutlassfish anchovy Gila trout, Manta Ray cavefish cusk-eel? Basslet glowlight danio cookie-cutter shark skipjack tuna Blind shark river stingray pompano Peter's elephantnose fish yellowfin pike, sandburrower gar. Atlantic herring vendace neon tetra ballan wrasse elasmobranch armored searobin creek chub Lost River sucker, barb swallower? Paperbone fangtooth tilefish kahawai tompot blenny opaleye spiderfish snakehead!"
        },
        {
            "employer" : "Pear Transmedia",
            "title" : "Web Designer/Developer",
            "location" : "Oakland, CA",
            "dates" : "2003 - 2005",
            "description" : "Pacific salmon river loach queen parrotfish codling, opaleye menhaden bandfish golden trout, Black triggerfish angelfish shovelnose sturgeon shovelnose sturgeon. Rock bass antenna codlet atka mackerel--New Zealand sand diver, pink salmon olive flounder milkfish discus. Gulper livebearer koi atka mackerel daggertooth pike conger, bristlenose catfish pencilfish rockfish, eeltail catfish."
        }
    ],
    "display" : function() {
            var job;
            for (job in work.jobs) {
                $('#workExperience').append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                $('.work-entry:last').append(formattedEmployer+" "+formattedTitle);

                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $('.work-entry:last').append(formattedDates);

                var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
                $('.work-entry:last').append(formattedLocation);

                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $('.work-entry:last').append(formattedDescription);

            }

        }

    }

// Education Object
var education = {
    "schools" :
        [
            {
                "name": "UCSB",
                "location": "Santa Barbara, CA",
                "degree" : "Bachelor of Science",
                "majors" : ["Environmental Studies"],
                "dates" : 1993,
                "url": "http://www.ucsb.edu/"
            },
            {
                "name" : "UC Berkeley Extention",
                "location" : "UCB Ext. San Francisco Campus",
                "degree" : "Singular Night Classes",
                "majors" : ["Extended Learning in CompSci"],
                "dates" : 1999,
                "url": "http://extension.berkeley.edu/"
            },
            {
                "name" : "Cabrillo College",
                "location" : "Santa Cruz, CA",
                "degree" : "General Education",
                "majors" : ["General Education"],
                "dates" : 1989,
                "url" : "http://www.cabrillo.edu/"
            }
        ],
    "onlineCourses" :
        [
            {
                "title" : "Front End Developer Nano Degree",
                "school" : "Udacity",
                "date" : 2015,
                "url" : "http://udacity.com",
                "courseUrl" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
            }
        ],
    "display" : function() {
                    var instruction;
                    for (instruction in education.schools) {
                        $('#education').append(HTMLschoolStart);
                        // School Name and Degree
                        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[instruction].name).replace("#", education.schools[instruction].url);
                        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[instruction].degree);
                        $('.education-entry:last').append(formattedTitle+' '+formattedDegree);
                        // Date
                        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[instruction].dates);
                        $('.education-entry:last').append(formattedDates);

                        // Location
                        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[instruction].location);
                        $('.education-entry:last').append(formattedLocation);

                        // Majors
                        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[instruction].majors);
                        $('.education-entry:last').append(formattedMajor);

                    }
                    //Online Courses
                    var webClass;
                    for(webClass in education.onlineCourses){
                        $('.education-entry:last').append(HTMLonlineClasses);

                        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[webClass].title).replace("#",education.onlineCourses[webClass].courseUrl);
                        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[webClass].school);
                        $('.education-entry:last').append(formattedTitle+' '+formattedSchool);

                        var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[webClass].date);
                        $('.education-entry:last').append(formattedDate);

                        var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[webClass].url).replace("#",education.onlineCourses[webClass].url);
                        $('.education-entry:last').append(formattedUrl);
                    }

                }

}

// Projects Object
var projects = {
    "project" : [
        {
            "title" : "caiakoopman.com",
            "dates" : "2013 - present",
            "description" : "And when thou art so gone before&mdash;if that ever befall&mdash;then ere I can follow, thou must still appear to me, to pilot me still?&mdash;Was it not so? Well, then, did I believe all ye say, oh my pilot! I have here two pledges that I shall yet slay Moby Dick and survive it. Take another pledge, old man, said the Parsee, as his eyes lighted up like fire-flies in the gloom&mdash;Hemp only can kill thee. The gallows, ye mean.&mdash;I am immortal then, on land and on sea, cried Ahab, with a laugh of derision;&mdash;Immortal on land and on sea!",
            "images" : ["images/caia-home.jpg", "images/caia-portfolio.jpg", "images/caia-contact.jpg"],
            "imagesLb" : ["images/caia-home-lb.jpg", "images/caia-portfolio-lb.jpg", "images/caia-contact-lb.jpg"]
        },
        {
            "title" : "crescentmoonskincare.com",
            "dates" : "2013",
            "description" : "Oh no way! Not many, if any, this beached as hongi is as naff as a tapu seabed. Mean while, in West Auckland, Lomu and Maui were up to no good with a bunch of cool wifebeater singlets. The chocka full force of his packing a sad was on par with Jim Hickey's sweet pohutukawa. Put the jug on will you bro, all these pretty suss cheese on toasts can wait till later. The first prize for chundering goes to... John Key and his beaut lamington, what a sad guy. Bro, boxes of fluffies are really wicked good with random Hei-tikis, aye. You have no idea how sweet as our epic bottles of tomato sauce were aye.",
            "images" : ["images/cm-home.jpg", "images/cm-srvs.jpg", "images/cm-contact.jpg"],
            "imagesLb" : ["images/cm-home-lb.jpg", "images/cm-srvs-lb.jpg", "images/cm-contact-lb.jpg"]
        },
        {
            "title" : "touchwellness.com",
            "dates" : "2015",
            "description" : "Put the jug on will you bro, all these dodgy rugby balls can wait till later. The first prize for reffing the game goes to... James Cook and his tip-top L&P, what a stink buzz. Bro, gumboots are really sweet as good with primo pavlovas, aye. I'm not here to frack spiders, good afterble constanoon. You have no idea how nuclear-free our choice twink sticks were aye.",
            "images" : ["images/tw-home.jpg", "images/tw-ctnt.jpg", "images/tw-contact.jpg"],
            "imagesLb" : ["images/tw-home-lb.jpg", "images/tw-ctnt-lb.jpg", "images/tw-contact-lb.jpg"]
        }
    ],
     "display" : function() {
                    var site;
                    for (site in projects.project) {
                        $('#projects').append(HTMLprojectStart);

                        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[site].title);
                        $('.project-entry:last').append(formattedTitle);

                        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[site].dates);
                        $('.project-entry:last').append(formattedDates);

                        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[site].description);
                        $('.project-entry:last').append(formattedDescription);

                        // Iterate through images Array
                        if(projects.project[site].images.length > 0) {
                            for(pic in projects.project[site].images) {
                                var formattedImage = HTMLprojectImage.replace("%data%", projects.project[site].images[pic]).replace("%dataLb%", projects.project[site].imagesLb[pic]);
                                $('.project-entry:last').append(formattedImage);
                            }

                        }

                    }

                }
}

// Call the 'display' methods on the various sections out of order
education.display();
work.display();
projects.display();
bio.display();/*
Set up Tipso for Skills Tool Tips
*/
// HTML Tooltip
$('.htmlSkill').tipso({
  speed             : 400,        
  background        : '#e44f26',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'HTML',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : 0,
  tooltipHover      : true,
  content           : 'I enjoy creating clean semantic html templates and integrating modern HTML5 tags; especially the &#60;picture&#62; tag for <em>image heavy</em> responsive sites.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// CSS Tooltip
$('.cssSkill').tipso({
  speed             : 400,        
  background        : '#1572b6',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'CSS',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : 0,
  tooltipHover      : true,
  content           : 'I love modern web designs and like the challenge of figuring out interesting design layouts. Currently, I endeavor to get better at css animations.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// JS Tooltip
$('.jsSkill').tipso({
  speed             : 400,        
  background        : '#63a814',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Javascript',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : 0,
  tooltipHover      : true,
  content           : 'Mainly I use it for DOM manipulations and plugin control; mostly jQuery, but some vanilla too. I continue to study the language to evolve into a better programmer. Currently, I focus on ES6 and React.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// WP Tooltip
$('.wpSkill').tipso({
  speed             : 400,        
  background        : '#2857bf',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Wordpress',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : 0,
  tooltipHover      : true,
  content           : 'I have been building custom Wordpress themes for a few years now and enjoy the platform. It inspires me to get better at PHP as well as the WP ecosystem.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// BS Tooltip
$('.bsSkill').tipso({
  speed             : 400,        
  background        : '#5b4386',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Bootstrap',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : 0,
  tooltipHover      : true,
  content           : 'Initially, I used Foundation as it felt leaner, but I have come to savor the bootstrap framework and the efficiency it brings to a web project. I use it almost exclusively now.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// PS Tooltip
$('.psSkill').tipso({
  speed             : 400,        
  background        : '#29a4c6',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Photoshop',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : 0,
  tooltipHover      : true,
  content           : 'A long time Photoshop user who relishes continually learning about the tool and refining my techniques.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// IL Tooltip
$('.ilSkill').tipso({
  speed             : 400,        
  background        : '#d76b15',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Illustrator',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : 0,
  tooltipHover      : true,
  content           : 'A usefull tool which I have become more proficient with as web design has embraced Flat UI and iconography as well as modern browsers offering SVG capability.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});

// Map
$('#mapDiv').append(googleMap);
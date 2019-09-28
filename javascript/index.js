var skills = ["SQL Database", "jquery", "MongoDB", "Express", "APIs", "Bootstrap", "Node.js", "Handlebars", "React.js", "Github", "Wordpress", "Adobe software", "UI/UX design"]
myFunction()

var used = []
function myFunction() {
    setInterval(function(){ 
        var skill = skills[Math.floor(Math.random()*(skills.length))]
        // for(let i=0; i<used.length;i++){
        //     if(skill === used[i]){
        //         skill = skills[Math.floor(Math.random()*(skills.length+1))]
        //     }
        // }
        console.log(skill)
        document.getElementById("here").innerHTML = skill
        used.push(skill)
        }, 
     2000);
  }
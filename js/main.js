const topic = document.querySelector(".topic");
const count = document.querySelector(".count");
const learning ={
    topic: "JS",
    learningGoals: ["Build JS program","Build a website","Manage my own business","Financing"],
    category: "Front End Development",
    topicImportance: "High",

};
 console.log(learning);
 learning.topic = "JavaScript";
 learning.learningGoals.splice(1,1);
 console.log(learning);
 topic.innerText = `✔ I'm learning ${learning.topic} ! `;
 topic.classList.remove("hide");
 count.innerText = `✔ I have ${learning.learningGoals.length} learning goals !`;
 count.classList.remove("hide");

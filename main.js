const teams = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "./img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "./img/scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg"
    }
]

const teamMembers = document.querySelector(".team-container");
for (let i = 0; i < teams.length; i++){
    const member = 
                    `
                <div class = "team-card">
                    <div class="card-image">
                        <img
                        src="${teams[i].image}"
                        alt="${teams[i].name}"
                        />
                    </div>
                    <div class="card-text">
                        <h3>${teams[i].name}</h3>
                        <p>${teams[i].role}</p>
                    </div>
                </div>
                    `;
    teamMembers.innerHTML += (member);
}


const btn = document.getElementById("addMemberButton");

btn.addEventListener("click", 
    function(){
        // const fullName = document.getElementById("name").value;
        // const role = document.getElementById("role").value;
        // const img = document.getElementById("image").value;
        const newMemb = {
            name: document.getElementById("name").value,
            role: document.getElementById("role").value,
            image: document.getElementById("image").value,
        }

        const member = 
                        `
                        <div class = "team-card">
                            <div class="card-image">
                                <img
                                src="${newMemb.image}"
                                alt="${newMemb.name}"
                                />
                            </div>
                            <div class="card-text">
                                <h3>${newMemb.name}</h3>
                                <p>${newMemb.role}</p>
                            </div>
                        </div>
                            `
        teamMembers.innerHTML += member;
        teams.push(newMemb);
        alert("Nuovo membro del team stato aggiunto")
    }
)

console.log(teams);
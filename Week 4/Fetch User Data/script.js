const userList = document.getElementById('userList');
const reloadBtn = document.querySelector('.reload-btn');

const teamData = [
  { name: "Aqsa Riyasat", role: "UI/UX Designer", email: "aqsa.riyasat@example.com", location: "Lahore" },
  { name: "Hamza Qureshi", role: "Frontend Developer", email: "hamza.q@example.com", location: "Karachi" },
  { name: "Sara Malik", role: "Project Manager", email: "sara.m@example.com", location: "Islamabad" },
  { name: "Bilal Khan", role: "Backend Engineer", email: "bilal.k@example.com", location: "Faisalabad" },
  { name: "Zoya Ahmed", role: "QA Tester", email: "zoya.a@example.com", location: "Multan" },
  { name: "Asad Mehmood", role: "DevOps Specialist", email: "asad.m@example.com", location: "Peshawar" }
];

function loadTeam() {
  userList.innerHTML = '';
  teamData.forEach(member => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p><strong>Role:</strong> ${member.role}</p>
      <p><strong>Email:</strong> ${member.email}</p>
      <p><strong>Location:</strong> ${member.location}</p>
    `;
    userList.appendChild(card);
  });
}

reloadBtn.addEventListener('click', loadTeam);

// Initial Load
loadTeam();

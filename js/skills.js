const skills = [
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'HTML', icon: 'fab fa-html5', color: '#e34c26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#2965f1' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'SQL', icon: 'fas fa-database', color: '#00758f' },
  ];
  
  const container = document.querySelector('.skills-container');
  container.innerHTML = '';
  
  skills.forEach(({ name, icon, color }) => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    skillDiv.innerHTML = `
      <i class="${icon}" style="color: ${color};"></i>
      <span>${name}</span>
    `;
    container.appendChild(skillDiv);
  });
  
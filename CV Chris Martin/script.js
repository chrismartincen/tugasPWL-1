function toggleSkills() {
    const skills = document.getElementById("skills");
    const button = document.getElementById("btnSkill");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        button.innerText = "Sembunyikan Keahlian";

        skills.innerHTML = `
            <li class="skill-item">
                <div class="skill-box skill-active"></div>
                <div class="skill-box skill-active"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <span class="skill-name">HTML (2/5)</span>
            </li>

            <li class="skill-item">
                <div class="skill-box skill-active"></div>
                <div class="skill-box skill-active"></div>
                <div class="skill-box skill-active"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <span class="skill-name">CSS (3/5)</span>
            </li>

            <li class="skill-item">
                <div class="skill-box skill-active"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <span class="skill-name">JavaScript (1/5)</span>
            </li>

            <li class="skill-item">
                <div class="skill-box skill-active"></div>
                <div class="skill-box skill-active"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <div class="skill-box"></div>
                <span class="skill-name">PHP (2/5)</span>
            </li>

        `;
    } else {
        skills.style.display = "none";
        button.innerText = "Tampilkan Keahlian";
    }
}

    const ul = document.getElementById("skills");
    ul.innerHTML = "";

    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
    });

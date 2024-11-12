// Load JSON data for the impact section
fetch('../json/homepage.json')
    .then(response => response.json())
    .then(data => {
        const impactSection = document.querySelector('.footer-stats');
        
        // Populate impact statistics dynamically
        data.ourImpact.forEach(item => {
            const statContainer = document.createElement('div');
            statContainer.classList.add('stat');

            const icon = document.createElement('img');
            icon.src = item.image;
            icon.alt = item.description;

            const title = document.createElement('strong');
            title.textContent = item.title;

            const description = document.createElement('p');
            description.textContent = item.description;

            statContainer.appendChild(icon);
            statContainer.appendChild(title);
            statContainer.appendChild(description);
            impactSection.appendChild(statContainer);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));

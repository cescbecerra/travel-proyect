document.addEventListener('DOMContentLoaded', () => {
    // Lógica para mostrar resultados de recomendaciones
    const recommendationContainer = document.getElementById('recommendations');
    
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verifica que los datos se están cargando correctamente

            // Limpiar el contenedor de recomendaciones
            recommendationContainer.innerHTML = '';

            data.forEach(item => {
                const recommendation = document.createElement('div');
                recommendation.classList.add('recommendation-item');

                // Agregar imagen
                const img = document.createElement('img');
                img.src = item.imageUrl; // Asegúrate de tener imágenes correspondientes
                img.alt = item.name;
                img.classList.add('recommendation-img');

                // Agregar nombre del lugar
                const name = document.createElement('h3');
                name.textContent = item.name;

                recommendation.appendChild(img);
                recommendation.appendChild(name);
                recommendationContainer.appendChild(recommendation);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Lógica para la búsqueda por palabras clave
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const searchInput = document.querySelector('.search-bar input').value.toLowerCase();
        
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica que los datos se están cargando correctamente

                // Filtrar recomendaciones basadas en la palabra clave
                const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput));

                // Limpiar el contenedor de recomendaciones
                recommendationContainer.innerHTML = '';

                filteredData.forEach(item => {
                    const recommendation = document.createElement('div');
                    recommendation.classList.add('recommendation-item');

                    // Agregar imagen
                    const img = document.createElement('img');
                    img.src = item.imageUrl; // Asegúrate de tener imágenes correspondientes
                    img.alt = item.name;
                    img.classList.add('recommendation-img');

                    // Agregar nombre del lugar
                    const name = document.createElement('h3');
                    name.textContent = item.name;

                    recommendation.appendChild(img);
                    recommendation.appendChild(name);
                    recommendationContainer.appendChild(recommendation);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});

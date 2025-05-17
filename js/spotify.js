// spotify.js

async function fetchTopTracks() {
    const container = document.getElementById('spotify-tracks');
    container.innerHTML = '<p>Cargando canciones...</p>';
  
    try {
      const response = await fetch('/api/top-tracks');
      if (!response.ok) throw new Error('No se pudo obtener las canciones');
      const data = await response.json();
  
      if (!data.items || data.items.length === 0) {
        container.innerHTML = '<p>No se encontraron canciones.</p>';
        return;
      }
  
      container.innerHTML = ''; // limpiar
  
      data.items.forEach(track => {
        const trackEl = document.createElement('div');
        trackEl.className = 'track';
  
        trackEl.innerHTML = `
          <img src="${track.album.images[2]?.url || track.album.images[0]?.url}" alt="Album cover" />
          <div class="track-info">
            <strong>${track.name}</strong>
            <span>${track.artists.map(a => a.name).join(', ')}</span>
          </div>
        `;
  
        container.appendChild(trackEl);
      });
    } catch (e) {
      container.innerHTML = `<p>Error: ${e.message}</p>`;
    }
  }
  
  // Cargar al inicio
  fetchTopTracks();
  
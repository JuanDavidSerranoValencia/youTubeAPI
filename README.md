# Aplicación Web de Videos de YouTube

Este README proporciona una descripción general de la aplicación web y su código JavaScript utilizado en las páginas de inicio (`index.html`) y reproducción de video (`videos.html`). Además, se incluyen ejemplos y pautas para entender y personalizar el código según tus necesidades.

## Descripción General

La aplicación web de Videos de YouTube es un proyecto que muestra información detallada sobre videos de YouTube y su canal relacionado. La aplicación consta de dos páginas principales:

1. **Página de Inicio (`index.html`)**: Esta página muestra información sobre el canal de YouTube y una lista de videos relacionados. Permite la navegación entre videos y ofrece una barra lateral ocultable.

2. **Página de Reproducción de Video (`videos.html`)**: Esta página muestra detalles específicos de un video de YouTube seleccionado, incluida la reproducción del video, etiquetas, estadísticas y comentarios.

## Código JavaScript para Página de Inicio (index.html)

El código JavaScript en la página de inicio (`index.html`) se encarga de las siguientes funciones clave:

- Cargar información del canal y videos desde la API de YouTube.
- Mostrar información del canal en la barra de navegación.
- Mostrar el banner del canal como fondo en el contenedor principal.
- Mostrar una lista de videos relacionados con el canal en el contenedor principal.
- Alternar la barra lateral y cambiar el tamaño del contenedor principal al hacer clic en el ícono de menú.

### Ejemplo de Uso

Para cargar información del canal y videos:

```javascript
let urlDetallesCanal = 'URL_DEL_CANAL_DE_YOUTUBE_API';
let urlVideos = 'URL_DE_LA_LISTA_DE_VIDEOS_API';

// Configuración de las opciones de solicitud
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'TU_CLAVE_API',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

// Llamar a las funciones para cargar información
fotoCanal(); // Mostrar información del canal en la barra de navegación
fondoCanal(); // Mostrar el banner del canal como fondo
fondoVideo(); // Mostrar una lista de videos relacionados


Personalización

Configura las URL y las claves de API adecuadas para tu canal de YouTube.
Personaliza la estructura y los estilos de la página HTML (index.html) según tus necesidades específicas.
Añade estilos CSS para dar formato a los elementos creados dinámicamente.
Código JavaScript para Página de Reproducción de Video (videos.html)
El código JavaScript en la página de reproducción de video (videos.html) se encarga de las siguientes funciones:

Mostrar información detallada del video seleccionado, incluida la reproducción del video de YouTube.
Mostrar etiquetas, estadísticas y comentarios relacionados con el video.
Ejemplo de Uso

Para mostrar información detallada del video:

let localID = localStorage.getItem('Id');
let urlDetallesVideo = `URL_DEL_VIDEO_DE_YOUTUBE_API`;

// Llamar a la función para mostrar detalles del video
reproductorVideo();

Configura la URL de la API de YouTube para obtener detalles del video seleccionado.
Personaliza la estructura y los estilos de la página HTML (videos.html) según tus necesidades.
Añade estilos CSS para dar formato a los elementos en la página de reproducción de video.

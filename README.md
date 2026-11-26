# Cómo engañan los gráficos sin mentir

Web de demostración del curso *Del paper al producto: herramientas de IA para visibilizar tu investigación* (UNIR), a partir de Franconeri et al. (2021), [The Science of Visual Data Communication: What Works](https://doi.org/10.1177/15291006211051956).

- **Web (GitHub Pages):** https://javicanton.github.io/taller_UNIR/
- **Gráficos interactivos** (se pueden incrustar en Google Sites o Notion):
  - https://javicanton.github.io/taller_UNIR/graficos/datasaurus.html
  - https://javicanton.github.io/taller_UNIR/graficos/ejes.html
  - https://javicanton.github.io/taller_UNIR/graficos/color.html

## Estructura

| Carpeta | Contenido |
|---|---|
| `index.html` | Página principal |
| `graficos/` | Gráficos interactivos (D3) |
| `datos/` | Datos de los gráficos (Anscombe, Datasaurus Dozen, temperatura global NOAA) |
| `img/` | Figura 2 del artículo e infografías |
| `audio/` | Podcast generado con NotebookLM |

## Montar la misma web en Google Sites

1. **Crear:** sites.google.com › sitio en blanco. Título: *Cómo engañan los gráficos sin mentir*.
2. **Pitch:** Insertar › Cuadro de texto, y pegar el texto de la sección «El mensaje en 30 segundos» de `index.html`.
3. **Audio:** subir `audio/podcast.m4a` a Google Drive, compartirlo como «Cualquier usuario con el enlace» e Insertar › Drive.
4. **Figura 2 e infografías:** Insertar › Imágenes › Subir (`img/figura2.png`, `img/infografia-guia.jpg`, `img/infografia-enganos.jpg`).
5. **Gráficos:** Insertar › Insertar › Por URL, con cada una de las tres direcciones de arriba. Ajustar la altura del bloque arrastrando el borde.
6. **Pie:** referencia con DOI y declaración de uso de IA (copiarlas del pie de `index.html`).
7. **Publicar:** botón Publicar y comprobar en una ventana de incógnito.

## Fuentes de datos

- Anscombe, F. J. (1973). Graphs in statistical analysis. *The American Statistician*, 27(1), 17-21. Datos vía `seaborn-data`.
- Matejka, J. y Fitzmaurice, G. (2017). Same Stats, Different Graphs. *CHI '17*. Datos vía el paquete de R `datasauRus`.
- NOAA, Climate at a Glance: anomalías de temperatura global anual (respecto a la media del siglo XX, 13,9 °C), vía [datasets/global-temp](https://github.com/datasets/global-temp).

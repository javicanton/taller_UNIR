# Datos para Flourish

Cinco CSV para rehacer en Flourish los gráficos interactivos de la web. Separador: coma. Decimales: punto (Flourish los formatea en español desde *Number formatting*).

| Archivo | Plantilla de Flourish | Columnas |
|---|---|---|
| `1_datasaurus.csv` | **Scatter** | X: `x` · Y: `y` · **Filter**: `conjunto` (aparece un desplegable para cambiar de forma) |
| `2_anscombe.csv` | **Scatter** | X: `x` · Y: `y` · **Filter**: `conjunto` (o *Grid of charts* por `conjunto` para ver los cuatro a la vez) |
| `3_estadisticas.csv` | **Table** | Todas. Acompaña a los dos anteriores: muestra que las estadísticas son casi iguales |
| `4_inscripciones_barras.csv` | **Column chart** | Labels: `fecha` · Values: `inscripciones`. Probar el eje Y con mínimo 0 y con mínimo 5.800.000 |
| `5_temperatura_global.csv` | **Line chart** | Labels: `año` · Values: `temperatura_C`. Probar el eje Y desde 0 y ajustado. Para las franjas: **Heatmap** o **Column chart** con `anomalia_C` y color por valor |

Fuentes: Anscombe (1973); Matejka y Fitzmaurice (2017), paquete `datasauRus`; NOAA Climate at a Glance (anomalía respecto a la media del siglo XX, 13,9 °C), vía `datasets/global-temp`; valores del gráfico televisivo de la figura 3 de Franconeri et al. (2021).

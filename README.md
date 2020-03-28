[![Netlify Status](https://api.netlify.com/api/v1/badges/72fecee9-ff8c-483e-b069-bec5caba2678/deploy-status)](https://app.netlify.com/sites/covid19-ec/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🇪🇨**ECUADOR**

Tenemos un canal en Discord para conversar: https://discord.gg/N3N74QG

Quieres ayudar?

- [Mira en los issues si hay algo que te interese](https://github.com/juanmnl/covid19-monitor/issues)

- También puedes buscar dónde ayudar acá: [Listado de iniciativas COVID19 - Ecuador](https://github.com/juanmnl/Ecuador-Covid19)

### Cómo construir la aplicación

Para desarrolladoras/es:

- Crear token en [mapbox](https://www.mapbox.com/)
- Agregarlo a `/.env.local`:

```
  REACT_APP_MAPBOX_ACCESS_TOKEN=token
```

- Crear dos tablas en Airtable, se pueden crear importando los siguientes CSV de ejemplo:
  - [Datos de provincias](https://github.com/SerotoninaAbad/covid19-csv-examples/blob/master/province-data.csv)
  - [Totales diarios](https://github.com/SerotoninaAbad/covid19-csv-examples/blob/master/daily-totals.csv)
  - Añadir  a `/.env.local` la API key de Airtable y los 2 endpoints para consultar las tablas creadas
```
  REACT_APP_AIRTABLE_API_KEY=airtable_key
  REACT_APP_PROVINCE_STATS_ENDPOINT=airtable_provinces_endpoint
  REACT_APP_TOTAL_STATS_ENDPOINT=airtable_total_stats_endpoint
```


- Ejecutar: `npm i && npm start`

> Dudas para ejecutar la applicación? [Aquí una guía 🤓](./docs/run-instructions.md)

😅

## **Otros Países**

Tomen este repo y háganlo suyo. Está claro que nuestros gobiernos no nos van a
facilitar la visualización y rastreo del impácto del virus, por lo que les pido
lo tomen en sus manos.

✊✊🏻✊🏼✊🏽✊🏾✊🏿

🇪🇨https://www.monitorec.app

🇧🇷https://covid19br.app

🇲🇽(Sonora) https://monitorsonora.com/

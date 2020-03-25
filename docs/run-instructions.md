# Instrucciones para ejecutar la aplicación de manera local

## Token para renderizar mapbox

- Generar un `public access token` en [mapbox](https://www.mapbox.com/)
- Copiar token desde tu [cuenta de mapbox](https://account.mapbox.com/)

## Herramientas

- La aplicación usa [node y npm](https://nodejs.org/en/) para correr y gestionar sus paquetes respectivamente. Se recomienda instalar la versión LTS 12.x.x. [Aquí una guía.](https://nodejs.org/en/download/package-manager/)

## Ejecutar la aplicación

- Crear archivo `.env.local`
- Agregar token generado en mapbox a `.env.local` así: ```REACT_APP_MAPBOX_ACCESS_TOKEN="tu.token-generado-aqui```
- Instalar paquetes: `npm i`
- Ejecutar la aplicación: `npm start`
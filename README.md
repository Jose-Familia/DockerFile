# Dockerización de una Aplicación de React
[![Vite.js](https://img.shields.io/badge/Vite.js-000000?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)



```
Esta guía simple mostrará cómo dockerizar una aplicación web de React utilizando Docker. 
Docker es una herramienta que te permite empaquetar una aplicación y sus dependencias en un contenedor aislado,
lo que facilita su implementación en diferentes entornos sin preocuparte por las diferencias de configuración.
```

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Docker: [Descargar e instalar Docker](https://www.docker.com/get-started)

## Pasos para Dockerizar tu Aplicación de React

### Paso 1: Crear una Aplicación de React

Si aún no tienes una aplicación de React, puedes crear una utilizando Create React App:

```bash
npx create-react-app my-react-app
cd my-react-app
```

### Paso 2: Crear un archivo Dockerfile

Los archivos Dockerfile se escriben principalmente con codigo ".yml" dicho archivo debe contar con la siguiente configuracion:

```
# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el contenido del directorio de la aplicación en el contenedor
COPY . .

# Compila tu aplicación (esto puede variar dependiendo de tu configuración)
RUN npm run build

# Expón el puerto en el que se ejecutará tu aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD [ "npm", "start" ]
```

### Paso 3: Construir la Imagen de Docker

Ejecuta el siguiente comando para construir la imagen de Docker. Asegúrate de estar en el directorio raíz de tu proyecto:

```
docker build -t my-react-app .
```

### Paso 4: Ejecutar el Contenedor Docker

Una vez que la imagen se haya construido con éxito, puedes ejecutar un contenedor Docker con tu aplicación:

```
docker run -p 8080:3000 my-react-app
```

Esto mapeará el puerto 3000 del contenedor al puerto 8080 de tu máquina local. Abre un navegador y accede a tu aplicación en http://localhost:8080.
¡Eso es todo! Ahora has dockerizado tu aplicación de React y puedes compartirla y ejecutarla en diferentes entornos sin problemas.


### Notas Adicionales
- Puedes personalizar tu Dockerfile según tus necesidades específicas de construcción y configuración de la aplicación.
- Asegúrate de tener Docker en ejecución para poder construir y ejecutar contenedores.
- Espero que esta guía haya sido útil. Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar.

  --------------------------------
  Created by [Jose Familia](https://github.com/Jose-Familia) 🫡

# Imagen base de Node.js
FROM node:14

# Directorio de trabajo dentro del contenedor
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

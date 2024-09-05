# Étape 1 : Construire l'application
FROM node:alpine AS build
WORKDIR /app
COPY . .

# Installer les dépendances et builder l'application
RUN npm install
RUN npm run build  # Assure-toi que cette commande génère les fichiers nécessaires dans /app/dist

# Étape 2 : Configurer le serveur Nginx
FROM nginx:alpine

# Copier les fichiers de l'étape de construction dans l'image Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Spécifier le port sur lequel Nginx écoute
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]

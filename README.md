# Versions de Node et NPM pour lancer l'app:
- Node.js > 20
- npm > 10

# Installation auth microservice
```cd auth```
```npm install```
Ne pas oublier de créer un fichier .env (cf .env.example pour savoir quels données avoir)

# Installation products microservice
```cd products```
```npm install```
Ne pas oublier de créer un fichier .env (cf .env.example pour savoir quels données avoir)

# Installation API Gateway
```cd apigateway```
```npm install```
Ne pas oublier de créer un fichier .env (cf .env.example pour savoir quels données avoir)

# Lancer le Container Docker en dev
docker compose up --watch (ne pas oublier le watch et ne pas mettre -d en dev)
FROM node:24 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:24 
WORKDIR /app
COPY --from=build /app .
RUN npm install --only=development

EXPOSE 3001 3002 3002
CMD [ "sh", "-c", "npm run dev:customer & npm run dev:employee & npm run dev:manager" ]

    
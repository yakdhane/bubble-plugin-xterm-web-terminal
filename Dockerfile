Sure, here's the Dockerfile code:

```
# base image
FROM node:14.17.0-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy app files
COPY . .

# build addon
RUN npm run build

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]
```
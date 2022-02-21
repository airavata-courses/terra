# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]

# FROM node
# WORKDIR /usr/src/app
# COPY package*.json ./
# ADD package.json /usr/src/app/package.json
# RUN npm install
# # RUN npm install react-scripts@1.1.0 -g
# COPY . .
# EXPOSE 3000
# CMD ["npm ","start"]


# # pull official base image
# FROM node:10 AS builder

# # set working directory
# WORKDIR /app


# # install app dependencies
# #copies package.json and package-lock.json to Docker environment
# COPY package.json ./

# # Installs all node packages
# RUN npm install 


# # Copies everything over to Docker environment
# COPY . ./
# RUN npm run build

# #Stage 2
# #######################################
# #pull the official nginx:1.19.0 base image
# FROM nginx:1.19.0
# #copies React to the container directory
# # Set working directory to nginx resources directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static resources
# RUN rm -rf ./*
# # Copies static resources from builder stage
# COPY --from=builder /app/build .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# FROM nginx:1.17
# COPY build/ /usr/share/nginx/html
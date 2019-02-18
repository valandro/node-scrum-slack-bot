FROM node:8-alpine
# Install app dependencies
RUN npm install
# Run app
CMD ["npm", "start"]
FROM node:8-slim
# Install app dependencies
RUN npm install
# Run app
CMD ["npm", "start"]
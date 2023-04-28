# Start from a Node.js 14.x image
FROM node:14-alpine

# Set the working directory for the app
WORKDIR '/app'

# Copy the package.json and package-lock.json files for the client application
COPY client/package*.json ./client/

# Install the dependencies for the client application
RUN cd client && npm install

# Build the client application
RUN cd client && npm run build

# Copy the package.json and package-lock.json files for the server application
COPY server/package*.json ./server/

# Install the dependencies for the server application
RUN cd server && npm install

# Expose port 3000 for the server application
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]

# Use official Node.js image as a base
FROM node:18

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

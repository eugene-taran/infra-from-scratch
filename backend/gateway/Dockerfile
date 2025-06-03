FROM node:24.1-alpine

WORKDIR /app

# Copy root package.json and yarn.lock from build context (backend)
COPY package.json yarn.lock ./

# Copy only the gateway workspace package.json
COPY gateway/package.json gateway/package.json

# Install dependencies for all workspaces
RUN yarn install --frozen-lockfile

# Copy the rest of the workspace
COPY . .

# Build the gateway workspace
RUN yarn workspace gateway build

EXPOSE 3000

CMD ["yarn", "workspace", "gateway", "start"]

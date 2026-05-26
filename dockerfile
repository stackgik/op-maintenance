# Stage 1
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build 


# stage 3
# Copy over what is needed to run the app, and run as a restricted user not root.
FROM node:20-alpine AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a restricted group and user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


# Copy the required files into the runner
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


# Specify that the container should run as user
USER nextjs


# Tell the container what port to listen on
EXPOSE 9090
ENV PORT=9090
ENV HOSTNAME="0.0.0.0"

# Run the build
CMD [ "node", "server.js" ] 


#* THE NEXT STEPS FROM HERE ON ARE AS FOLLOWS
# 1. Fire up the Docker Desktop
# 2. Build the Image, specifying the Image TAG and the location of the Dockerfile (.)
# ==> docker build -t op_maintenance . # the period at the end tells Docker where to find the dockerfile(current directory)
# 3. Run the Image while loading env file, if any.
# ==> docker run -p 9090:9090 --env-file .env/.env.local op_maintenance
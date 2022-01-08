FROM node:16.13.1-alpine3.14

RUN [ "mkdir", "/workspace" ]

WORKDIR /workspace

# Copy package.json and package-lock.json
COPY package*.json ./

COPY . .
# Install npm production packages 
RUN npm install 

# set timezone
RUN apk add tzdata
RUN rm -rf /etc/localtime; \
  ln -s /usr/share/zoneinfo/Asia/Seoul /etc/localtime;

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]

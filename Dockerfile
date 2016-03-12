FROM node
COPY . .
RUN npm install --production
RUN npm run build
CMD npm start
EXPOSE 80

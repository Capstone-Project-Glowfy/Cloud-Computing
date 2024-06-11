FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# No need to set PORT here
# ENV PORT=3000

ENV SKIN_TYPE_MODEL_URL=https://storage.googleapis.com/coba-aja-bucket/skin-model/model.json
ENV SKIN_PROBLEM_MODEL_URL=https://storage.googleapis.com/coba-aja-bucket/jerawat-model/model.json

ENV GOOGLE_APPLICATION_CREDENTIALS=projects/957042676778/secrets/test-secret-storage-admin
ENV GCS_BUCKET_NAME=user-pp

ENV JWT_SECRET=your_jwt_secret_key

ENV DB_HOST=34.101.34.114
ENV DB_USER=mysql
ENV DB_PASSWORD=test123
ENV DB_NAME=test-glowfy-capstone

CMD ["npm", "start"]

# 继承node镜像
FROM node
LABEL name="vue-back"
LABEL version="1.0"
# 把当前目录里面的文件都拷贝到容器的/app目录中去
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm start
FROM node:12.0

RUN apt-get update && apt-get install -y \
    # root以外のユーザーがrootの権限を使うため
    sudo \
    # internetからツールを取得
    wget \
    # vim をエディタとして使用
    vim 


# アプリケーションディレクトリの作成
RUN mkdir /app
WORKDIR /app

# コンテナにpackage.jsonとpackate-lock.jsonの２つがコピーされるようにする
COPY package*.json ./
# package.jsonに書いてあるパッケージをインストールする。
RUN npm i

# installされたnode_moduleなどのファイルをコンテナ側にコピーする。
COPY . .

# # CMD node app.js
# EXPOSE 8080
CMD ["node","app.js"]

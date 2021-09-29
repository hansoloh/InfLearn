docker / heidiSQL 실행

docker pull mariadb
docker image ls
docker run --name mariadb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mariadb mariadb
docker exec -it mariadb /bin/bash
root@d26763a4988e:/# mysql -u root -p
Enter password: (비번 쳐도 안뜨는데 걍 mariadb 치고 엔터)
MariaDB [(none)]> status

postman

server> node app.js

client> 8080
server> port 3000

# 0929
cd client $ npm run serve
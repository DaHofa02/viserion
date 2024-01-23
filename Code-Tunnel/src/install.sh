apt update && upgrade -y
apt install docker-compose && curl && git -y
docker build -t root/code https://github.com/DaHofa02/cerberus.git#main:Code-Tunnel
mkdir code
wget https://raw.githubusercontent.com/DaHofa02/cerberus/main/Code-Tunnel/docker-compose.yml -P ./code/
docker-compose -f ./code/docker-compose.yml up -d

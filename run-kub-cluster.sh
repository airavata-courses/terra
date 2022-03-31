sudo su &&
git clone https://github.com/airavata-courses/terra.git &&
cd terra &&
git checkout ansible-kub-setup &&
cd Kubernetes\ files/ &&
kubectl apply -f MySQLConfigMap.yaml &&
kubectl apply -f MySQLService.yaml &&
sleep 30 &&
kubectl apply -f rabbitmq.yaml &&
sleep 30 &&
kubectl apply -f data-retrieval.yaml &&
kubectl apply -f api-gateway.yaml &&
kubectl apply -f weatherForecast.yaml &&
kubectl apply -f user-managment.yaml && 
kubectl apply -f userinterface.yaml &&
kubectl get pods
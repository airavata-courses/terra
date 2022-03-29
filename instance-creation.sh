cd .. &&
sudo apt-get update &&
# Install open stack 
pip3 install python-openstackclient &&
# Install terraform 0.14.4
sudo apt-get install zip unzip &&
wget https://releases.hashicorp.com/terraform/0.14.4/terraform_0.14.4_linux_amd64.zip &&
unzip terraform_0.14.4_linux_amd64.zip &&
sudo chmod +x terraform &&
sudo cp terraform /usr/local/bin/ &&
sudo mv terraform /usr/bin/ &&
rm -rf terraform_0.14.4_linux_amd64.zip &&
# Change the directory
cd jetstream_kubespray &&
# Export cluser name
export CLUSTER=terraclu &&
cp -r inventory/kubejetstream inventory/$CLUSTER &&
cd inventory/$CLUSTER &&
# Update the IP address you have provided
sed -i '/k8s_master_fips/c\k8s_master_fips =["'$IP'"]'  cluster.tfvars &&

bash terraform_init.sh &&
bash terraform_apply.sh &&
# Sleeping for 30 seconds just for instances to start
sleep 30 &&
cd ../../ &&
# installing Ansible
pip3 install -r requirements.txt &&
eval $(ssh-agent -s) &&
ssh-add ~/.ssh/id_rsa &&
# This will avoid the yes/no prompt when doing SSH connection to the machines
echo 'StrictHostKeyChecking no' &>> /etc/ssh/ssh_config &&
# Run the ansible playbooks to install kubernetes
cd ../terra &&
cp ../jetstream_kubespray/inventory/$CLUSTER/hosts hosts &&
ansible-playbook -i hosts users.yml &&
ansible-playbook -i hosts install-k8s.yml &&
sleep 30 &&
ansible-playbook -i hosts master.yml &&
sleep 30 &&
ansible-playbook -i hosts workers.yml &&
ssh ubuntu@$IP &&
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
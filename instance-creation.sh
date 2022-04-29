# Download the necessary files
git clone https://github.com/GowthamChowta/jetstream_kubespray.git &&
cd jetstream_kubespray &&
git checkout -b branch_v2.15.0 origin/branch_v2.15.0 &&
cd .. &&
git clone https://github.com/airavata-courses/terra.git &&
cd terra &&
git checkout ansible-kub-setup &&
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
# export CLUSTER=terraclu &&
cp -r inventory/kubejetstream inventory/$CLUSTER &&
cd inventory/$CLUSTER &&
# Update the number of worker nodes to 2
sed -i '/number_of_k8s_nodes /c\number_of_k8s_nodes = 2' cluster.tfvars
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

sed -i "/hosts:/c\- hosts: \'$CLUSTER-k8s-node-1\,$CLUSTER-k8s-node-2,$CLUSTER-k8s-master-1' " users.yml &&
sed -i "/hosts:/c\- hosts: \'$CLUSTER-k8s-node-1\,$CLUSTER-k8s-node-2,$CLUSTER-k8s-master-1' " install-k8s.yml &&
sed -i "/hosts:/c\- hosts: \'$CLUSTER-k8s-master-1' " master.yml &&
sed -i "/hosts:/c\- hosts: \'$CLUSTER-k8s-node-1\,$CLUSTER-k8s-node-2,$CLUSTER-k8s-master-1' " workers.yml &&

ansible-playbook -i hosts users.yml &&
sleep 20 &&
ansible-playbook -i hosts install-k8s.yml &&
sleep 30 &&
ansible-playbook -i hosts master.yml &&
sleep 30 &&
ansible-playbook -i hosts workers.yml &&
ssh ubuntu@$IP
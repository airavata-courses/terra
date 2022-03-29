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

export CLUSTER=terraclu
cp -r inventory/kubejetstream inventory/$CLUSTER
cd inventory/$CLUSTER
sed -i '/k8s_master_fips/c\k8s_master_fips "=['$IP']"'  cluster.tfvars

bash terraform_init.sh
bash terraform_apply.sh


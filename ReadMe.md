Steps to run this app with Kubernetes: 

1. run command "minikube start"
2. run command "eval $(docker-env)"
3. change to each server directory you want to build and run command "docker build -t mk/server<server#> ." 
4. once all the server images have been built go to project directory and run command "kubectl apply -f manifest.yaml" or "kubectl apply-f server4.yaml" depending on which you want to run the original dummy app or server4. 
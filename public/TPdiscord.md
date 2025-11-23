# TP Discord : 

## 1)

- Création d'un serveur discord `Alertes-Sécuritées`
- Cliquer sur `+` a coté de salon textuel
- Créer un canal et modifier le avec le bouton d'Engrenage
![image](https://hackmd.io/_uploads/BJSGrH0Alx.png)

- Il faut ensuite cliquer sur intégrations -> webhook -> nouveau webhook

- Récuperer l'URL du webhook
![image](https://hackmd.io/_uploads/r1h_BrRAgl.png)

## 2) 

- `sudo nano script.sh`
Permet de créer un fichier script.sh pour y insérer un code permettant de surveiller le fichier `/etc/secret.txt` et d'envoyer une alerte sur le serveur en cas de lecture de ce fichier.

![Alert Discord](images/imagemodif2.png)


- Afin de le tester nous pouvons faire un `cat /etc/secret.txt`. Nous pouvons voir sur le serveur que un message d'alerte est envoyée. 
![image](https://hackmd.io/_uploads/r1dgzLCAxg.png)

## 3)

- `sudo nano check_ssh.sh`
-Création du script permettant de checker les connexions ssh en dehors des heures de travail

![Alert Discord](images/imagemodif.png)


- `./check_ssh.sh`
Lancer le script afin de relever les alertes.
![image](https://hackmd.io/_uploads/S12TTdRAeg.png)

## 4) 

- `nohup bash script.sh &`
Cette commande permet d'executer le script en arrière plan et en continu
![image](https://hackmd.io/_uploads/H1QnyYR0xl.png)
 
- `crontab -e`
- `*/5 * * * * /home/martin/check_ssh.sh`
Ces deux commandes permet d'executer le script check_ssh.sh toutes les 5 minutes grâce a cron 
![image](https://hackmd.io/_uploads/SJwGgtCRge.png)

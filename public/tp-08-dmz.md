
# TP Réseaux

# ÉTAPE 1 :
## Affectation d'IP statique pour `lan-cli` :

![image](https://hackmd.io/_uploads/rkQm5wExbg.png)

## Affectation d'IP statique pour `fw` avec 2 interfaces :

![image](https://hackmd.io/_uploads/rylKsPNgWl.png)

## Affectation d'IP statique pour `dmz-srv` :

![image](https://hackmd.io/_uploads/BJDhowElWx.png)

## Connectivité entre `lan-cli` vers `fw` :

![image](https://hackmd.io/_uploads/r1lyqPVl-x.png)

## Connectivité entre `fw` vers `lan-cli` et `dmz-srv`

![image](https://hackmd.io/_uploads/rJ7q2v4eWg.png)

## Connectivité entre `dmz-srv` vers `fw`

![image](https://hackmd.io/_uploads/BJHxpP4eWe.png)

# ÉTAPE 2 : 

## Activation du routage IP sur `fw` pour permettre le transfert entre les deux réseaux.

![image](https://hackmd.io/_uploads/ryvoCDNeZl.png)


## Ajout de routes pour rediriger le trafic inter-réseaux via la passerelle `fw` : 

### Sur `lan-cli` :

![image](https://hackmd.io/_uploads/HJnK1d4xWe.png)

### Sur `dmz-srv` : 

![image](https://hackmd.io/_uploads/ryYh1_Egbg.png)

## Connectivité entre `lan-cli` vers `dmz-srv` 

![image](https://hackmd.io/_uploads/HJe01uNxbl.png)

## Connectivité entre `dmz-srv` vers `lan-cli`

![image](https://hackmd.io/_uploads/SJmZxO4xWg.png)

## Table de routage de `dmz-srv` et `lan-cli`

### `dmz-srv` :
![image](https://hackmd.io/_uploads/BJRUlO4e-x.png)

### `lan-cli` :
![image](https://hackmd.io/_uploads/ryn_gOVeZx.png)

# ÉTAPE 3 : 

## Démarrer le serveur http avec APACHE2 :
![image](https://hackmd.io/_uploads/HyTA-OElWe.png)

## Tester la connectivité localement depuis `dmz-srv` :
![image](https://hackmd.io/_uploads/SykvzOEebg.png)

## Tester la connectivité depuis `lan-cli` :

![image](https://hackmd.io/_uploads/B1OFzu4xWl.png)

# ÉTAPE 4 : 

## Application d’un pare-feu sur `fw` bloquant tout le trafic, sauf le ping et le HTTP du LAN vers `dmz-srv`:

![image](https://hackmd.io/_uploads/H1-E8ONeWe.png)

## Ping et accès HTTP depuis `lan-cli` vers `dmz-srv` fonctionnent avec le filtrage : 

![image](https://hackmd.io/_uploads/Hyma9OVeZx.png)

## Ping de `dmz-srv` vers `lan-cli` : 

![image](https://hackmd.io/_uploads/HkjDouVxZl.png)

## Toute tentative d’accès non autorisé est immédiatement rejetée par le pare-feu : 

![image](https://hackmd.io/_uploads/SkY_T_4xWg.png)

# ÉTAPE 5 : 

## Ajout de la règle de LOG ainsi qu'autorisé l'accès de ping et l'accès au service que depuis `lan-cli` vers `dmz-srv` :

![image](https://hackmd.io/_uploads/SJUC8FNxWg.png)

### `lan-cli` vers `dmz-srv` 
![image](https://hackmd.io/_uploads/Bk-Ldt4xZl.png)

### `dmz-srv` vers `lan-cli` 
![image](https://hackmd.io/_uploads/SkRcOKNebe.png)


## Le pare-feu journalise et rejette bien tout accès non autorisé, comme montré ci-dessous :

![image](https://hackmd.io/_uploads/BkaJxFEgZe.png)

## Analyse Réseau sur fw. Analyse ou l'on vois l'accès autorisé au serveur ainsi que la connexion refusée au port 22.

![image](https://hackmd.io/_uploads/SkA7wt4xZx.png)

# ÉTAPE 6 : 

## Configuration Mini DNS : 

### Éditer le fichier /etc/hosts afin d'adresser un nom de domaine à l'adresse ip du `dmz-srv`. Cela permet de ping avec un nom au lieu d'une adresse ip.

![image](https://hackmd.io/_uploads/H1rTFKNgbl.png)

![image](https://hackmd.io/_uploads/HJPdFFVe-l.png)

# QUESTIONS À TRAITER : 

## Quel est le rôle du pare-feu fw entre LAN et DMZ ?
Le pare-feu filtre et contrôle le trafic entre le LAN et la DMZ pour bloquer les accès non autorisés et protéger les deux réseaux.

## Pourquoi mettre un serveur dans une DMZ plutôt que dans le LAN interne ?
La DMZ isole le serveur du LAN : si le serveur est compromis, le reste du réseau interne reste protégé.

## Différence entre « tout autoriser sauf… » et « tout interdire sauf… » — laquelle est la plus sûre ?

Tout autoriser sauf… : tout passe sauf quelques blocages précis (risqué si oubli).

Tout interdire sauf… : rien ne passe sauf ce qui est explicitement autorisé (plus sûr).

La politique « tout interdire sauf… » est la plus sûre, car on limite strictement les échanges.

## Exemple concret de flux bloqué et pourquoi ce serait dangereux de le laisser ouvert :

Dans mon TP, l’accès SSH à la DMZ est bloqué depuis le LAN. Le laisser ouvert permettrait à n’importe quel utilisateur du LAN d’essayer de se connecter ou d’attaquer le serveur.
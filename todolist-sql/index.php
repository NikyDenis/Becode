<?php
try{
    $todo = new PDO ('mysql:host=localhost; dbname=becode; charset=utf8', 'niky', 'user');
}
catch (Exception $e){
    die("Erreur ".$e->getmessage());
}

$req = $todo->query("SELECT * FROM todolist");
$montre = $todo->query("SELECT * FROM archive");


//afficher la premiere du coup
function afficher(){
    $todo = new PDO ('mysql:host=localhost; dbname=becode; charset=utf8', 'niky', 'user');

    $req = $todo->query("SELECT * FROM todolist");
        $affiche=$req->fetchAll();
        foreach($affiche as $component){
            echo '<p><input name="check[]" type="checkbox" value="'.$component['tache'].'">'.$component["tache"].' '.$component['deadline'].' '.$component['heurefin'].'</p>';
        }
}
//afficher 2eme base de donnée
function regarde(){
    $todo = new PDO ('mysql:host=localhost; dbname=becode; charset=utf8', 'niky', 'user');

    $montre = $todo->query("SELECT * FROM archive");
        $look=$montre->fetchAll();
        foreach($look as $chose){
            echo '<p>'.$chose["tache"].'</p>';
        }
}
    if(isset($_POST['ajout'])){
        
        $tache=$_POST['tache'];
        $deadline=$_POST['deadline'];
        $heurefin=$_POST['heurefin'];
        $insertion = $todo->exec("INSERT INTO todolist(tache, deadline, heurefin) VALUES ('$tache', '$deadline', '$heurefin')");
        header('location:index.php');

    }
        //supprimer les taches
    if (isset($_POST['supprimer'])){
        foreach($_POST['check'] as $check){
            $todo->exec('DELETE FROM todolist WHERE tache= "'.$check.'"');
        }
        header("location:index.php");
     }

            // supprimer toutes les archives
     if (isset($_POST['nettoyer'])){
            $todo->exec('DELETE FROM archive');
     }
        //archiver les taches
     if (isset($_POST['archiver'])){
        foreach($_POST['check'] as $check){
        $todo->exec('INSERT INTO archive(tache) VALUES ("'.$check.'")');
        $todo->exec('DELETE FROM todolist WHERE tache= "'.$check.'"');
        
        }
        header("location:index.php");

    }

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TodoList</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <link href="https://fonts.googleapis.com/css?family=Jua|Leckerli+One|Cabin+Sketch|Nanum+Pen+Script|Pangolin|Poiret+One|BenchNine|Sacramento|Bad+Script|Chewy|Fredericka+the+Great" rel="stylesheet">
</head>
<body>
    <section>
   <!-- premier bloc pour afficher les taches a faire -->
   <fieldset>
   <h3 id="titre">To do list</h3>
    <form action="index.php" id="liste" method="POST">
        <!-- <p id="description">Choses à faire dans les temps</p> -->
       <?php afficher() ?>
         <input type="submit" class="pasbouger" name="archiver" value="archiver">
         <input type="submit" class="pasbouger" name="supprimer" value="supprimer">
         </form>
         </fieldset>


    <!-- Bloc pour afficher les archives -->
    <fieldset>
        <h3 id="fait"  >&#10003 Faits</h3>
        <form action="index.php" id="archives" method="POST">
        <?php regarde() ?>
        <input type="submit" class="pasbouger" value ="Nettoyage" name="nettoyer">
        </form>
    </fieldset>
    </section>


    <!-- Bloc pour rajouter des taches a effectuer -->
    <form action="index.php" id="encoder" method="POST" >
    <input type="text" name="tache" autofocus required>
    <input type="date"name="deadline">
    <input type="time"name="heurefin">
    <input type="submit" id="bouton" value ="Envoyer" name="ajout">
    </form>
    <script src="script.js"></script>
    </body>
</html>
  

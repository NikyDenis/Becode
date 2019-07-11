<?php
try{
    $bdd = new PDO ('mysql:host=localhost; dbname=becode; charset=utf8', 'niky', 'user');
}
catch (Exception $e){
    die("Erreur ".$e->getmessage());
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
    <script src="script.js"></script>
</head>
<body>
    
</body>
</html>
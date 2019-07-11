<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Formulaire</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <!-- <script src="main.js"></script> -->
</head>
<body>
<form method="post" action="user.php">
    <select name="politesse" id="politesse">
    <option value="homme">M</option>
    <option value="femme">Mme</option>
    </select>
    <label for="">Votre Nom</label>
    <input name="name" type="text" autofocus required>
    <label for="">Votre Prénom</label>
    <input name="prenom" type="text" required>
    <input type="submit" value="Envoyer">
    </form>
</body>
</html>
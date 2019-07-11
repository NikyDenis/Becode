<?php
    $options = array(
        'tache' => FILTER_SANITIZE_STRING, FILTER_SANITIZE_FULL_CHARS
    );
    $result = filter_input_array(INPUT_POST, $options);
    // if (empty($_POST['tache'])){
    //     echo "TA RACE REMPLI LES CHAMPS";
    //     // header('location:formulaire.php');
    // }
    
    
    //Permet d'empêcher l'affichage d'erreurs avec un is_array() sur le formulaire
    $current_data = file_get_contents('todo.json');
    $array_data = json_decode($current_data, true);
    
    //Déclare la variable error vide pour l'utiliser dans les conditions
    $error = " ";
    
    if (isset($_POST['ajouter'])){
        $tache = $_POST['tache'];
        // Si le input est pas vide
        if(!empty($tache)){
            //json à récupérer avant de décoder
            $data_current = file_get_contents('todo.json');
            $array_data = json_decode($current_data, true);
            $tableau = array(
                'ID' => $i = 0,
                'tache' =>  $tache,
                'bool' => 0
            );

            //on stock dans un tableau
            $array_data[] = $tableau;
            foreach ($array_data as $key => $valeur){
                $array_data[$key]['ID'] = $i++;
            }
            $final_data = json_encode($array_data);
            file_put_contents('todo.json', $final_data);
        }else{
            $error = "Veuillez saisir une tâche dans le champ ci-dessus.";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TODO LIST AJAX</title>
</head>
<body>
    <h2>Ajouter une tâche</h2>
    <p>tâche à effectuer</p>
    <form method="POST">
        <input type="text" id="tache" name="tache" placeholder="entrez la tâche" minlength="5" maxlength="100" required>
        <input type="submit" onclick="ajouter()" name="ajouter" value="Ajouter">
    </form>
    <script src="script.js"></script>
</body>
</html>
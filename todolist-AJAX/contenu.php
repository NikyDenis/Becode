<?php
require('formulaire.php');
if (isset($_POST['archive'])) {
    if (!empty($_POST['checkbox'])) {
            for ($i = 0; $i < count($_POST['checkbox']); $i++) {
                $checkbox = $_POST['checkbox'][$i];
                foreach ($array_data as $key => $value) {
                    $array = $array_data[$key]['ID'];
                    if($array === (int)$checkbox){
                        $array_data[$key]['bool'] = 1;
                    }
                }
            }
            $final_data = json_encode($array_data);
            file_put_contents('todo.json', $final_data);
        }
    }
if (isset($_POST['delete'])) {
    if (!empty($_POST['checkbox'])) {
        for ($i = 0; $i < count($_POST['checkbox']); $i++) {
            $checkbox = $_POST['checkbox'][$i];
            foreach ($array_data as $key => $value) {
                $array = $array_data[$key]['ID'];
                if($array === (int)$checkbox){
                    unset($array_data[$key]);
                }
            }
        }
        $final_data = json_encode($array_data);
        file_put_contents('todo.json', $final_data);
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>To Do List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="script.js"></script>
</head>

<body>
    <section>
        <div class="top">
            <h3>To Do List SQL</h3>
        </div>
        <div>
            <h5>Tâches</h5>
            <form method="POST">
                <?php
                if (is_array($array_data)) {
                    foreach ($array_data as $value) {
                        if ($value['bool'] === 0) {
                            echo "<p><input type='checkbox' name='checkbox[]' value='" . $value['ID'] . "' />" . " " . $value['tache'] . "</p>";
                        }
                    }
                } ?>
                <button type="submit" name="archive" >Archiver</button>
                <button type="submit" name="delete" >Supprimer</button>
            </form>
            <h5>Archives</h5>
            <?php
            if (is_array($array_data)) {
                foreach ($array_data as $value) {
                    if ($value['bool'] === 1) {
                        echo "<p><input type='checkbox' name='checkbox[]' disabled='disabled' checked='checked' /><strike>" . " " . $value['tache'] . "</strike></p>";
                    }
                }
            } ?>
        </div>
        
    </section>
</body>

</html>
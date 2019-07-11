<?php
if (isset($_POST['name']) && isset($_POST['prenom'])){
    echo "Bonjour ". $_POST['prenom']." " .$_POST['name'];
}
?>
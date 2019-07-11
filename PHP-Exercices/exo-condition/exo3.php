<?php 
$homme = true;
$age = 12;
if ($homme=true && $age>=18){
    echo "Vous êtes un homme majeur";
} elseif ($homme=true && $age<18){
    echo "Vous êtes un homme mineur";
} elseif ($homme=false && $age>=18){
    echo "Vous êtes une femme majeure";
} elseif ($homme=false && $age<18){
    echo "Vous êtes une femme mineure";
}
?>
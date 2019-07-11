<?php

//C'est les soldes. Un t-shirt qui te plaît coûte 785€ à la base mais ce mois-ci
//ton magasin préféré lui applique une ristourne de 30%. Grâce à tes nouvelles connaissances en PHP
//affiche le prix de départ, le montant de la ristourne et le prix que tu vas payer sur ton navigateur.

// Prix de départ = 785
$prixDepart = 785;
// Ristourne 30%
$ristourne = $prixDepart*30/100;
//prix final
$prixFinal = $prixDepart-$ristourne;
echo"Le prix initial est de $prixDepart. Grâce à la ristourne de 30%, ne payez que $prixFinal";

?>
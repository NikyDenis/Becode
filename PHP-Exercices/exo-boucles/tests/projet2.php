<!DOCTYPE html>
<html>
<head>
	<title>Projet2</title>
	<meta charset="utf-8">
	<style type="text/css">
		table, td {
			border : 1px solid black;
			border-collapse: collapse;
		}
	</style>
</head>
<body>
	<h1>Le calendrier</h1>
	<h2>Dans quel ordre souhaitez-vous qu'il s'affiche ?</h2>
	<form method="post" action="#">
		<input type="radio" name="choix" value="chrono"><label>Chronologique</label>
		<input type="radio" name="choix" value="inverse"><label>Inverse</label>
		<input type="submit" value="Valider">
	</form>
<table>
<?php 

$mois[0] = "Janvier";
$mois[1] = "Février";
$mois[2] = "Mars";
$mois[3] = "Avril";
$mois[4] = "Mai";
$mois[5] = "Juin";
$mois[6] = "Juillet";
$mois[7] = "Aout";
$mois[8] = "Septembre";
$mois[9] = "Octobre";
$mois[10] = "Novembre";
$mois[11] = "Décembre";

if (isset($_POST["choix"])) 
{
	$choix = $_POST["choix"];

	echo "<tr><th>Mois de l'année</th></tr>";
	
	switch ($choix) {
		case 'chrono':
			for ($i=0; $i < count($mois); $i++)
			{ 
				echo "<tr><td>$mois[$i]</td></tr>";
			}
			break;
		case 'inverse':
			for ($i=count($mois)-1; $i >= 0; $i--)
			{ 
				echo "<tr><td>$mois[$i]</td></tr>";
			}
			break;
		
		default:
			echo "Erreur";
			break;
	}
}

 ?>
 </table>
</body>
</html>
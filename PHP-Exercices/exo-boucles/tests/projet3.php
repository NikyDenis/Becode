<!DOCTYPE html>
<html>
<head>
	<title>Projet 3</title>
	<meta charset="utf-8">
	<style type="text/css">
		table, td {
			border : 1px solid black;
			border-collapse: collapse;
		}
		h1, p {
			text-align: center;
		}

		div {
			border: 1px solid black;
			width: 48%;
		}

		.gauche {
			float: left;
		}

		.droite {
			float: right;
		}
		table {
			margin: auto;
		}

	</style>
</head>
<body>
	<h1>Le calendrier</h1>
	<div class="gauche">
		<p>Voici le calendrier avec le nombre de jours par mois</p>
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

		$jour[0] = 31;
		$jour[1] = 28;
		$jour[2] = 31;
		$jour[3] = 30;
		$jour[4] = 31;
		$jour[5] = 30;
		$jour[6] = 31;
		$jour[7] = 31;
		$jour[8] = 30;
		$jour[9] = 31;
		$jour[10] = 30;
		$jour[11] = 31;

		echo "<tr><th>Mois de l'année</th><th>Jour par mois</th></tr>";

		for ($i=0; $i < count($mois); $i++)
		{ 
			echo "<tr><td>$mois[$i]</td><td>$jour[$i]</td></tr>";
		}


		 ?>
		 </table>
	</div>

	<div class="droite">
		<p>Rechercher le nombre de jours par mois:</p>
		<form method="post" action="#">
			<select name="choix">
			<?php 
				for ($i=0; $i < count($mois); $i++) 
				{ 
					echo "<option value=$i";

					if(isset($_POST["choix"]) && $_POST["choix"] == $i)
					{
						echo " selected";
					}
					echo ">$mois[$i]</option>";
				}
			 ?>
			 </select>
			 <input type="submit" value="Recherche">
			 <?php 
			 if (isset($_POST["choix"])) 
			 {
			 	$choix = $_POST["choix"];
			 	echo "$jour[$choix]";
			 }
			 

			  ?>
		</form>
		
	</div>
</body>
</html>
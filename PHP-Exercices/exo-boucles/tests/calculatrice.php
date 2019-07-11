<?php 
$nombre1 = $_POST["nombre1"];
$operateur = $_POST["operateur"];
$nombre2 = $_POST["nombre2"];

switch ($operateur) 
{
	case '+':
		$resultat = $nombre1 + $nombre2;
		echo $nombre1."+".$nombre2."=".$resultat;
		break;
	case '-':
		$resultat = $nombre1 - $nombre2;
		echo $nombre1."-".$nombre2."=".$resultat;
		break;
	case '*':
		$resultat = $nombre1 * $nombre2;
		echo $nombre1."*".$nombre2."=".$resultat;
		break;
	case '/':
		if ($nombre2 == 0) 
		{
			echo "Erreur division par 0";
		}
		else
		{
			$resultat = $nombre1 / $nombre2;
			echo $nombre1."/".$nombre2."=". $resultat;
		}		
		break;
	
	default:
		echo "Opération impossible";
		break;
}

 ?>
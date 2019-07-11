<?php

$options = array(
'name' => FILTER_SANITIZE_STRING, FILTER_SANITIZE_FULL_SPECIAL_CHARS,
'firstname' => FILTER_SANITIZE_STRING, FILTER_SANITIZE_FULL_SPECIAL_CHARS,
'email' => FILTER_VALIDATE_EMAIL, FILTER_SANITIZE_EMAIL, FILTER_SANITIZE_SPECIAL_CHARS,
'country' => FILTER_SANITIZE_FULL_SPECIAL_CHARS, FILTER_SANITIZE_STRING,
'comment' => FILTER_SANITIZE_STRING,FILTER_SANITIZE_FULL_SPECIAL_CHARS

);

$result = filter_input_array(INPUT_POST, $options);

if($result != null AND $result != FALSE){
        echo "Tout est ok";
}else{
       echo "Pas correct";    
}

foreach($options as $key => $value){
        $result[$key]=trim($result[$key]);
}


?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="/projet poulette/assets/css/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<body>
               
        <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <a class="navbar-brand" href="#">Hackers Poulette</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                        </button>
                                      
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                        <li class="nav-item">
                                              <a class="nav-link" href="index.html">Accueil<span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item active">
                                              <a class="nav-link" href="contact.php">Contact</a>
                                        </li>                                           

                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search">
                                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
                                </form>
                        </div>
                </nav>
                <div class="logo"><img src="assets/img/logo.png" alt="logo hackers poulettes"/></div>
                <h1>Hackers Poulette contact : Niki and Fouz</h1>
                <div class="styleform">
                        <div class="container w-50">

                        <?php

                        // a effacer apreeeees

                        echo $_POST['name']." ".$_POST['firstname']." ".$_POST['email'];
                        echo "<br/>";
                        echo $_POST['country']." ".$_POST['genre']." ".$_POST['choix'];
                        echo "<br/>";
                        echo $_POST['comment'];

                        ?>
                       
                        <form  action="#" method="POST" class="form">
                                
                                        <div class="form-group">
                                                <label for="name">Nom</label>
                                                <input type="text" id="name" name="name" class="form-control"placeholder="Votre Nom" minlength="2" maxlength="30" required>
                                        </div>
                        
                                        <div class="form-group">
                                                <label for="first-name">Prénom</label>
                                                <input type="text" id="first-name" name="firstname" class="form-control" placeholder="Votre Prénom" minlength="3" maxlength="30" required>
                                        </div>
                                    
                                        <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" id="email" name="email" class="form-control" placeholder="Votre Email"maxlength="50" required >
                                        </div>

                                        <div class="form-group">
                                                <label for="country">Pays</label>
                                                <input type="text" id="country" name="country" class="form-control" placeholder="Pays" required>
                                        </div>

                                        <div class="form-group">
                                                <label class="radio-inline"><input type="radio" name="genre" checked required>Homme</label>
                                                <label class="radio-inline"><input type="radio" name="genre">Femme</label>
                                        </div>
                                                            
                                                
                                        <div class="form-check form-check-inline" name="choix">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                                <label class="form-check-label" for="inlineCheckbox1">Devis</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                                <label class="form-check-label" for="inlineCheckbox2">Commande</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                                                <label class="form-check-label" for="inlineCheckbox3">Réclamation</label>
                                        </div>
                        
                                                                                        
                                        <div class="form-group">
                                                <label for="message">Message</label>
                                                <textarea type="text" id="comment" name="comment" class="form-control" placeholder="Votre message" required></textarea>
                                        </div> 
                                        <div class="form-group center">
                                                <input type="button" class="btn btn-secondary btn-lg btn-block btn-primary" data-toggle="modal" data-target="#exampleModal" value="Envoyer">
                                        </div>
                                        
                        </form>
                </div>
                </div>
               
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                                <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel"> Merci <?php echo $_POST['name']." ".$_POST['firstname']; ?></h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                        </button>
                                                </div>
                                                <div class="modal-body">
                                                        <p><?php echo $_POST['email']; ?></p>
                                                        <p><?php echo $_POST['comment']; ?></p>
                                                </div>
                                                <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

                                                </div>
                                        </div>
                                </div>
                        </div>

                
        </div>



</body>
<footer class="page-footer font-small cyan darken-3 text-white">
        <div class="container">
            <div class="row">
                <div class="col-md-12 test">
                    <div class="mb-5 flex-center">
                        <a class="fb-ic"  href="#">
                            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a class="tw-ic"  href="#">
                            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a class="ins-ic" href="#">
                            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright text-center mb-1 test2">© 2019 Copyright
            <a href="https://mdbootstrap.com/education/bootstrap/"> TEAM_NikiandFouz.com</a>
        </div>
    </footer>
</html>
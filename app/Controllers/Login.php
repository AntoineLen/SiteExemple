<?php

namespace App\Controllers;
use App\Models\UserModel;
use CodeIgniter\Controller;

class Login extends BaseController
{
    private $session;
    private $UserModel;

    public function __construct()
    {
        $this->session = session();
        $this->UserModel = new UserModel();
    }
	function index()
	{
        $data 	= []; 
        $data["validation"] = null; 
        
        if($this->request->getMethod() == "post") 
        {
            $rules 	= [
                'email' => 'required|valid_email',
                'mdp' => 'required',
            ];
                
            if( $this->validate($rules) )
            {

                $email	= $this->request->getVar("email");
                $password = $this->request->getVar("mdp");

                $userData = $this->UserModel->VerifyEmail($email);
                // var_dump($userData);
                // die();

                if( $userData )
                {
                    if( password_verify($password,$userData['mdp']) )
                    {
                        $this->session->setTempdata("success","Connexion réussie! Redirection automatique dans 2 secondes",2);
                        echo ("<div style = '; text-align: center;color: green;font-weight:bold'>".  $_SESSION["success"] ."<div/>" );

                        $this->session->set( "utilisateurConnecte_email",$userData["email"] );
                        $this->session->set( "utilisateurConnecte_nom",$userData["nom"] );
                        $this->session->set( "utilisateurConnecte_id",$userData["id"] );


                        return header( "refresh:2;url=". base_url(''));
                    }
                    else
                    {
                        $this->session->setTempdata("error","Mot de passe incorrect..redirection automatique dans 2 secondes",2);
                        echo ("<div style = '; text-align: center;color: red;font-weight:bold'>".  $_SESSION["error"] ."<div/>" );

                        return header( "refresh:2;url=".  current_url());
                    }

                }
                else
                {
                    $this->session->setTempdata("error","l'adresse mail saisie n'a pas été reconnue..redirection automatique dans 2 secondes",2);
                    echo ("<div style = '; text-align: center;color: red;font-weight:bold'>".  $_SESSION["error"] ."<div/>" );

                    return header( "refresh:2;url=".  current_url() ." ." );
                }
            }
            else
            {
                $data["validation"] = $this->validator; 
            }
        }
        
        echo view('templates/header_view',$data);
        echo view('login_view');
        echo view('templates/footer_view');
    }

    function signin(){

        $data 	= []; 
        $data["validation"] = null; 
        
        if($this->request->getMethod() == "post") 
        {
            $rules 	= [
                'nom' => 'required|min_length[3]|max_length[15]',
				'email' => 'required|valid_email|is_unique[client.email]',
				'mdp' => 'required|min_length[6]',
				'password_confirm' => 'matches[mdp]'
            ];
                
            if( $this->validate($rules) )
            {
                    $userData = [

                        'nom'     		=> $this->request->getVar("nom",FILTER_SANITIZE_STRING),
                        'email'    		=> $this->request->getVar("email"),
                        'mdp'   	=> password_hash( $this->request->getVar("mdp"),PASSWORD_DEFAULT )
                    ];

                    if($this->UserModel->CreateUser($userData) == true)
                    {
                        $this->session->setTempdata("success","L'utilisateur a bien été crée",2);
                        echo ("<div style = '; text-align: center;color: green;font-weight:bold'>".  $_SESSION["success"] ."<div/>" );

                        return header( "refresh:2;url=". base_url('/Login'));
                    }
                    else
                    {
                        $this->session->setTempdata("error","Création impossible, une erreur est survenue..redirection automatique dans 2 secondes",2);
                        echo ("<div style = '; text-align: center;color: red;font-weight:bold'>".  $_SESSION["error"] ."<div/>" );

                        return header( "refresh:2;url=".  current_url());
                    }
            }
            else
            {
                $data["validation"] = $this->validator; 
            }
        }

        echo view('templates/header_view',$data);
        echo view('signin');
        echo view('templates/footer_view');
    }

    function mdpoublie(){
        echo view('templates/header_view');
        echo view('mdpoublie');
        echo view('templates/footer_view');
    }

    function logout(){
		session()->destroy();
		return redirect()->to(base_url(''));
    }
}
?>

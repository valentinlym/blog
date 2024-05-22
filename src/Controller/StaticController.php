<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StaticController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(): Response
    {
        return $this->render('static/index.html.twig', [
            'controller_name' => "Page d'accueil",
        ]);
    }
    /**
     * @Route("/admin", name="app_admin")
     */
    public function admin(): Response
    {
        return $this->render('static/admin.html.twig', [
            'controller_name' => "Page d'administration",
        ]);
    }
}

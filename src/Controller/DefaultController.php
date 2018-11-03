<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/default", name="default")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/",  name="index")
     */
    public function index2()
    {
        return $this->render('pages/index.html.twig');
    }

    /**
     * @Route("/page2",  name="page2")
     */
    public function page2()
    {
        return $this->render('pages/intro.html.twig');
    }


    /**
     * @Route("/CardBook",  name="CardBook")
     */
    public function CardBook()
    {
        return $this->render('pages/p_CardBook.html.twig');
    }


}

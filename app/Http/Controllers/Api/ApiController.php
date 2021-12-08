<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getArticles()
    {
        return Article::query()->latest()->get();
    }

    public function getArticle(Article $article): Article
    {
        return $article;
    }
}

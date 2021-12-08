<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Challenge\Challenge;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['php', 'css', 'c#', 'c++', '.net', 'devops', 'react', 'nodejs'];

        foreach ($categories as $category)
        {
            Category::factory()
                ->state([
                    'title' => $category,
                ])
                ->has(Article::factory()->count(3)
                    ->state(function (array $attributes, Category $category) {
                        return ['category_id' => $category->id];
                    }),'articles')
                ->create();
        }
    }
}

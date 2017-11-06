<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Observers\PostObserver;

class Post extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public static function boot()
    {
        parent::boot();

        Post::observe(PostObserver::class);
    }
}

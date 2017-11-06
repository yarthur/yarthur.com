<?php

namespace App\Observers;

use App\Post;

class PostObserver
{
    public function saving(Post $post)
    {
        if ($post->published === 1) {
            if ($post->created_at === null) {
                $post->setCreatedAt($post->freshTimestamp());
            }
        } else {
            $post->setCreatedAt(null);
        }
    }
}

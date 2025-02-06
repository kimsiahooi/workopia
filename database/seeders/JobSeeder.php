<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Load job listings from file
        $job_listings = include database_path('seeders/data/job_listings.php');

        // Get user ids from user model
        $user_ids = User::pluck('id')->toArray();

        foreach ($job_listings as $listing) {
            Job::factory()->create([
                ...$listing,
                'user_id' => $user_ids[array_rand($user_ids)],
            ]);
        }
    }
}

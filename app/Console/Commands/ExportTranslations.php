<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ExportTranslations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'export:translations';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export translations to JSON';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $langDirectories = ['en', 'hr']; // Add more directories as needed

        foreach ($langDirectories as $langDirectory) {
            $files = glob("lang/$langDirectory/*.php");
    
            $translations = [];
            foreach ($files as $file) {
                $filename = pathinfo($file, PATHINFO_FILENAME);
                $fileTranslations = include $file;
                $prefixedTranslations = $this->addPrefixToKeys($fileTranslations, $filename);
                $translations = array_merge_recursive($translations, $prefixedTranslations);
            }
    
            $jsonPath = resource_path("js/lang/$langDirectory.json");
            $jsonContents = json_encode($translations, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
            if (!file_exists($jsonPath)) {
                // If not, create the directory and the file
                if (!is_dir(dirname($jsonPath))) {
                    mkdir(dirname($jsonPath), 0755, true);
                }
            }
            file_put_contents($jsonPath, $jsonContents);
            echo "JSON file created for $langDirectory.\n";
        }
    }
    protected function addPrefixToKeys($translations, $prefix)
    {
        $prefixedTranslations = [];

        foreach ($translations as $key => $value) {
            $prefixedKey = $prefix . '.' . $key;
            $prefixedTranslations[$prefixedKey] = $value;
        }

        return $prefixedTranslations;
    }
}

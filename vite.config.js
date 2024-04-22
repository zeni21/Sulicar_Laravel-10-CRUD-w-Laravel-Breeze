import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    loglevel: 'debug',
    plugins: [
        laravel({
            input: [
                'resources/css/main.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});

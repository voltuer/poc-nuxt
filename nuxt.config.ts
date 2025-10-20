// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@ant-design-vue/nuxt'],
    css: ['~/style.css'],

    vite: {
        plugins: [
            tailwindcss(),
            Components({
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false, // css in js
                    })
                ],
            }),
        ]
    },

    antd: {
        extractStyle: true,
    }
})
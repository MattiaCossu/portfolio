import * as _nuxt_schema from '@nuxt/schema';
import { MotionVariants } from '@vueuse/motion';

interface ModuleOptions {
    directives?: {
        [key: string]: MotionVariants;
    };
    excludePresets?: boolean;
}
declare const CONFIG_KEY = "motion";
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

declare module '@nuxt/kit' {
    interface NuxtConfig {
        [CONFIG_KEY]?: ModuleOptions;
    }
    interface Configuration {
        [CONFIG_KEY]?: ModuleOptions;
    }
}
declare module '@nuxt/schema' {
    interface NuxtConfig {
        [CONFIG_KEY]?: ModuleOptions;
    }
}

export { ModuleOptions, _default as default };

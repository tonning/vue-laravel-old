import Old from './old';

function plugin(Vue, values) {
    // Exit if the plugin has already been installed.
    if (plugin.installed) return;

    // Extend `Vue.prototype` to include our global event bus.
    Object.defineProperty(Vue.prototype, '$old', {
        get() {
            return new Old(values);
        },
        configurable: true,
    });
}

// Check for `window.Vue`
if (typeof window !== 'undefined' && window.Vue) {
    // Install plugin automatically.
    window.Vue.use(plugin);
}

export default plugin;

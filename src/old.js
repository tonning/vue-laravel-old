class Old {
    /**
     * Create a new Old instance.
     */
    constructor(values = {}) {
        this.record(values);
    }

    /**
     * Get all the values.
     *
     * @return {object}
     */
    all() {
        return this.values;
    }

    /**
     * Determine if any values exists for the given field or object.
     *
     * @param {string} field
     */
    has(field) {
        let hasValue = this.values.hasOwnProperty(field);

        if (!hasValue) {
            const values = Object.keys(this.values).filter(
                v => v.startsWith(`${field}.`) || v.startsWith(`${field}[`)
            );

            hasValue = values.length > 0;
        }

        return hasValue;
    }

    first(field) {
        return this.get(field)[0];
    }

    get(field, fallback) {
        return this.values[field] || fallback;
    }

    /**
     * Determine if we have any values.
     */
    any() {
        return Object.keys(this.values).length > 0;
    }

    /**
     * Record the new old values.
     *
     * @param {object} values
     */
    record(values = {}) {
        this.values = values;
    }

    /**
     * Clear a specific field, object or all value fields.
     *
     * @param {string|null} field
     */
    clear(field) {
        if (!field) {
            this.values = {};

            return;
        }

        let values = Object.assign({}, this.values);

        Object.keys(values)
            .filter(v => v === field || v.startsWith(`${field}.`) || v.startsWith(`${field}[`))
            .forEach(v => delete values[v]);

        this.values = values;

        Object.defineProperty(Vue.prototype, '$old', {
            get() {
                return new Old(values);
            },
        });
    }
}

export default Old;

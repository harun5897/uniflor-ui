export function getLang() {
    const route = useRoute()
    const lang = () => {
        const lang = route.query.lang
        if (lang) {
            if (Array.isArray(lang)) return lang[0]?.toString() ?? 'id'
            return lang.toString()
        }
        return 'id'
    }
    return lang()
}
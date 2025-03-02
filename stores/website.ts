interface WebsiteState {
    name: string;
    description: string;
}

export const useWebsiteStore = defineStore('websiteStore', {
    state: (): WebsiteState => ({
        name: '',
        description: ''
    }),
    actions: {
        async fetch(): Promise<void> {
            try {
                const infos: WebsiteState = await $fetch('https://api.nuxt.com/modules/pinia');
                this.name = infos.name;
                this.description = infos.description;
            } catch (error) {
                console.error('Failed to fetch website info:', error);
            }
        },
        updateState() {
            this.name = 'update ' + this.name
            this.description = 'update ' + this.description
        }
    }
});

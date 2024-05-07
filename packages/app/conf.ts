const _host = typeof window !== 'undefined' ? window.location.hostname : ''
const _protocol = typeof window !== 'undefined' ? window.location.protocol : ''

const SiteConfig = {
    trackingID: 'G-XXXXXXXXXXXX',
    SSR: true, //Server-side rendering
    workspaceRoot: '/workspace',
    getDevelopmentURL: (path, protocol?, host?) => (protocol??_protocol)+`//${(host??_host)}:8000${path}`,
    getProductionURL: (path, protocol?, host?) => (protocol??_protocol)+`//${(host??_host)}:8080${path}`,
    useLocalDocumentation: false
}
export {SiteConfig}
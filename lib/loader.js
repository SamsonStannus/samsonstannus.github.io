export default function imgixLoader({ src, width, quality }) {
    const url = new URL(`https://samsonstannus.imgix.net${src}`)
    const params = url.searchParams
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())
    params.set('q', quality && quality.toString() || '50')
    return url.href
}
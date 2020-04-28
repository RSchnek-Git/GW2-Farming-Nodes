export default function CopyToClipboard(str) {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style = {position: 'absolute', left: '-9999px'}
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    let toast = document.getElementById('copy-toast')
    toast.className = 'show'
    setTimeout(function() {
        toast.className = toast.className.replace('show', '')
    }, 3000)
}
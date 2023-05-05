const ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''

const __html = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', ${JSON.stringify(ID)});
`

export default function Analytics() {
  return !ID ? null : <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YKZJQBPHL6"></script>
    <script dangerouslySetInnerHTML={{ __html }}></script>
  </>
}

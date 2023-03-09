import Logo from '../assets/images/dovepay.svg'

export default function() {
  try {
    init.logo()
  } catch(e) {
    console.error('页面初始化失败', e, e.stack)
  }
}

const init = {
  logo: (config) => {
    try {
      const styles = config && config.imgStyles? config.imgStyles: 'height: 60px; padding: 15px 0;'
      const dovepayLogoPosition = document.querySelectorAll('.uk-logo:not(.uk-logo-travelsky)')
      document.querySelectorAll('.uk-logo').forEach(el => {
        if (el.querySelector('img')) return
        el.innerHTML = ''
        const img = document.createElement('img')
        img.src = Logo
        img.style = styles
        el.appendChild(img)
      })
    } catch(e) {
      console.error(e, e.stack)
    }
  }
}
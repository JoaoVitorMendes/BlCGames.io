(function(win, doc) {
    'use strict'

    
    function scroll(event) {
        const positionScroll = window.pageYOffset
        // saber o qual valor que estava o scroll
        // console.log(positionScroll)

        const header = doc.querySelector('header')

        if(positionScroll < 52) {
            
            // header.style.backgroundColor = '#252627'
            header.style.boxShadow = '5px 4px 6px #38383A'

        } else if(positionScroll >= 53) {
            // header.style.backgroundColor = 'transparent'
            header.style.boxShadow = 'none'
            header.style.border = 'none'
            header.style.transition = 'box-shadow 1s'
        }
    }

    const touchMenuOpen = doc.querySelector('.touchAreaMobileMenuOpen')

        touchMenuOpen.addEventListener('click', _ => {
            const menuMobile = doc.querySelector('.menuMobile')
            const touchMenuClose = doc.querySelector('.touchAreaMobileMenuClose')
            const ol = doc.querySelector('ol')
            const socialNet = doc.querySelector('.menuMobile nav')

            menuMobile.style.width = '40%'
            menuMobile.style.display = 'block'
            touchMenuOpen.style.display = 'none'
            touchMenuClose.style.display = 'block'
            ol.style.transition = '2s'
            ol.style.left = '40px'
            socialNet.style.transition = '2s'
            socialNet.style.left = '28px'

            const html = doc.querySelector('html')
            html.style.overflow = 'hidden'
            const body = doc.querySelector('body')
            body.style.overflow = 'hidden'

            touchMenuClose.addEventListener('click', _ => {
                menuMobile.style.width = 0
                // menuMobile.style.display = 'none'
                touchMenuOpen.style.display = 'block'
                touchMenuClose.style.display = 'none'
                html.style.overflow = 'visible'
                body.style.overflow = 'visible'

                ol.style.transition = '2s'
                ol.style.left = '-300px'

                socialNet.style.transition = '2s'
                socialNet.style.left = '-300px'
        })
        
    })
    doc.addEventListener('scroll', scroll, false)

})(window, document)
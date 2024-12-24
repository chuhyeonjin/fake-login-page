// query param으로 ?v=231203같은 값이 들어갈 수 있으므로 includes로 판별한다.

const guide_image = document.getElementById('guide_image');
if (guide_image) {
    const src = guide_image.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img-2step-mockup-01.png")) {
        // v2/desktop/push.ftl
        guide_image.src = "https://ssl.pstatic.net/static/nid/login/img-2step-mockup-01.png";
        guide_image.onerror = function() {
            console.log('guide_image image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img-2step-mockup-01.png'
        }
    } else if (src.includes("https://ssl.pstatic.net/static/nid/login/img-2step-mockup-01-en.png")) {
        // v2/desktop/global/push.ftl
        guide_image.src = "https://ssl.pstatic.net/static/nid/login/img-2step-mockup-01-en.png";
        guide_image.onerror = function() {
            console.log('guide_image image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img-2step-mockup-01-en.png'
        }
    }
}

const qr_img1 = document.getElementById('qr_img1');
if (qr_img1) {
    const src = qr_img1.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_title.png")) {
        qr_img1.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_title.png";
        qr_img1.onerror = function() {
            console.log('qr_img1 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_title.png'
        }
    }
}

const qr_img2 = document.getElementById('qr_img2');
if (qr_img2) {
    const src = qr_img2.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_1.png")) {
        qr_img2.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_1.png";
        qr_img2.onerror = function() {
            console.log('qr_img2 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_desc_1.png'
        }
    }
}

const qr_img3 = document.getElementById('qr_img3');
if (qr_img3) {
    const src = qr_img3.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_1.png")) {
        qr_img3.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_1.png";
        qr_img3.onerror = function() {
            console.log('qr_img3 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_step_1.png'
        }
    }
}

const qr_img4 = document.getElementById('qr_img4');
if (qr_img4) {
    const src = qr_img4.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_2.png")) {
        qr_img4.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_2.png";
        qr_img4.onerror = function() {
            console.log('qr_img4 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_desc_2.png'
        }
    }
}

const qr_img5 = document.getElementById('qr_img5');
if (qr_img5) {
    const src = qr_img5.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_2.png")) {
        qr_img5.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_2.png";
        qr_img5.onerror = function() {
            console.log('qr_img5 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_step_2.png'
        }
    }
}

const qr_img6 = document.getElementById('qr_img6');
if (qr_img6) {
    const src = qr_img6.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_3.png")) {
        qr_img6.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_3.png";
        qr_img6.onerror = function() {
            console.log('qr_img6 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_desc_3.png'
        }
    }
}

const qr_img7 = document.getElementById('qr_img7');
if (qr_img7) {
    const src = qr_img7.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_3-1.png")) {
        qr_img7.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_3-1.png";
        qr_img7.onerror = function() {
            console.log('qr_img7 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_step_3-1.png'
        }
    }
}

const qr_img8 = document.getElementById('qr_img8');
if (qr_img8) {
    const src = qr_img8.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_4.png")) {
        qr_img8.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_desc_4.png";
        qr_img8.onerror = function() {
            console.log('qr_img8 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_desc_4.png'
        }
    }
}

const qr_img9 = document.getElementById('qr_img9');
if (qr_img9) {
    const src = qr_img9.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_4.png")) {
        qr_img9.src = "https://ssl.pstatic.net/static/nid/login/img_qrcode_help_step_4.png";
        qr_img9.onerror = function() {
            console.log('qr_img9 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img_qrcode_help_step_4.png'
        }
    }
}

const keyboard_view_image = document.getElementById('keyboard_view_image');
if (keyboard_view_image) {
    const src = keyboard_view_image.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/img-keyboard-dark2.png")) {
        keyboard_view_image.src = "https://ssl.pstatic.net/static/nid/login/img-keyboard-dark2.png";
        keyboard_view_image.onerror = function() {
            console.log('keyboard_view_image image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img-keyboard-dark2.png'
        }
    } else if (src.includes("https://ssl.pstatic.net/static/nid/login/img-keyboard.png")) {
        keyboard_view_image.src = "https://ssl.pstatic.net/static/nid/login/img-keyboard.png";
        keyboard_view_image.onerror = function() {
            console.log('keyboard_view_image image error')
            this.onerror = null;
            this.src = '/login/image/cdn/img-keyboard.png'
        }
    }
}

const banner_img1 = document.getElementById('banner_img1');
if (banner_img1) {
    const src = banner_img1.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/banner/m_banner_2step_924x294.png")) {
        banner_img1.src = "https://ssl.pstatic.net/static/nid/login/banner/m_banner_2step_924x294.png";
        banner_img1.onerror = function() {
            console.log('banner_img1 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/m_banner_2step_924x294.png'
        }
    }
}

const banner_img2 = document.getElementById('banner_img2');
if (banner_img2) {
    const src = banner_img2.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/nv/m_banner_vaccine_1_1250_20211230.jpg")) {
        banner_img2.src = "https://ssl.pstatic.net/static/nid/nv/m_banner_vaccine_1_1250_20211230.jpg";
        banner_img2.onerror = function() {
            console.log('banner_img2 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/m_banner_vaccine_1_1250_20211230.jpg'
        }
    }
}

const banner_img3 = document.getElementById('banner_img3');
if (banner_img3) {
    const src = banner_img3.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/nv/m_banner_vaccine_2_1250_20211230.jpg")) {
        banner_img3.src = "https://ssl.pstatic.net/static/nid/nv/m_banner_vaccine_2_1250_20211230.jpg";
        banner_img3.onerror = function() {
            console.log('banner_img3 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/m_banner_vaccine_2_1250_20211230.jpg'
        }
    }
}

const auth2nd_img1 = document.getElementById('auth2nd_img1');
if (auth2nd_img1) {
    const src = auth2nd_img1.src;
    if (src.includes("https://ssl.pstatic.net/static/nid/login/illust-security.png")) {
        auth2nd_img1.src = "https://ssl.pstatic.net/static/nid/login/illust-security.png";
        auth2nd_img1.onerror = function() {
            console.log('auth2nd_img1 image error')
            this.onerror = null;
            this.src = '/login/image/cdn/illust-security.png'
        }
    }
}
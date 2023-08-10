import { Telegram, Facebook, Instagram } from '../../img/Icon1'
import footer from '../../img/footer.svg'
import { F_1, F_2, F_3, F_li, Footer_class, Footer_h2, Footer_p, Footter } from './Footer.style'


export function Footer() {
    return (
        <>
            <Footter id='blog'>
                <Footer_class>
                    <F_1>
                        <Footer_h2>Copyright 2020</Footer_h2>
                        <Footer_p className='pi'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</Footer_p>
                    </F_1>
                    <F_2>
                        <Footer_h2>Sayt sahifalari</Footer_h2>
                        <ul>
                            <F_li>Bosh sahifa</F_li>
                            <F_li>Xizmatlar</F_li>
                            <F_li>Portfolio</F_li>
                            <F_li>Jamoa</F_li>
                            <F_li>Blog</F_li>
                            <F_li>Kontaktlar</F_li>
                        </ul>
                    </F_2>
                    <F_3>
                        <Footer_h2>Biz internetda</Footer_h2>
                        <ul>
                            <F_li>
                                <Telegram />Telegram
                            </F_li>
                            <F_li>
                                <Facebook />Facebook
                            </F_li>
                            <F_li>
                                <Instagram />Instagram
                            </F_li>
                        </ul>
                    </F_3>
                </Footer_class>
            </Footter>
        </>
    )
}
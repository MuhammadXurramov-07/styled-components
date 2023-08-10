import { SectionComponent, SectionComponent2 } from './SectionComponents/SectionComponent'
import a1 from '../../img/a1.svg'
import a2 from '../../img/a2.svg'
import a3 from '../../img/a3.svg'
import a4 from '../../img/a4.svg'
import a5 from '../../img/a5.svg'
import { Section_3, Section_3_card_wrapper, Section_3_h1_class, Section_3_p, Section_3_p_in } from './SectionCards.style'

export function SectionCards() {
    return (
        <>
            <Section_3 id='jamoa'>
                <Section_3_h1_class id='portfolio'>Biz qanday ishlaymiz?</Section_3_h1_class>
                <Section_3_p_in>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinarz</Section_3_p_in>
                <Section_3_card_wrapper>
                    <SectionComponent img={a1} title='Talablarni aniqlab chiqamiz' text='Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar' />
                    <SectionComponent2 img={a2} title='Bir necha yechimlarni taklif qilamiz' text='Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis' />
                    <SectionComponent img={a3} title='Loyiha uchun vaqt belgilaymiz' text='Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis' />
                    <SectionComponent2 img={a4} title='A’lo sifat bilan bajarib topshiramiz' text='Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar' />
                    <SectionComponent img={a5} title='Qo’llab-quvvatlab boramiz' text='Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar' />
                </Section_3_card_wrapper>
            </Section_3>
        </>
    )
}
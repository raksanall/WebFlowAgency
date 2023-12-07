import styles from "./style.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./style.css"

const Section4 = () => {
  return (
    <div className={styles.Section4}>
      <div className="container">
<div className={styles.Row}>
<div className={styles.column1}><h3 >What our clients say about us</h3><p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p></div>
<div className={styles.column2}>

<Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper}>
        <SwiperSlide  className={styles.SwiperSlide}><h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
        <div className={styles.rowSlider}><img src="woman.png" alt="" /> <div className="column"><h6 className={styles.columns}>Jenny Wilson</h6><h6 className={styles.columns2}>Vice President</h6></div></div>
        </SwiperSlide>
        <SwiperSlide  className={styles.SwiperSlide}><h5>""Exceptional agency! Their deep understanding of our product has led to successful collaborations. They consistently bring innovative features to the table, maintaining an impressive level of focus.""</h5>
        <div className={styles.rowSlider}><img style={{width:50}} src="pngtree-young-indian-man-png-image_13229320.png" alt="" /> <div className="column"><h6 className={styles.columns}>Smith Jhonson</h6><h6 className={styles.columns2}>Vice President</h6></div></div>
        </SwiperSlide>
        <SwiperSlide  className={styles.SwiperSlide}><h5>"By far, the top agency in our experience. Their grasp of our product is remarkable, and they continuously enhance it by introducing new features. Their focus is truly commendable."</h5>
        <div className={styles.rowSlider}><img style={{width:50}} src="woman1.png" alt="" /> <div className="column"><h6 className={styles.columns}>Martines Herzandes</h6><h6 className={styles.columns2}>Vice President</h6></div></div>
        </SwiperSlide>
        <SwiperSlide  className={styles.SwiperSlide}><h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
        <div className={styles.rowSlider}><img style={{width:50}} src="man.png" alt="" /> <div className="column"><h6 className={styles.columns}>Lopez Gonazels</h6><h6 className={styles.columns2}>Vice President</h6></div></div>
        </SwiperSlide>
        <SwiperSlide  className={styles.SwiperSlide}><h5>"Our most reliable agency to date. They have a comprehensive understanding of our product and consistently incorporate new, impactful features with exceptional focus."</h5>
        <div className={styles.rowSlider}><img style={{width:50}} src="woman2.png" alt="" /> <div className="column"><h6 className={styles.columns}>Taylor Martin</h6><h6 className={styles.columns2}>Vice President</h6></div></div>
        </SwiperSlide>
        <SwiperSlide  className={styles.SwiperSlide}><h5>"Among the top agencies we've collaborated with. Their understanding of our product shines through, and their skill in introducing new features with precision is remarkable."</h5>
        <div className={styles.rowSlider}><img style={{width:50}} src="cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5LzM5Mi1mZWxpeC02OTI0LW5hbS1ybTU4MS5wbmc.webp" alt="" /> <div className="column"><h6 className={styles.columns}>Allen Walker</h6><h6 className={styles.columns2}>Vice President</h6></div></div>
        </SwiperSlide>
        <SwiperSlide  className={styles.SwiperSlide}><h5>"Outstanding agency! Their grasp of our product is unparalleled, and their ability to introduce impactful features showcases their unwavering focus. Truly a pleasure to work with."</h5>
        <div className={styles.rowSlider}><img style={{width:50}} src="woman3.png" alt="" /> <div className="column"><h6 className={styles.columns}>Harriz Clark</h6><h6 className={styles.columns2}>Vice President</h6></div></div>
        </SwiperSlide>

        
      </Swiper>

</div>
</div>

      </div>
    </div>
  )
}

export default Section4

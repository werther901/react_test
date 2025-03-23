import './css/MainComp.css';
import Slide from './Slide';
import ProductDetail from './ProductDetail';
import ProductReview from './ProductReview';
import ProductInquiry from './ProductInquiry';
import ShippingInfo from './ShippingInfo';
import { data, data02, data03, data04 } from './data';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tabs } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function MainComp () {


  return (
    <div className='Main_container'>
      <div className='Main_title'>
        <p>함께 비교하면 좋을 상품</p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={6}
        slidesPerGroup={5}
        speed={700}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          430: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          580: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          800: {
            slidesPerView: 6,
            slidesPerGroup: 5,
          }
        }}>
        {
          data.map((item, i) => {
            return (
              <SwiperSlide key={i} >
                <Slide 
                type = 'middle' 
                item={item} />             
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div>
        <div className='Main_today_price'>
          <h1>오늘의 <span>판매자 특가</span></h1>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        slidesPerGroup={4}
        speed={700}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          430: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          580: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          800: {
            slidesPerView: 5,
            slidesPerGroup: 4,
          }
        }}>
        {
          data02.map((item, i) => {
            return (
              <SwiperSlide key={i} >
                <Slide 
                type = 'large' 
                item={item} />             
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Tabs 
        className='Main_tabs_container'
        tabBarGutter={40}
        defaultActiveKey='1' 
        centered
        items={[
          {label: "상품상세", key: "1", children: <ProductDetail />},
          {label: "상품평", key: "2", children: <ProductReview />},
          {label: "상품문의", key: "3", children: <ProductInquiry />},
          {label: "배송/교환/반품 안내", key: "4", children: <ShippingInfo />}
        ]}
        />
        <div className='Main_Related_products'>
          <h1>연관 추천 상품</h1>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={7}
            slidesPerGroup={6}
            speed={700}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 3,
                slidesPerGroup: 2,
              },
              430: {
                slidesPerView: 4,
                slidesPerGroup: 3,
              },
              580: {
                slidesPerView: 5,
                slidesPerGroup: 4,
              },
              800: {
                slidesPerView: 7,
                slidesPerGroup: 6,
              }
            }}>
            {
              data03.map((item, i) => {
                return (
                  <SwiperSlide key={i} >
                    <Slide 
                    type = 'small' 
                    item={item} />             
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className='Main_hotDeal_container'>
          <h1>전세계 핫딜 <span>로켓직구 글로벌특가</span></h1>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            slidesPerGroup={5}
            speed={700}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              430: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              580: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              800: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              }
            }}>
            {
              data04.map((item, i) => {
                return (
                  <SwiperSlide key={i} >
                    <Slide 
                    type = 'large' 
                    item={item} />             
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
    </div>
  )
}

export default MainComp;
// 함께 비교하면 좋을 상품
const data = [
  {
    url : './images/shoes_01.jpg',
    name : '써니워크 쿠션 슬리퍼 EVA 족저근막 샌들',
    price : '22,800',
    review : 97
  },
  {
    url : './images/shoes_02.jpg',
    name : '비벤너스 발편한 여름 키높이 무중력 EVA 아쿠아 샌들 슬리퍼',
    price : '19,500',
    review : 27
  },
  {
    url : './images/shoes_03.jpg',
    name : '힐링센트 발편한 푹신한 무중력 슬리퍼 샌들',
    price : '15,700',
    review : 45
  },
  {
    url : './images/shoes_04.jpg',
    name : '[발캉스] 남여공용 무중력 더블 쿠션 리커버리 샌들',
    price : '12,900',
    review : 587
  },
  {
    url : './images/shoes_05.jpg',
    name : 'Aerostepfit 경량 EVA 슬리퍼 파스텔 샌들',
    price : '50,610',
    review : 7
  },
  {
    url : './images/shoes_06.jpg',
    name : '선업 남성 여성 무중력 클라우드 샌들 슬리퍼',
    price : '15,900',
    review : 12
  },
  {
    url : './images/shoes_07.jpg',
    name : '[발캉스] 무중력 클라우드 리커버리 쿠션 슬리퍼',
    price : '14,900',
    review : 77
  },
  {
    url : './images/shoes_08.png',
    name : '남성 여성슬리퍼 여름신발 샌들 샌달슬리퍼 물놀이신발',
    price : '15,100',
    review : 23
  },
  {
    url : './images/shoes_09.jpg',
    name : '크록스 라이트라이드 라이트라이드 360 4종 CROCS 4종1택',
    price : '29,400',
    review : 78
  },
  {
    url : './images/shoes_10.jpg',
    name : '애드망 족저근막 무중력 리커버리 쿠션 키높이 슬리퍼',
    price : '20,900',
    review : 2433
  },
  {
    url : './images/shoes_11.png',
    name : '퓨어플립 발편한 푹신한 쿠션 족저근막 슬리퍼',
    price : '17,400',
    review : 116,
  },
];

// 오늘의 판매자 특가
const data02 = [
  {
    url : './images/special_price01.jpg',
    name : '로미홀리 남여공용 슬리퍼 두꺼운 바닥패션 샌들 슬리퍼 실내 야외 샌들 모두 잘어울리는 슬리퍼-k76',
    price : '6,750',
    review : 64,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/special_price02.png',
    name : '유티즌 슬리퍼 발편한 푹신한 무중력 쿠션샌들 족저근막 키높이 슬리퍼',
    price : '14,900',
    review : 26,
    discount : '와우할인가 14% 35,000'
  },
  {
    url : './images/special_price03.jpg',
    name : '신발 새신발 클때 운동화 구두 뒷꿈치 뒤꿈치 사이즈 수선 줄이기 벗겨짐 까짐 방지 패드',
    price : '3,090',
    review : 955,
    discount : '와우할인가 20% 3,900'
  },
  {
    url : './images/special_price04.png',
    name : '토퍼스 팡팡 슬리퍼 T-8080 네이비/핑크',
    price : '16,970',
    review : 46,
    discount : '와우할인가 3% 5,490'
  },
  {
    url : './images/special_price05.jpg',
    name : '[재활족부박사 개발] 피퓨 족저근막 자세균형 슬리퍼',
    price : '33,750',
    review : 23,
    discount : '와우할인가 62% 29,900'
  },
  {
    url : './images/special_price06.jpg',
    name : '마운트발 슈화이트 신발백화제 75ml, 혼합색상, 1개',
    price : '11,500',
    review : 2787,
    discount : '와우할인가 14% 3,270'
  },
  {
    url : './images/special_price07.png',
    name : '미니 스텐구두주걱 슈혼 휴대용 구둣주걱, 스텐, 1개',
    price : '29,880',
    review : 356,
    discount : '와우할인가 50% 18,000'
  },
  {
    url : './images/special_price08.jpg',
    name : '다이얼 신발끈 2P 매듭없는 버클 운동화끈 DD-12461',
    price : '3,120',
    review : 304,
    discount : '와우할인가 74% 25,000'
  },
  {
    url : './images/special_price09.jpg',
    name : '바이브라이프 슬리퍼거치대 무타공 스티커 접착식걸이, 1개, 그레이',
    price : '5,310',
    review : 188,
    discount : '와우할인가 41% 25,900'
  },
]

// 연관 추천 상품
const data03 = [
  {
    url : './images/related_product_01.jpg',
    name : '남성쿠션 샌들 아쿠아슈즈 슬리퍼',
    price : '19,800',
    review : 11
  },
  {
    url : './images/related_product_02.jpg',
    name : 'RTXSPORTS 1+1 모찌 뮬 슬리퍼 EVA 미끄럼방지 키높이 통굽 방수 실내화 장마철 장화 레인부츠',
    price : '13,910',
    review : 465
  },
  {
    url : './images/related_product_03.png',
    name : '바크 슬리퍼 재활의학과 의사들이 개발한 바크 슬리퍼 발편한 푹신한 족저근막 아치 서포트 신발 BARCUS 시리즈 S-2 슬라이드2',
    price : '65,510',
    review : 274
  },
  {
    url : './images/related_product_04.png',
    name : '바크 클로그 재활의학과 의사들이 개발한 바크 슬리퍼 발편한 푹신한 족저근막 아치 서포트 신발 BARCUS시리즈 C-2 클로그2',
    price : '73,710',
    review : 93
  },
  {
    url : './images/related_product_05.jpg',
    name : '선업 FJR 이중창 남성 샌들',
    price : '13,900',
    review : 378
  },
  {
    url : './images/related_product_06.jpg',
    name : '[발캉스] 남여공용 무중력 더블 쿠션 족저근막 키높이 리커버리 샌들',
    price : '20,900',
    review : 1734
  },
  {
    url : './images/related_product_07.png',
    name : '큐아워 EVA 통굽 키높이 아쿠아슈즈 샌들 슬리퍼',
    price : '12,900',
    review : 46
  },
  {
    url : './images/related_product_08.jpg',
    name : '시너싹스 EVA 통굽 키높이 슬리퍼',
    price : '12,900',
    review : 3
  },
  {
    url : './images/related_product_09.jpg',
    name : '라이몽 여성 심플 키높이 슬림 각선미 아쿠아 통굽 샌들 미용실 네일샵 슬리퍼',
    price : '14,600',
    review : 16
  },
  {
    url : './images/related_product_10.jpg',
    name : 'obp 족저근막 리커버리 무중력 아치 패드 쿠션 슬리퍼 샌들',
    price : '22,900',
    review : 3676
  },
  {
    url : './images/related_product_11.png',
    name : '두비둡 몬도 eva샌들 4.0 송민호 슬리퍼 어글리스타일 클로그 신발 올터레인 커플슬리퍼 여름 물놀이 샌달',
    price : '29,400',
    review : 144
  },
  {
    url : './images/related_product_12.jpg',
    name : '남성 여성슬리퍼 여름신발 샌들 샌달슬리퍼 물놀이신발',
    price : '12,900',
    review : 201
  },
  {
    url : './images/related_product_13.png',
    name : '일월전빵 남녀공용 커플 EVA 빅사이즈 웨이브 트임 아쿠아 샌들 슬리퍼 아쿠아슈즈 B-S051',
    price : '17,500',
    review : 688
  },
]

const data04 = [
  {
    url : './images/hot_deal01.jpg',
    name : '스케쳐스 남성 댓 퍼폼 맥스 쿠셔닝 프리미어 경량 캐주얼 런닝화 54450-BKCC',
    price : '74,270',
    review : 63,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal02.jpg',
    name : '남성 신사화 남성 케쥬얼 구두남성 케쥬얼 구두 키높이남성여름구두런던풍캐주얼슈즈편안한 남성 신발',
    price : '20,000',
    review : 135,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal03.jpg',
    name : '푸마 남녀공용 R78 운동화 373117',
    price : '53,710',
    review : 6,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal04.jpg',
    name : '나이키 남성 에어 맥스 스콜피온 FK NN 캐주얼 운동화 DJ4701-003',
    price : '185,980',
    review : 4,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal05.jpg',
    name : '아디다스 남녀공용 아딜렛 22 슬리퍼 HP6522',
    price : '51,460',
    review : 9,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal06.jpg',
    name : 'DFMEI 남성 면화 진구두 비즈니스 기모 워커 부츠 하이탑',
    price : '48,000',
    review : 24,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal07.jpg',
    name : 'Oceansunfish 남녀공용 아쿠아슈즈 #998',
    price : '4,750',
    review : 123,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal08.jpg',
    name : '아디다스 남녀공용 오즈위고 런닝화 EE6461',
    price : '105,770',
    review : 4,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal09.jpg',
    name : '나이키 남성 에어 맥스 알파 트레이너6 경량 운동화 FQ1833-005',
    price : '77,030',
    review : 2,
    discount : '와우할인가 36% 18,000'
  },
  {
    url : './images/hot_deal10.jpg',
    name : 'MLB 남녀공용 청키 라이너 데님 클래식 모노그램 로우탑 캐주얼 운동화 3ASXCDC4N-50BLS',
    price : '125,680',
    review : 1,
    discount : '와우할인가 36% 18,000'
  },
];

// 테이블 데이터
const tableData01 = [
  {
    label: '배송방법',
    value: '순차배송',
  },
  {
    label: '배송비',
    value: `무료배송`,
    rowSpan: 2,
  }
];

const tableData02 = [
  {
    label: '묶음배송 여부',
    value: '가능',
  },
  {
    label: '배송기간',
    value: [
      '쿠팡친구 배송 지역 : 주문 및 결제 완료 후, 1-2일 이내 도착',
      '쿠팡친구 미배송 지역 : 주문 및 결제 완료 후, 2-3일 이내 도착',
      '도서 산간 지역 등은 하루가 더 소요될 수 있습니다.',
      '천재지변, 물량 수급 변동 등 예외적인 사유 발생 시, 다소 지연될 수 있는 점 양해 부탁드립니다.',
    ],
    colSpan: 3,
    isList: true,
  }
];

const tableData03 = [
  {
    label: '교환/반품 비용',
    value: [
      '와우멤버십 회원: 무료로 반품/교환 가능',
      '와우멤버십 회원 아닌 경우:',
      '[총 주문금액] - [반품 상품금액] = 19,800원 미만인 경우 반품비 5,000원',
      '[총 주문금액] - [반품 상품금액] = 19,800원 이상인 경우 반품비 2,500원',
    ],
    isList: true,
    colSpan: 3
  },
  {
    label: '교환/반품 신청 기준일',
    value: [
      '단순변심에 의한 로켓배송 상품의 교환/반품은 제품 수령 후 30일 이내까지, 교환/반품 제한사항에 해당하지 않는 경우에만 가능 (교환/반품 비용 고객부담)',
      '상품의 내용이 표시·광고의 내용과 다른 경우에는 상품을 수령한 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회 가능'
    ],
    isList: true,
    colSpan: 3
  }
];

const tableData04 = [
  {
    label: '의류/잡화/수입명품',
    value: '상품의 택(TAG) 및 라벨의 멸실 또는 훼손, 상품의 사용 또는 훼손, 구성품 누락으로 상품의 가치가 현저히 감소된 경우',
    isList: true,
    colSpan: 3
  },
  {
    label: '계절상품/식품/화장품',
    value: [
      '신선/냉장/냉동 상품의 단순변심의 경우',
      '뷰티 상품 이용 시 트러블(알러지, 붉은 반점, 가려움, 따가움)이 발생하는 경우, 진료 확인서 및 소견서 등을 증빙하면 환불이 가능 (제반비용 고객부담)'
    ],
    isList: true,
    colSpan: 3
  },
  {
    label: '전자/가전/설치상품',
    value: [
      '설치 또는 사용하여 재판매가 어려운 경우',
      '상품의 시리얼 넘버 유출로 내장된 소프트웨어의 가치가 감소한 경우 (내비게이션, OS시리얼이 적힌 PMP)',
      '홀로그램 등을 분리, 분실, 훼손하여 상품의 가치가 현저히 감소하여 재판매가 불가할 경우 (노트북, 데스크탑 PC 등)'
    ],
    isList: true,
    colSpan: 3
  },
  {
    label: '자동차용품',
    value: '상품을 개봉하여 장착한 이후 단순변심인 경우',
    // isList: true,
    colSpan: 3
  },
];


export { data, data02, data03, data04, tableData01, tableData02, tableData03, tableData04 };
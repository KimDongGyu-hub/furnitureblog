import sofa1 from "./assets/sofa1.jpg";
import sofa2 from "./assets/sofa2.png";
import table1 from "./assets/table1.jpg";
import table2 from "./assets/table2.png";
import chair1 from "./assets/chair1.png";
import chair2 from "./assets/chair2.jpg";
import dbord1 from "./assets/dbord1.jpg";
import dbord2 from "./assets/dbord2.jpg";

export const furnitureData = [
  {
    id: 1,
    type: "Sofa",
    name: "모던 소파",
    price: 500000,
    description: "편안한 착석감과 모던한 디자인이 돋보이는 소파입니다.",
    stock: 10,
    imageUrl: sofa1,
  },
  {
    id: 2,
    type: "Sofa",
    name: "빈티지 소파",
    price: 450000,
    description: "고풍스러운 디자인과 튼튼한 내구성을 자랑하는 빈티지 소파.",
    stock: 5,
    imageUrl: sofa2,
  },
  {
    id: 3,
    type: "Table",
    name: "우드 테이블",
    price: 300000,
    description: "내추럴한 원목 느낌을 살린 고급 우드 테이블입니다.",
    stock: 15,
    imageUrl: table1,
  },
  {
    id: 4,
    type: "Table",
    name: "모던 글래스 테이블",
    price: 350000,
    description:
      "모던한 디자인의 강화 유리 테이블로, 공간에 고급스러움을 더해줍니다.",
    stock: 7,
    imageUrl: table2,
  },
  {
    id: 5,
    type: "Chair",
    name: "에코 의자",
    price: 100000,
    description: "편안한 착석감과 에코 소재로 제작된 친환경 의자입니다.",
    stock: 20,
    imageUrl: chair1,
  },
  {
    id: 6,
    type: "Chair",
    name: "클래식 의자",
    price: 150000,
    description: "고풍스러운 디자인의 클래식한 의자입니다.",
    stock: 10,
    imageUrl: chair2,
  },
  {
    id: 7,
    type: "Cabinet",
    name: "원목 장식장",
    price: 600000,
    description: "원목 소재로 만들어진 튼튼하고 고급스러운 장식장.",
    stock: 3,
    imageUrl: dbord1,
  },
  {
    id: 8,
    type: "Cabinet",
    name: "미니멀 장식장",
    price: 550000,
    description: "미니멀한 디자인으로 공간을 깔끔하게 정리할 수 있는 장식장.",
    stock: 8,
    imageUrl: dbord2,
  },
];

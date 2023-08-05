import {
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  homecar,
  onboardingimage,
  onboardingimage2,
  profileImg,
} from "./images";

const discount = [
  {
    title: "New year 2022 25% off promo",
    carImage: homecar,
    code: "POB743",
    description:
      "To celebrate the new year 2023, we are giving a special promo for you. Redeem a rent of car and get new year reward for every checkout these period",
  },
  {
    title: "Tourist special discount 15% off",
    carImage: onboardingimage2,
    code: "LUY534",
    description:
      "In order to boost our countries economy, we would be giving out a special dicount for all visitors, Thank you for visiting our beloved nation",
  },
  {
    title: "Corporate special discout 8% off ",
    carImage: onboardingimage,
    code: "NOI764",
    description:
      "We are big fans of the industry leading companies, and its gives us joy to see you show up in style to your meetings, Special discount to all registered corporate organizations",
  },
];

const listingData = [
  {
    image: car1,
    image2: car2,
    image3: car3,

    name: "Bugatti Chivron 2023 - model Q",
    rating: "4.6",
    reviewCount: "207",
    price: "30,000",
    currency: " ₦",
    paymentInterval: "day",
    address: "10, Joel arobiewe str",
  },
  {
    image: car2,
    name: "Toyota Camry XV70 - 2017",
    rating: "4.2",
    reviewCount: "103",
    price: "12,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: car3,
    name: "Ford Mustang Sixth Generation - 2015",
    rating: "3.9",
    reviewCount: "345",
    price: "15,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: car4,
    name: "Honda Civic 10th Generation - 2016",
    rating: "4.9",
    reviewCount: "45",
    price: "10,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: car5,
    name: "BMW 3 Series G20 - 2018",
    rating: "4.1",
    reviewCount: "125",
    price: "16,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: car6,
    name: "Chevrolet Corvette  - 2020",
    rating: "4.1",
    reviewCount: "156",
    price: "13,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: car7,
    name: "Mercedes-Benz C-Class W205 - 2014",
    rating: "4.0",
    reviewCount: "386",
    price: "24,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: onboardingimage,
    name: "Audi Q5 Second Generation - 2017",
    rating: "4.6",
    reviewCount: "63",
    price: "25,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: homecar,
    name: "Nissan Rogue Third Generation - 2020",
    rating: "4.7",
    reviewCount: "73",
    price: "15,000",
    currency: " ₦",
    paymentInterval: "day",
  },
  {
    image: onboardingimage2,
    name: "Lexus RX Fourth Generation 2016",
    rating: "4.5",
    reviewCount: "123",
    price: "16,000",
    currency: " ₦",
    paymentInterval: "day",
  },
];

const profileData = {
  profileImg: profileImg,
  name: "Princewill Kelechi",
  email: "princewillkelechi02020@gmail.com",
  gender: "male",
  accountType: "client",
};

export { listingData, discount, profileData };

import Storebanner from "../assets/barts-store-signage-1884573.jpg";
import tech from "../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";
import carouselimg1 from "../assets/cooked-meat-on-plate-2313686.jpg";
import media from "../assets/headphones_camera_retro_122094_3840x2400.jpg";
import Productbanner from "../assets/brown-top-hanging-on-rack-1488464.jpg";
import Accessoriesbanner from "../assets/headphones_bw_headset_120277_3840x2400.jpg";
import photography from "../assets/woman-making-clay-pot-2166456.jpg";
import ab from "../assets/four-assorted-perfume-glass-bottles-965989.jpg";

export const productsData: any = [
  {
    id: 1,
    carouselImages: [{ src: media }],
    premium: true,
    url: "",
    location: "Ibadan, Nigeria",
  },
  {
    id: 2,
    carouselImages: [
      { src: Storebanner },
      { src: media },
      { src: carouselimg1 },
      { src: photography },
    ],
    premium: false,
    location: "Lagos, Nigeria",
  },
  {
    id: 3,
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner },
    ],
    premium: false,
    location: "Anambra, Nigeria",
  },
  {
    id: 4,
    carouselImages: [
      { src: Productbanner },
      { src: carouselimg1 },
      { src: tech },
      { src: ab },
      { src: photography },
    ],
    premium: true,
    location: "Abuja, Nigeria",
  },
  {
    id: 5,
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner },
    ],
    premium: true,
    location: "Ibadan, Nigeria",
  },
  {
    id: 6,
    carouselImages: [
      { src: Storebanner },
      { src: media },
      { src: carouselimg1 },
      { src: photography },
      { src: tech },
    ],
    premium: false,
    location: "Port Harcout, Nigeria",
  },
  {
    id: 7,
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner },
    ],
    premium: true,
    location: "Osogbo, Nigeria",
  },
  {
    id: 8,
    carouselImages: [
      { src: Productbanner },
      { src: carouselimg1 },
      { src: tech },
      { src: ab },
      { src: photography },
    ],
    premium: false,
    location: "Lagos, Nigeria",
  },
  {
    id: 9,
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner },
    ],
    premium: false,
    location: "Abuja, Nigeria",
  },
  {
    id: 10,
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner },
    ],
    premium: true,
    location: "Osogbo, Nigeria",
  },
  {
    id: 11,
    carouselImages: [
      { src: Productbanner },
      { src: carouselimg1 },
      { src: tech },
      { src: ab },
      { src: photography },
    ],
    premium: false,
    location: "Lagos, Nigeria",
  },
  {
    id: 12,
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner },
    ],
    premium: false,
    location: "Abuja, Nigeria",
  },
];

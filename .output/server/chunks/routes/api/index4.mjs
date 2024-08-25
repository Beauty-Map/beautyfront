import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const index = defineEventHandler((event) => {
  return [
    {
      id: 1,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: true,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 2,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: true,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 3,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: false,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 4,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      has_tel: true,
      is_bookmarked: false,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 5,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: true,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 6,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: true,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 7,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: false,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 8,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: false,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    },
    {
      id: 9,
      title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      description: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
      rating: 4.5,
      price: 1e5,
      discount_price: 9e4,
      is_bookmarked: false,
      has_tel: true,
      has_phone_number: false,
      showing_phone_number: "09381412419",
      service_id: 1,
      service: {
        id: 1,
        title: "\u062E\u062F\u0645\u0627\u062A \u0646\u0627\u062E\u0646",
        image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
        is_active: 1,
        parent_id: null,
        created_at: "2024-04-12T16:14:23.000000Z",
        updated_at: "2024-04-12T16:14:23.000000Z"
      },
      user_id: 1,
      user: {
        id: 1,
        full_name: "\u0632\u06CC\u0628\u0627 \u0627\u0639\u0638\u0645\u06CC",
        phone_number: "09381412419",
        avatar: "/images/artist/2.png",
        has_blue_tick: true
      },
      images: ["/images/artist/1.jpg", "/images/artist/1.jpg"],
      work_hours: []
    }
  ];
});

export { index as default };
//# sourceMappingURL=index4.mjs.map

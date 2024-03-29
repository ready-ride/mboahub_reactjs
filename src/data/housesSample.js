const image1 = 'https://images.pexels.com/photos/7937225/pexels-photo-7937225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const housesSample = {
  numHouses: 30,
  housesList: [
    {
      id: '671b796e-591d-4cef-8608-6e526bae8f3f',
      listing_name: 'Emmie Romaguera',
      summary: 'Qui et iure. Vel et dicta. Qui debitis voluptatibus.',
      home_type: 'studio',
      cost: '10000',
      location: 'Port Miguelina, 76313 Kessler Club',
      lat: null,
      lng: null,
      properties: {
        num_bed_rooms: 2,
        sitting_room: 2,
        parking: null,
        kitchen: 0,
        fence: true,
        num_toilets: 1,
      },
      published_at: '2024-02-20',
      business_type: 'for_sale',
      images: [image1, image1, image1],
      user: {
        id: 'e4c06180-396e-4534-8752-bad70b97da5b',
        published_by: 'test1 user1',
        house_count: 9,
        email: 'test_user1@gmail.com',
        phone: 381,
        avatar: 'https://robohash.org/my-own-slug.jpg?size=50x50\u0026set=set1',
      },
    },
    {
      id: 'f70cae32-4c79-45e4-91c9-43b99ef30972',
      listing_name: 'Gabriel Dickens',
      summary: 'Officiis nihil minima. Adipisci eos odio. Maxime atque eveniet.',
      home_type: 'room',
      cost: '10000',
      location: 'Linwoodhaven, 18316 Price Vista',
      lat: null,
      lng: null,
      properties: {
        num_bed_rooms: 1,
        sitting_room: 2,
        parking: null,
        kitchen: 0,
        fence: false,
        num_toilets: 2,
      },
      published_at: '2024-02-20',
      business_type: 'for_rent',
      images: [image1, image1, image1],
      user: {
        id: '6181d8b6-401c-4918-a35a-6fa690b1de92',
        published_by: 'test5 user5',
        house_count: 2,
        email: 'test_user5@gmail.com',
        phone: 1,
        avatar: 'https://robohash.org/my-own-slug.jpg?size=50x50\u0026set=set1',
      },
    },
    {
      id: '92dc5771-ef27-412a-b311-c4ed7f1d6bd6',
      listing_name: 'Felton Marvin',
      summary: 'Dolores id quae. Explicabo omnis et. Voluptatem distinctio sit.',
      home_type: 'apartment',
      cost: '10000',
      location: 'New Jae, 927 Onita Hill',
      lat: null,
      lng: null,
      properties: {
        num_bed_rooms: 2,
        sitting_room: 1,
        parking: null,
        kitchen: 1,
        fence: false,
        num_toilets: 2,
      },
      published_at: '2024-02-20',
      business_type: 'for_rent',
      images: [image1, image1, image1],
      user: {
        id: '927ba82b-d514-4e14-b4e6-4ead11c72f7f',
        published_by: 'test3 user3',
        house_count: 7,
        email: 'test_user3@gmail.com',
        phone: 238,
        avatar: 'https://robohash.org/my-own-slug.jpg?size=50x50\u0026set=set1',
      },
    },
    {
      id: '09b37c3f-9023-4afa-b3b4-d4cc96366139',
      listing_name: 'Larry Reynolds',
      summary: 'Ut rerum veritatis. Illum sapiente delectus. Accusantium accusamus et.',
      home_type: 'studio',
      cost: '10000',
      location: 'Hudsonshire, 434 Phung Passage',
      lat: null,
      lng: null,
      properties: {
        num_bed_rooms: 2,
        sitting_room: 1,
        parking: null,
        kitchen: 0,
        fence: true,
        num_toilets: 1,
      },
      published_at: '2024-02-20',
      business_type: 'for_sale',
      images: [image1, image1, image1],
      user: {
        id: 'bd757fd4-37af-4737-a1fe-f3c73509d1f8',
        published_by: 'test4 user4',
        house_count: 8,
        email: 'test_user4@gmail.com',
        phone: 230,
        avatar: 'https://robohash.org/my-own-slug.jpg?size=50x50\u0026set=set1',
      },
    },
    {
      id: '380ccdf8-55f6-41bf-ba37-f257436e4ab2',
      listing_name: 'Lauri Conn VM',
      summary: 'Quia earum minus. Suscipit ullam pariatur. Et cumque sed.',
      home_type: 'apartment',
      cost: '10000',
      location: 'Port Roxaneburgh, 304 Rodriguez Trail',
      lat: null,
      lng: null,
      properties: {
        num_bed_rooms: 1,
        sitting_room: 3,
        parking: null,
        kitchen: 1,
        fence: true,
        num_toilets: 2,
      },
      published_at: '2024-02-20',
      business_type: 'for_rent',
      images: [image1, image1, image1],
      user: {
        id: '6181d8b6-401c-4918-a35a-6fa690b1de92',
        published_by: 'test5 user5',
        house_count: 2,
        email: 'test_user5@gmail.com',
        phone: 1,
        avatar: 'https://robohash.org/my-own-slug.jpg?size=50x50\u0026set=set1',
      },
    },
    {
      id: 'fe300bf8-2061-400b-a231-8cb6a350bc37',
      listing_name: 'Malcom Zulauf',
      summary: 'Nemo beatae veniam. Doloremque ullam iure. Magni ut et.',
      home_type: 'room',
      cost: '10000',
      location: 'Celestinaland, 39180 Dooley Squares',
      lat: null,
      lng: null,
      properties: {
        num_bed_rooms: 2,
        sitting_room: 1,
        parking: null,
        kitchen: 0,
        fence: true,
        num_toilets: 3,
      },
      published_at: '2024-02-21',
      business_type: 'for_sale',
      images: [image1, image1, image1],
      user: {
        id: 'e4c06180-396e-4534-8752-bad70b97da5b',
        published_by: 'test1 user1',
        house_count: 9,
        email: 'test_user1@gmail.com',
        phone: 381,
        avatar: 'https://robohash.org/my-own-slug.jpg?size=50x50\u0026set=set1',
      },
    },
  ],
};

export default housesSample;

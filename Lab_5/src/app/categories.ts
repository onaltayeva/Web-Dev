import {Product} from "./products";

export interface Category {
    id: number;
    title: string;

    products: Product[];
}

export let categories = [
    {
        id: 1,
        title: "Phones",
        products : [
            {
                id: 1,
                name: 'Смартфон Apple iPhone 13 128Gb черный',
                price: 373450,
                description: 'A large phone with one of the best screens',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
                link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
            },
            {
                id: 2,
                name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
                price: 292759,
                description: 'A great phone with one of the best cameras',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
                link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
            },
            {
                id: 3,
                name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
                price: 697100,
                description: 'фиолетовый',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
                link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
            },
            {
                id: 4,
                name: 'Смартфон Apple iPhone SE 2022 128Gb черный',
                price: 327583,
                description: '6-ядерный Apple A15 Bionic',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h22/49413363335198/apple-iphone-se-2022-64gb-cernyj-104153816-1.jpg',
                link: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-128gb-chernyi-104153816/?c=750000000#!/item',
            },
            {
                id: 20,
                name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
                price: 102834,
                description: 'процессор: 8-ядерный Snapdragon 680',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
            }
        ]
    },
    {
        id: 2,
        title: "Laptops",
        products: [
            {
                id: 5,
                name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
                price: 480550,
                description: 'общий объем накопителей: 256 ГБ',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
                link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
            },
            {
                id: 6,
                name: 'Ноутбук Apple MacBook Air 13 MLY13 золотистый',
                price: 637666,
                description: 'процессор: Apple M2',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h9a/52679167574046/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-starlight-105933751-1.jpg',
                link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly13-zolotistyi-105933751/?c=750000000#!/item',
            },

            {
                id: 7,
                name: 'Ноутбук Apple MacBook Pro 16 Z14X000HQ серый',
                price: 2835000,
                description: 'процессор: Apple M1 Max',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h96/68460098781214/apple-macbook-pro-16-2-m1-max-chip-108677248-1.jpg',
                link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-z14x000hq-seryi-108677248/?c=750000000#!/item',
            },
            {
                id: 8,
                name: 'Ноутбук Apple MacBook Pro 14 MKH53 Z15H0010E серый',
                price: 2590000,
                description: 'видеокарта: 32‑ядерный',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h50/68504458002462/apple-apple-macbook-pro-14-2-m1-max-64-2tb-space-gray-z15h0010e-seryi-108697708-1.jpg',
                link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkh53-z15h0010e-seryi-108697708/?c=750000000#!/item',
            },
            {
                id: 19,
                name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
                price: 169990 ,
                description: 'диагональ экрана: 15.6 дюйм\n' +
                    'процессор: Intel Pentium Gold 7505',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
                link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
            },
        ]
    },
    {
        id: 3,
        title: "Headphones",
        products: [
            {
                id: 9,
                name: 'Наушники Beats Studio Buds черный',
                price: 77500,
                description: 'подключение: беспроводное',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h7a/45106885099550/beats-studio-buds-cernyj-102184522-1-Container.jpg',
                link: 'https://kaspi.kz/shop/p/beats-studio-buds-chernyi-102184522/?c=750000000#!/item',
            },
            {
                id: 10,
                name: 'Наушники Beats BeatsX Earphones синий',
                price: 50990,
                description: 'система активного шумоподавления',
                rating: 5,
                image:
                    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hcb/31652251140126/beats-beatsx-earphones-blue-4802229-1-Container.jpg',
                link: 'https://kaspi.kz/shop/p/beats-beatsx-earphones-sinii-4802229/?c=750000000#!/item',
            },
            {
                id: 11,
                name: 'Наушники Apple AirPods with Charging Case белый',
                price: 59968,
                description: 'подключение: беспроводное\n',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg',
                link: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
            },
            {
                id: 12,
                name: 'Наушники Apple AirPods 3 белый',
                price: 95000,
                description: 'тип акустического оформления: открытые\n' +
                    'тип крепления: без крепления\n' +
                    'система активного шумоподавления: Нет\n',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
                link: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
            },
            {
                id: 13,
                name: "Наушники JBL Tune 510BT черный",
                price: 23945,
                description: 'подключение: беспроводное\n' +
                    'тип акустического оформления: закрытые',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg',
                link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item',
            }
        ]
    },
    {
        id: 4,
        title: "Bikes",
        products: [
            {
                id: 14,
                name: 'Велосипед Cruzer C 129 29 дюйм 2022 21 дюйм серый\n',
                price: 68307,
                description: 'тип: горный гибрид\n' +
                    'модельный год: 2022\n' +
                    'складной: Нет\n',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h33/h54/51324286369822/cruzer-c-129-29-dujm-2022-21-dujm-seryj-105181046-1.jpg',
                link: 'https://kaspi.kz/shop/p/cruzer-c-129-29-djuim-2022-21-djuim-seryi-105181046/?c=750000000#!/item',
            },
            {
                id: 15,
                name: 'Велосипед Land Rover Land ROVER 26 колеса, 18 рама модель 2022г 26 дюйм 2022 18 дюймов черный\n',
                price: 74000,
                description: 'материал рамы: карбон (углепластик), ,алюминиевый сплав',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/hdc/51497808003102/land-rover-land-rover-26-kolesa-18-rama-model-2022g-26-dujm-2022-18-dujmov-cernyj-105280105-1.jpg',
                link: 'https://kaspi.kz/shop/p/land-rover-land-rover-26-kolesa-18-rama-model-2022g-26-djuim-2022-18-djuimov-chernyi-105280105/?c=750000000#!/item',
            },
            {
                id: 16,
                name: 'Велосипед STELS Урал 28 2022 21 зеленый\n',
                price: 59315,
                description: 'тип: городской\n' +
                    'модельный год: 2022\n',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/hac/50605588381726/stels-ural-28-2022-21-zelenyj-104775525-1.jpg',
                link: 'https://kaspi.kz/shop/p/stels-ural-28-2022-21-zelenyi-104775525/?c=750000000#!/item',

            },
            {
                id: 17,
                name: 'Велосипед Focus fcs16 16 дюйм 2022 S синий\n',
                price: 29841,
                description: 'тип: городской\n' +
                    'модельный год: 2022\n' +
                    'складной: Нет\n',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hc7/50932270628894/focus-fcs16-16-dujm-2022-s-sinij-104956192-1.jpg',
                link: 'https://kaspi.kz/shop/p/focus-fcs16-16-djuim-2022-s-sinii-104956192/?c=750000000#!/item',

            },
            {
                id: 18,
                name: 'Велосипед GESTALT G-9029 29 2022 21 синий',
                price: 113005,
                description: 'тип: горный гибрид модельный год: 2022',
                rating: 5,
                image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h54/50744109727774/gestalt-g-9029-29-2022-21-sinij-104859659-1.jpg',
                link: 'https://kaspi.kz/shop/p/gestalt-g-9029-29-2022-21-sinii-104859659/?c=750000000#!/item',
            }
        ],
    },
]
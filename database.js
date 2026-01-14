// База данных карт игры
const allGameData = {

    // База данных всех карт Спартака
    allSpartakCards: [
        {
            id: 1,
            name: 'Кристофер Мартинс',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card6.jpg',    
            miniImg: "images/spartak/mini/card6_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 2,
            name: 'Виктор Мозес',
            position: 'midfield',
            power: 6,
            img: 'images/spartak/full/card7.jpg',
            miniImg: "images/spartak/mini/card7_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 3,
            name: 'Джано Ананидзе',
            position: 'midfield',
            power: 4,
            img: 'images/spartak/full/card8.jpg',
            miniImg: "images/spartak/mini/card8_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 4,
            name: 'Наиль Умяров',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card9.jpg',
            miniImg: "images/spartak/mini/card9_mini.jpg",
            ability: 'medic',
            cardtype: 'base'
        },
        {
            id: 5,
            name: 'Фернандо',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card10.jpg',
            miniImg: "images/spartak/mini/card10_mini.jpg",
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 6,
            name: 'Ивелин Попов',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card11.jpg',
            miniImg: "images/spartak/mini/card11_mini.jpg",
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 7,
            name: 'Жедсон',
            position: 'midfield',
            power: 8,
            img: 'images/spartak/full/card12.jpg',
            miniImg: "images/spartak/mini/card12_mini.jpg",
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 8,
            name: 'Роман Зобнин',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card13.jpg',
            miniImg: "images/spartak/mini/card13_mini.jpg",
            ability: 'captain',
            cardtype: 'base'
        },
        {
            id: 9,
            name: 'Эсекьель Барко',
            position: 'midfield',
            power: 7,
            img: 'images/spartak/full/card2.jpg',
            miniImg: "images/spartak/mini/card2_mini.jpg",
            ability: 'leader',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 10,
            name: 'Даниил Зорин',
            position: 'midfield',
            power: 3,
            img: 'images/spartak/full/card14.jpg',
            miniImg: "images/spartak/mini/card14_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 11,
            name: 'Тео Бонгонда',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card15.jpg',
            miniImg: "images/spartak/mini/card15_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 12,
            name: 'Лоренцо Мельгарехо',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card16.jpg',
            miniImg: "images/spartak/mini/card16_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 13,
            name: 'Андре Шюррле',
            position: 'midfield',
            power: 4,
            img: 'images/spartak/full/card17.jpg',
            miniImg: "images/spartak/mini/card17_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 14,
            name: 'Александр Самедов',
            position: 'midfield',
            power: 5,
            img: 'images/spartak/full/card18.jpg',
            miniImg: "images/spartak/mini/card18_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 15,
            name: 'Марио Пашалич',
            position: 'midfield',
            power: 4,
            img: 'images/spartak/full/card19.jpg',
            miniImg: "images/spartak/mini/card19_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 16,
            name: 'Поддержка трибун',
            position: 'any',
            power: 0,
            img: 'images/spartak/full/card20.jpg',
            miniImg: "images/spartak/mini/card20_mini.jpg",
            ability: 'support',
            cardtype: 'base'
        },
        {
            id: 17,
            name: 'Георгий Джикия',
            position: 'defense',
            power: 6,
            img: 'images/spartak/full/card21.jpg',
            miniImg: "images/spartak/mini/card21_mini.jpg",
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 18,
            name: 'Самуэль Жиго',
            position: 'defense',
            power: 6,
            img: 'images/spartak/full/card22.jpg',
            miniImg: "images/spartak/mini/card22_mini.jpg",
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 19,
            name: 'Александр Максименко',
            position: 'defense',
            power: 5,
            img: 'images/spartak/full/card23.jpg',
            miniImg: "images/spartak/mini/card23_mini.jpg",
            ability: 'captain',
            cardtype: 'base'
        },
        {
            id: 20,
            name: 'Срджан Бабич',
            position: 'defense',
            power: 5,
            img: 'images/spartak/full/card3.jpg',
            miniImg: "images/spartak/mini/card3_mini.jpg",
            ability: 'leader',
            cardtype: 'base'
        },
        {
            id: 21,
            name: 'Игорь Дмитриев',
            position: 'defense',
            power: 4,
            img: 'images/spartak/full/card24.jpg',
            miniImg: "images/spartak/mini/card24_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 22,
            name: 'Руслан Литвинов',
            position: 'defense',
            power: 5,
            img: 'images/spartak/full/card25.jpg',
            miniImg: "images/spartak/mini/card25_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 23,
            name: 'Даниил Денисов',
            position: 'defense',
            power: 5,
            img: 'images/spartak/full/card26.jpg',
            miniImg: "images/spartak/mini/card26_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 24,
            name: 'Александер Джику',
            position: 'defense',
            power: 4,
            img: 'images/spartak/full/card27.jpg',
            miniImg: "images/spartak/mini/card27_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 25,
            name: 'Кристофер Ву',
            position: 'defense',
            power: 4,
            img: 'images/spartak/full/card28.jpg',
            miniImg: "images/spartak/mini/card28_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 26,
            name: 'Сальваторе Боккетти',
            position: 'defense',
            power: 7,
            img: 'images/spartak/full/card29.jpg',
            miniImg: "images/spartak/mini/card29_mini.jpg",
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 27,
            name: 'Дмитрий Комбаров',
            position: 'defense',
            power: 6,
            img: 'images/spartak/full/card30.jpg',
            miniImg: "images/spartak/mini/card30_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 28,
            name: 'Антон Заболотный',
            position: 'attack',
            power: 4,
            img: 'images/spartak/full/card31.jpg',
            miniImg: "images/spartak/mini/card31_mini.jpg",
            ability: 'spy',
            cardtype: 'base'
        },
        {
            id: 29,
            name: 'Манфред Угальде',
            position: 'attack',
            power: 6,
            img: 'images/spartak/full/card5.jpg',
            miniImg: "images/spartak/mini/card5_mini.jpg",
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 30,
            name: 'Маркиньос',
            position: 'attack',
            power: 6,
            img: 'images/spartak/full/card1.jpg',
            miniImg: "images/spartak/mini/card1_mini.jpg",
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 31,
            name: 'Квинси Промес',
            position: 'attack',
            power: 12,
            img: 'images/spartak/full/card32.jpg',
            miniImg: "images/spartak/mini/card32_mini.jpg",
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 32,
            name: 'Пабло Солари',
            position: 'attack',
            power: 5,
            img: 'images/spartak/full/card33.jpg',
            miniImg: "images/spartak/mini/card33_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 33,
            name: 'Ливай Гарсия',
            position: 'attack',
            power: 5,
            img: 'images/spartak/full/card34.jpg',
            miniImg: "images/spartak/mini/card34_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 34,
            name: 'Эсекьель Понсе',
            position: 'attack',
            power: 5,
            img: 'images/spartak/full/card35.jpg',
            miniImg: "images/spartak/mini/card35_mini.jpg",
            ability: '',
            cardtype: 'base'
        },
        {
            id: 35,
            name: 'Луис Адриано',
            position: 'attack',
            power: 6,
            img: 'images/spartak/full/card4.jpg',
            miniImg: "images/spartak/mini/card4_mini.jpg",
            ability: 'leader',
            cardtype: 'base'
        },
        {
            id: 36,
            name: 'Зе Луиш',
            position: 'attack',
            power: 5,
            img: 'images/spartak/full/card36.jpg',
            miniImg: "images/spartak/mini/card36_mini.jpg",
            ability: '',
            cardtype: 'base'
        }
    ],
    
    // База данных всех карт Звезд футбола
    allFootballStarsCards: [
        {
            id: 101,
            name: 'Джон Терри',
            position: 'defense',
            power: 6,
            img: 'images/footballstars/full/terry.jpg',
            miniImg: 'images/footballstars/mini/terry.jpg',
            ability: 'spy',
            cardtype: 'base'
        },
        {
            id: 102,
            name: 'Хави',
            position: 'midfield',
            power: 5,
            img: 'images/footballstars/full/xavi.jpg',
            miniImg: 'images/footballstars/mini/xavi.jpg',
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 103,
            name: 'Андрес Иньеста',
            position: 'midfield',
            power: 5,
            img: 'images/footballstars/full/iniesta.jpg',
            miniImg: 'images/footballstars/mini/iniesta.jpg',
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 104,
            name: 'Оливер Кан',
            position: 'defense',
            power: 6,
            img: 'images/footballstars/full/kahn.jpg',
            miniImg: 'images/footballstars/mini/kahn.jpg',
            ability: 'provocateur',
            cardtype: 'base'
        },
        {
            id: 105,
            name: 'Патрик Виейра',
            position: 'midfield',
            power: 6,
            img: 'images/footballstars/full/vieira.jpg',
            miniImg: 'images/footballstars/mini/vieira.jpg',
            ability: 'leader',
            cardtype: 'base'
        },
        {
            id: 106,
            name: 'Лионель Месси',
            position: 'attack',
            power: 15,
            img: 'images/footballstars/full/messi.jpg',
            miniImg: 'images/footballstars/mini/messi.jpg',
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 107,
            name: 'Диего Марадона',
            position: 'midfield',
            power: 12,
            img: 'images/footballstars/full/maradona.jpg',
            miniImg: 'images/footballstars/mini/maradona.jpg',
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 108,
            name: 'Роналдо',
            position: 'attack',
            power: 12,
            img: 'images/footballstars/full/ronaldo.jpg',
            miniImg: 'images/footballstars/mini/ronaldo.jpg',
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 109,
            name: 'Тьерри Анри',
            position: 'attack',
            power: 12,
            img: 'images/footballstars/full/henry.jpg',
            miniImg: 'images/footballstars/mini/henry.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 110,
            name: 'Златан Ибрагимович',
            position: 'attack',
            power: 10,
            img: 'images/footballstars/full/ibrahimovic.jpg',
            miniImg: 'images/footballstars/mini/ibrahimovic.jpg',
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 111,
            name: 'Стивен Джеррард',
            position: 'midfield',
            power: 10,
            img: 'images/footballstars/full/gerrard.jpg',
            miniImg: 'images/footballstars/mini/gerrard.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 112,
            name: 'Рауль',
            position: 'attack',
            power: 10,
            img: 'images/footballstars/full/raul.jpg',
            miniImg: 'images/footballstars/mini/raul.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 113,
            name: 'Бастиан Швайнштайгер',
            position: 'midfield',
            power: 10,
            img: 'images/footballstars/full/schweinsteiger.jpg',
            miniImg: 'images/footballstars/mini/schweinsteiger.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 114,
            name: 'Мохамед Салах',
            position: 'attack',
            power: 8,
            img: 'images/footballstars/full/salah.jpg',
            miniImg: 'images/footballstars/mini/salah.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 115,
            name: 'Дидье Дрогба',
            position: 'attack',
            power: 8,
            img: 'images/footballstars/full/drogba.jpg',
            miniImg: 'images/footballstars/mini/drogba.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 116,
            name: 'Петр Чех',
            position: 'defense',
            power: 8,
            img: 'images/footballstars/full/cech.jpg',
            miniImg: 'images/footballstars/mini/cech.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 117,
            name: 'Кларенс Зеедорф',
            position: 'midfield',
            power: 8,
            img: 'images/footballstars/full/seedorf.jpg',
            miniImg: 'images/footballstars/mini/seedorf.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 118,
            name: 'Дани Алвеш',
            position: 'defense',
            power: 8,
            img: 'images/footballstars/full/alves.jpg',
            miniImg: 'images/footballstars/mini/alves.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 119,
            name: 'Жерар Пике',
            position: 'defense',
            power: 7,
            img: 'images/footballstars/full/pique.jpg',
            miniImg: 'images/footballstars/mini/pique.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 120,
            name: 'Радамель Фалькао',
            position: 'attack',
            power: 7,
            img: 'images/footballstars/full/falcao.jpg',
            miniImg: 'images/footballstars/mini/falcao.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 121,
            name: 'Деян Станкович',
            position: 'midfield',
            power: 7,
            img: 'images/footballstars/full/stankovic.jpg',
            miniImg: 'images/footballstars/mini/stankovic.jpg',
            ability: 'medic',
            cardtype: 'base'
        },
        {
            id: 122,
            name: 'Давид Вилья',
            position: 'attack',
            power: 7,
            img: 'images/footballstars/full/villa.jpg',
            miniImg: 'images/footballstars/mini/villa.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 123,
            name: 'Манекен',
            position: 'any',
            power: 0,
            img: 'images/footballstars/full/dummy.jpg',
            miniImg: 'images/footballstars/mini/dummy.jpg',
            ability: 'dummy',
            cardtype: 'base'
        }
    ],
    
    // База данных всех карт РПЛ
    allRPLCards: [
        {
            id: 201,
            name: 'Максим Глушенков',
            position: 'midfield',
            power: 5,
            img: 'images/rpl/full/glushenkov.jpg',
            miniImg: 'images/rpl/mini/glushenkov.jpg',
            ability: 'spy',
            cardtype: 'base'
        },
        {
            id: 202,
            name: 'Эдуард Сперцян',
            position: 'midfield',
            power: 7,
            img: 'images/rpl/full/spertsyan.jpg',
            miniImg: 'images/rpl/mini/spertsyan.jpg',
            ability: 'leader',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 203,
            name: 'Александр Черников',
            position: 'midfield',
            power: 5,
            img: 'images/rpl/full/chernikov.jpg',
            miniImg: 'images/rpl/mini/chernikov.jpg',
            ability: 'redcard',
            cardtype: 'base'
        },
        {
            id: 204,
            name: 'Алексей Батраков',
            position: 'midfield',
            power: 8,
            img: 'images/rpl/full/batrakov.jpg',
            miniImg: 'images/rpl/mini/batrakov.jpg',
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 205,
            name: 'Матвей Кисляк',
            position: 'midfield',
            power: 6,
            img: 'images/rpl/full/kislyak.jpg',
            miniImg: 'images/rpl/mini/kislyak.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 206,
            name: 'Вендел',
            position: 'midfield',
            power: 5,
            img: 'images/rpl/full/wendel.jpg',
            miniImg: 'images/rpl/mini/wendel.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 207,
            name: 'Бителло',
            position: 'midfield',
            power: 4,
            img: 'images/rpl/full/bitello.jpg',
            miniImg: 'images/rpl/mini/bitello.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 208,
            name: 'Дмитрий Баринов',
            position: 'midfield',
            power: 4,
            img: 'images/rpl/full/barinov.jpg',
            miniImg: 'images/rpl/mini/barinov.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 209,
            name: 'Даниил Фомин',
            position: 'midfield',
            power: 4,
            img: 'images/rpl/full/fomin.jpg',
            miniImg: 'images/rpl/mini/fomin.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 210,
            name: 'Вильмар Барриос',
            position: 'midfield',
            power: 5,
            img: 'images/rpl/full/barrios.jpg',
            miniImg: 'images/rpl/mini/barrios.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 211,
            name: 'Диего Коста',
            position: 'defense',
            power: 6,
            img: 'images/rpl/full/kosta.jpg',
            miniImg: 'images/rpl/mini/kosta.jpg',
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 212,
            name: 'Витор Тормена',
            position: 'defense',
            power: 6,
            img: 'images/rpl/full/tormena.jpg',
            miniImg: 'images/rpl/mini/tormena.jpg',
            ability: 'bond',
            cardtype: 'base'
        },
        {
            id: 213,
            name: 'Нино',
            position: 'defense',
            power: 5,
            img: 'images/rpl/full/nino.jpg',
            miniImg: 'images/rpl/mini/nino.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 214,
            name: 'Игорь Дивеев',
            position: 'defense',
            power: 5,
            img: 'images/rpl/full/diveev.jpg',
            miniImg: 'images/rpl/mini/diveev.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 215,
            name: 'Илья Рожков',
            position: 'defense',
            power: 3,
            img: 'images/rpl/full/rozhkov.jpg',
            miniImg: 'images/rpl/mini/rozhkov.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 216,
            name: 'Дуглас Сантос',
            position: 'defense',
            power: 5,
            img: 'images/rpl/full/douglas.jpg',
            miniImg: 'images/rpl/mini/douglas.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 217,
            name: 'Александр Сильянов',
            position: 'defense',
            power: 3,
            img: 'images/rpl/full/silyanov.jpg',
            miniImg: 'images/rpl/mini/silyanov.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 218,
            name: 'Сесар Монтес',
            position: 'defense',
            power: 4,
            img: 'images/rpl/full/montes.jpg',
            miniImg: 'images/rpl/mini/montes.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 219,
            name: 'Мойзес',
            position: 'defense',
            power: 5,
            img: 'images/rpl/full/moises.jpg',
            miniImg: 'images/rpl/mini/moises.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 220,
            name: 'Роман Вега',
            position: 'defense',
            power: 4,
            img: 'images/rpl/full/vega.jpg',
            miniImg: 'images/rpl/mini/vega.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 221,
            name: 'Густаво Мантуан',
            position: 'defense',
            power: 4,
            img: 'images/rpl/full/mantuan.jpg',
            miniImg: 'images/rpl/mini/mantuan.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 222,
            name: 'Милан Гайич',
            position: 'defense',
            power: 3,
            img: 'images/rpl/full/gajic.jpg',
            miniImg: 'images/rpl/mini/gajic.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 223,
            name: 'Матвей Лукин',
            position: 'defense',
            power: 3,
            img: 'images/rpl/full/lukin.jpg',
            miniImg: 'images/rpl/mini/lukin.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 224,
            name: 'Игорь Акинфеев',
            position: 'defense',
            power: 7,
            img: 'images/rpl/full/akinfeev.jpg',
            miniImg: 'images/rpl/mini/akinfeev.jpg',
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 225,
            name: 'Станислав Акгацев',
            position: 'defense',
            power: 6,
            img: 'images/rpl/full/agkatsev.jpg',
            miniImg: 'images/rpl/mini/agkatsev.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 226,
            name: 'Константин Тюкавин',
            position: 'attack',
            power: 4,
            img: 'images/rpl/full/tyukavin.jpg',
            miniImg: 'images/rpl/mini/tyukavin.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 227,
            name: 'Артем Дзюба',
            position: 'attack',
            power: 9,
            img: 'images/rpl/full/dzyuba.jpg',
            miniImg: 'images/rpl/mini/dzyuba.jpg',
            ability: 'spy',
            cardtype: 'base'
        },
        {
            id: 228,
            name: 'Александр Соболев',
            position: 'attack',
            power: 7,
            img: 'images/rpl/full/sobolev.jpg',
            miniImg: 'images/rpl/mini/sobolev.jpg',
            ability: 'spy',
            cardtype: 'base'
        },
        {
            id: 229,
            name: 'Джон Кордоба',
            position: 'attack',
            power: 5,
            img: 'images/rpl/full/kordoba.jpg',
            miniImg: 'images/rpl/mini/kordoba.jpg',
            ability: 'provocateur',
            cardtype: 'base'
        },
        {
            id: 230,
            name: 'Луис Энрике',
            position: 'attack',
            power: 7,
            img: 'images/rpl/full/henrique.jpg',
            miniImg: 'images/rpl/mini/henrique.jpg',
            ability: '',
            cardtype: 'hero',
            isHero: true
        },
        {
            id: 231,
            name: 'Педро',
            position: 'attack',
            power: 4,
            img: 'images/rpl/full/pedro.jpg',
            miniImg: 'images/rpl/mini/pedro.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 232,
            name: 'Дмитрий Воробьев',
            position: 'attack',
            power: 4,
            img: 'images/rpl/full/vorobyev.jpg',
            miniImg: 'images/rpl/mini/vorobyev.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 233,
            name: 'Мирлинд Даку',
            position: 'attack',
            power: 5,
            img: 'images/rpl/full/daku.jpg',
            miniImg: 'images/rpl/mini/daku.jpg',
            ability: '',
            cardtype: 'base'
        },
        {
            id: 234,
            name: 'Манекен',
            position: 'any',
            power: 0,
            img: 'images/rpl/full/dummy1.jpg',
            miniImg: 'images/rpl/mini/dummy1.jpg',
            ability: 'dummy',
            cardtype: 'base'
        },
        {
            id: 235,
            name: 'Манекен',
            position: 'any',
            power: 0,
            img: 'images/rpl/full/dummy2.jpg',
            miniImg: 'images/rpl/mini/dummy2.jpg',
            ability: 'dummy',
            cardtype: 'base'
        },
        {
            id: 236,
            name: 'Поддержка трибун',
            position: 'any',
            power: 0,
            img: 'images/rpl/full/support.jpg',
            miniImg: 'images/rpl/mini/support.jpg',
            ability: 'support',
            cardtype: 'base'
        },
        {
            id: 237,
            name: 'Фабио Челестини',
            position: 'manager',
            power: 0,
            img: 'images/rpl/full/celestini.jpg',
            miniImg: 'images/rpl/mini/celestini.jpg',
            ability: 'celestini',
            cardtype: 'manager'
        }
    ]
};

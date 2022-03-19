const menu = {
    cost: null,
    pages: 
    [
        {
            page: 1,
            background: "background-image: url('./backgrounds/page-1.svg');",
            blocks: 
            [
                {
                    adult: true,
                    en_title: "HOOKAH:",
                    ru_title: "КАЛЬЯНЫ:",
                    positions: 
                    [
                        {
                            en_name: "THE STUDENT",
                            en_description: "( SERBETLI / ADALIA )",
                            ru_name: "НОВИЧОК",
                            ru_description: "( SERBETLI / ADALIA )",
                            cost: 140
                        },
                        {
                            en_name: "BETTER THEN STUDENT",
                            en_description: "( THE STUDENT 50%50 PRO )",
                            ru_name: "НЕМНОГО ШАРЮ",
                            ru_description: "( НОВИЧОК 50%50 ПРОФИ )",
                            cost: 170
                        },
                        {
                            en_name: "PRO",
                            en_description: "( DARKSIDE / MUST HAVE / BLACK BURN )",
                            ru_name: "ПРОФИ",
                            ru_description: "( DARKSIDE / MUST HAVE / BLACK BURN )",
                            cost: 200
                        }
                    ]
                },
                {
                    en_title: "RELOADING:",
                    ru_title: "ПЕРЕЗАБИВКА:",
                    positions:
                    [
                        {   
                            en_name: "THE STUDENT",
                            ru_name: "НОВИЧОК",
                            cost: 110
                        },
                        {
                            en_name: "BETTER THEN STUDENT",
                            ru_name: "НЕМНОГО ШАРЮ",
                            cost: 140
                        },
                        {
                            en_name: "PRO",
                            ru_name: "ПРОФИ",
                            cost: 170
                        }
                    ]
                },
                {
                    en_title: "FRUIT BOWL:",
                    ru_title: "ФРУКТОВЫЕ ЧАШИ:",
                    positions:
                    [
                        {
                            en_name: "ORANGE",
                            ru_name: "АПЕЛЬСИН",
                            cost: 40
                        },
                        {
                            en_name: "GRAPEFRUIT",
                            ru_name: "ГРЕЙПФРУТ",
                            cost: 50
                        }
                    ]
                },
                {
                    en_title: "ADDITIVES TO FLASK",
                    ru_title: "ДОБАВКИ В КОЛБУ:",
                    positions:
                    [
                        {
                            en_name: "MILK / JUICE",
                            ru_name: "МОЛОКО / СОК",
                            cost: 20
                        },
                        {
                            en_name: "SYRUP",
                            ru_name: "СИРОП",
                            cost: 20
                        },
                        {
                            en_name: "FRUITS",
                            ru_name: "ФРУКТОВАЯ КОЛБА",
                            cost: 35
                        },
                        {
                            en_name: "WINE",
                            ru_name: "ВИНО",
                            cost: 30
                        },
                        {
                            en_name: "ABSINTHE",
                            ru_name: "АБСЕНТ",
                            cost: 40
                        }
                    ]
                },

            ]
        },
        {
            page: 2,
            background: "background-image: url('./backgrounds/page-2.svg');",
            blocks: 
            [
                {
                    en_title: "COFFEE:",
                    ru_title: "КОФЕ:",
                    positions: 
                    [
                        {
                            en_name: "ESPRESSO",
                            ru_name: "ЭСПРЕССО",
                            cost: 18
                        },
                        {
                            en_name: "AMERICANO",
                            ru_name: "АМЕРИКАНО",
                            cost: 20
                        },
                        {
                            en_name: "CAPPUCCINO",
                            ru_name: "КАПУЧИНО",
                            cost: 24
                        },
                        {
                            en_name: "LATTE",
                            ru_name: "ЛАТТЕ",
                            cost: 26
                        },
                        {
                            en_name: "HOT CHOCOLATE",
                            ru_name: "ГОРЯЧИЙ ШОКОЛАД",
                            cost: 35
                        },
                        {
                            en_name: "RAF",
                            ru_name: "РАФ",
                            cost: 30
                        }
                    ]
                },
                {
                    en_title: "ICED COFFEE:",
                    ru_title: "ХОЛОДНЫЙ КОФЕ:",
                    positions:
                    [
                        {
                            en_name: "FRAPPE",
                            ru_name: "ФРАППЕ",
                            cost: 30
                        },
                        {
                            en_name: "ICE CARAMEL",
                            ru_name: "АЙС КАРАМЕЛЬНЫЙ",
                            cost: 30
                        }
                    ]
                },
                {
                    en_title: "ADDITIVES:",
                    ru_title: "ДОБАВКИ:",
                    positions:
                    [
                        {
                            en_name: "TOPPING",
                            ru_name: "ТОППИНГ",
                            cost: 8
                        },
                        {
                            en_name: "SYRUP",
                            ru_name: "СИРОП",
                            cost: 8
                        },
                        {
                            en_name: "ALCOHOL",
                            en_description: "( BELLIS / RUM / WHISKEY / CONIAC )",
                            ru_name: "АЛКОГОЛЬ",
                            cost: 15
                        },
                        {
                            en_name: "CREAM / MILK",
                            ru_name: "СЛИВКИ / МОЛОКО",
                            cost: 6
                        },
                        {
                            en_name: "LEMON",
                            ru_name: "ЛИМОН",
                            cost: 10
                        },
                        {
                            en_name: "LIME",
                            ru_name: "ЛАЙМ",
                            cost: 12
                        },
                        {
                            en_name: "HONEY",
                            ru_name: "МЁД",
                            cost: 14
                        }
                    ]
                },
                {
                    en_title: "DESSERTS:",
                    ru_title: "ДЕСЕРТЫ:",
                    positions:
                    [
                        {
                            en_name: "CROISSANT",
                            ru_name: "КРУАССАН",
                            cost: 20
                        },
                        {
                            en_name: "SET OF CROISSANTS",
                            ru_name: "НАБОР КРУАССАНОВ",
                            cost: 50
                        },
                        {
                            en_name: "CAKE",
                            ru_name: "КЕКС",
                            cost: 10
                        },
                        {
                            en_name: "CHOCOLATE",
                            ru_name: "ШОКОЛАД",
                            cost: 40
                        },
                        {
                            en_name: "BARS",
                            ru_name: "БАТОНЧИК",
                            cost: 12
                        }
                    ]
                },
                {
                    en_title: "TEA:",
                    ru_title: "ЧАИ:",
                    positions:
                    [
                        {
                            en_name: "SEA BUCKTHORN TEA",
                            ru_name: "ОБЛЕПИХОВЫЙ ЧАЙ",
                            cost: 60
                        },
                        {
                            en_name: "Berry Tea",
                            ru_name: "Ягодный Чай",
                            cost: 70
                        },
                        {
                            en_name: "FRUIT TEA",
                            ru_name: "ФРУКТОВЫЙ ЧАЙ",
                            cost: 55
                        },
                        {
                            en_name: "BLACK TEA",
                            ru_name: "ЧЁРНЫЙ ЧАЙ",
                            cost: 55
                        },
                        {
                            en_name: "BLACK TEA WITH FRUIT",
                            ru_name: "ЧЁРНЫЙ ЧАЙ С ФРУКТАМИ",
                            cost: 55
                        },
                        {
                            en_name: "BLACK TEA WITH BERGAMOT",
                            ru_name: "ЧЁРНЫЙ ЧАЙ С БЕРГАМОТОМ",
                            cost: 55
                        },
                        {
                            en_name: "GREEN TEA WITH JASMINE",
                            ru_name: "ЗЕЛЁНЫЙ ЧАЙ С ЖАСМИНОМ",
                            cost: 55
                        },
                        {
                            en_name: "CHINESE GREEN TEA",
                            ru_name: "КИТАЙСКИЙ ЗЕЛЁНЫЙ ЧАЙ",
                            cost: 55
                        },
                        {
                            en_name: "MINT TEA",
                            ru_name: "МЯТНЫЙ ЧАЙ",
                            cost: 55
                        },
                        {
                            en_name: "HERBAL TEA",
                            ru_name: "ТРАВЯНОЙ ЧАЙ",
                            cost: 55
                        },
                        {
                            en_name: "CHAMOMILE TEA",
                            ru_name: "РОМАШКОВЫЙ ЧАЙ",
                            cost: 55
                        }
                    ]
                },
                {
                    en_title: "DRINKS:",
                    ru_title: "НАПИТКИ:",
                    positions:
                    [
                        {
                            en_name: "COLA",
                            ru_name: "КОЛА",
                            cost: 25
                        },
                        {
                            en_name: "COLA IN GLASS",
                            ru_name: "КОЛА СТЕКЛО",
                            cost: 20
                        },
                        {
                            en_name: "FANTA",
                            ru_name: "ФАНТА",
                            cost: 25
                        },
                        {
                            en_name: "SPRITE",
                            ru_name: "СПРАЙТ",
                            cost: 25
                        },
                        {
                            en_name: "RED BULL",
                            ru_name: "RED BULL",
                            cost: 45
                        },
                        {
                            en_name: "ICE TEA",
                            ru_name: "ХОЛОДНЫЙ ЧАЙ",
                            cost: 22
                        },
                        {
                            en_name: "A BOTTLE OF JUICE",
                            ru_name: "СОК В БУТЫЛОЧКЕ ",
                            cost: 20
                        },
                        {
                            en_name: "JUICE",
                            ru_name: "СОК УПАКОВКА",
                            cost: 48
                        },
                        {
                            en_name: "WATER",
                            en_description: "( SPARKLING OM )",
                            ru_name: "ОМ",
                            cost: 15
                        }
                    ]
                }
            ]
        },
        {
            page: 3,
            background: "background-image: url('./backgrounds/page-3.svg');",
            blocks:
            [
                {
                    en_title: "SUSHI:",
                    ru_title: "СУШИ:",
                    positions: 
                    [
                        {
                            en_name: "CALIFORNIA WITH SALMON",
                            en_description: "( JAPANESE RICE , SALMON, CREAM CHEESE , CUCUMBER,  CAVIAR TOBIKO)",
                            ru_name: "КАЛИФОРНИЯ с ЛОСОСЕМ",
                            ru_description: "( ЯПОНСКИЙ РИС, НЕЖНЫЙ ЛОСОСЬ, СЛИВОЧНЫЙ СЫР, ХРУСТЯЩИЙ ОГУРЧИК, ИКРА ТОБИКО )",
                            cost: 130
                        },
                        {
                            en_name: "CALIFORNIA WITH TEMPURI SHRIMPS",
                            en_description: "( JAPANESE RICE, CAVIAR TOBIKO, TIGER SHRIMPS FIRED IN BATTED TEMPURI BREADED WITH DRIED PANCO, JAPANESE MAYONESIS )",
                            ru_name: "КАЛИФОРНИЯ С КРЕВЕТКАМИ ТЕМПУРИ",
                            ru_description: "( ЯПОНСКИЙ РИС, ТИГРОВЫЕ КРЕВЕТКИ ОБЖАРЕННЫЕ В КЛЯРЕ ТЕМПУРИ В ПАНИРОВКЕ ИЗ СУХАРЕЙ PANCO , ИКРА ТОБИКО, ЯПОНСКИЙ МАЙОНЕЗ )",
                            cost: 135
                        },
                        {
                            en_name: "PHILADELPHIA",
                            en_description: "( JAPANESE RICE , SALMON, CREAM CHEESE, CUCUMBER )",
                            ru_name: "ФИЛАДЕЛЬФИЯ",
                            ru_description: "( ЯПОНСКИЙ РИС, НЕЖНЕЙШИЙ ЛОСОСЬ, СЛИВОЧНЫЙ СЫР, ХРУСТЯЩИЙ ОГУРЧИК )",
                            cost: 125
                        },
                        {
                            en_name: "PHILADELPHIA WITH EEL",
                            en_description: "( JAPANESE RICE , SALMON, CREAM CHEESE, CUCUMBER, AROMATIC, SMOKED EEL) ",
                            ru_name: "ФИЛАДЕЛЬФИЯ С УГРЁМ",
                            ru_description: "( ЯПОНСКИЙ РИС, НЕЖНЕЙШИЙ ЛОСОСЬ, АРОМАТНЫЙ, КОПЧЁНЫЙ УГОРЬ, СЛИВОЧНЫЙ СЫР, ХРУСТЯЩИЙ ОГУРЧИК )",
                            cost: 145
                        },
                        {
                            en_name: "PHILADELPHIA WITH SHRIMPS",
                            en_description: "( JAPANESE RICE, SALMON,  CREAM CHEESE, CUCUMBERS, JAPANESE MAYONESIS )",
                            ru_name: "ФИЛАДЕЛЬФИЯ С КРЕВЕТКАМИ",
                            ru_description: "( ЯПОНСКИЙ РИС, НЕЖНЫЙ ЛОСОСЬ, СЛИВОЧНЫЙ СЫР, КРЕВЕТКИ, ЯПОНСКИЙ МАЙОНЕЗ, ОГУРЧИКИ )",
                            cost: 155
                        },
                        {
                            en_name: "ROLL BONITO WITH SALMON",
                            en_description: "( JAPANESE RICE, SALMON, CREAM CHEESE, CUCUMBERS, BONITO (SMOKED TUNA SHAVING) )",
                            ru_name: "РОЛЛ BONITO С ЛОСОСЕМ",
                            ru_description: "( ЯПОНСКИЙ РИС, СЛИВОЧНЫЙ СЫР, НЕЖНЫЙ ЛОСОСЬ, ОГУРЧИКИ, BONITO (КОПЧЕНАЯ СТРУЖКА ИЗ ТУНЦА) )",
                            cost: 125
                        },
                        {
                            en_name: "CANADA",
                            en_description: "( JAPANESE RICE, SALMON, CREAM CHEESE, CUCUMBER, SESAME, SAUCE UNAGHI, SMOKED EEL )",
                            ru_name: "КАНАДА",
                            ru_description: "( ЯПОНСКИЙ РИС, КОПЧЁНЫЙ УГОРЬ, НЕЖНЫЙ ЛОСОСЬ, СЛИВОЧНЫЙ СЫР, ОГУРЧИК, КУНЖУТ, СОУС UNAGHI )",
                            cost: 155
                        },
                        {
                            en_name: "ROLL SACUMIX",
                            en_description: "( JAPANESE RICE, SALMON, CREAM CHEESE, CUCUMBER, AVOCADO, TUNA)",
                            ru_name: "РОЛЛ SACUMIX",
                            ru_description: "( ЯПОНСКИЙ РИС, НЕЖНЕЙШИЙ ЛОСОСЬ, ТУНЕЦ, СЛИВОЧНЫЙ СЫР, ХРУСТЯЩИЙ ОГУРЧИК, СПЕЛОЕ АВОКАДО )",
                            cost: 135
                        }
                    ]
                },
                {
                    en_title: "BAKED SUSHI:",
                    ru_title: "ЗАПЕЧЕННЫЕ СУШИ:",
                    positions:
                    [
                        {
                            en_name: "FUTUMAKI WITH SALMON",
                            en_description: "( JAPANESE RICE, SALMON,  CREAM CHEESE, SPICE SAUCE, CLAR TEMPURI, SUHARI PANKO, UNAGI SAUCE, SESAME )",
                            ru_name: "ФУТУМАКИ С ЛОСОСЕМ",
                            ru_description: "( ЯПОНСКИЙ РИС, НЕЖНЕЙШИЙ ЛОСОСЬ, СЛИВОЧНЫЙ СЫР, СПАЙСИ СОУС, КЛЯР ТЕМПУРИ, СУХАРИ ПАНКО, СОУС УНАГИ, КУНЖУТ, ! СЛЕГКА ОСТРЫЙ РОЛЛ ! )",
                            cost: 125
                        },
                        {
                            en_name: "FUTUMAKI WITH SHRIMPS",
                            en_description: "( JAPANESE RICE, CREAM CHEESE, SHRIMPS, SPICE SAUCE, CLAR TEMPURI, SUHARI PANKO, UNAGI SAUCE, SESAME )",
                            ru_name: "ФУТУМАКИ С КРЕВЕТКАМИ",
                            ru_description: "( ЯПОНСКИЙ РИС, СЛИВОЧНЫЙ СЫР, КРЕВЕТКИ, СПАЙСИ СОУС, КЛЯР ТЕМПУРИ, СУХАРИ ПАНКО, СОУС УНАГИ, КУНЖУТ. ! СЛЕГКА ОСТРЫЙ РОЛЛ ! )",
                            cost: 135
                        },
                        {
                            en_name: "FUTUMAKI WITH EEL",
                            en_description: "( JAPANESE RICE, SMOKED EELCREAM , CREAM CHEESE, SPICE SAUCE, CLAR TEMPURI, SUHARI PANKO, UNAGI SAUCE, SESAME )",
                            ru_name: "ФУТУМАКИ С УГРЕМ",
                            ru_description: "( ЯПОНСКИЙ РИС, КОПЧЕННЫЙ УГОРЬ, СЛИВОЧНЫЙ СЫР, СПАЙСИ СОУС, КЛЯР ТЕМПУРИ, СУХАРИ ПАНКО, СОУС УНАГИ, КУНЖУТ )",
                            cost: 135
                        }
                    ]
                },
                {
                    en_title: "PIZZA:",
                    ru_title: "ПИЦЦА:",
                    positions:
                    [
                        {
                            en_name: "B-B-Q",
                            en_description: "( ITALIAN  PASSENGER, TOMATO SAUCE, MOZZARELLA, CHICKEN, KABANO SAUSAGE, SHARBACK SAUCE )",
                            ru_name: "B-B-Q (БАРБЕКЮ)",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЕЛЛА, КУРИЦА, КОЛБАСКИ КАБАНОС, СОУС BBQ )",
                            cost: 120
                        },
                        {
                            en_name: "DEZHONSKAYA",
                            en_description: "( ITALIAN  PASSENGER, TOMATO SAUCE, MOZZARELLA, BACON, CHICKEN, CREAM CHEESE, FRENCH GRAIN MUSTARD )",
                            ru_name: "ДЕЖОНСКАЯ",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЭЛЛА, БЕКОН, КУРИЦА, СЛИВОЧНЫЙ СЫР, ФРАНЦУЗСКАЯ ЗЕРНОВАЯ ГОРЧИЦА )",
                            cost: 130
                        },
                        {
                            en_name: "4 MEAT",
                            en_description: "( ITALIAN  PASSENGER, TOMATO SAUCE, MOZARELLA, SWEET ONION, SMOKED SAUSAGE, BACON, PROSCIUTTO COTTO, PROSCIUTTO SPECK )",
                            ru_name: "4 МЯСА",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЭЛЛА, СЛАДКИЙ ЛУК, КОПЧЕНАЯ КОЛБАСА, БЕКОН, PROSCIUTTO COTTO, PROSCIUTTO SPECK, СЫРОКОПЧЕНЫЙ-ОКОРОК )",
                            cost: 130
                        },
                        {
                            en_name: "4 CHEESE",
                            en_description: "( ITALIAN  PASSION, TOMATO SAUCE, MOZZARELLA, BRIE, MOLDED CHEESE (GORGONZOLA), PARMESAN (PARMIGIANO REGGIANO) )",
                            ru_name: "4 СЫРА",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЭЛЛА, БРИ, СЫР С ПЛЕСЕНЬЮ (GORGONZOLA), ПАРМЕЗАН (PARMIGIANO REGGIANO) )",
                            cost: 140
                        },
                        {
                            en_name: "CAPRI",
                            en_description: "( ITALIAN  PASSENGER, TOMATO SAUCE, MOZZARELLA, BACON, GARLIC EGGPLANTS, MUSHROOMS, SWEET PEPPER, PARMIGIANO REGGIANO )",
                            ru_name: "CAPRI",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЭЛЛА, БЕКОН, ЧЕСНОЧНЫЕ БАКЛАЖАНЫ, ГРИБЫ , СЛАДКИЙ ПЕРЕЦ, ПАРМЕЗАН (PARMIGIANO REGGIANO) )",
                            cost: 120
                        },
                        {
                            en_name: "PEPERONI",
                            en_description: "( ITALIAN  PASSENGER, TOMATO SAUCE, MOZZARELLA, PEPERONI )",
                            ru_name: "PEPERONI",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЭЛЛА, ПЕПЕРОНИ (ОСТРЫЕ) )",
                            cost: 120
                        },
                        {
                            en_name: "PROSCIUTTO COTTO",
                            en_description: "( ITALIAN  PASSENGER, TOMATO SAUCE, MOZZARELLA, PEPERONI (SPICY) )",
                            ru_name: "PROSCIUTTO COTTO",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЭЛЛА, PROSCIUTTO COTTO, ГРИБЫ, МАСЛИНЫ )",
                            cost: 115
                        },
                        {
                            en_name: "POLLO",
                            en_description: "( ITALIAN PASSENGER, TOMATO SAUCE, MOZZARELLA, CHICKEN, MUSHROOMS )",
                            ru_name: "POLLO",
                            ru_description: "( ИТАЛЬЯНСКОЕ ВОЗДУШНОЕ ТЕСТО, СОУС ИЗ ТОМАТОВ, МОЦАРЭЛЛА, КУРИЦА, ГРИБЫ )",
                            cost: 115
                        }
                    ]
                },
            ]
        },
        {
            page: 5,
            background: "background-image: url('./backgrounds/page-5.svg');",
            blocks:
            [
                {
                    en_title: "LEMONADES:",
                    ru_title: "ЛИМОНАДЫ:",
                    positions:
                    [
                        {
                            en_name: "CUCUMBER",
                            en_description: "( CUCUMBER, ORANGE, LEMON JUICE, SUGAR SYRUP, SPRITE )",
                            ru_name: "ОГУРЕЧНЫЙ",
                            ru_description: "( ОГУРЕЦ, АПЕЛЬСИН, ЛИМОННЫЙ СОК, САХАРНЫЙ СИРОП, СПРАЙТ )",
                            cost: 40
                        },
                        {
                            en_name: "SAGE ROMANCE",
                            en_description: "( APPLE JUICE, SUGAR SYRUP, SPRITE, LEMON JUICE, KIWI )",
                            ru_name: "СЕЙДЖ РОМАНС",
                            ru_description: "( ЯБЛОЧНЫЙ СОК, САХАРНЫЙ СИРОП, СПРАЙТ, СОК ЛИМОНА, КИВИ )",
                            cost: 40
                        },
                        {
                            en_name: "GREEN CITRUS",
                            en_description: "( ORANGE JUICE, PINEAPPLE JUICE, LEMON JUICE, BLUE CURASAO )",
                            ru_name: "ЗЕЛЁНЫЙ ЦИТРУС",
                            ru_description: "( АПЕЛЬСИНОВЫЙ СОК, АНАНАСОВЫЙ СОК, СОК ЛИМОНА, БЛЮ КЮРАСАО )",
                            cost: 40
                        },
                        {
                            en_name: "BERRY MIX",
                            en_description: "( BERRY JUICE, STRAWBERRY SYRUP, GRENADINE, LEMON JUICE, BERRIES )",
                            ru_name: "ЯГОДНЫЙ МИКС",
                            ru_description: "( ЯГОДНЫЙ СОК, КЛУБНИЧНЫЙ СИРОП, ГРЕНАДИН, СОК ЛИМОНА, ЯГОДЫ )",
                            cost: 40
                        },
                        {
                            en_name: "FRESH LEMON",
                            en_description: "( LEMON JUICE, ORANGE JUICE, LEMON, SODA, SUGAR SYRUP )",
                            ru_name: "СВЕЖИЙ ЛИМОН",
                            ru_description: "( ЛИМОННЫЙ СОК, АПЕЛЬСИНОВЫЙ СОК, ЛИМОН, СОДОВАЯ, САХАРНЫЙ СИРОП )",
                            cost: 40
                        },
                        {
                            en_name: "ORANGE SUNSET",
                            en_description: "( LEMON JUICE, ORANGE JUICE, ORANGE, SODA, SUGAR SYRUP )",
                            ru_name: "ОРАНЖЕВЫЙ ЗАКАТ",
                            ru_description: "( ЛИМОННЫЙ СОК, АПЕЛЬСИНОВЫЙ СОК, АПЕЛЬСИН, СОДОВАЯ, САХАРНЫЙ СИРОП )",
                            cost: 40
                        }
                    ]
                }
            ]

        },
        {
            page: 6,
            background: "background-image: url('./backgrounds/page-6.svg');",
            blocks:
            [
                {
                    en_title: "NON-ALCOHOLIC COCKTAILS:",
                    ru_title: "КОКТЕЙЛИ БЕЗАЛКОГОЛЬНЫЕ:",
                    positions: 
                    [
                        {
                            en_name: "FLAMINGO",
                            en_description: "( BANANA JUICE, STRAWBERRY, LEMON JUICE, COCONUT SYRUP, CARBONATION )",
                            ru_name: "ФЛАМИНГО",
                            ru_description: "( БАНАНОВЫЙ СОК, КЛУБНИКА, ЛИМОННЫЙ СОК, КОКОСОВЫЙ СИРОП, ГАЗИРОВКА )",
                            cost: 45
                        },
                        {
                            en_name: "MOJITO",
                            en_description: "( SUGAR SYRUP, SPRITE, MINT, LIME )",
                            ru_name: "МОХИТО",
                            ru_description: "( САХАРНЫЙ СИРОП, СПРАЙТ, МЯТА, ЛАЙМ )",
                            cost: 42
                        },
                        {
                            en_name: "COCONUT HUNTER",
                            en_description: "( LEMON JUICE, PINEAPPLE JUICE, COCONUT SYRUP, SODA, BLUE CURASAO )",
                            ru_name: "ОХОТНИК ЗА КОКОСОМ",
                            ru_description: "( ЛИМОННЫЙ СОК, АНАНАСОВЫЙ СОК, КОКОСОВЫЙ СИРОП, СОДОВАЯ, БЛЮ КЮРАСАО )",
                            cost: 45
                        },
                        {
                            en_name: "BLUE LAGOON",
                            en_description: "( SPRITE, LEMON, LIME, LEMON JUICE, BLUE CURASAO )",
                            ru_name: "ГОЛУБАЯ ЛАГУНА",
                            ru_description: "( СПРАЙТ, ЛИМОН, ЛИМОННЫЙ СОК, БЛЮ КЮРАСАО )",
                            cost: 42
                        },
                        {
                            en_name: "CHILL",
                            en_description: "( BANANA SYRUP, PINEAPPLE JUICE, SPRITE )",
                            ru_name: "КАЙФ",
                            ru_description: "( БАНАНОВЫЙ СИРОП, АНАНАСОВЫЙ СОК, СПРАЙТ )",
                            cost: 45
                        },
                        {
                            en_name: "HONEYMOON",
                            en_description: "( APPLE JUICE, ORANGE JUICE, STRAWBERRY JUICE )",
                            ru_name: "МЕДОВЫЙ МЕСЯЦ",
                            ru_description: "( ЯБЛОЧНЫЙ СОК, АПЕЛЬСИНОВЫЙ СОК, КЛУБНИЧНЫЙ СОК )",
                            cost: 42
                        }
                    ]
                }
            ]
        },
        {
            page: 7,
            background: "background-image: url('./backgrounds/page-7.svg');",
            blocks:
            [
                {
                    adult: true,
                    en_title: "ALCOHOLIC COCKTAILS:",
                    ru_title: "КОКТЕЙЛИ АЛКОГОЛЬНЫЕ:",
                    positions:
                    [
                        {
                            en_name: "Pandora",
                            en_description: "( RUM, LEMON JUICE, BLUE CURASAO, PEACH LIQUOR )",
                            ru_name: "Пандора",
                            ru_description: "( РОМ, ЛИМОННЫЙ СОК, БЛЮ КЮРАСАО, ПЕРСИКОВЫЙ ЛИКЕР )",
                            cost: 55
                        },
                        {
                            en_name: "Black and White",
                            en_description: "( GRENADINE, ORANGE JUICE, TEQUILA )",
                            ru_name: "Блэк энд Уайт",
                            ru_description: "( БЭЙЛИС, КОФЕЙНЫЙ ЛИКЕР, МОЛОКО, КАРАМЕЛЬНЫЙ СИРОП, ШОКОЛАДНЫЙ СИРОП )",
                            cost: 60
                        },
                        {
                            en_name: "Martini piano",
                            en_description: "( MARTINI, CRISECO )",
                            ru_name: "Мартини рояль",
                            ru_description: "( МАРТИНИ, КРИСЕКО )",
                            cost: 55
                        },
                        {
                            en_name: "St. Duma",
                            en_description: "( APEROL, GIN, GRENADINE, LEMON JUICE )",
                            ru_name: "Ул. Думская",
                            ru_description: "( АПЕРОЛЬ, ДЖИН, ГРЕНАДИН, ЛИМОННЫЙ СОК )",
                            cost: 55
                        },
                        {
                            en_name: "TEQUILA SUNRISE",
                            en_description: "( GRENADINE, ORANGE JUICE, TEQUILA )",
                            ru_name: "ТЕКИЛА САНРАЙЗ",
                            ru_description: "( ГРЕНАДИН, АПЕЛЬСИНОВЫЙ СОК, ТЕКИЛА )",
                            cost: 55
                        },
                        {
                            en_name: "BLUE LAGOON",
                            en_description: "( VODKA, BLUE CURASAO, LEMON JUICE, SPRITE )",
                            ru_name: "ГОЛУБАЯ ЛАГУНА",
                            ru_description: "( ВОДКА, БЛЮ КЮРАСАО, ЛИМОННЫЙ СОК, СПРАЙТ, ЛИМОН )",
                            cost: 52
                        },
                        {
                            en_name: "APEROL",
                            en_description: "( APEROL, PROSECCO, SODOVA, ORANGE )",
                            ru_name: "АПЕРОЛЬ",
                            ru_description: "( АПЕРОЛЬ, ПРОСЕККО, СОДОВАЯ, АПЕЛЬСИН )",
                            cost: 58
                        },
                        {
                            en_name: "BEACH SEX",
                            en_description: "( VODKA, PEACH LIQUOR, CRANBERRY JUICE, PINEAPPLE JUICE )",
                            ru_name: "СЕКС ЗА ПЛЯЖЕМ",
                            ru_description: "( ВОДКА, ПЕРСИКОВЫЙ ЛИКЕР, КЛЮКВЕННЫЙ СОК, АНАНАСОВЫЙ СОК )",
                            cost: 58
                        },
                        {
                            en_name: "WHITE RUSSIAN",
                            en_description: "( VODKA, COFFEE LIQUOR, CREAM )",
                            ru_name: "БЕЛЫЙ РУССКИЙ",
                            ru_description: "( ВОДКА, КОФЕЙНЫЙ ЛИКЕР, СЛИВКИ )",
                            cost: 55
                        },
                        {
                            en_name: "MOJITO",
                            en_description: "( RUM, SUGAR SYRUP, SPRITE, MINT, LIME )",
                            ru_name: "МОХИТО",
                            ru_description: "( РОМ, САХАРНЫЙ СИРОП, СПРАЙТ, МЯТА, ЛАЙМ )",
                            cost: 55
                        },
                        {
                            en_name: "ESPRESSO MARTINI",
                            en_description: "( ESPRESSO, VODKA, COFFEE, LIQUOR, CHOCOLATE SYRUP )",
                            ru_name: "ЭСПРЕССО МАРТИНИ",
                            ru_description: "( ЭСПРЕССО, ВОДКА, КОФЁ, ЛИКЕР, ШОКОЛАДНЫЙ СИРОП )",
                            cost: 55
                        },
                        {
                            en_name: "RAPHAELLO",
                            en_description: "( BAYLIS, COCONUT SYRUP, MILK, VANILLA SYRUP, COCONUT PIECES )",
                            ru_name: "РАФАЭЛЛО",
                            ru_description: "( БЕЙЛИС, КОКОСОВЫЙ СИРОП, МОЛОКО, ВАНИЛЬНЫЙ СИРОП, КОКОСОВАЯ СТРУЖКА )",
                            cost: 60
                        },
                        {
                            en_name: "DAIQUIRI",
                            en_description: "( RUM, SUGAR SYRUP, LIME JUICE )",
                            ru_name: "ДАЙКИРИ",
                            ru_description: "( РОМ, САХАРНЫЙ СИРОП, СОК ЛАЙМА )",
                            cost: 52
                        },
                        {
                            en_name: "LONG ISLAND ICE TEA",
                            en_description: "( GIN, VODKA, WHITE RUM, TEQUILA, TRIPLE SEC, SUGAR SYRUP, LIME JUICE, COLA )",
                            ru_name: "ЛОНГ АЙЛЕНД АЙС ТИ",
                            ru_description: "( ДЖИН, ВОДКА, БЕЛЫЙ РОМ, ТЕКИЛА, ТРИПЛ СЕК, САХАРНЫЙ СИРОП, СОК ЛАЙМА, КОЛА )",
                            cost: 70
                        },
                        {
                            en_name: "APPLE MARTINI",
                            en_description: "( MARTINI, APPLE JUICE, SPRITE )",
                            ru_name: "ЯБЛОЧНЫЙ МАРТИНИ",
                            ru_description: "( МАРТИНИ, ЯБЛОЧНЫЙ СОК, СПРАЙТ )",
                            cost: 55
                        },
                        {
                            en_name: "STRAWBERRY DAIKIRI",
                            en_description: "( RUM, STRAWBERRY SYRUP, LIME JUICE )",
                            ru_name: "КЛУБНИЧНЫЙ ДАЙКИРИ",
                            ru_description: "( РОМ, КЛУБНИЧНЫЙ СИРОП, СОК ЛАЙМА )",
                            cost: 55
                        },
                        {
                            en_name: "MARGARITA",
                            en_description: "( TEQUILA, TRIPLE SEC, SUGAR SYRUP, LIME JUICE, SALT )",
                            ru_name: "МАРГАРИТА",
                            ru_description: "( ТЕКИЛА, ТРИПЛ СЕК, САХАРНЫЙ СИРОП, СОК ЛАЙМА, СОЛЬ )",
                            cost: 55
                        },
                        {
                            en_name: "VODKA ENERGETIC",
                            en_description: "( VODKA, ENERGY, LEMON )",
                            ru_name: "ВОДКА ЭНЕРГЕТИК",
                            ru_description: "( ВОДКА, ЭНЕРГЕТИК, ЛИМОН )",
                            cost: 55
                        },
                        {
                            en_name: "COSMOPOLITAN",
                            en_description: "( CITRUS VODKA, TRIPLE SEC, CRANBERRY JUICE, LIME JUICE )",
                            ru_name: "КОСМОПОЛИТЕН",
                            ru_description: "( ЦИТРУСОВАЯ ВОДКА, ТРИПЛ СЕК, КЛЮКВЕННЫЙ СОК, СОК ЛАЙМА )",
                            cost: 50
                        },
                        {
                            en_name: "GREEN WIDOW",
                            en_description: "( RUM, ORANGE JUICE, BLUE CURASAO SYRUP )",
                            ru_name: "ЗЕЛЕНАЯ ВДОВА",
                            ru_description: "( РОМ, АПЕЛЬСИНОВЫЙ СОК , СИРОП БЛЮ КЮРАСАО )",
                            cost: 50
                        },
                        {
                            en_name: "GIN AND TONIC",
                            en_description: "( GIN-TONIC, LIME )",
                            ru_name: "ДЖИН-ТОНИК",
                            ru_description: "( ДЖИН-ТОНИК, ЛАЙМ )",
                            cost: 55
                        },
                        {
                            en_name: "MATRIX",
                            en_description: "( GIN, ROM, BLUE CURASAO, GRENADIN, SPRITE )",
                            ru_name: "МАТРИЦА",
                            ru_description: "( ДЖИН, РОМ, БЛЮ КЮРАСАО , ГРЕНАДИН, СПРАЙТ )",
                            cost: 60
                        },
                        {
                            en_name: "CARIBBEAN WAVES",
                            en_description: "( RUM, PINEAPPLE JUICE, BLUE CURASAO, CREAM, COCONUT SYRUP )",
                            ru_name: "КАРИБСКИЕ ВОЛНЫ",
                            ru_description: "( РОМ, АНАНАСОВЫЙ СОК, БЛЮ КЮРАСАО, СЛИВКИ, КОКОСОВЫЙ СИРОП )",
                            cost: 55
                        },
                        {
                            en_name: "CUBA LIBRE",
                            en_description: "( ROM, COLA, LIME )",
                            ru_name: "КУБА ЛИБРЕ",
                            ru_description: "( РОМ, КОЛА, ЛАЙМ )",
                            cost: 50
                        },
                        {
                            en_name: "BOSTON TEA",
                            en_description: "( ROM, GIN, VODKA, TEQUILA, TRIPLE SEC, COFFEE LIQUOR, COLA )",
                            ru_name: "БОСТОНСКИЙ ЧАЙ",
                            ru_description: "( РОМ, ДЖИН, ВОДКА, ТЕКИЛА, ТРИПЛ СЕК, КОФЕЙНЫЙ ЛИКЕР, КОЛА )",
                            cost: 70
                        },
                        {
                            en_name: "WHITE LADY",
                            en_description: "( GIN, TRIPLE SEC, LEMON JUICE )",
                            ru_name: "БЕЛАЯ ЛЕДИ",
                            ru_description: "( ДЖИН, ТРИПЛ СЕК, ЛИМОННЫЙ СОК )",
                            cost: 55
                        },
                        {
                            en_name: "BLUE MAZAFAKER",
                            en_description: "( GIN, VODKA, WHITE RUM, TEQUILA, TRPIL SEC, SUGAR SYRUP, LIME JUICE, SPRITE, BLUE CURASAO )",
                            ru_name: "БЛЮ МАЗАФАКЕР",
                            ru_description: "( ДЖИН, ВОДКА, БЕЛЫЙ РОМ, ТЕКИЛА, ТРПИЛ СЕК, САХАРНЫЙ СИРОП, СОК ЛАЙМА, СПРАЙТ, БЛЮ КЮРАСАО )",
                            cost: 70
                        },
                        {
                            en_name: "CHILL",
                            en_description: "( RUM, BANANA SYRUP, PINEAPPLE JUICE, SPRITE )",
                            ru_name: "КАЙФ",
                            ru_description: "( РОМ, БАНАНОВЫЙ СИРОП, АНАНАСОВЫЙ СОК, СПРАЙТ )",
                            cost: 55
                        }
                    ]
                }
            ]
        },
        {
            page: 8,
            background: "background-image: url('./backgrounds/page-8.svg');",
            blocks:
            [
                {
                    adult: true,
                    en_title: "SHOTS:",
                    ru_title: "ШОТЫ:",
                    positions:
                    [
                        {
                            en_name: "NAKED ON THE FLOOR",
                            en_description: "( MINT SYRUP, BAILIS, ABSENT )",
                            ru_name: "ГОЛЫЙ НА ПОЛУ",
                            ru_description: "( МЯТНЫЙ СИРОП, БЭЙЛИС, АБСЕНТ )",
                            cost: 50
                        },
                        {
                            en_name: "B-53",
                            en_description: "( COFFEE LIQUOR, BEILIS, TRIPLE SEC )",
                            ru_name: "Б-53",
                            ru_description: "( КОФЕЙНЫЙ ЛИКЕР, БЕЙЛИС, ТРИПЛ СЕК )",
                            cost: 48
                        },
                        {
                            en_name: "BLUE LAMBORGINI",
                            en_description: "( BLUE KURASAO, LIME JUICE, TEQUILA )",
                            ru_name: "СИНИЙ ЛАМБОРГИНИ",
                            ru_description: "( БЛЮ КУРАСАО, СОК ЛАЙМА, ТЕКИЛА )",
                            cost: 42
                        },
                        {
                            en_name: "MOJITO",
                            en_description: "( MINT SYRUP, LIME JUICE, SPRITE, RUM )",
                            ru_name: "МОХИТО",
                            ru_description: "( МЯТНЫЙ СИРОП, СОК ЛАЙМА, СПРАЙТ, РОМ )",
                            cost: 42
                        },
                        {
                            en_name: "SQUIRREL",
                            en_description: "( COCONUT SYRUP, COFFEE LIQUOR, ABSINTH, BAILIS )",
                            ru_name: "БЕЛКА",
                            ru_description: "( КОКОСОВЫЙ СИРОП, КОФЕЙНЫЙ ЛИКЕР, АБСЕНТ, БЭЙЛИС )",
                            cost: 50
                        },
                        {
                            en_name: "DO NOT BE SAD",
                            en_description: "( BLUE KURASAO, VODKA, ABSENT, BEILIS )",
                            ru_name: "НЕ ГРУСТИ",
                            ru_description: "( БЛЮ КУРАСАО, ВОДКА, АБСЕНТ, БЭЙЛИС )",
                            cost: 45
                        },
                        {
                            en_name: "AMIGO",
                            en_description: "( COFFEE LIQUOR, CREAM, TEQUILA )",
                            ru_name: "АМИГО",
                            ru_description: "( КОФЕЙНЫЙ ЛИКЕР, СЛИВКИ, ТЕКИЛА )",
                            cost: 45
                        },
                        {
                            en_name: "20+",
                            en_description: "( MINT SYRUP, APEROL, VODKA )",
                            ru_name: "20+",
                            ru_description: "( МЯТНЫЙ СИРОП, АПЕРОЛЬ, ВОДКА )",
                            cost: 42
                        },
                        {
                            en_name: "SPRING BERRIES",
                            en_description: "( GRENADINE, BAILIS, GIN )",
                            ru_name: "ЕЛОВЫЕ ЯГОДЫ",
                            ru_description: "( ГРЕНАДИН, БЭЙЛИС, ДЖИН )",
                            cost: 42
                        },
                        {
                            en_name: "ACID",
                            en_description: "( GRENADINE, LIME JUICE, RUM )",
                            ru_name: "КИСЛОТНЫЙ",
                            ru_description: "( ГРЕНАДИН, СОК ЛАЙМА, РОМ )",
                            cost: 42
                        },
                        {
                            en_name: "SILVER BULLET",
                            en_description: "( COFFEE LIQUOR, LEMON, TEQUILA )",
                            ru_name: "СЕРЕБРЯНАЯ ПУЛЯ",
                            ru_description: "( КОФЕЙНЫЙ ЛИКЕР, ЛИМОН, ТЕКИЛА )",
                            cost: 42
                        },
                        {
                            en_name: "BOYARSKY",
                            en_description: "( GRENADINE, VODKA, TABASCO SAUCE )",
                            ru_name: "БОЯРСКИЙ",
                            ru_description: "( ГРЕНАДИН, ВОДКА, СОУС ТАБАСКО )",
                            cost: 42
                        },
                        {
                            en_name: "KAZANTIP",
                            en_description: "( GRENADINE, ABSENT, TEQUILA, BEILIS )",
                            ru_name: "КАЗАНТИП",
                            ru_description: "( ГРЕНАДИН, АБСЕНТ, ТЕКИЛА, БЕЙЛИС )",
                            cost: 50
                        },
                        {
                            en_name: "HIROSHIMA",
                            en_description: "( GRENADIN, TRIPLE SEC, ABSENT, BEILIS )",
                            ru_name: "ХИРОСИМА",
                            ru_description: "( ГРЕНАДИН, ТРИПЛ СЕК, АБСЕНТ, БЕЙЛИС )",
                            cost: 50
                        },
                        {
                            en_name: "GAGAUZ FLAG",
                            en_description: "( GRENADINE, BAILIS, VODKA, BLUE CURASAO )",
                            ru_name: "ГАГАУЗКИЙ ФЛАГ",
                            ru_description: "( ГРЕНАДИН, БЭЙЛИС, ВОДКА, БЛЮ КЮРАСАО )",
                            cost: 45
                        },
                    ]
                },
                {
                    adult: true,
                    en_title: "SHOT SETS:",
                    ru_title: "СЕТЫ ШОТОВ:",
                    positions: 
                    [
                        {
                            en_name: "EASY SET",
                            sub_en_name: "5PCS",
                            en_description: "( BOYARSKY, ACID, 20+, MOJITO, BLUE LAMBORGINI )",
                            ru_name: "ЛЕГКИЙ СЕТ",
                            sub_ru_name: "5ШТ",
                            ru_description: "( БОЯРСКИЙ, КИСЛОТНЫЙ, 20+, МОХИТО, СИНИЙ ЛАМБОРГИНИ )",
                            cost: 180
                        },
                        {
                            en_name: "TRY TO SURVIVE",
                            en_description: "( KAZANTIP, SQUIRREL, B-53, NAKED ON THE FLOOR, HIROSIMA )",
                            ru_name: "ПОПРОБУЙ ВЫЖИТЬ",
                            ru_description: "( КАЗАНТИП, БЕЛКА, Б-53, ГОЛЫЙ НА ПОЛУ, ХИРОСИМА )",
                            cost: 220
                        },
                        {
                            en_name: "HONOR OR SHAME?",
                            en_description: "( VODKA 2, TEQUILA 2, GIN 2, RUM 2, SPRITE 4, JUICE 4 )",
                            ru_name: "ЧЕСТЬ ИЛИ ПОЗОР?",
                            ru_description: "( ВОДКА 2, ТЕКИЛА 2, ДЖИН 2, РОМ 2, СПРАЙТ 4, СОК 4 )",
                            cost: 300
                        },
                        {
                            en_description: "DRINK ALL SHOTS IN 45 SECONDS AND GET A FREE HOOKAH",
                            ru_description: "ВЫПЕЙ ВСЕ ШОТЫ ЗА 45 СЕКУНД И ПОЛУЧИ БЕСПЛАТНЫЙ КАЛЬЯН"
                        }
                    ]
                }
            ]
        },
        {
            page: 9,
            background: "background-image: url('./backgrounds/page-9.svg');",
            blocks:
            [
                {
                    adult: true,
                    en_title: "STRONG ALCOHOL:",
                    ru_title: "КРЕПКИЙ АЛКОГОЛЬ:",
                    positions:
                    [
                        {
                            en_name: "WHISKEY",
                            ru_name: "ВИСКИ",
                            cost: "50/55"
                        },
                        {
                            en_name: "BOURBON",
                            ru_name: "БУРБОН",
                            cost: 55
                        },
                        {
                            en_name: "ROM",
                            ru_name: "РОМ",
                            cost: 50
                        },
                        {
                            en_name: "TEQUILA",
                            ru_name: "ТЕКИЛА",
                            cost: 50
                        },
                        {
                            en_name: "JAEGERMEISTER",
                            ru_name: "ЯГЕРМЕЙСТЕР",
                            cost: 50
                        },
                        {
                            en_name: "COGNAC",
                            ru_name: "КОНЬЯК",
                            cost: "40/50"
                        },
                        {
                            en_name: "VODKA",
                            ru_name: "ВОДКА",
                            cost: 50
                        },
                        {
                            en_name: "ABSINTHE",
                            ru_name: "АБСЕНТ",
                            cost: 55
                        },
                        {
                            en_name: "BEILIS",
                            ru_name: "БЕЙЛИС",
                            cost: 45
                        },
                        {
                            en_name: "MARTINI",
                            ru_name: "МАРТИНИ",
                            cost: 50
                        },
                        {
                            en_name: "GIN",
                            ru_name: "ДЖИН",
                            cost: 45
                        }
                    ]
                }
            ]
        },
        {
            page: 10,
            background: "background-image: url('./backgrounds/page-10.svg');",
            blocks: [
                {
                    adult: true,
                    en_title: "BEER:",
                    ru_title: "ПИВО:",
                    positions: 
                    [
                        {
                            en_name: "EFES NON-ALCOHOLIC ",
                            ru_name: "EFES БЕЗАЛКОГОЛЬНЫЙ",
                            cost: 30
                        },
                        {
                            en_name: "EFES ALCOHOLIC",
                            ru_name: "EFES АЛКОГОЛЬНЫЙ",
                            cost: 30
                        },
                        {
                            en_name: "HOEGAARDEN",
                            ru_name: "HOEGAARDEN",
                            cost: 38
                        },
                        {
                            en_name: "CORONA EXTRA",
                            sub_en_name: "( lime / salt )",
                            ru_name: "CORONA EXTRA",
                            sub_ru_name: "( лайм / соль )",
                            cost: 46
                        },
                        {
                            en_name: "KOZEL LIGHT",
                            ru_name: "KOZEL СВЕТЛЫЙ",
                            cost: 30
                        },
                        {
                            en_name: "KOZEL DARK",
                            ru_name: "KOZEL ТЕМНЫЙ",
                            cost: 30
                        },
                        {
                            en_name: "OETINGER",
                            ru_name: "OETINGER",
                            cost: 30
                        },
                        {
                            en_name: "FRANZISKANER",
                            ru_name: "FRANZISKANER",
                            cost: 50
                        }
                    ]
                },
                {
                    en_title: "SNACKS:",
                    ru_title: "СНЭКИ:",
                    positions:
                    [ 
                        {
                            en_name: "FRENCH FRIES",
                            ru_name: "КАРТОФЕЛЬ ФРИ",
                            cost: 50
                        },
                        {
                            en_description: "+ SAUCE [ STANDART: SWEET CHILI ]",
                            sub_ru_name: "+ СОУС [ СТАНДАРТ: СЛАДКИЙ ЧИЛИ ]",
                            cost: 10
                        },
                        {
                            en_name: "PEELED NUTS",
                            ru_name: "ОРЕШКИ ОЧИЩЕННЫЕ",
                            cost: 22
                        },
                        {
                            en_name: "CORN",
                            ru_name: "КУКУРУЗА",
                            cost: 22
                        },
                        {
                            en_name: "PISTACHIO",
                            ru_name: "ФИСТАШКИ",
                            cost: 42
                        },
                        {
                            en_name: "CHIPS",
                            sub_en_name: "( SM BAG )",
                            ru_name: "ЧИПСЫ СРЕДНИЕ",
                            cost: 30
                        },
                        {
                            en_name: "CHIPS",
                            sub_en_name: "( BIG BAG )",
                            ru_name: "ЧИПСЫ БОЛЬШИЕ",
                            cost: 50
                        }
                    ]
                },
                {
                    en_title: "CUTTING:",
                    ru_title: "НАРЕЗКИ:",
                    positions:
                    [
                        {
                            en_name: "CITRUS",
                            en_description: "( ORANGE, LEMON, GRAPEFRUIT )",
                            ru_name: "ЦИТРУСОВАЯ",
                            ru_description: "( АПЕЛЬСИН, ЛИМОН, ГРЕЙПФРУТ )",
                            cost: 70
                        },
                        {
                            en_name: "FRUIT",
                            en_description: "( BANANA, APPLE, ORANGE )",
                            ru_name: "ФРУКТОВАЯ",
                            ru_description: "( БАНАН, ЯБЛОКО, АПЕЛЬСИН )",
                            cost: 70
                        }
                    ]
                }
            ]
        }
    ]
}

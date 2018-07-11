<div class="wr-aside">
    <aside class="wr-flying-nav">
        <div class="wr-flying-nav_links d-block d-md-flex flex-column">
            <a class="wr-flying-nav_links_icon" id="icon-search">
                <svg width="36" height="36" data-toggle="tooltip" data-placement="left" title="Поиск">
                    <use xlink:href="#icon-search-svg"></use>
                </svg>
            </a>
            <a class="wr-flying-nav_links_icon" id="icon-call">
                <svg width="37" height="37" data-toggle="tooltip" data-placement="left" title="Заказать звонок">
                    <use xlink:href="#tel"></use>
                </svg>
            </a>
        </div>
        <div class="wr-flying-nav_links d-block d-md-flex flex-column">
            <a class="wr-flying-nav_links_icon" id="icon-login">
                <svg width="37" height="37" data-toggle="tooltip" data-placement="left" title="Личный кабинет">
                    <use xlink:href="#login"></use>
                </svg>
            </a>
            <a class="wr-flying-nav_links_icon" id="icon-basket">
                <svg width="37" height="37" data-toggle="tooltip" data-placement="left" title="Корзина">
                    <use xlink:href="#icon-cart-svg"></use>
                </svg>
            </a>
            <a class="wr-flying-nav_links_icon" id="icon-selected">
                <svg width="37" height="37" data-toggle="tooltip" data-placement="left" title="Избранное">
                    <use xlink:href="#favorites"></use>
                </svg>
            </a>
            <a class="wr-flying-nav_links_icon" id="icon-compare">
                <svg width="37" height="37" data-toggle="tooltip" data-placement="left" title="Сравнение">
                    <use xlink:href="#compare"></use>
                </svg>
            </a>
        </div>
        <div class="wr-flying-nav_links d-block d-md-flex flex-column">
            <a class="wr-flying-nav_links_icon" id="icon-baloon">
                <svg width="37" height="37" data-toggle="tooltip" data-placement="left" title="Задать вопрос">
                    <use xlink:href="#baloon"></use>
                </svg>
            </a>
        </div>
    </aside>

    <div class="wr-icon" id="search">
        <div class="wr-contacts-form wr-contacts-form_search wr-contacts-form_light">
            <? $APPLICATION->IncludeComponent(
                "bitrix:search.form",
                "pamira-search-form",
                Array(
                    "PAGE" => "#SITE_DIR#search/index.php",
                    "USE_SUGGEST" => "Y"
                )
            ); ?>
        </div>
        <!--    <div class="wr-contacts-form wr-contacts-form_search wr-contacts-form_light">-->
        <!--        <img src="img/icons/close-red.svg" alt="">-->
        <!--        <form class="search" name="search" method="post">-->
        <!--            <input class="search__input" name="search" type="text" placeholder="Найдется все! Например, варочные панели...">-->
        <!--            <button class="btn btn-primary search__btn">Найти</button>-->
        <!--        </form>-->
        <!--    </div>-->
    </div>

    <div class="wr-icon" id="call">
        <div class="wr-contacts-form wr-contacts-form_light">
            <img src="img/icons/close-red.svg" alt="">
            <form class="form-questions" name="form-call" method="post">
                <div class="form-questions__title form-questions__title_light">
                    ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
                </div>
                <div class="form-questions__inputs">
                    <input type="text" name="form-call-input-name" class="form-questions__input" placeholder="Ваше имя"
                           required>
                </div>
                <div class="form-questions__inputs">
                    <input type="tel" name="form-call-input-tel" class="form-questions__input" placeholder="Ваш телефон"
                           required>
                </div>
                <div class="form-questions__text form-questions__text_light">
                    Заполните, пожалуйста, поля, и наши специалисты
                    перезвонят Вам в течение пяти минут
                </div>
                <div class="form-questions__checkbox">

                    <input type="checkbox" name="personal-data" required>&nbsp;- Я соглашаюсь на обработку персональных
                    даных

                </div>
                <div class="form-questions__btn">
                    <button class="btn btn-hover_white form-questions__button" name="form-questions__button">Заказать
                        звонок
                    </button>
                </div>
            </form>
        </div>
    </div>


    <div class="wr-icon wr-icon_basket" id="basket">
        <div class="basket">
            <button class="icon-close">
                <svg width="32" height="32" data-toggle="tooltip" data-placement="left"
                     title="Закрыть">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>

            <?
            $APPLICATION->IncludeComponent(
                "bitrix:eshopapp.basket",
                "pamira-basket",
                array(
                    "AJAX_MODE" => "N",
                    "AJAX_OPTION_ADDITIONAL" => "",
                    "AJAX_OPTION_HISTORY" => "N",
                    "AJAX_OPTION_JUMP" => "N",
                    "AJAX_OPTION_STYLE" => "Y",
                    "CATALOG_FOLDER" => "/eshop_app/catalog/",
                    "COLUMNS_LIST" => array(
                        0 => "NAME",
                        1 => "PRICE",
                        2 => "QUANTITY",
                        3 => "DELETE",
                        4 => "DELAY",
                        5 => "WEIGHT",
                    ),
                    "COUNT_DISCOUNT_4_ALL_QUANTITY" => "N",
                    "HIDE_COUPON" => "N",
                    "PATH_TO_ORDER" => "/personal/order.php",
                    "PRICE_VAT_SHOW_VALUE" => "N",
                    "QUANTITY_FLOAT" => "N",
                    "SET_TITLE" => "Y",
                    "COMPONENT_TEMPLATE" => "pamira-basket",
                    "VARIABLE_ALIASES" => array(
                        "ELEMENT_ID" => "ELEMENT_ID",
                        "SECTION_ID" => "SECTION_ID",
                    )
                ),
                false
            );
            ?>
        </div>

    </div>


    <div id="selected" class="wr-icon wr-icon_basket">
        <div class="basket">

            <img src="img/icons/close-red.svg" alt="">

            <div class="basket__title">
                ИЗБРАННОЕ
            </div>

            <div class="basket__product">
                <div class="product-name">
                    Вытяжка Faber Flexa Glass M6 BK A60
                    Faber Flexa Gl
                </div>
                <div class="product-price product-price_selected">
                    700 390 руб./1 шт
                </div>
                <div class="product-info">
                    А Вы знаете о преимуществах вытяжек Faber?
                </div>

                <div class="basket-btns">
                    <button class="btn btn-hover_black" name="form-questions__button">В корзину</button>
                </div>
                <img src="img/icons/close-white.svg" alt="">
            </div>

            <div class="basket__product basket__product_gray">

                <div class="product-name">
                    Вытяжка Faber Flexa Glass M6 BK A60
                    Faber Flexa Gl
                </div>
                <div class="product-price product-price_selected">
                    700 390 руб./1 шт
                </div>
                <div class="product-info">
                    А Вы знаете о преимуществах вытяжек Faber?
                </div>

                <div class="basket-btns">
                    <button class="btn btn-hover_black" name="form-questions__button">В корзину</button>
                </div>

                <img src="img/icons/close-white.svg" alt="">
            </div>

        </div>
    </div>
</div>
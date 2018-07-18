<?
define("HIDE_SIDEBAR", true);
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Козрина");
?>
    <div class="main__promo main__promo_dark">
        <div class="container">
            <h1>Корзина</h1>
            <? $APPLICATION->IncludeComponent(
                "bitrix:sale.basket.basket",
                "pamira-basket",
                Array(
                    "ACTION_VARIABLE" => "basketAction",
                    "ADDITIONAL_PICT_PROP_4" => "-",
                    "AUTO_CALCULATION" => "Y",
                    "BASKET_IMAGES_SCALING" => "adaptive",
                    "COLUMNS_LIST_EXT" => array("PREVIEW_PICTURE", "DISCOUNT", "DELETE", "DELAY", "TYPE", "SUM"),
                    "COLUMNS_LIST_MOBILE" => array("PREVIEW_PICTURE", "DISCOUNT", "DELETE", "DELAY", "TYPE", "SUM"),
                    "COMPATIBLE_MODE" => "Y",
                    "CORRECT_RATIO" => "N",
                    "DEFERRED_REFRESH" => "N",
                    "DISCOUNT_PERCENT_POSITION" => "top-right",
                    "DISPLAY_MODE" => "extended",
                    "GIFTS_BLOCK_TITLE" => "Выберите один из подарков",
                    "GIFTS_CONVERT_CURRENCY" => "N",
                    "GIFTS_HIDE_BLOCK_TITLE" => "N",
                    "GIFTS_HIDE_NOT_AVAILABLE" => "N",
                    "GIFTS_MESS_BTN_BUY" => "Выбрать",
                    "GIFTS_MESS_BTN_DETAIL" => "Подробнее",
                    "GIFTS_PAGE_ELEMENT_COUNT" => "4",
                    "GIFTS_PLACE" => "BOTTOM",
                    "GIFTS_PRODUCT_PROPS_VARIABLE" => "prop",
                    "GIFTS_PRODUCT_QUANTITY_VARIABLE" => "quantity",
                    "GIFTS_SHOW_DISCOUNT_PERCENT" => "Y",
                    "GIFTS_SHOW_IMAGE" => "Y",
                    "GIFTS_SHOW_NAME" => "Y",
                    "GIFTS_SHOW_OLD_PRICE" => "N",
                    "GIFTS_TEXT_LABEL_GIFT" => "Подарок",
                    "HIDE_COUPON" => "Y",
                    "LABEL_PROP" => array(),
                    "LABEL_PROP_MOBILE" => "",
                    "LABEL_PROP_POSITION" => "",
                    "PATH_TO_ORDER" => "/zakaz/",
                    "PRICE_DISPLAY_MODE" => "Y",
                    "PRICE_VAT_SHOW_VALUE" => "N",
                    "PRODUCT_BLOCKS_ORDER" => "props,sku,columns",
                    "QUANTITY_FLOAT" => "N",
                    "SET_TITLE" => "Y",
                    "SHOW_DISCOUNT_PERCENT" => "Y",
                    "SHOW_FILTER" => "Y",
                    "SHOW_RESTORE" => "Y",
                    "TEMPLATE_THEME" => "",
                    "TOTAL_BLOCK_DISPLAY" => array("bottom"),
                    "USE_DYNAMIC_SCROLL" => "Y",
                    "USE_ENHANCED_ECOMMERCE" => "N",
                    "USE_GIFTS" => "N",
                    "USE_PREPAYMENT" => "N",
                    "USE_PRICE_ANIMATION" => "Y"
                )
            ); ?>
        </div>
    </div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>
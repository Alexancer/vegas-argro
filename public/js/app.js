'use strict';

var app = angular.module('VegasAgro', ['pascalprecht.translate', 'ngRoute', 'ngPDFViewer']);

app.config(function($translateProvider) {
    $translateProvider.translations('en', {
        language : 'language',
        provider : "SIA CompaQpeat – Our company was established in 2001 and works under compaQpeat brand since 2007. Producing not only peat but as well as professional substrates using its own peat bogs and manufacturing plant.  Our main peat bogs are located on the west coast of Baltic Sea - 40km from city of Liepaja and near the little village of Rucava, Latvia. The total area of cultivated peat bogs is 300ha.         Baltic White Peat is worldwide known for its very good structure and its best suitability as the main raw material in production of professional substrates. Production. Company using the best known and widely accepted technologies for melioration, peat harvesting, screening, mixing, compressing and packaging. Peat and professional substrates are available in 70L bags, 250L bags and Big Bales. Professional Substrates are mixed according to client’s needs and specifications. Our experienced consultants are available for professional advice in picking the right sort of substrate blend that will promote your success in cultivation."
    });
    $translateProvider.translations('ua', {
        language : 'мова сайту',
        provider : "SIA CompaQpeat - Наша компанія заснована в 2001 році і працює під брендом compaQpeat з 2007 року. Компанія займається не тільки видобутком торфу з власного родовища, а й також виготовленням професійного субстрату за власною рецептурою на сучасному заводі. Наші основні торфовища розташовані на західному узбережжі Балтійського моря - в 40 км від міста Лієпаї, що поряд  із селищем Руцава, Латвія. Загальна площа культивованих торфовищ складає 300 га. Балтійський Білий Торф у всьому світі відомий своєю відмінною структурою і є найкращим в якості основної сировини для виробництва професійних субстратів. Під час виробництва  компанія використовується передові технології  в: меліорації родовища, торфовидобування, просіювання, змішування, пресування і упакування субстрату. Торф і професійні субстрати фасуються в 70л мішки, 250л тюки та бейли по 6 м3. Професійні субстрати змішуються відповідно до потреб та специфікацій замовника. Наші досвідчені консультанти надають професійні консультації з підбору високоякісного субстрату для Вашого виробництва."
    });
    $translateProvider.translations('ru', {
        language : 'язык',
        provider : "SIA CompaQpeat – наша компания была создана в 2001 роду и работает с брендом compaQpeat с 2007 года. Компания занимается не только добычей торфа со своего месторождения, но и производством профессионального субстрата за собственной рецептурой на  современном заводе. Наши основные месторождения сосредоточены на западном побережье Балтийского моря в 40 км от города Лиепая, что находится рядом с поселком Руцава, Латвия. Общая площадь  культивируемых торфяников составляет 300 га. Балтийский Белый Торф во всем мире известен своим отличным качеством и является лучшим в качестве сырья для производства профессионального субстрата. В процессе производства компания использует передовые технологии в: мелиорации месторождений, торфодобыче, очистке, смешивании, прессовании и упаковке субстрата. Торф и профессиональные субстраты фасуются в 70л мешки, 250 л тюки и бейлы по 6 м3. Профессиональные субстраты смешивают в соотвецтвии с потребностями и спецификой заказчика.  Наши опытные консультанты осуществят профессиональные консультации, что помогут подобрать лучший вид субстрата для Вашего производства."
    });
});

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/templates/content/main.dust',
                controller: 'main'
            }).
            when('/substrates/professional', {
                templateUrl: '/templates/content/substrates/professional.dust',
                controller: 'main'
            }).
            when('/provider', {
                templateUrl: '/templates/content/provider/provider.dust',
                controller: 'main'
            })
            .when('/info/calendar', {
                templateUrl: '/templates/content/info/calendar.dust',
                controller: 'main'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

app.controller('main', function($scope, $translate) {
    $scope.toggleLanguage = function (language) {
        $translate.use(language);
    };

    $scope.toggleLanguage('ua');
});


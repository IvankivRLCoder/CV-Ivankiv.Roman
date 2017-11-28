"use strict";
angular.module('dialogDemo2', ['ngMaterial']).controller('AppCtrl', function ($scope, $mdDialog) {
    $scope.openOffscreen0 = function () {
        $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('Front End developer 06.2016-05.2017 ').textContent("I'm specialized on frontend development. I gained experience and qualified consulting on the topics: AngularJS, jQuery; Angular Material, Bootstrap, Materializecss,  Muse; HTML5, CSS3, CSS, Electron, d3.js. Developed promotion banner animations using GreenSock js library. Learnt about the specifics of Drupal 8 and Magento 1.9. ").ariaLabel('Offscreen Demo').ok('Esc').openFrom({

            top: -50,
            width: 30,
            height: 80
        }).closeTo({
            left: 1500
        }));
    };
    $scope.openOffscreen1 = function () {

        $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('FrontEnd Student. 02.2016-06.2016').textContent('I studied and used in practice: JavaScript, frameworks like jQuery, AngularJS, NodeJS librires, tools for front-end development and how to work in a team. The Git, GitHub, HTML5, CSS3, SASS, Gulp. Each of these pieces I used to practice doing homework. Once we did the game tanks I was team leader for the participation of 5 people. I am happy with my studies because teachers had the coolest!').ariaLabel('Offscreen Demo').ok('Esc').openFrom({
            top: -50,
            width: 30,
            height: 80
        }).closeTo({
            left: 1500
        }));
    };
    $scope.openOffscreen2 = function () {
        $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('FrontEnd developer in Atlassian addons development at BrizoIT. 05.2017-to').textContent("I'm specialized on add-on development and consulting with regards to Atlassian products. I gained experience and qualified consulting on the topics: Angular 2-5; SCSS; REST API; JIRA;").ariaLabel('Offscreen Demo').ok('Esc').openFrom({

            top: -50,
            width: 30,
            height: 80
        }).closeTo({
            left: 1500
        }));
    };
    $scope.openOffscreen3 = function () {
        $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('Supervisor team of 6 employees. 07.2014-08.2015').textContent('At first I worked as a manager to work with customers, was subsequently elevated to the position of the middle manager. Supervisor team of 6 employees, the average development manager sales team and expanding markets. Personal work with strategic customers. The result is the creation from scratch of training as a result of performance of the team and good results.').ariaLabel('Offscreen Demo').ok('Esc').openFrom({

            top: -50,
            width: 30,
            height: 80
        }).closeTo({
            left: 1500
        }));
    };
    $scope.openOffscreen4 = function () {
        $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('Manager of Sales and Customer Service. 04.2013-07.2014').textContent('When I came to this company I first worked as merchandiser (made layout of goods on the shelves in major supermarkets). Then I was asked to move to the position of sales manager.').ariaLabel('Offscreen Demo').ok('Esc').openFrom({
            top: -50,
            width: 30,
            height: 80
        }).closeTo({
            left: 1500
        }));
    };
    $scope.openOffscreen5 = function () {
        $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).title('Коротко про мене.').textContent("Не хочу багато розказувати, але хочу щоб ви зрозуміли, хто я за один. Почнемо мабуть з того, що скільки себе пам'ятаю стільки часу я стараюсь отримати маржу від чогось. Свій досвід розпочав отримувати ще з малку коли стояв на базарі і продавав всякі непотрібні людям штуки, потім була робота мерчендайзером lvl Up менеджером з продажу lvl Up одним з наймолодших тім лідерів корпорації, lvl Up і місце менеджера зі збуту в монопольній табачній корпарації моє. Постійне бажання розвиватись і навчатись нового є нестримне тому за деякий час я зрозумів, що хочу стати кимось більшим ніж менеджером в торгівлі, проте, щоб досягнути більшого, мені необхідно мати додаткові скіли, які я можу отримати лише навчаючись. З рішенням я не забарився оскільки розумів, що це питання часу для мене. Для себе я обираю хардкорний сюжет. Маючи дружину в декреті і 4-х місячну доньку я звільняюсь чим приводжу своїх рідних і самого себе в легкий шок. Але це і є моя ціль: зробити шоковий стан для себе і своєї свідомості, оскільки в таких умовах мій мозок працює ефективніше. Отже, що я мав на той час: ціль влаштуватись на роботу в приємний колектив на посаду джуна ФронтЕнд розробника не пізніше, як через 6 місяців після звільнення оскільки заощаджень на більше і не хватить згідно мого SMART-у. В даний момент можу з впевненістю сказати що цих 6 місяців пройшло і мені вдалось влаштуватись на роботу вже на 5-тому місяці! Насправді коли займаєшся чимось цікавим для себе, то час йде дуже швидко і виникає бажання добавити ще декілька годин в цьому дні. Працюючи з максимальними зусиллями я досягаю потрібних результатів. Якщо відверто я задоволений результатом першої глави цієї нової книги, я так хочу кинути виклик навичкам і новим скілам і взяти верх. Мені потрібно лише шанс..мені потрібна лише можливість.").ariaLabel('Offscreen Demo').ok('Esc').openFrom({
            top: -50,
            width: 30,
            height: 80
        }).closeTo({
            left: 1500
        }));
    };
});
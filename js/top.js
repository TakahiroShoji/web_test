(function()
{
    var module = angular.module('app', []);

    /*-----------------------------
    - MainController
    - 一番大元となるコントローラー
    ------------------------------*/
    module.controller('MainController', function($rootScope, $scope)
    {
        $rootScope.login_flg = false;
    });


    /*----------------------------
    - LoginController
    - ログイン画面の制御コントローラー
    -----------------------------*/
    module.controller('LoginController', function($rootScope, $scope)
    {
        // ログインボタンの処理
        $scope.login = function()
        {
            var address  = $scope.emailAddress;    // Eメールアドレスを格納
            var password = $scope.passWord;        // パスワードを格納

            // API実行の記述を記載予定箇所

            // アドレスとパスワードが正しければ画面を遷移させる
            if (address == 'test@t' && password == 'test') {
                $rootScope.login_flg = true;
            }
            // 間違っていたらアラートダイアログをだす
            else {
                ons.notification.alert(
                    'Eメールもしくはパスワードが<br>間違っています', {
                        title     : '',
                        animation : 'fade'
                    }
                );
            }

            //$rootScope.login_flg = true;
        }
    });

    /*-----------------------------
    - TopController
    - トップ画面の制御コントローラー
    ------------------------------*/
    module.controller('TopController', function($rootScope, $scope)
    {
        // 本日日付
        var day   = new Date();
        var year  = String(day.getFullYear());
        var month = String(day.getMonth() + 1);
        var date  = String(day.getDate());

        if (month.length == 1) {
            month = '0' + month;
        }

        $scope.start_day = year + '/' + month + '/' + date;

        //----------------------------
        // logout
        // ログアウトを行う制御
        //----------------------------
        $scope.logout = function()
        {
            ons.notification.confirm(
                'ログアウトしてよろしいですか？', {
                    buttonLabels : ['OK', 'Cancel'],
                    title        : '',
                    animation    : 'fade',
                    callback     : function(index) {

                        switch(index) {
                            case 0:
                                console.log('ログアウトします');
                                $rootScope.login_flg = false;
                                break;

                            case 1:
                                console.log('ログアウトしません');
                                break;
                        }
                    }
                }
            );
        }
    });
})()
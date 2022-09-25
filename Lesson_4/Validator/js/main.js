var regName = /^[a-zA-Zа-яА-ЯёЁ]+$/i;
        var regTel = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
        var regEmail = /^[a-z0-9]+[.-]?[a-z0-9]+@[a-z]+.[a-z]{2,3}$/;
        var regMessage = /.+/i;

        function check(value, reg, selector) {
            var field = document.querySelector('#' + selector);
            var test = reg.test(value);
            var error = document.querySelector('#' + selector + '_error');
            if (test) {
                field.style.backgroundColor = 'green';
                error.innerHTML = '';
            } else {
                field.style.backgroundColor = 'red';
                error.innerHTML = 'Ошибка!';
            }
        }
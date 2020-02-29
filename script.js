$(function () {
    let a = 1;
    $('.bold').click(() => {
        if (a == 1) {
            $('.lorem').css({
                fontWeight: 'bold'
            })
            a = 0;
        } else {
            $('.lorem').css({
                fontWeight: 'normal'
            })
            a = 1;
        }
    });
    let b = 1;
    $('.italic').click(() => {
        if (b == 1) {
            $('.lorem').css({
                fontStyle: 'italic'
            })
            b = 0;
        } else {
            $('.lorem').css({
                fontStyle: 'normal'
            })
            b = 1;
        }
    });
    let c = 1;
    $('.underline').click(() => {
        if (c == 1) {
            $('.lorem').css({
                textDecoration: 'underline'
            })
            c = 0;
        } else {
            $('.lorem').css({
                textDecoration: 'none'
            })
            c = 1;
        }
    });
    let d = 1;
    $('.strikethrough').click(() => {
        if (d == 1) {
            $('.lorem').css({
                textDecoration: 'line-through'
            })
            d = 0;
        } else {
            $('.lorem').css({
                textDecoration: 'none'
            })
            d = 1;
        }
    });
    $('.left').click(() => {
        $('.lorem').css({
            textAlign: 'left'
        })
    });
    $('.center').click(() => {
        $('.lorem').css({
            textAlign: 'center'
        })
    });
    $('.right').click(() => {
        $('.lorem').css({
            textAlign: 'right'
        })
    });

    $('.font').click(() => {
        if ($('.drop1').css('display') == 'block') {
            $('.drop1').css('display', 'none');
        } else {
            $('.drop1').css('display', 'block');
        }
    })

    $('.drop1 p').click(function () {
        $('.lorem').css('fontFamily', `${$(this).text()}`)
        $('.drop1').css({
            display: 'none'
        })
    })
    $('.textHeight').click(() => {
        if ($('.drop2').css('display') == 'block') {
            $('.drop2').css('display', 'none');
        } else {
            $('.drop2').css('display', 'block');
        }
    })

    document.querySelector('.photo').onclick = function () {
        document.querySelector('.modalWindow2').style.display = 'block';
    }

    document.querySelector('.palette').onclick = function () {
        document.querySelector('.modalWindow').style.display = 'block';
    }

    let arrC = ['#a2b9bc', '#b2ad7f', '#878f99', '#6b5b95', '#feb236', '#d64161', '#ff7b25', '#d6cbd3', '#d5e1df', '#e3eaa7', '#b5e7a0', '#86af49', '#618685', '#36486b', '#4040a1', '#92a8d1', '#034f84', '#f7cac9', '#80ced6', '#50394c', '#ff0000', '#000000'];

    $('.block').each(function (index, value) {
        $(value).css('backgroundColor', arrC[index])
    })
    $('.block').each(function (index, value) {
        $(value).click(() => {
            $('.lorem').css('color', arrC[index])
        })
    })

    $('.block2').each(function (index, value) {
        $(value).css('backgroundColor', arrC[index])
    })
    $('.block2').each(function (index, value) {
        $(value).click(() => {
            $('.lorem').css('backgroundColor', arrC[index])
        })
    })

    let arrI = ['url(./images/1.jpg)', 'url(./images/2.jpg)', 'url(./images/3.jpg)', 'url(./images/4.jpg)', 'url(./images/5.jpg)', 'url(./images/6.jpg)', 'url(./images/7.jpg)', 'url(./images/8.jpg)', 'url(./images/9.jpg)'];
    $('.block3').each(function (index, value) {
        $(value).css('backgroundImage', arrI[index])
    })
    $('.block3').each(function (index, value) {
        $(value).click(() => {
            $('.lorem').css('backgroundImage', arrI[index])
        })
    })

    $('.drop2 p').click(function () {
        $('.lorem').css('fontSize', `${$(this).text()}`)
        $('.drop2').css({
            display: 'none'
        })
    })

    $('.exit').click(() => {
        $('.modalWindow').css({
            display: 'none'
        })
    })

    $('.exit2').click(() => {
        $('.modalWindow2').css({
            display: 'none'
        })
    })

    $('.colors').click(() => {
        $('.bottom2').css({
            display: 'flex'
        })
        $('.whiteBlock2').css({
            height: '280px'
        })
        $('.bottomImages').css({
            display: 'none'
        })
        $('.blockFiles').css({
            display: 'none'
        })
        $('.colors').css({
            color: 'grey'
        })
        $('.files').css({
            color: 'rgb(3, 129, 231)'
        })
        $('.images').css({
            color: 'rgb(3, 129, 231)'
        })
    })

    $('.images').click(() => {
        $('.bottomImages').css({
            display: 'flex'
        })
        $('.whiteBlock2').css({
            height: '280px'
        })
        $('.images').css({
            color: 'grey'
        })
        $('.blockFiles').css({
            display: 'none'
        })
        $('.colors').css({
            color: 'rgb(3, 129, 231)'
        })
        $('.files').css({
            color: 'rgb(3, 129, 231)'
        })
        $('.bottom2').css({
            display: 'none'
        })
    })

    $('.files').click(() => {
        $('.bottom2').css({
            display: 'none'
        })
        $('.bottomImages').css({
            display: 'none'
        })
        $('.files').css({
            color: 'grey'
        })
        $('.blockFiles').css({
            display: 'block'
        })
        $('.colors').css({
            color: 'rgb(3, 129, 231)'
        })
        $('.images').css({
            color: 'rgb(3, 129, 231)'
        })
        $('.whiteBlock2').css({
            height: '160px'
        })
    })

    $('input[type="file"]').change(function (event) {
        const url = URL.createObjectURL(event.target.files[0]);
        $('.lorem').css('background', `url(${url})`)
    })
    $('.lock').click(() => {
        $('.modalWindow3').css({
            display: 'block'
        })
    })

    let regExp = /^admin$/
    $('.button').click(() => {
        if (regExp.test($('.sign:first').val()) && regExp.test($('.sign:last').val())) {
            $('.sign').css({
                borderColor: 'green',
            })
            $('.textEmpty').css({
                visibility: 'hidden'
            })
            $('.modalWindow3').css({
                display: 'none'
            })
            $('.code').css({
                pointerEvents: 'auto'
            })
        } else {
            if ($('.sign').val() == '') {
                $('.textEmpty').text('Value is empty')
            } else {
                $('.textEmpty').text('Please check your login or password')
            }
            $('.sign').css({
                borderColor: 'red'
            })
            $('.textEmpty').css({
                visibility: 'visible'
            })
        }
    })
    
    $('.code').click(() => {
        $('.container-fluid').css({
            display: 'none'
        })
        $('.container2-fluid').css({
            display: 'block'
        })
        $('.lorem2').text($('.lorem').html());
    })

    $('.save').click(() => {
        $('.container2-fluid').css({
            display: 'none'
        })
        $('.container-fluid').css({
            display: 'block'
        })
        $('.lorem').html($('.lorem2').val())
    })

    $('.table').click(() => {
        $('.modalWindow4').css({
            display: 'block'
        })
    })
    $('.listOl').click(() => {
        $('.modalWindow5').css({
            display: 'block'
        })
    })

    $('.listUl').click(() => {
        $('.modalWindow6').css({
            display: 'block'
        })
    })

    $('.exit3').click(() => {
        $('.modalWindow4').css({
            display: 'none'
        })
    })

    $('.button2').click(() => {
        $('.f2text').val('')
    })

    $('.button3').click(() => {

        const area = document.getElementById('area');
        const mainContent = document.getElementById('mainContent');
        const block5 = document.querySelector('.block5')

        let countTR = f2.countTR.value;
        let regExp2 = /^[0-9]{1,2}$/;
        countTR = regExp2.test(countTR);

        let widthTD = f2.widthTD.value;
        let regExp3 = /^[0-9]{1,2}$/;
        widthTD = regExp3.test(widthTD);

        let borderWidth = f2.borderWidth.value;
        let regExp4 = /^[0-9]{1,2}$/;
        borderWidth = regExp4.test(borderWidth);

        let countTD = f3.countTD.value;
        let regExp5 = /^[0-9]{1,2}$/;
        countTD = regExp5.test(countTD);

        let heightTD = f3.heightTD.value;
        let regExp6 = /^[0-9]{1,2}$/;
        heightTD = regExp6.test(heightTD);

        let select1 = f4.select1.value;
        let regExp7 = /choose/;
        select1 = regExp7.test(select1);

        let select2 = f5.select2.value;
        let regExp8 = /choose/;
        select2 = regExp8.test(select2);

        if (countTR == true) {
            f2.countTR.style.border = 'solid green 2px'
        } else {
            f2.countTR.style.border = 'solid red 2px'
        }

        if (widthTD == true) {
            f2.widthTD.style.border = 'solid green 2px'
        } else {
            f2.widthTD.style.border = 'solid red 2px'
        }

        if (borderWidth == true) {
            f2.borderWidth.style.border = 'solid green 2px'
        } else {
            f2.borderWidth.style.border = 'solid red 2px'
        }

        if (countTD == true) {
            f3.countTD.style.border = 'solid green 2px'
        } else {
            f3.countTD.style.border = 'solid red 2px'
        }

        if (heightTD == true) {
            f3.heightTD.style.border = 'solid green 2px'
        } else {
            f3.heightTD.style.border = 'solid red 2px'
        }

        if (select1 == true) {
            f4.select1.style.border = 'solid red 2px'
        } else {
            f4.select1.style.border = 'solid green 2px'
        }

        if (select2 == true) {
            f5.select2.style.border = 'solid red 2px'
        } else {
            f5.select2.style.border = 'solid green 2px'
        }

        if (countTR == true && widthTD == true && borderWidth == true && countTD == true && heightTD == true && select1 == false && select2 == false) {
            $('.textEmpty2').css({
                visibility: 'hidden'
            })

            let table1 = document.createElement('table')
            table1.style.display = 'inline-block'
            table1.style.width = '100%'
            table1.style.float = 'left'

            let trT = f2.countTR.value
            let widTd = f2.widthTD.value
            let bordwid = f2.borderWidth.value
            let tdT = f3.countTD.value
            let heiT = f3.heightTD.value
            let bordType = f4.select1.value
            let bordCol = f5.select2.value

            for (let i = 1; i <= trT; i++) {
                let tr = document.createElement('tr')
                table1.appendChild(tr)
                for (let j = 0; j < tdT; j++) {
                    let td = document.createElement('td')
                    td.style.width = widTd + 'px'
                    td.style.height = heiT + 'px'
                    td.textContent = "TD";
                    td.style.borderWidth = bordwid + 'px;'
                    td.style.borderColor = bordCol
                    td.style.borderStyle = bordType
                    tr.appendChild(td)
                }
                block5.appendChild(table1);
            }
            area.value += block5.innerHTML;
            block5.querySelector('table').remove()
        }
        if (countTR == false || widthTD == false || borderWidth == false || countTD == false || heightTD == false || select1 == true || select2 == true) {
            $('.textEmpty2').css({
                visibility: 'visible'
            })
        }
    })

    $('.exit4').click(() => {
        $('.modalWindow5').css({
            display: 'none'
        })
    })

    $('.button5').click(() => {
        $('.f6text').val('')
        $('.selectOl').val('choose Ol type mark')
    })

    const block5 = document.querySelector('.block5')

    $('.button6').click(() => {
        let countLI = f6.countLI.value;
        let regExp9 = /^[0-9]{1,2}$/;
        countLI = regExp9.test(countLI);

        let select3 = f6.select3.value;
        let regExp10 = /choose/;
        select3 = regExp10.test(select3);

        if (countLI == true) {
            f6.countLI.style.border = 'solid green 2px'
        } else {
            f6.countLI.style.border = 'solid red 2px'
        }

        if (select3 == true) {
            f6.select3.style.border = 'solid red 2px'
        } else {
            f6.select3.style.border = 'solid green 2px'
        }

        if (countLI == true && select3 == false) {
            $('.textEmpty3').css({
                visibility: 'hidden'
            })
        }
        if (countLI == false || select3 == true) {
            $('.textEmpty3').css({
                visibility: 'visible'
            })
        }

        if (countLI == true && select3 == false) {
            let LI = f6.countLI.value;
            let Pli = f6.select3.value;

            let ol = document.createElement('ol')
            ol.style.float = 'left'
            ol.style.marginRight = '70%'

            for (let i = 0; i <= LI; i++) {
                let li = document.createElement('li')
                li.innerHTML = `item ${i}`
                li.style.listStyle = Pli;
                li.style.color = 'black'
                ol.appendChild(li)
            }
            block5.appendChild(ol);
            area.value += block5.innerHTML;
            block5.querySelector('ol').remove()
        }
    })

    $('.exit5').click(() => {
        $('.modalWindow6').css({
            display: 'none'
        })
    })

    $('.button8').click(() => {
        $('.f7text').val('')
        $('.selectUl').val('choose Ul type mark')
    })

    $('.button9').click(() => {
        let countUl = f7.countUl.value;
        let regExp10 = /^[0-9]{1,2}$/;
        countUl = regExp10.test(countUl);

        let select4 = f7.select4.value;
        let regExp11 = /choose/;
        select4 = regExp11.test(select4);

        if (countUl == true) {
            f7.countUl.style.border = 'solid green 2px'
        } else {
            f7.countUl.style.border = 'solid red 2px'
        }

        if (select4 == true) {
            f7.select4.style.border = 'solid red 2px'
        } else {
            f7.select4.style.border = 'solid green 2px'
        }

        if (countUl == true && select4 == false) {
            $('.textEmpty4').css({
                visibility: 'hidden'
            })
        }
        if (countUl == false || select4 == true) {
            $('.textEmpty4').css({
                visibility: 'visible'
            })
        }

        if (countUl == true & select4 == false) {
            let LI2 = f7.countUl.value;
            let Pli2 = f7.select4.value;

            let ul = document.createElement('ul')
            ul.style.float = 'left'
            ul.style.marginRight = '70%'

            for (let i = 0; i <= LI2; i++) {
                let li = document.createElement('li')
                li.innerHTML = `item ${i}`
                li.style.listStyle = Pli2;
                li.style.color = 'black';
                ul.appendChild(li)
            }
            block5.appendChild(ul);
            area.value += block5.innerHTML;
            block5.querySelector('ul').remove()
        }
    })
})
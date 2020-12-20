<h1>Maks</h1>
<h2>File map</h2>
<ul>
    <li>setting - основной файл в котором подключениы все стили</li>
    <li>vars - переменные, breakeponts, colors, font-families</li>
    <li>mixins - миксины</li>
    <li>reset - сброс основных стилей html разметки</li>
    <li>helpers - классы хелперы такие как mr,pr, fw</li>
    <li>typography - стили типографии</li>
    <li>color-shema - стили хелперы для стилизации background-color, color (цвета шрифтов)</li>
    <li>custom - кастоные стили, миксины для проекта</li>
</ul>
<h2>Осноные миксины</h2>
<ul>
    <li>mq - аналог media-breakpoint-up,down bootsrap. используеться для медиа запросов</li>
    <code>
      @include mq(1000px, max) {
        padding-top: 4rem;
        font-size: 4rem !important;
      }
      @include mq($DesktopWidth, max) {
        padding-top: 4rem;
        font-size: 4rem !important;
      }
      @include mq($DesktopWidth, min) {
        padding-top: 5rem;
        font-size: 10rem !important;
      }
    </code>
    <li>afs - адаптивный стиль font-size для основных breakpoints</li>
    <code>
        h2 {
            @include afs(30px,25px,20px,15px);
        }
    </code>
    <li>positionCenter - абослюно центриует елемнет. Анологичные positionCenterX,positionCenterY</li>
    <li>dialog-wingow - используеться для диалоговых окон</li>
    <li>br - используеться дла border-radius, прини</li>
    <code>
        .cicle {
            @include br(50%);
        }
    </code>
    <li>size - задает певым параметом width,2-м height. при использвовании только 1-го параметра задает height = width</li>
        <code>
        .block {
            @include size(100px);
        }
        </code>
    <li>pseudo - испозуеться для псевдо ел-тов</li>
    <code>
        &:after {
            @include pseudo('>');
            @include positionCenterX;
        }
    </code>
    <li>ф-ция get-vw - переводит px в vw. удобен для банерных текстов или шрифтов > 100px. 1-й параметр размер шрифта. 2-й точка из от которой шрифт будет равен первому параметру (по дефолту 1920) менять зн-е в mixins</li>
    <code>
        h1 {
            font-size: get-vw(100px, 1920);
        }
        .banner__text {
            font-size: get-vw(400px);
        }
    </code>
</ul>
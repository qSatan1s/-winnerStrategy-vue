<h1>Maks</h1>
<h2>File map</h2>
<ul>
    <li>setting - основной файл в котором подключениы все стили</li>
    <li>vars - переменные, breakeponts, colors, font-families</li>
    <li>mixins - миксины</li>
    <li>reset - сброс основных стилей html разметки</li>
    <li>helpers - стили для container, классы хелперы такие как mr,pr, fw</li>
    <li>typography - стили типографии</li>
    <li>color-shema - стили хелперы для стилизации background-color, color (цвета шрифтов)</li>
    <li>custom - кастоные стили, миксины для проекта</li>
</ul>
<h2>Осноные миксины</h2>
<ul>
    <li>mq - аналог media-breakpoint-up,down bootsrap. используеться для медиа запросов</li>
      <h3>Без миксинов</h3>
      <pre>
        <code>
          @media screen and (max-width: 1000px) {
            padding-top: 4rem;
            font-size: 4rem !important;
          }
          @media screen and (max-width: $DesktopWidth) {
            padding-top: 4rem;
            font-size: 4rem !important;
          }
          @media screen and (min-width: $DesktopWidth) {
            padding-top: 5rem;
            font-size: 10rem !important;
          }
        </code>
      </pre>
      <h3>С миксинами</h3>
      <pre>
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
      </pre>
    <li>afs - адаптивный стиль font-size для основных breakpoints</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        @media screen and (min-width: $TableWidth) {
          font-size: 30px;
        }
        @media screen and (max-width: $TableWidth) {
          font-size: 25px;
        }
        @media screen and (max-width: $PhoneWidth) {
          font-size: 20px;
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
          h2 {
            @include afs(30px,25px,20px);
          }
      </code>
    </pre>
    <li>positionCenter - абослюно центриует елемнет. Анологичные positionCenterX,positionCenterY</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        .avatar {
          width: 300px;
          heigth: 300px;
          position: relative;
          &__image {
            width: 100%;
            heigth: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate( -50%, -50% );
          }
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
        .avatar {
          width: 300px;
          heigth: 300px;
          position: relative;
          &__image {
            width: 100%;
            heigth: 100%;
            @include positionCenter;
          }
        }
      </code>
    </pre>
    <li>bg - хелпер для задания базовых стилей background с картинкой</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        .avatar {
          width: 300px;
          heigth: 300px;    
          background-image: url('../images/1.png');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
          .avatar {
            width: 300px;
            heigth: 300px;
            @include bg('../images/1.png');
          }
      </code>
    </pre>
    <li>dialog-wingow - используеться для диалоговых окон</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        .alert {
          width: 300px;
          heigth: auto;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate( -50%, -50% );
          @media screen and (max-width: $TableWidth) {
            width: 100%;
            padding: 1rem;
          }
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
        .alert {
          @include dialog-wingow(300px);
        }
      </code>
    </pre>
    <li>br - используеться дла border-radius</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        .cicle {
          border-radius: 50%;
        }
        input {
          border-radius: 4px;
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
        .cicle {
          @include br(50%);
        }
        input {
          @include br(4px)
        }
      </code>
    </pre>
    <li>size - задает певым параметом width,2-м height. при использвовании только 1-го параметра задает height = width</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        .block {
          width: 100px;
          height: 100px;
        }
        .banner {
          width: 200px;
          height: 100px;
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
        .block {
          @include size(100px);
        }
        .banner {
          @include size(200px, 100px);
        }
      </code>
    </pre>
    <li>pseudo - испозуеться для псевдо ел-тов</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        &:after {
          сontent: '>';
          display: block;
          position: absolute;
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
        &:after {
          @include pseudo('>');
        }
      </code>
    </pre>
    <li>sep-h - испозуеться для горизонтальных линий</li>
    <h3>Без миксинов</h3>
    <pre>
      <code>
        .line {
          display: block;
          height: 3px;
          width: 50%;
          margin: 0 auto;
          background-color: black;	
        }
      </code>
    </pre>
    <h3>С миксинами</h3>
    <pre>
      <code>
        .line {
          @include sep-h(50%, 3px, black);
        }
      </code>
    </pre>
    <li>ф-ция get-vw - переводит px в vw. удобен для банерных текстов или шрифтов > 100px. 1-й параметр размер шрифта. 2-й точка из от которой шрифт будет равен первому параметру (по дефолту 1920) менять зн-е в mixins</li>
    <pre>
      <code>
          h1 {
              font-size: get-vw(100px, 1920);
          }
          .banner__text {
              font-size: get-vw(400px);
          }
      </code>
    </pre>
</ul>
<template>
  <div class="inner-container">
    <h2 class="font-weight-bold text-center py-5">Primer Parcial</h2>
    <Columnas>
      <template #col1>
        <div class="text-center">Durante el primer parcial vimos temas relacionados con las partes de las computadoras, dentro de esta seccion podras encontrar una lista de ellas.</div>
      </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Placa Base</h4>
        <div class="text-left">La placa base, también conocida como tarjeta madre, placa madre o placa principal, es una tarjeta de circuito impreso a la que se conectan los componentes que constituyen la computadora.  </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/placa.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Procesador</h4>
        <div class="text-left">El procesador es el cerebro del sistema, justamente procesa todo lo que ocurre en la PC y ejecuta todas las acciones que existen. Cuanto más rápido sea el procesador que tiene una computadora, más rápidamente se ejecutarán las órdenes que se le den a la máquina. Este componente es parte del hardware de muchos dispositivos, no solo de tu computadora. </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/procesador.jpeg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Serial SATA</h4>
        <div class="text-left">Serial ATA o SATA (“Serial Advanced Technology Attachment”) es una interfaz de transferencia de datos en serie entre la placa base y algunos dispositivos de almacenamiento, como pueden ser discos duros HDD, lectores y regrabadoras de CD/DVD/Blu-ray, unidades de estado sólido (SSD) u otros dispositivos. </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/sata.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">RAM</h4>
        <div class="text-left">La memoria de acceso aleatorio (RAM) es la memoria de la computadora que almacena la información que un programa necesita mientras se ejecuta. </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/ram.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Tarjeta de Expansión</h4>
        <div class="text-left">La tarjeta de expansión, es una placa de circuito impreso que se puede insertar en un conector eléctrico o ranura de expansión en una placa base de computadora. </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/exp.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Fuente de Alimentación</h4>
        <div class="text-left">La fuente de alimentación o fuente de potencia es el dispositivo que convierte la corriente alterna (CA), en una o varias corrientes continuas (CC), que alimentan los distintos circuitos del aparato electrónico al que se conecta.  </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/fuentepoder.png" alt="">
          </div>
        </template>
    </Columnas>
    <Ancla :datos="{enlace: 'https://www.navegadortematico.online/pdfs/pdf5.pdf', titulo: 'Partes de una PC' }" />
    <Columnas>
      <template #col1>
        <h4 class="text-left">Unidad de Disco Óptico</h4>
        <div class="text-left">La unidad de disco óptico es la unidad de disco que utiliza una luz láser como parte del proceso de lectura o escritura de datos desde un archivo a discos ópticos a través de haces de luz que interpretan las refracciones provocadas sobre su propia emisión.  </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            
            <img src="../assets/cd.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Modem</h4>
        <div class="text-left">Un módem es un dispositivo que envía información entre el mundo exterior o red de área extensa (WAN) y tu casa. Convierte una conexión entrante (cable coaxial, línea telefónica, línea de fibra óptica o cualquier otra) en una de Ethernet, lo que le permite al router de Wi-Fi conectarse a Internet.  </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/modem.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Disco Duro</h4>
        <div class="text-left">Un disco duro o disco rígido es un dispositivo de almacenamiento de datos no volátil que emplea un sistema de grabación magnética para almacenar datos digitales de forma rápida y segura.  </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/dd.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Monitor</h4>
        <div class="text-left">El monitor de PC, también llamado pantalla, monitor de ordenador y monitor de computadora, es el principal dispositivo de salida (interfaz), que muestra datos o información a todos los usuarios.  </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/mon.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Raton</h4>
        <div class="text-left">El ratón o mouse es un dispositivo apuntador utilizado para facilitar el manejo de un entorno gráfico en una computadora. Generalmente está fabricado en plástico, y se utiliza con una de las manos.  </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/mouse.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Impresora</h4>
        <div class="text-left">La impresora es un periférico utilizado para imprimir información, resultado del procesamiento de datos.   </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/imp.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h5 class="text-left py-3">PUERTOS DE ENTRADA Y SALIDA PARA LA CONEXIÓN DE PERIFÉRICOS</h5>
        <div class="text-left">
Estos son los que se utilizan para conectar generalmente periféricos externos como pueden ser teclados, impresoras, ratones, auriculares, su uso es por tanto de proposito general.
USB
Universal Serial Bus es el estándar y rey absoluto de los puertos de entrada y salida de cualquier ordenador, ya que son utilizados por multitud de periféricos. Su origen, no obstante, hay que situarlo fuera del PC, por el hecho de que este es una versión adaptada al PC y puesta el día del puerto SIO de los viejos ordenadores Atari de 8 bits, que servía para evitar tener que colocar un ordenador entero en sus disqueteras como ocurría en otros modelos de la misma época.
El estándar USB apareció a finales de los 90 con el objetivo de reemplazar a varios puertos en el PC, como son el Centronics o LPT1, el COM y los puertos PS/2. Objetivo que tardó años en conseguir debido a la proliferación de periféricos con estas interfaces.
Su primera versión tenía una velocidad de transferencia de apenas 11 Mbps. Su versión 2.0 mejoró hasta los 480 Mbps y se convirtió, además, en un port ideal para la transmisión de vídeo jubilando con ello el IEEE-1394 o FireWire. En cuanto a su versión 3.0, permite transferencia de datos a la velocidad de un puerto SATA.
El USB viene en muchas formas, pero la más moderna es el USB-C que no solamente permite la carga rápida de periféricos e incluso ordenadores enteros, si no que también trabaja como un DisplayPort. Viendo su historia está claro que el término Universal se lo tiene más que merecido.
THUNDERBOLT
Se trata de un puerto creado por Intel con forma parecida al USB-C, pero de especificaciones muy distintas. A partir del USB4 ambos estándares se fusionarán, por lo que se trata de una variante del USB. Originalmente, esta conexión era utilizada por los ordenadores de Apple y recordaba al MiniDisplayPort.


<h5 class="text-left py-3">RS-232 O DB9 (EXTINGUIDO)</h5>
Este puerto se utilizaba para comunicar el hardware en la era de los mini-ordenadores. En especial las terminales. Fue adoptado por el PC en los primeros años siendo el puerto de E/S por antonomasia de periféricos como teclados, ratones, módems y un largo etcétera.
Primero fue reemplazado en uso por el puerto PS/2 en lo que a ratones y teclados se refiere, los módems de alta velocidad empezaron a usar otros más avanzados como el ISA y poco a poco fue cayendo en desuso hasta ser jubilado por el USB. Cuando eso ocurrió se trataba de una de las piezas más inútiles en un PC.
PARALELO O CENTRONICS (EXTINGUIDO)
El famoso conector de impresora, un puerto en paralelo que primero apareció en las tarjetas gráficas MDA de IBM para luego pasar a formar parte de la placa base. Fue retirado del mercado tan pronto como apareció USB, y es que llegó a ser tan lento que desesperaba. Se trata de un puerto en paralelo de 36 pines que originalmente se diseñó para impresoras y escáneres.
Con el tiempo el puerto Centronics fue reemplazado por el paralelo o DE9, que es una versión en paralelo del puerto DB9, por lo que se basa en el estándar RS-232. Debido a que ambos son conocidos como puerto de impresora se solían confundir, y por eso los hemos agrupado en una misma sección.
Como curiosidad, el puerto GPIO de las Raspberry Pi se basa en el puerto Centronics, por lo que no se encuentra del todo extinguido, pero no se ve en las placas base para PC a día de hoy.
PS/2 (EXTINGUIDO)
Estos dos puertos le deben su nombre al ordenador de IBM y, durante años, se convirtieron en los estándares para conectar ratones y teclados hasta la llegada de USB. Además, para facilitar la conexión de estos periféricos contaba con dos puertos diferenciados con sendos colores: uno verde para el ratón y otro morado para el teclado.
Más tarde estos se unificaron en un solo puerto que tenía como principal reclamo usar los pines de la versión con mayor voltaje para hacer que tanto el teclado como el ratón pudiesen enchufarse. El problema es que solo podría conectarse uno de los dos, algo que tampoco fue una debacle, puesto que entró en desuso con la llegada de USB de forma masiva.

<h5 class="text-left py-3">FIREWIRE IEEE-1394 O PUERTO MINIDV (EXTINGUIDO)</h5>
Cuando fue lanzado este puerto a finales de los 90 se utilizó para poder volcar el contenido de las cintas MiniDV a los discos duros de los ordenadores para la edición de vídeo. Su capacidad para llegar a los 400 Mbits por segundo primero y a los 800 Mbits por segundo lo hicieron muy popular en el mundo Mac donde todos los ordenadores empezaron a incluir uno y se convirtió en un estándar allí. Por desgracia la llegada del USB 2.0 lo termino por enviar a la papelera de la historia.

<h5 class="text-left py-3">PUERTOS DE ENTRADA Y SALIDA PARA LA TRANSFERENCIA DE AUDIO Y VÍDEO</h5>
En este caso son las conexiones que se utilizan para transmitir información visual a una pantalla o un receptor multimedia.
HDMI
El puerto HDMI es el estándar de vídeo absoluto en televisores. Se trata de una versión avanzada del ya abandonado puerto DVI, sin embargo, incluye la capacidad de transmitir sonido y la reproducción de contenido en alta definición con sistemas de protección de autor HDCP.
Apareció por primera vez cuando se observó que el cable por componentes no daba el suficiente ancho de banda para resoluciones Full HD y el contenido, tanto en Blu-ray como en directo, necesitaba algún método de control contra la piratería.
A día de hoy ha ido evolucionando en cuanto a sus capacidades y ancho de banda, permitiendo la transmisión de vídeo 8K y frecuencias de refresco más allá de los clásicos 60 Hz.
<h5 class="text-left py-3">DISPLAYPORT</h5>
El otro puerto de salida de vídeo es el DisplayPort pero, mientras el HDMI es un estándar de los fabricantes de televisión, está más orientado al mercado de los ordenadores, por lo que no suele encontrarse en televisores.
Al igual que HDMI ha tenido varias versiones, sin embargo, está más pensado de cara a su uso en un ordenador, por razones como que es capaz de soportar una mayor cantidad de resoluciones en su estándar respecto del HDMI, y estar pensado para el uso con varias pantallas.
<h5 class="text-left py-3">VGA (EXTINGUIDO)</h5>
El puerto VGA fue el estándar por antonomasia de las pantallas CRT para PC, y consiguió vivir casi 20 años, pero se demostró incapaz de mostrar una buena calidad de imagen en una pantalla LCD, por lo que fue rápidamente reemplazado por estándares como DVI, HDMI y DisplayPort.
Puertos Entrada y Salida VGAEl puerto VGA está relacionado con los monitores CRT, pero también se ha utilizado en proyectores. Su desaparición se debe al incremento del uso del vídeo digital, que se entiende mucho mejor con los paneles LCD ya que ocupan menos espacio. Así que acabaron por reemplazar a los televisores y monitores con señal analógica.

<h5 class="text-left py-3">DVI (EXTINGUIDO)</h5>
El puerto DVI fue un intento de VESA previo al DisplayPort de lanzar un sucesor para el VGA. En realidad HDMI deriva de este puerto, con la diferencia de que DVI no soporta contenido HDCP, no transmite audio y no evoluciono como lo ha hecho el actual estándar de la industria. Lo podéis ver en televisores y monitores de la segunda mitad de los 2000.
El estándar DVI tenía tres tipos de conexiones distintas: DVI-I podría transmitir señales en analógico y en digital; DVI-D solo en digital; y DVI-A solo en analógico. Cada una con una configuración en sus pines distinta. Estas diferencias que no se encuentran ni HDMI ni en DisplayPort fueron uno de los motivos por los que DVI no tuvo una carrera más larga.
Y es que encontrar un cable para cada tipo de conector fue un problema más que grave de lo que muchos podrían imaginar, ya que los usuarios no entendían cuál era el que necesitaban. Finalmente, los fabricantes optaron por DVI-I Dual Link por su mayor ancho de banda, que era necesario para los monitores gaming con mayor tasa de refresco.
<h5 class="text-left py-3">S-VIDEO (EXTINGUIDO)</h5>
S-Video es un puerto de vídeo del tipo RGB que fue ampliamente utilizado en muchos ordenadores, consolas y tarjetas gráficas para ser conectadas a un televisor convencional. Por lo que en ese aspecto difiere de VGA, pero tenía su utilidad en algunos ordenadores de 8óo 16 bits, por ejemplo, el mítico Amstrad CPC tenía uno.
En el caso del PC se usaba en tarjetas de vídeo capturadoras, ya fuera para coger el contenido de una señal de vídeo para una posterior edición, como para ver cómo se contemplaría el contenido audiovisual en el televisor y, por tanto, era esencial para los que trabajabancomo editores de vídeo. La llegada del puerto HDMI y la unificación de la tecnología de pantalla entre televisión y ordenador hizo que este puerto pasará a mejor vida.
Su conector por norma general era amarillo y no era especialmente rápido. Pese a ello estuvo muchos años con nosotros aunque cayó en desgracia al poco de llegar sus más novedosos rivales.
<h5 class="text-left py-3">PUERTOS PARA LA COMUNICACIÓN EN RED</h5>
Solo existe un puerto estándar para ello a día de hoy que este en uso, el viejo RJ11 que usaban los viejos modems que se conectaban a la red teléfónica por limitaciones técnicas dejaron de usarse ya hace más de una década. Podriamos incluir también los conectores de fibra óptica, pero no sonde uso generalizado en el PC
RJ45 O ETHERNET
El puerto de red cableada de toda la vida, que nos permite conectarnos a Internet a altas velocidades con nuestro PC, que no pueden ser alcanzadas por ningún tipo de estándar inalámbrico. Su permanencia es gracias a su evolución donde si hace años hablábamos de conexiones de 100 Mbps, a día de hoy ya tenemos interfaces de 10.000 Mbps o, lo que es lo mismo, 10 Gbps.

<h5 class="text-left py-3">PUERTOS DE ENTRADA Y SALIDA PARA AUDIO</h5>
Para terminar tenemos aquellos que sirven para transmitir audio a altavoces y auriculares.
<h5 class="text-left py-3">MINIJACK DE 3.5 MM Y CONECTORES TRS</h5>
Se trata del puerto pensado para conectar altavoces y micrófonos al PC. Tiene dos variantes: la primera de ellas soporta conexiones minijack con dos anillos que cada uno corresponde a un canal estéreo y un tercero que, en caso de estar presente, nos indica que tendremos un micrófono para jugar online o chatear. Aunque hay sistemas que separan entrada y salida en dos interfaces distintas.
Una variante de este tipo de conexiones son los conectores TRS, que permiten conectar varios altavoces en un sistema posicional. Eso sí, con las limitaciones de ancho de banda y calidad de sonido.
<h5 class="text-left py-3">S/PDIF PARA AUDIO DIGITAL</h5>
Cuando se popularizó el DVD lo hizo también el DOLBY Digital, que fue el primer sistema de sonido realmente posicional y, por tanto, requería un ancho de banda mucho mayor. ¿La solución? El puerto SPDIF o (SONY Philips Digital Interface Format) que transmite audio en formato digital a través de un cable coaxial en un solo puerto.
Los sistemas de múltiples altavoces avanzados, como los 7.1, hacen uso de este tipo de conectores que son mucho mejores que los TRS. No solamente por no necesitar tantos cables, sino por entregar una mayor calidad de sonido gracias al mayor ancho de banda.
Sabemos que han existido otros puertos en la historia, algunos de ellos relacionados con ciertas marcas, como es el caso del puerto ADB en los Macintosh de la primera mitad de los 90 o el puerto MIDI/Joystick de las tarjetas de sonido para PC. Sin embargo, no los hemos incluido por el hecho que hemos pensado que es mucho mejor centrarnos en los que si se ha visto en PC a lo largo del tiempo.
      </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/1.jpg" alt="">
            <div>
              <iframe width="240" height="160" src="https://www.youtube.com/embed/TZCoyi8qfKo" title="Puertos de Interfaz de la Computadora" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          <img src="../assets/2.jpg" alt="">
            <img src="../assets/3.jpg" alt="">
            <img src="../assets/4.jpg" alt="">
            <img src="../assets/5.jpg" alt="">
            <img src="../assets/6.jpg" alt="">
            <img src="../assets/7.jpg" alt="">
            <img src="../assets/8.jpg" alt="">
            <img src="../assets/9.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Unidades de Almacenamiento</h4>
        <div class="text-left">GigaByte (GB) y megabytes (MB) y Terabytes (TB) son las medidas más utilizadas a la hora de hablar de la capacidad de un dispositivo electrónico. Para comenzar, tenemos que conocer que la unidad básica de almacenamiento en informática es el bit abreviación de Binary Digit (dígito binario). Es la unidad más pequeña y tiene capacidad para almacenar únicamente dos estados diferentes: Si (1) o No (0), Verdadero (1) o Falso (0), etc. Un error muy común es confundir el bit con el byte y no nos confundamos, no es lo mismo, un byte está compuesto por un total 8 bits. Múltiples bits mezclados entre sí dan origen a diferentes unidades de medida como “mega”, “tera”, y “giga”.</div>
        <a href="https://www.ibm.com/docs/es/storage-insights?topic=overview-units-measurement-storage-data" target="_blank">¿Quieres aprender más sobre las unidades de almacenamiento? Da click aquí</a>
            <div class="py-3">
              <iframe width="640" height="320" src="https://www.youtube.com/embed/8co2ADsKOUo" title="Unidades de Almacenamiento [ INFORMÁTICA 👊]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/unidades.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">Computadoras y su Desarrollo</h4>
        <div class="text-left">Durante el transcurso de la humanidad, en los tiempos mas recientes, diferentes modelos de computadoras existieron, desde las computadoras mas antiguas que calculaban de diferentes manera y son diferentes al concepto tipico de computadora de conocemos hasta la computadora predescesora de todas en cuanto a las interfaces graficas, han ido evolucionado y nos han llevado a lo que son ahora, unas maquinas que nos son extremadamente utiles.</div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/abaco.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Ancla :datos="{enlace: 'https://www.navegadortematico.online/pdfs/pdf6.pdf', titulo: 'Linea del Tiempo' }" />
    <Columnas>
      <template #col1>
        <h4 class="text-left">Historia de las Computadoras</h4>
        <div class="text-left">1.	(500 A.C) El Ábaco fue el primer dispositivo que ayudo al ser humano en la resolución de los problemas aritméticos.</div>
        <div class="text-left">2.	(1622) La regla del cálculo consistía dos reglas graduadas unidas que se deslizaban una sobre otra.</div>
        <div class="text-left">3.	(1642) Se inventó la primera máquina para sumar que también se usaba para restar.</div>
        <div class="text-left">4.	(1834) Se inventó la primera computadora digital era programada por una serie de tarjetas perforadas que contenían en datos las Instrucciones.</div>
        <div class="text-left">5.	(1930) Se inventó una maquina analógica que utilizaba circuitos eléctricos.</div>
        <div class="text-left">6.	(1945) Se inventó la ENIAC, primera computadora electrónica, se construyó en Pensilvania para calcular tablas de artillería.</div>
        <div class="text-left">7.	(1951–1958) La UNIVAC fue diseñada por Eckerd. Utilizaba tubos al vacío. Primera generación de las computadoras.</div>
        <div class="text-left">8.	(1959–1964) Segunda generación de computadoras eran rápidas y pequeñas, nuevos lenguajes llamados lenguajes de alto nivel.</div>
        <div class="text-left">9.	(1964–1971) Tercera generación de computadoras eran más rápidas y más pequeñas.</div>
        <div class="text-left">10.	(1971–1980) Cuarta generación de las computadoras, el procesador de la computadora se le denominó como microprocesador.</div>
        <div class="text-left">11.	(1980–1990) Quinta generación de las computadoras. Con capacidad de proceso paralelo.</div>
        <div class="text-left">12.	(1990) Sexta generación de las computadoras, publicaron Windows.</div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/maquina.jpg" alt="">
            <img src="../assets/enia.jpg" alt="">
            <img src="../assets/pc.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">DETECTANDO HADWARE CON CPU-Z.</h4>
        <div class="text-left">CPU-Z tiene la capacidad de detectar directamente características de hardware, como la capacidad de acceder, leer y mostrar los datos SPD (incluidos el fabricante, la fecha de fabricación y el número de pieza) de los módulos de memoria, que pueden ser invaluables para aquellos que buscan agregar o reemplazar la memoria.
La capacidad de documentar la velocidad del reloj lo convierte en una herramienta para overclockers, como una forma de probar las velocidades de CPU alcanzadas por varios experimentos. Si quieres aprender más sobre la CPU-Z, como dónde descargarlo y cómo usarlo, así como aprender a leer la información que proporciona esta herramienta de detección gratuita.
</div>
<a href="https://cpu-z.uptodown.com/windows#:~:text=CPU%2DZ%20permite%20conocer%20detalles,modelos%20exactos%2C%20y%20mucho%20m%C3%A1s. " target="_blank">¿Quieres aprender más sobre CPU-Z? Da click aquí</a>
            <div class="py-3">
              <iframe width="640" height="320" src="https://www.youtube.com/embed/DLGfLPFjmfQ" title="CPU-Z 2021 SABER INFORMACIÓN DETALLADA DE TU PC [PROCESADOR, RAM, TARJETA GRÁFICA, ETC]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>      
</template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/cpuz.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">¿QUÉ ES UN PROCESADOR?</h4>
        <div class="text-left">El procesador repite 4 operaciones básicas que hacen el ciclo de una computadora, la búsqueda, la decodificación, la ejecución y el almacenamiento, todas las fases se realizan en 1 o varios ciclos del CPU.</div>
        <div class="text-left">•	CPU. Central Prosessin Unit= Unidad de procesamiento Central. Lleva acabo todas las funciones que quedramos realizar en una computadora.
        </div>
        <div class="text-left">•	NÚCLEOS.
        Son los que permiten hacer varias tareas al mismo tiempo en un solo ciclo.</div>
        <div class="text-left">•	MULTITASKING.
        La realización de varias tareas al mismo tiempo.</div>
        <div class="text-left">•	GHZ.
        Frecuencia de Reloj-Frecuencia Turbo. Es la velocidad en que se realizaran todos los procesos de nuestra computadora. </div>
        <div class="text-left">•	HILOS.
        No se ven, hay 2 hilos por cada núcleo. Sirve para dividir el núcleo y realizar dos procesos a la vez y terminarlos al mismo tiempo.</div>
        <div class="text-left">•	MEMORIA RAM.
        Es la que almacena los datos que el procesador está utilizando. </div>
        <div class="text-left">•	MEMORIA CACHÉ.
        Smart Caché. Facilita procesos, es una memoria rápida y ayuda a que el proceso tenga mayor rendimiento, 100 veces más rápida que la RAM estándar.
        </div>
        <a href="https://concepto.de/procesador/ " target="_blank">¿Quieres aprender más sobre el procesador? Da click aquí</a>
        <div class="py-3">
              <iframe width="640" height="320" src="https://www.youtube.com/embed/Jm46yR3WyaQ" title="Que son los Núcleos, Hilos, GHz, Caché... de un CPU? | Explicado fácil y con ejemplos | Procesador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <div>
              <iframe width="240" height="160" src="https://www.youtube.com/embed/IG-qGZDFjJA" title="El procesador |  | UPV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <img src="../assets/prpartes.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">LOS SISTEMAS DE ALIMENTACIÓN ELECTRICA SON </h4>
        <div class="text-left">La fuente de alimentación es uno de los componentes de hardware del PC de mayor importancia, representa el corazón del PC ya que de este componente depende el buen funcionamiento del resto y, de hecho, sin la fuente no funciona nada.
La primera función de la fuente de alimentación es convertir la corriente de alterna a continua, y eso se hace con el conversor AC/DC. Antiguamente, este mismo conversor tenía tres salidas (para los voltajes de 12, 5 y 3,3 voltios) pero eso era bastante ineficiente y generaba además mucho calor, así que las fuentes modernas convierten todo el voltaje que les entra a +12VDC, y luego mediante tres conversores DC/DC independientes generan los voltajes de +12, +5 y +3,3V. Esto se hace así porque los voltajes que menos se usan (5 y 3,3) no se convierten si no se utilizan, ahorrando mucha energía y calor. Una vez que tenemos el voltaje que necesitamos, éste se filtra utilizando inductores y condensadores, y aquí entran en juego dos parámetros más: la regulación del voltaje para asegurar que la tensión es estable y el ruido eléctrico, pues a mayor ruido más se desgastan los componentes por culpa del calor.
FUENTE DE PODER AT
Hay dos tipos principales de fuentes de alimentación de computadora: AT y ATX.
Una fuente de alimentación AT es la que se utilizó en la mayoría de las computadoras más antiguas. Este tipo de fuente de alimentación propulsó a las primeras computadoras personales fabricadas por IBM, y la norma fue adoptada también por otros fabricantes. En concreto, alimentó a todas las tarjetas madre AT y compatibles.
La tarjeta principal compatible con AT obtenía su energía de un conector de alimentación especial de dos partes directamente de la fuente de alimentación AT. Este conector de alimentación de 5 voltios contenía cuatro cables de CD, cuatro de tierra (0 voltios) , un cable de - 5 voltios, uno de 12 voltios y uno más de -12 voltios. El cable restante era un cable de señal que permitía el suministro de energía para "Energizar" la tarjeta principal. Con una fuente de alimentación AT, estabas obligado a apagar manualmente la computadora pulsando el interruptor de encendido.



<h5 class="text-left py-3">FUENTE DE PODER AT</h5>
Este tipo de fuente de poder PC, se caracteriza por ir en un gabinete de la computadora, y sus siglas corresponden al término en inglés “Advanced Technology” o tecnología avanzada.

Esta fuente de alimentación va acoplada dentro del gabinete de la computadora y se caracteriza porque su encendido es manual o mecánico, el cual corta el suministro por completo. Tiene un conector de 4 terminales MOLEX y un conector de 4 terminales para BERG. Este tipo de fuentes se encuentra en desuso actualmente.
<h5 class="text-left py-3">FUENTE DE PODER ATX</h5>
Con los avances en software y sistemas operativos, las computadoras podrían hacer más, como entrar en "Power-Save" (Ahorro de energía) o modo "Sleep" (Suspender). El software ahora puede ser usado para apagar la computadora, en lugar de tener que apagarla con un interruptor de encendido. Todo esto ha sido posible gracias al uso de fuentes de alimentación ATX y compatibles. La fuente de alimentación ATX, por lo tanto, es más compleja.
PRECAUCIONES
Las fuentes de poder AT y ATX son incompatibles con sus respectivas tarjetas. Tratar de modificar una fuente de alimentación ATX para trabajar con una placa base compatible con AT no tendrá éxito. Las entradas adicionales en una fuente de alimentación ATX no permitirán que la fuente de alimentación funcione correctamente, ya que hay más entradas de "señal" en una fuente de alimentación ATX de las que hay en una tarjeta madre AT.
Del mismo modo, una tarjeta madre compatible con ATX no funciona con una fuente de alimentación AT, porque hay muy pocas variedades de voltaje disponible. Todos los procesadores de computadora que son Pentium MMX o de una generación posterior usan un voltaje primario (básico) de 3,3 voltios CD. No hay salidas de +3.3 voltios de una fuente de alimentación AT, así que cualquier intento de energizar una tarjeta madre ATX con una fuente de poder AT dañará el procesador de la computadora.
LOS DISIPADORES
El disipador de la CPU un elemento o pieza cuya misión es extraer el calor que genera el procesador. Cuando hablamos de disipador, estamos refiriéndonos a un componente que utiliza un elemento activo (ventilador) o pasivo (aletas de aluminio) para extraer el calor a través del aire.
¿Por qué la CPU se calienta? EL Efecto Joule, un fenómeno que explica la manera en la que un componente eléctrico genera calor. Este fenómeno ocurre porque los electrones están en movimiento en un conductor, por lo que aumenta la temperatura a causa de la energía cinética y porque los electrones chocan entre ellos.
En cuanto la energía tiene más intensidad, más flujo de electrones hay en el conductor, lo que ocasiona más calor. Por ello, el Efecto Joule se da en los procesadores porque son chips de silicio en los que hay muchos electrones.
<h5 class="text-left py-3">¿CÓMO FUNCIONA?</h5>
El calor se origina en el interior de la CPU y se transfiere al IHS, que es la cubierta metálica exterior del componente.
La pasta térmica se aplica en dicha cubierta metálica y, encima, se instala el disipador. Aquí, es clave la pasta térmica porque es la encarga de transferir el calor del IHS a la base del disipador.
Una vez transferido el calor a la base del disipador, éste llega al bloque del mismo a través de las tuberías de calor.  
Finalmente, es expulsado por el ventilador al interior de la caja. Por este motivo, es importante tener una buena ventilación (ventiladores PC) en la caja de cara a expulsar ese calor fuera de ella.
<h5 class="text-left py-3">Según su material de fabricación:</h5>
Según su funcionamiento:
Según su disposición:
Según su tamaño de ventilador:
120 mm. Es el tamaño estándar, aunque encontramos opciones con un ventilador más pequeño.
140 mm. Un ventilador de esta medida precisará de una caja grande porque su bloque no será pequeño. Puede funcionar a menos RPM que los de 120 mm y disipar mejor porque son más grandes. Sin embargo, son más caros y no siempre salen a cuenta.

<h5 class="text-left py-3">BUENO AHORA SEGUIMOS CON LOS DISIPADORES</h5>
El disipador de la CPU un elemento o pieza cuya misión es extraer el calor que genera el procesador. Cuando hablamos de disipador, estamos refiriéndonos a un componente que utiliza un elemento activo (ventilador) o pasivo (aletas de aluminio) para extraer el calor a través del aire.
¿Por qué la CPU se calienta? EL Efecto Joule, un fenómeno que explica la manera en la que un componente eléctrico genera calor. Este fenómeno ocurre porque los electrones están en movimiento en un conductor, por lo que aumenta la temperatura a causa de la energía cinética y porque los electrones chocan entre ellos.
En cuanto la energía tiene más intensidad, más flujo de electrones hay en el conductor, lo que ocasiona más calor. Por ello, el Efecto Joule se da en los procesadores porque son chips de silicio en los que hay muchos electrones.

<h5 class="text-left py-3">¿CÓMO FUNCIONA?</h5>
El calor se origina en el interior de la CPU y se transfiere al IHS, que es la cubierta metálica exterior del componente.
La pasta térmica se aplica en dicha cubierta metálica y, encima, se instala el disipador. Aquí, es clave la pasta térmica porque es la encarga de transferir el calor del IHS a la base del disipador.
Una vez transferido el calor a la base del disipador, éste llega al bloque del mismo a través de las tuberías de calor.  
Finalmente, es expulsado por el ventilador al interior de la caja. Por este motivo, es importante tener una buena ventilación (ventiladores PC) en la caja de cara a expulsar ese calor fuera de ella.
<div class="text-left py-3">Según su material de fabricación:
Según su funcionamiento:
Según su disposición:
Según su tamaño de ventilador:
120 mm. Es el tamaño estándar, aunque encontramos opciones con un ventilador más pequeño.
140 mm. Un ventilador de esta medida precisará de una caja grande porque su bloque no será pequeño. Puede funcionar a menos RPM que los de 120 mm y disipar mejor porque son más grandes. Sin embargo, son más caros y no siempre salen a cuenta.
</div>


<h5 class="text-left py-3">Y LA FUENTE DE PODER</h5>
Es un aparato electrónico que regula y filtra la electricidad que recibe el computador para que los circuitos y el funcionamiento de este no se vea afectado por sobrecargas eléctricas y pueda operar de manera óptima, lo que quiere decir que las fuentes de poder evitan que la computadora arranque u opere hasta que estén presentes todos los niveles correctos de energía. 
se caracterizan por:
Su cable de suministro eléctrico se inserta en un socket ubicado en el exterior de la computadora, que pertenece a la fuente.
De ella salen muchos cables que van hacia varios componentes de la PC, tales como la tarjeta madre y las unidades de disco.
Las fuentes de poder actuales son conmutadas y con voltaje dual, por lo que satisfacen dos modos de funcionamiento diferentes: mientras el equipo se encuentra operativo y en modo stand by.
El aire de su ventilador o cooler pasa por la tarjeta madre, lo cual favorece la temperatura del equipo completo y tiene un sonido característico.
</div>
            <div class="py-3">
              <iframe width="640" height="320" src="https://www.youtube.com/embed/zPhwSzDniK0" title="Que es una ups y para que sirve 😱 Sistema de alimentación ininterrumpida ✅" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
      </template>
      <template #col2>
          <div class="wrapper-img">  
            <img src="../assets/fp.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">ENSAMBLE DE UNA PC</h4>
        <div class="text-left">
          A continuacion veremos los pasos junto a imagenes para hacer el ensamble o armado de una computadora.
        </div>
      </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          PRIMERO QUE TODO INSTALAMOS LA FUENTE DE ALIMENTACIÓN
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e1.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          SEGUIMOS CON LA PLACA BASE; EMPEZANDO POR LA RAM 1 Y 2, EL CPU, LA PASTA TÉRMICA Y EL DISIPADOR.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e2.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          AHORA INSTALAMOS LA MOTHERBOARD DENTRO DEL GABINETE.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e3.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          SCONTINUAMOS CON EL ADAPTADOR DE TARJETAS INSERTANDO LA TARJETA DE RED, LA TARJETA INALÁMBRICA (WI-FI) Y EL ADAPTADOR DE VIDEO.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e4.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          LUEGO VAMOS CON DISCOS INTERNOS; EN LA PARTE LATERAL DEL GABINETE COLOCAMOS LA UNIDAD DE DISCO DURO.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e5.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          EN UNIDADES DE COMPARTIMIENTO EXTERNOS COLOCAMOS LA UNIDAD OPTICA Y LA UNIDAD DE DISQUETE.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e6.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          POSTERIORMENTE EN CABLES DE INTERIORES; CONECTAMOS PATA CABLE, CABLES DISQUETE, SATA CABLE Y LOS DEMÁS CONECTORES.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e7.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          POR ÚLTIMO, EN CABLES EXTERNOS; TAPAMOS EL GABINETE CON EL PANEL Y EMPEZMOS A CONECTAR LOS PERIFÉRICOS, EL CABLE DEL MONITOR, DEL TECLADO, DEL MOUSE, EL CABLE DE RED (ETHERNET) Y DE ALIMENTACIÓN.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e8.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          EY ASÍ TERMINAMOS EL ENSAMBLE DE LA PC
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/e9.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <div class="text-left">
          <a href="https://www.tecnologia-informatica.com/como-armar-pc-ensamblaje/" target="_blank">¿Quieres aprender más sobre el Ensamble de una Pc? Da click aquí</a>
        </div>
      </template>
    </Columnas>
    <div class="d-flex justify-content-center align-items-center py-5">
      <div>
        <iframe width="480" height="280" src="https://www.youtube.com/embed/0Yz95Nz6PsM" title="ENSAMBLE DE PC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    <Columnas>
      <template #col1>
        <h4 class="text-left">TIPOS DE PLACAS BASE</h4>
        <div class="text-left">
          <h5 class="text-left py-3">ATX</h5>  
          ATX (Advanced Technology eXtended) es una especificación desarrollada por Intel en 1995, superando el anterior estándar AT, introducido en la IBM PC/AT y replicado en las PC compatibles. Comprende un rediseño en la placa base, fuente de alimentación y gabinete.
          <h5 class="text-left py-3">Mini o Micro ATX</h5>
          Otras dos opciones de tamaño más reducido son el factor de forma Micro-ATX con aspecto cuadrado y con 9,6 pulgadas de ancho y alto y Mini-ATX con el mismo aspecto cuadrado que el factor de forma Micro-ATX, pero con 6,7 pulgadas de ancho y alto.
          <h5 class="text-left py-3">DTX</h5>
          Se trata concretamente de una placa base de factor de forma Mini-DTX. Esta pensadas para soluciones de PC de Salón o HTPC (Home Theater PC). La placa está preparada para el montaje de procesadores de socket AM2 y utiliza un chipset SIS761GX como corazón de todo el sistema.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/atx.jpg" alt="">
            <img src="../assets/miniatx.png" alt="">
            <img src="../assets/dtx.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Ancla :datos="{enlace: 'https://www.navegadortematico.online/pdfs/pdf1.pdf', titulo: 'Tipos de Placa Base' }" />
    <Columnas>
      <template #col1>
        <h4 class="text-left">TIPOS DE ZOCALO</h4>
        <div class="text-left">
          <h5 class="text-left py-3">Zócalo LGA</h5>  
          Socket en placa base LGA (Land Grid Array). Diseño de socket utilizado principalmente en los procesadores de Intel que se caracteriza por que los pines sobresalen de la placa base.
          <h5 class="text-left py-3">Zócalo PGAX</h5>
          PGA (Pin Grid Array): Consiste en un cuadrado de conectores donde se insertan los pines del microprocesador y éste se fija mediante un tornillo existente en el lateral del zócalo y por presión con el disipador
          <h5 class="text-left py-3">Disipador cooler master</h5>
          Los disipadores Cooler Master proveen la solución en refrigeración para liberar la potencia y máximo rendimiento de la Serie Intel® Core™ 12ma Gen. Listos para Procesadores Intel® Alder Lake y LGA 1700.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/zocalo.jpg" alt="">
            <img src="../assets/zocalopga.jpg" alt="">
            <img src="../assets/disipadormaster.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">MEMORIA</h4>
        <div class="text-left">
          <h5 class="text-left py-3">ChipSet</h5>  
          SEs el controlador de tráfico entre CPU, Tarjeta Gráfica, RAM, almacenamiento y periféricos. Los expertos se han referido a él como el "pegamento" de la tarjeta madre. El chipset es básicamente la parte electrónica de la tarjeta madre que se comunica con todos los componentes conectados.
          <h5 class="text-left py-3">Puente norte (northbridge)</h5>
          Aparece en las placas ATX y se situa en la parte norte de la placa junto a la CPU y a la memoria. Se encarga de gestionar: La memoria. Comunicación con el procesador
          <h5 class="text-left py-3">Puente sur (southbridge) </h5>
          El SouthBridge es en realidad un puente para acceder a otros buses más lentos como PCI, IDE, o USB al que se conectan la BIOS, el controlador del ratón y teclado o los puertos serie y paralelo. El SouthBridge se une al NorthBridge mediante un bus propio llamado Hub Link.
          <h5 class="text-left py-3">Slots de memoria RAM </h5>
          Las ranuras de memoria, o bancos de memoria (memory slots), constituyen los conectores para la memoria principal del ordenador, es decir, la memoria RAM (Random Access Memory).
          <h5 class="text-left py-3">RAM DDR3 </h5>
          Tecnología de almacenamiento electrónico aleatorio lanzada comercialmente en 2008, la cuál se conforma por una tarjeta plástica rectangular con medidas típicas de 133.35 mm X 31.75 mm X 1 mm., 240 terminales distribuidas en ambos lados.
          <h5 class="text-left py-3">RAM DDR4 </h5>
          Es una abreviatura de las siglas en inglés Double Data Rate type four Synchronous Dynamic Random-Access Memory (memoria de acceso aleatorio dinámico síncrono de cuarta generación de velocidad de datos doble).
          <h5 class="text-left py-3">RAM DDR5</h5>
          Es el estándar más reciente que hay actualmente, y que tiene unas características superiores a la DDR4 y DDR3.
          <h5 class="text-left py-3">Memoria Cache</h5>
          Es una capa de almacenamiento de datos de alta velocidad que almacena un subconjunto de datos, normalmente transitorios, de modo que las solicitudes futuras de dichos datos se atienden con mayor rapidez que si se debe acceder a los datos desde la ubicación de almacenamiento principal.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/chipset.jpg" alt="">
            <img src="../assets/pnorte.jpg" alt="">
            <img src="../assets/psur.jpg" alt="">
            <img src="../assets/ramddr4.jpg" alt="">
            <img src="../assets/ramddr5.png" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">RANURAS DE EXPANSION</h4>
        <div class="text-left">
          <h5 class="text-left py-3">PCI</h5>
          Peripheral Component Interconnect (Interconexión de componentes periféricos) o PCI es la forma más común de conectar tarjetas controladoras adicionales a la placa base de un ordenador. Este tipo de conector surgió a principios de los años 90 y en sigue utilizándose en la actualidad.
          <h5 class="text-left py-3">PCI Express o PCI-E</h5>
          Se trata de un bus, que en informática es como se le llama al conjunto de conexiones físicas que se utilizan para conectar componentes de hardware entre sí para que se comuniquen. El PCI-e comenzó a introducirse en 2004, y es la evolución del puerto PCI creado por Intel en 1991.
          <h5 class="text-left py-3">Sistema de alimentación eléctrica</h5>
          Una fuente de alimentación es el equipo que se encarga de transformar la corriente alterna (AC), que es la corriente que proviene directamente de la línea eléctrica, en corriente continua (DC), que es la que necesitan la mayoría de los dispositivos para funcionar correctamente.
          <h5 class="text-left py-3">Disipadores</h5>
          Elemento o pieza cuya misión es extraer el calor que genera el procesador. Cuando hablamos de disipador, estamos refiriéndonos a un componente que utiliza un elemento activo (ventilador) o pasivo (aletas de aluminio) para extraer el calor a través del aire.
          <h5 class="text-left py-3">Fuente de poder</h5>
          Las fuentes de poder sirven para brindar el suministro de energía a cada componente del sistema, por lo que no solo alimenta a la tarjeta madre, sino que también le suministra energía a los otros dispositivos complementarios que son insertados en la PC, como tarjetas, unidades ópticas, dispositivos que se conectan por puerto USB, el mouse o ratón, el teclado, los altavoces, entre otros.
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/pci.jpg" alt="">
            <img src="../assets/pci2.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">CONECTORES DE ENTRADA/SALIDA</h4>
        <div class="text-left">
          <h5 class="text-left py-3">Los puertos serie</h5>
          Un puerto serie es una interfaz física de comunicación en serie a través de la cual se transfiere información mandando o recibiendo un bit. A lo largo de la mayor parte de la historia de las computadoras, la transferencia de datos a través de los puertos de serie ha sido generalizada.
          <h5 class="text-left py-3">Los puertos paralelos</h5>
          Un puerto paralelo es una interfaz entre un computador y un periférico, cuya principal característica es que los bits de datos viajan juntos, enviando un paquete de byte a la vez. Es decir, se implementa un cable o una vía física para cada bit de datos formando un bus.
          <h5 class="text-left py-3">Los puertos PS/2</h5>
          Se trata de un puerto diseñado para conectar teclados y ratones al ordenador, y de hecho fue uno de los primeros conectores diseñados para esta función. Se trata de conectores seriales que son controlados desde la placa base.
          <h5 class="text-left py-3">Los puertos USB (en inglés Universal Serial Bus)</h5>
          The universal serial bus or USB is a standard protocol for linking PCs and peripherals. El bus serie universal o USB es un protocolo estándar para conectar ordenadores y periféricos.
          <h5 class="text-left py-3">Los conectores RJ-45</h5>
          Una interfaz de telecomunicaciones que es probable que use al configurar una red de datos. La RJ45 es similar a la RJ11, pero sus conectores suelen tener ocho pines, y actúa como interfaz de redes de datos (o Ethernet), y no de redes de telefonía.
          <h5 class="text-left py-3">Los conectores VGA, DVI, HDMI </h5>
          •	VGA (Vídeo Graphics Array): Es el conector para monitores más común, con pines, siendo el que se ha venido usando durante mucho tiempo.
          •	DVI (Digital Vídeo Interface): Conector cuya señal de vídeo, a diferencia de VGA, es digital, y permite una mayor calidad de imagen.
          •	HDMI (High Definition Multimedia Interface): Es el tipo de conector más actual, que además de una mayor calidad de imagen que los anteriores conectores, permite también la transmisión de audio.
          <h5 class="text-left py-3">Los conectores IDE, Serial ATA, Serial SATA </h5>
          IDE y SATA son diferentes tipos de interfaz para conectar aparatos de almacenaje (como discos duros) a sistemas de computadoras. 
          Serial ATA o SATA (acrónimo de “Serial Advanced Technology Attachment”) es una interfaz de transferencia de datos en serie entre la placa base y algunos dispositivos de almacenamiento, como pueden ser discos duros HDD, lectores y regrabadoras de CD/DVD/Blu-ray, unidades de estado sólido (SSD) u otros dispositivos de altas prestaciones que están siendo todavía desarrollados.
          <h5 class="text-left py-3">Los conectores jacks</h5>
          El conector de audio analógico (plug en inglés para señalar al conector macho, o jack para señalar al conector hembra de este tipo) de señales analógicas se utiliza para conectar micrófonos, auriculares y otros sistemas de señal analógica a dispositivos electrónicos, aunque sobre todo audio.
        </div>
        <a href="https://www.hp.com/mx-es/shop/tech-takes/que-tipos-de-puertos-suelen-tener-las-computadoras-de-escritorio" target="_blank">¿Quieres aprender más sobre los Puertos de la PC? Da click aquí</a>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/p1.jpg" alt="">
            <img src="../assets/p2.jpg" alt="">
            <img src="../assets/p3.jpg" alt="">
            <img src="../assets/p4.jpg" alt="">
            <img src="../assets/p5.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <Columnas>
      <template #col1>
        <h4 class="text-left">OTROS COMPONENTES</h4>
        <div class="text-left">
          <h5 class="text-left py-3">La CMOS</h5>
          RAM-CMOS es un tipo de memoria que almacena información sobre la configuración del sistema, por ejemplo, la elección de velocidad de buses, los tipos de discos duros instalados, secuencia de arranque, información de seguridad como la contraseña de modificación, overclock del procesador, activación de dispositivos, entre otras.
          <h5 class="text-left py-3">La BIOS Jumpers</h5>
          Un jumper o saltador es un elemento que permite cerrar el circuito eléctrico del que forma parte dos conexiones.
          <h5 class="text-left py-3">JMDM1</h5>
          Sirve para conectar un modem por el cual se puede encender el sistema cuando este recibe una señal. 
          <h5 class="text-left py-3">JIR2</h5>
          Este conector permite conectar módulos de infrarrojos IrDA, teniendo que configurar la BIOS.
          <h5 class="text-left py-3">JBAT1</h5>
          Se utiliza para poder borrar todas las configuraciones que como usuario podemos modificar y restablecer las configuraciones que vienen de fábrica.
          <h5 class="text-left py-3">JP20</h5>
          Permite conectar audio en el panel frontal.
          <h5 class="text-left py-3">JFP1 Y JFP2</h5>
          Se utiliza para la conexión de los interruptores del panel frontal y los ledes.
          <h5 class="text-left py-3">JUSB1 Y JUSB3</h5>
          Es para conectar puertos USB del panel frontal
        </div>
      </template>
      <template #col2>
          <div class="wrapper-img">
            <img src="../assets/o1.jpg" alt="">
            <img src="../assets/o2.jpg" alt="">
            <img src="../assets/o3.jpg" alt="">
          </div>
        </template>
    </Columnas>
    <div class="carousel">
      <carousel-3d :height="225" :width="340">
        <slide :index="0" >
          <img src="../assets/unidades.png" alt="">
        </slide>
        <slide :index="1">
          <img src="../assets/partespc.png" alt="">
        </slide>
        <slide :index="2">
          <img src="../assets/pc.jpg" alt="">
        </slide>
      </carousel-3d>
    </div>    
  </div>
</template>

<script>
import Columnas from '@/components/Columnas.vue'
import Ancla from '@/components/Ancla.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide,
    Columnas,
    Ancla
  }
}
</script>

import Link from "next/link";

export function TyCEs() {
  return (
    <div>
      <h1 className="m-b text-[1.5rem] pt-[4rem] pb-[2rem] text-bl-100">
        TÉRMINOS Y CONDICIONES
      </h1>
      <h2 className="m-b text-[.938rem] pb-[0.5rem]">INTRODUCCIÓN </h2>
      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        Bienvenido al sitio de internet www.{process.env.NEXT_PUBLIC_NAME_COMPANY}.com
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        colectivamente denominado como el “Sitio”. El uso que haga de este Sitio
        está expresamente condicionado a su aceptación de los presentes Términos
        y Condiciones. Al usar este sitio, manifiesta su consentimiento con los
        Términos y Condiciones.
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY}</span> se
        reserva el derecho de adicionar o modificar los Términos y Condiciones
        en cualquier momento. Todos los términos adicionados o modificados
        causarán efecto en el momento en que éstos sean actualizados. El uso
        continuo de este sitio, incluso posterior a la publicación de los
        cambios realizados a los Términos y Condiciones, significará que Usted
        acepta dichos cambios. Por favor regrese periódicamente a esta página
        para consultar cualquier cambio.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">DEFINICIONES.-</span> Para todos
        los efectos de los Términos y Condiciones aquí establecidos, se
        entenderán las siguientes definiciones:
        <span className="m-b text-[.938rem]">AGENCIA DE VIAJES.-</span>
        Empresa (Viajes Bamo S.A. de C.V.) Quienes contratan y/o actúan como
        intermediarias a través de sus servicios de reservación, en beneficio de
        un Usuario-Turista, respecto de los servicios turísticos proporcionados
        de manera directa por el Proveedor. (En lo sucesivo denominadas de aquí
        en adelante como “
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY}</span>”
        indistintamente). www.{process.env.NEXT_PUBLIC_NAME_COMPANY}.com.- Página web de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        que actúa como intermediaria y como motor de reservaciones, ofreciendo a
        través del internet al Usuario-Turista, los diversos servicios
        turísticos que proporciona de manera directa el Proveedor. (En lo
        sucesivo denominado de aquí en adelante como el
        <span className="m-b text-[.875rem]"> “Sitio”</span>).
        <span className="m-b text-[.938rem]">USUARIO-TURISTA.-</span>
        Persona que viaja temporalmente y/o que utiliza el sitio
        www.{process.env.NEXT_PUBLIC_NAME_COMPANY}.com, con el objeto de hacer uso de la
        intermediación y el motor de reservaciones de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y
        con el fin último de disfrutar cualquiera de los servicios turísticos
        proporcionados de manera directa por el Proveedor. (En lo sucesivo
        denominado de aquí en adelante como
        <span className="m-b text-[.875rem]"> “Usted”</span>).
        <span className="m-b text-[.938rem]"> PROVEEDOR.-</span> Persona física
        o moral que proporciona en forma directa los servicios turísticos a El
        Usuario-Turista, contratados, reservados o adquiridos por este último a
        través de la intermediación y motor de reservaciones del sitio de {process.env.NEXT_PUBLIC_NAME_COMPANY}.
      </div>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        <span className="m-b text-[.938rem]">DECLARACIONES.-</span> Usted
        declara bajo protesta de decir verdad, compareciendo por su propio y
        personal derecho y/o a través de su apoderado legal, que es una persona
        física o moral, mayor de edad, hábil, capaz y con los medios suficientes
        ó con capacidad económica para obligarse bajo los presentes Términos y
        Condiciones, así como con interés en adquirir los servicios de
        intermediación y reservación que aquí se especifican, y que para ello
        recurre a{" "}
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y a
        efecto de que funja como mera intermediaria entre Usted y los
        Proveedores prestadores directos de servicios turísticos.
      </div>
      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        Usted declara bajo protesta de decir verdad, que reconoce que los
        servicios proporcionados por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y su
        Sitio, consisten
        <span className="m-b text-[.938rem]">
          {" "}
          ÚNICA Y EXCLUSIVAMENTE EN LA INTERMEDIACIÓN ENTRE USTED Y EL PROVEEDOR
          DIRECTO DE LOS SERVICIOS. Viajes Bamo S.A de C.V.
        </span>
        , declara (a) ser una sociedad mercantil debidamente constituida
        conforme a las leyes mexicanas. (b) Que cuenta con autorización de la
        Secretaría de Turismo para prestar servicio de Agencia de Viajes, así
        mismo se encuentra registrada ante las autoridades Hacendarias con el
        Registro Federal de Contribuyentes número
        <span className="m-b text-[.938rem]"> VBA180925981</span>. (c) Que su
        domicilio se encuentra ubicado en Avenida Nader 98, Mz 5, Lote 117, SM
        3, Cancún, Quintana Roo, C.P. 77500. (d) Que su objeto social consiste
        en la facultad para: Actuar como intermediaria para la reservación de
        espacios en los medios de transporte y expedir de parte de los
        transportistas y a favor de los turistas los boletos correspondientes;
        servir de <span className="m-b text-[.875rem]">intermediario</span>{" "}
        entre los turistas y los prestadores de servicios de transportes de
        cualquier género; reservar a los turistas habitaciones y demás servicios
        conexos, en hoteles y establecimientos de hospedaje; prestar a los
        turistas servicios de reservación de sitios de atracción turística;
        servir de
        <span className="m-b text-[.875rem]"> intermediario</span> entre los
        demás prestadores de servicios turísticos y otras agencias de viajes;
        proporcionar servicio de información turística y difundir el material de
        propaganda de esta índole que sea de distribución gratuita. (e) Que para
        efectos de los presentes Términos y Condiciones, únicamente actúa como
        <span className="m-b text-[.875rem]">INTERMEDIARIA</span> entre Usted y
        los Proveedores de dichos servicios turísticos, y que para tal objeto,
        cuenta con la capacidad técnica y administrativa, así como con los
        elementos materiales y humanos necesarios para reservar por cuenta y a
        petición de Usted los servicios a los que hace referencia estos Términos
        y Condiciones. (f) Que con base en las Declaraciones que anteceden,
        acepta los presentes Términos y Condiciones.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">OBJETO.-</span> El objeto consiste
        en la
        <span className="m-b text-[.875rem]"> INTERMEDIACIÓN</span> que existirá
        entre
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        Usted y los Proveedores, en donde
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        para los efectos de los presentes Términos y Condiciones, actuará única
        y exclusivamente como
        <span className="m-b text-[.875rem]"> INTERMEDIARIA</span>,
        proporcionando a Usted a través de su Sitio de manera enunciativa más no
        limitativa, el servicio de reservación de transporte terrestre, y aérea;
        reservación en hoteles y establecimientos de hospedaje; reservación de
        sitios de atracción turística; reservación de paquetes de viajes; entre
        otros, Así, una vez que las reservaciones le sean confirmadas por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        conteniendo los servicios turísticos por Usted elegidos (de acuerdo a su
        disponibilidad), se concluirá con la prestación del servicio de
        intermediación por parte de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, ya
        que dichos servicios turísticos serán proporcionados a Usted por los
        Proveedores de manera directa.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">USO DEL SITIO.-</span>
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY}</span> le
        otorga una licencia limitada, intransferible, revocable, para usar este
        Sitio de acuerdo a los presentes Términos y Condiciones. Usted debe usar
        este sitio solamente para realizar o comprar reservaciones legítimas y
        no lo podrá usar para ningún otro propósito, incluida pero sin
        limitación a hacer alguna reservación especulativa, falsa o fraudulenta.
        Este Sitio y su contenido referido en él, de manera enunciativa más no
        limitativa: los textos, párrafos, enunciados, combinación específica de
        palabras, letras o elementos fonéticos, gráficos, iconos de botones,
        marcas, logotipos, obras de diseño gráfico, fotografías, avisos
        comerciales, patentes, método comercial, combinación específica de
        colores y formas, material editorial, formatos impresos, formatos de
        búsqueda, descargas digitales, compilaciones de datos, códigos fuente,
        software, etc. son propiedad exclusiva de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> o
        bien cuenta con todas las Licencias y Autorizaciones para tal uso, por
        tanto Usted no puede copiar, reproducir, volver a publicar, cargar,
        modificar, transmitir o distribuir dicho contenido sin tener la
        autorización previa y por escrito de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        excepto, en los casos (a) en que Usted descargue para ver e imprimir el
        material que se encuentra contenido en este Sitio ó (b) descargue o
        imprima el material que le sea enviado a su correo electrónico por parte
        de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, en
        ambas situaciones Usted única y exclusivamente podrá utilizarlo para su
        uso personal, debiendo incluir el material impreso siempre la leyenda “©
        VIAJES BAMO S.A. DE C.V. 2018-2020 Todos los derechos reservados.”
        quedando estrictamente prohibida cualquier reproducción total o parcial
        del Sitio o cualquier uso de su contenido destinado al lucro comercial.
        Usted no puede usar ningún dispositivo “robótico,” de “spider” u otro
        dispositivo automático, programa, algoritmo o metodología que tenga
        procesos o funciones similares, o ningún proceso manual, para monitorear
        o copiar cualquiera de las páginas Web, datos o contenido, código
        fuente, que se encuentre en este Sitio en ningún caso y sin el
        consentimiento previo y por escrito de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>. De
        acuerdo a lo anterior, Usted manifiesta estar de acuerdo en que no
        copiará, publicará, transmitirá, modificará o transferirá de ninguna
        otra manera los datos o contenido de este Sitio a ningún computador,
        servidor, sitio Web, o a otro medio de distribución masiva, para uso de
        ninguna empresa comercial, cualquier sitio, página web, o empresa
        nacional o extranjera que represente una actividad económica. Usted
        también manifiesta estar de acuerdo en que no usará ningún dispositivo
        de ninguna índole, software o rutina para interferir con el desempeño
        propio de este sitio. El uso no autorizado que Usted haga de este sitio
        ó cualquier reproducción total o parcial del Sitio y/o contenido y de su
        material, puede violar las leyes que rigen la propiedad de Derechos de
        Autor, Derechos de Propiedad Industrial y otras leyes. Usted deberá
        respetar todos los avisos sobre Derechos de Autor y Derechos de
        Propiedad Industrial y no podrá alterar, ocultar, o destruir ninguno de
        estos avisos. El uso de tal material en cualquier otro sitio web o en
        cualquier ambiente de computadores en red, está prohibido. Está
        prohibido por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> que
        usted coloque o transmita cualquier material que vaya en contra de la
        ley, amenazante, injurioso, difamatorio, obsceno, indecente,
        pornográfico, profano, o cualquier material que pueda constituir o
        animar a otros a tener conductas que se puedan considerar delitos
        criminales, que deriven en delitos civiles, o que de cualquier otra
        forma violen cualquier ley. Además, Usted tiene prohibido exhibir o
        transmitir cualquier información que (a) infrinja los derechos que
        tengan otras personas, o que violen su privacidad, o derechos de
        publicidad, (b) esté protegida por Derechos de Autor, de Marca
        Registrada u otros Derechos de Propiedad, a menos que se tenga la
        autorización expresa y por escrito de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> o
        del propietario de tales derechos, (c) que contenga un virus, bug o
        cualquier otro ítem peligroso o (d) que sea usada para confabularse
        ilegalmente en contra de otra persona en detrimento de su derecho a
        comercializar o a competir. Usted será el único responsable por
        cualquier daño que se cause por cualquier violación a los Derechos de
        Autor, de Propiedad Industrial, o a cualquier otra clase de Propiedad de
        Derechos, o por cualquier otro daño que se ocasione por el mal uso que
        usted haga de este sitio.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">EDAD Y RESPONSABILIDAD.-</span>
        Usted manifiesta, independientemente de su País de procedencia, que
        tiene la edad legal suficiente para usar este sitio y suscribir y
        obligarse ante los presentes Términos y Condiciones, así como para
        hacerse responsable a las obligaciones legales que lo unan con cualquier
        responsabilidad en que incurra por el uso de este Sitio. Usted comprende
        que será económicamente responsable por todo el uso que Usted haga de
        este Sitio y aquellos que lo usen utilizando su información para
        ingresar a él.
      </div>

      <h2 className="m-b text-[.938rem] pb-[0.5rem]">
        POLÍTICAS DE RESERVACIÓN, PAGO Y CANCELACIÓN
      </h2>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        <span className="m-b text-[.938rem]">POLÍTICAS DE RESERVACIÓN.-</span>
        Las tarifas mostradas en el sitio Web, son solamente válidas al momento
        de su cotización. Las tarifas aplicarán para su respectivo cargo, solo
        en caso de reservar el servicio deseado, pues de lo contrario dichas
        tarifas pueden variar. Una reservación se considera completada, cuando
        Usted cuenta con un número de confirmación y el cargo correspondiente ha
        sido aplicado. Al momento de reservar, Usted nos autoriza de manera
        escrita y/o verbal a usar su número de tarjeta de crédito para realizar
        su pago, y confirma expresamente conocer y aceptar los presentes
        <span className="m-b text-[.875rem]"> Términos y Condiciones</span>, así
        como la
        <span className="m-b text-[.875rem]"> política de privacidad</span> de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
        Todas las reservaciones están sujetas a disponibilidad al momento de
        procesar su solicitud. La disponibilidad no puede ser garantizada hasta
        haber recibido el pago total. Para algunas reservaciones (debidamente
        identificadas antes de llenar sus detalles de contacto y de la tarjeta
        de crédito), tenemos que verificar la disponibilidad directamente con el
        departamento de reservaciones del proveedor antes de poder confirmarlas.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> le
        pide un máximo de 24 horas para dicha verificación de disponibilidad y
        confirmación. Con el fin de evitar contratiempos, Usted debe imprimir su
        cupón correspondiente y presentarlo al momento de requerir su servicio
        pagado. Si Usted desea cambiar o cancelar su reservación, por favor
        póngase en contacto a la brevedad posible, con su Asesor de Viajes
        asignado, mencionando su número de reservación.
      </div>
      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY}</span> le
        sugiere leer cuidadosamente la cláusula correspondiente a las POLÍTICAS
        DE CANCELACIÓN. Cualquier cambio de reservación está sujeto a
        disponibilidad y re-cotización de tarifas. Para mayor información, Usted
        deberá contactar a su Asesor de Viajes asignado, mencionando su número
        de reservación. Toda reservación confirmada en firme por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        proporciona un número de control de reservación el cual deberá portar
        Usted en todo momento.
      </div>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        <span className="m-b text-[.938rem]">POLÍTICAS DE PAGO.-</span> El monto
        correspondiente a su reservación
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> lo
        cargará inmediatamente a los datos de la tarjeta de crédito que Usted
        proporcione para tal efecto, siempre y cuando el estatus de su
        reservación muestre que está confirmada, y aparecerá en su estado de
        cuenta con la leyenda:
        <span className="m-b text-[.875rem]"> “{process.env.NEXT_PUBLIC_NAME_COMPANY}”</span> o
        con la leyenda equivalente al Proveedor, excepto en algunas
        reservaciones que incluyen boletos de avión donde podrán aparecer dos
        cargos. (a) El primero por el costo de los boletos de avión y (b) el
        segundo por los demás servicios reservados, tales como: Hotel,
        traslados, impuestos, cuotas y otros. Estos cargos se reflejarán con la
        leyenda
        <span className="m-b text-[.875rem]"> “{process.env.NEXT_PUBLIC_NAME_COMPANY}”</span> o
        con la leyenda equivalente al Proveedor y el nombre correspondiente a la
        “AEROLÍNEA”. Para el pago de su reserva, aceptamos Tarjetas de Crédito
        Visa, MasterCard y American Express. Si Usted no cuenta con alguna de
        estas tarjetas de crédito, puede enviarnos una transferencia bancaria.
        Para mayor información favor de contactar a uno de nuestros Asesores de
        Viajes. Las tarifas publicadas en nuestro sitio están cotizadas en
        varios tipos de monedas, las cuales son debidamente especificadas en su
        momento. Los Pesos Mexicanos serán cobrados en Pesos Mexicanos. En el
        caso de cualquier otro tipo de moneda, el monto de la transacción será
        convertido a Dólares Americanos al tipo de cambio vigente a la fecha de
        la transacción. Favor de tomar en cuenta que el monto que aparecerá en
        su recibo de pago de su tarjeta de crédito, puede variar hasta un tres
        por ciento con motivo de la fluctuación internacional del tipo de
        cambios de divisas.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        es responsable de dicha fluctuación. Usted reconoce haber sido informado
        de la fluctuación del tipo de cambio y estar de acuerdo con el cargo
        correspondiente en Dólares Americanos. En caso de requerir factura
        fiscal, favor ingresar a la liga para facturación electrónica que se
        envía en su confirmación de itinerario. Cabe mencionar que por razones
        fiscales las facturas serán elaboradas después de generar el pago o
        después de haber disfrutado el (los) servicio(s) reservado(s).
      </div>
      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        Se le informa que existen impuestos y/o cuotas Estatales y Municipales
        tanto en la República Mexicana como en el Extranjero que podrían ser
        cobrados directamente por el proveedor final del servicio,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        asume ninguna responsabilidad sobre dichos cobros, ni forman parte del
        precio final de su reservación.
      </div>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        <Link
          className="text-[14px] py-[7px] m-m no-underline cursor-pointer"
          href="/policy"
        >
          <span className="m-b text-[.938rem] text-bl-100 hover:text-or-100">
            POLÍTICA DE CANCELACIÓN.-
          </span>
        </Link>
        Toda solicitud de cancelación debe ser informada por Usted por escrito
        vía e-mail a su Asesor de Viajes asignado, mencionando su número de
        reservación. Para Cancelación de Reservaciones de Hoteles: Al momento de
        seleccionar el hotel de su preferencia, Usted podrá consultar en los
        links denominados Política de Cancelación, los términos y condiciones de
        cancelación aplicables para cada Hotel. No obstante de la información
        que Usted podrá consultar en dichos links.
      </div>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        A continuación
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> le
        describe sus políticas generales de cancelación aplicables para la
        mayoría de los hoteles:
      </div>

      <ul className="pl-[2rem] mb-[0.5rem] list-disc">
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Las reservaciones canceladas 15 días o más antes de la fecha de
          llegada están sujetas a un cargo del 10% del total de la cantidad de
          su reservación.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Las reservaciones canceladas de 14 a 3 días antes de la fecha de
          llegada están sujetas a un cargo de 2 noches.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Las reservaciones canceladas de 2 a 0 días antes de la fecha de
          llegada, o en caso de no llegar, no serán reembolsadas. De igual
          manera no aplican reembolsos para salidas anticipadas.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Para las temporadas de Navidad, Año Nuevo y Semana Santa, las
          políticas de cancelación son diferentes, si desea información al
          respecto, por favor contacte a uno de nuestros Asesores de Viajes.- En
          los casos en los que proceda el reembolso en términos de las presentes
          políticas de cancelación, la cantidad a reembolsar se verá reflejada
          en su estado de cuenta dentro de los próximos 5- 10 días hábiles
          dependiendo del Proceso Bancario, principalmente de los plazos de su
          Banco emisor. Para Cancelación de Reservaciones de Tours y/o
          Transportación Terrestre: Al momento de reservar, las políticas de
          cancelación aplicables para el tour o la transportación terrestre
          específica, se desplegarán automáticamente en pantalla para su
          conocimiento.
        </li>
      </ul>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        A continuación
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> le
        describe sus políticas generales de cancelación, aplicables para la
        mayoría de los tours y servicios de transportación terrestre:
      </div>

      <ul className="pl-[2rem] mb-[0.5rem] list-disc">
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Las reservaciones canceladas 3 días o más antes de la fecha del
          servicio, están sujetas a un cargo del 10% del total de la cantidad de
          su reservación.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Las reservaciones canceladas de 2 a 0 días antes de la fecha del
          servicio, o en caso de no llegar, no serán reembolsadas.
        </li>
      </ul>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        Responsabilidad limitada de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}:</span> En
        virtud de que
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        actúa únicamente como INTERMEDIARIO en la prestación del servicio de
        transportación aérea, al no ser el prestador directo del servicio, Usted
        entiende y acepta que una vez que sean expedidos los boletos aéreos, si
        los mismos son cancelados y/o modificados y/o reprogramados por la línea
        aérea, por cualquier razón, que puede ser de manera enunciativa más no
        limitativa: (a) deja de realizar sus operaciones de forma habitual; (b)
        inicia algún procedimiento de liquidación o transfiere de forma
        sustancial sus activos; (c) se disuelve o legalmente termina su
        existencia; (d) se inicia sobre él un procedimiento de concurso
        mercantil; (e) se inicia una huelga por sus empleados; (f) y/o por
        cualquier otro motivo, será responsabilidad única y exclusiva de la
        aerolínea prestadora del servicio y no de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>. Por
        lo anterior, en el caso de que los servicios aéreos no sean
        proporcionados parcial o totalmente por parte de la línea aérea, Usted
        libera a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> de
        cualquier responsabilidad o falta de cumplimiento, no reservándose
        ninguna acción administrativa, civil o penal, ni derecho alguno en
        contra de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, ni
        a pretender alguna reclamación, compensación, reembolso, indemnización
        y/o pago de daños y perjuicios.
      </div>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        En los casos en los que proceda el reembolso en términos de las
        políticas de cancelación de las líneas aéreas, la cantidad a reembolsar
        se verá reflejada en su estado de cuenta dentro de los próximos 5-10
        días hábiles dependiendo del Proceso Bancario, principalmente de los
        plazos de su Banco emisor.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> se
        reserva el derecho de contratar por cuenta de Usted, los servicios a que
        se refiere este especifican en los presentes Términos y Condiciones
        precisamente en la calidad y/o categorías contratadas, en cuanto a
        transportistas, hoteles y arrendadoras de autos se refiere,
        independientemente del prestador último de los servicios, salvo que
        expresamente se convenga que estos serán prestados invariablemente por
        un proveedor determinado. En caso de modificación del prestador directo
        del servicio, este será proporcionado por otro de calidad equivalente,
        si Usted hace uso del servicio, se entenderá que consintió dicha
        modificación y no procederá reclamación, compensación o reembolso
        alguno. Una vez que
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        recibe por parte de Usted el importe de los servicios contratados, sean
        estos aéreos, terrestres, de hospedaje, en conjunto (paquete) o
        cualquier otro,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        cuenta con la autorización inmediata de Usted para emitir, expedir o
        adquirir los boletos aéreos a su nombre, apegándose y aceptando tanto
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        como Usted las políticas de cancelación, emisión y venta de boletos de
        las compañías aéreas nacionales e internacionales, las políticas de
        expedición, emisión y venta de boletos aéreos de IATA International y a
        las Políticas de Reservación y Cancelación de este Sitio.
      </div>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        Para las cancelaciones de autobuses
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        tiene capacidad de cancelaciones únicamente con el proveedor Primera
        Plus, para el resto de proveedores el proceso básico para cambios y
        cancelaciones es directamente en las taquillas, por lo menos 60 min
        antes de la salida.
      </div>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        Para realizar un cambio y/o cancelación de autobús el cliente requiere:
      </div>

      <ul className="pl-[2rem] mb-[0.5rem] list-disc">
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Boleto e identificación oficial (con copia)
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Los cambios se aplicarán a la misma corrida y pasajeros de la compra
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Los cambios están sujetos a disponibilidad de los autobuses
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          No hay cambios de boletos con descuento (i.e. estudiante, profesor)
        </li>
      </ul>

      <div className="py-[2.5rem] text-justify m-m text-[.875rem]">
        <span className="m-b text-[.938rem]">PROPIEDAD INDUSTRIAL.-</span>
        Usted reconoce que la marca
        <span className="m-b text-[.875rem]"> “{process.env.NEXT_PUBLIC_NAME_COMPANY}”</span>,
        es marca registrada o en trámite de registro para uso exclusivo de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>. Y
        de manera enunciativa más no limitativa las demás marcas, logotipos,
        nombres comerciales, patentes, modelos de utilidad y métodos
        comerciales, cartera de clientes, que aparecen ó funcionan en este
        Sitio, constituyen derechos de Propiedad Industrial que se encuentran
        registrados o en proceso de registro, son propiedad exclusiva de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, de
        sus afiliadas, ó terceras partes contratantes, y fueron proporcionadas
        para el uso del Sitio, por tal razón
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        cuenta con las autorizaciones y/o licencia de uso respectiva y por tanto
        Usted no puede copiar, reproducir, volver a publicar, cargar, publicar,
        modificar, transmitir o distribuir dichos derechos ni el contenido de
        este Sitio, sin tener la autorización previa y por escrito de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        excepto, en los casos (a) en que Usted descargue para ver e imprimir el
        material que se encuentra contenido en este Sitio ó (b) descargue o
        imprima el material que le sea enviado a su correo electrónico por parte
        de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, en
        cuyas situaciones, Usted única y exclusivamente podrá utilizarlo para su
        uso personal, debiendo incluir siempre la leyenda “© VIAJES BAMO S.A. DE
        C.V. Todos los derechos reservados”. En razón de lo anterior, nada de lo
        contenido en este Sitio incluyendo sus derechos protegidos por la Ley de
        Propiedad Industrial aplicable, por las Leyes y Tratados
        Internacionales, podrá ser considerado por Usted como una licencia o
        derecho a usar cualquiera de las Marcas Comerciales, o demás derechos de
        Propiedad Industrial sin el previo consentimiento por escrito de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, o
        en su caso de los titulares de tales derechos. Y se le prohíbe
        utilizarlas en cualquier otra aplicación que no sea permitida por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> o
        cualquier otro uso comercial. Usted acuerda en no alterar la Propiedad
        Industrial de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> en
        modo alguno, ni se permitirá la acción que de cualquier manera que pueda
        menoscabar, denigrar o disminuir los derechos de Propiedad Industrial de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
        Usted se compromete a no utilizar las marcas o nombres comerciales de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        como nombres de dominio ni registrarlos como parte de un nombre de
        dominio, o bien su colocación como parte de Publicidad en Internet sin
        previo consentimiento por escrito de
        <span className="m-b text-[.875rem]">
          {" "}
          {process.env.NEXT_PUBLIC_NAME_COMPANY}. {process.env.NEXT_PUBLIC_NAME_COMPANY}{" "}
        </span>
        se reserva el derecho de vigilar la calidad del uso de su Propiedad
        Industrial, además, notificará a Usted de inmediato por escrito en el
        caso de percatarse de la existencia de cualquier violación de su
        Propiedad Industrial. Cualquier uso inapropiado del contenido y de la
        Propiedad Industrial de este Sitio es susceptible de violación de las
        Leyes de Propiedad Industrial, Mexicanas y Extranjeras, de Tratados
        Internacionales así como derechos consignados en el Código Civil, Penal
        y de Comercio. Si Usted incurriera en algún uso inapropiado del
        contenido y Propiedad Industrial de este Sitio,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        tendrá el derecho de requerirle (a) que deje de utilizar el contenido
        que <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        considere vulnera sus derechos de Propiedad Industria. (b) que deje de
        copiar total o parcialmente, reproducir, volver a publicar, cargar,
        publicar, transmitir, distribuir o modificar el uso del contenido y de
        los Derechos de Propiedad Industrial de este Sitio (c) podrá requerir
        establecer un uso adecuado de sus derechos de Propiedad Industrial o
        bien (d) podrá iniciar los procedimientos legales necesarios para
        defender sus derechos de Propiedad Industrial.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">DERECHOS DE AUTOR.-</span>
        Usted reconoce de manera enunciativa más no limitativa que todos los
        textos, párrafos, enunciados, combinación específica de palabras, letras
        o elementos fonéticos, gráficos, iconos de botones, obras de diseño
        gráfico, fotografías, combinación específica de colores y formas,
        material editorial, formatos impresos, formatos de búsqueda, descargas
        digitales, compilaciones de datos, códigos fuente, software, programas
        de computación, bases de datos, anuncios publicitarios, que aparecen ó
        funcionan en este Sitio, constituyen Derechos de Autor que se encuentran
        registrados o en proceso de registro y son propiedad exclusiva de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> o
        del proveedor que presta el servicio, con titularidad de derechos
        patrimoniales, o sobre los cuales se cuenta con Licencia de uso o
        Autorización respectiva y fueron proporcionadas para el uso del Sitio,
        por tanto Usted no puede copiar, reproducir, volver a publicar, cargar,
        publicar, transmitir, modificar o distribuir dichos derechos ni el
        contenido de este Sitio, sin tener la autorización previa y por escrito
        de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        excepto, en los casos (a) en que Usted descargue para ver e imprimir el
        material que se encuentra contenido en este Sitio ó (b) descargue o
        imprima el material que le sea enviado a su correo electrónico por parte
        de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>, en
        cuyas situaciones, Usted única y exclusivamente podrá utilizarlo para su
        uso personal, debiendo incluir la leyenda “© VIAJES BAMO S.A. DE C.V.
        Todos los derechos reservados”. En razón de lo anterior, nada de lo
        contenido en este Sitio incluyendo los derechos protegidos por la Ley
        Federal de Derechos de Autor aplicable, y por las Leyes y Tratados
        Internacionales, podrá ser considerado por Usted como una licencia o
        derecho a usar cualquiera de estos Derechos de Autor sin el previo
        consentimiento por escrito de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>. Y
        se le prohíbe usarlas en cualquier aplicación que no sea permitida por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> o
        cualquier otro uso comercial. Usted acuerda en no alterar los Derechos
        de Autor de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> en
        modo alguno, ni se permitirá la acción que de cualquier manera que pueda
        menoscabar, denigrar o disminuir los Derechos de Autor de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
        Usted se compromete a no colocar todo o en parte de los Derechos de
        Autor de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        como publicidad en internet sin previo consentimiento por escrito de
        <span className="m-b text-[.875rem]">
          {" "}
          {process.env.NEXT_PUBLIC_NAME_COMPANY}. {process.env.NEXT_PUBLIC_NAME_COMPANY}{" "}
        </span>
        se reserva el derecho de vigilar la calidad del uso de sus Derechos de
        Autor, además, notificará a Usted de inmediato por escrito en el caso de
        percatarse de la existencia de cualquier violación de sus Derechos de
        Autor. Cualquier uso inapropiado del contenido y de los Derechos de
        Autor de este Sitio es susceptible de violación de las Leyes Federales
        de Derechos de Autor, Mexicanas y Extranjeras, de Tratados
        Internacionales, así como derechos consignados en el Código Civil, Penal
        y de Comercio. Si Usted incurriera en algún uso inapropiado del
        contenido y Derechos de Autor de este Sitio,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        tendrá el derecho de requerirle (a) que deje de utilizar el contenido y
        Derechos de Autor del Sitio, (b) que deje de copiar total o
        parcialmente, reproducir, volver a publicar, cargar, publicar,
        transmitir, distribuir o modificar el uso del contenido y de los
        Derechos de Autor de este Sitio (c) podrá requerirle establecer un uso
        adecuado de los Derechos de Autor o bien (d) podrá iniciar los
        procedimientos legales necesarios para defender sus Derechos de Autor.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">PRIVACIDAD Y SEGURIDAD.-</span>
        Usted manifiesta que ha leído la POLÍTICA DE PRIVACIDAD Y SEGURIDAD de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, los
        términos incorporados en ella, y está de acuerdo en que los términos de
        tal política son razonables. Usted consiente en que su información
        personal sea usada por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y/o
        por sus proveedores y distribuidores terceras partes de acuerdo con los
        términos de la Política de Privacidad de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y
        para los propósitos establecidos en ella.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">
          REVISIÓN DE LAS TRANSMISIONES.-
        </span>
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        podrá monitorear y revisar cualquier información que se transmita o
        reciba por medio de este sitio y se reserva el derecho a censurar,
        editar, suprimir o prohibir la transmisión o la recepción de cualquier
        información que
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        considere inapropiada o que viole estos términos y condiciones. Durante
        el tiempo que dure el monitoreo, puede que la información sea examinada,
        grabada o copiada y al usar este sitio usted manifestará que acepta tal
        monitoreo y revisión. Usted manifiesta además estar de acuerdo en que si
        usted hace sugerencias, presenta ideas, comentarios o hace preguntas, o
        coloca cualquier otra información en este sitio, usted le garantiza a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, el
        derecho no exclusivo, sin regalías, perpetuo, irrevocable y con derecho
        de sublicencia total para usar, reproducir, modificar, adaptar,
        publicar, traducir, crear trabajos derivados, distribuir y exhibir tal
        contenido en cualquier forma, medio o tecnología.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span> no
        se responsabiliza ni tendrá ninguna responsabilidad por ningún contenido
        que sea situado o presentado por Usted.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">
          LIMITACIÓN DE RESPONSABILIDAD.-
        </span>
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY} </span> NO
        SERÁ RESPONSABLE, NI ASUME NINGUNA RESPONSABILIDAD POR CUALQUIER DAÑO O
        VIRUS QUE PUEDA INFECTAR SU COMPUTADOR O CUALQUIER OTRA PROPIEDAD DE
        USTED DEBIDO AL ACCESO, USO O NAVEGACIÓN QUE HAGA DE ESTE SITIO, O POR
        LA DESCARGA DE CUALQUIER MATERIAL, DATO, TEXTO, IMAGEN, VÍDEO O AUDIO
        DESDE EL SITIO. EN NINGÚN CASO
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        SERÁ RESPONSABLE POR CUALQUIER LESIÓN, DAÑO, PERJUICIO, PÉRDIDA, RECLAMO
        O CUALQUIER DAÑO ESPECIAL, PUNITIVO, INDIRECTO, INCIDENTAL POR
        NEGLIGENCIA, O ILÍCITO, QUE RESULTE DE, (I) CUALQUIER USO DE ESTE SITIO
        O DEL CONTENIDO QUE AQUÍ SE ENCUENTRE, (II) CUALQUIER FALLA O DEMORA
        (INCLUYENDO, SIN QUE HAYA LÍMITE, EL USO DE, O LA IMPOSIBILIDAD DE USAR
        CUALQUIER COMPONENTE DE ESTE SITIO PARA LOS SERVICIOS DE RESERVACIÓN O
        EMISIÓN DE BOLETOS), O (III) EL FUNCIONAMIENTO O NO FUNCIONAMIENTO DEL
        PROVEEDOR, INCLUIDO, PERO SIN ESTAR LIMITADO A, EL NO FUNCIONAMIENTO
        RESULTADO DE LA BANCARROTA, REORGANIZACIÓN, QUIEBRA, CONCURSO MERCANTIL,
        DECLARACIÓN DE INSOLVENCIA, DISOLUCIÓN O LIQUIDACIÓN, HUELGA, PARO DE
        LABORES, SUSPENSIÓN DE ACTIVIDADES POR DECISIÓN DE LOS TRABAJADORES DE
        LOS PROVEEDORES, O POR CUALQUIER OTRO SIMILAR, YA QUE USTED COMPRENDE
        QUE
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> ES
        ÚNICAMENTE INTERMEDIARIO EN LA PRESTACIÓN DE LOS SERVICIOS TURÍSTICOS
        OFERTADOS EN EL SITIO Y COMPRENDE QUE EN LA MAYORÍA DE LOS CASOS NO
        PUEDE CONTROLAR EL DESTINO DE LOS PAGOS QUE USTED HAYA REALIZADO Y MÁS
        AÚN SI YA FUERON UTILIZADOS, EN SU CASO, POR LOS PROVEEDORES, INCLUYENDO
        HOTELES, AEROLÍNEAS, EMPRESAS DE TRANSPORTE TERRESTRE, ETC.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">RESPONSABILIDAD.-</span> Usted
        deberá responder de los daños que genere a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, que
        resulten de cualquier mal uso o uso incorrecto que pudiera hacer del
        Sitio, o sobre cualquier operación fraudulenta o con fines contrarios a
        los servicios prestados en el sitio o aquellos que vayan en contra de
        las leyes y reglamentos vigentes y aplicables.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">ENLACES.-</span> Este Sitio
        contiene enlaces a otros sitios Web los cuales se proporcionan
        únicamente para su conveniencia y no como respaldo a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y
        ellos pertenecen a los proveedores o distribuidores terceras partes de
        los contenidos de tales otros sitios Web.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        será responsable por el contenido de ningún otro sitio Web y no
        representa o garantiza ningún otro sitio Web o el contenido o material
        de tales sitios. Si Usted decide acceder a otros sitios Web, lo hace
        bajo su propia responsabilidad.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">
          SITIOS, FACEBOOK, TWITTER, YOUTUBE.-
        </span>
        Este Sitio contiene enlace a diversas páginas sociales, entre ellas, las
        páginas de Facebook con nombre de usuario:
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        página de twitter con nombre de usuario: @{process.env.NEXT_PUBLIC_NAME_COMPANY} y Youtube
        con usuario
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        cuentas administradas por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>;
        Usted reconoce que dichas páginas son exclusivamente para uso
        informativo y difusión social de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, y
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        será responsable de manera enunciativa más no limitativa por el
        contenido, información, publicación de terceros, comentarios,
        fotografías, videos, contenido de hashtags, ni cualquier otro material
        fuera del alcance de la administración directa de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, ni
        por el material que compartido en dichos sitios sociales por Usted o
        cualquier tercero y fuera de la administración de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        pueda violar los derechos de propiedad industrial o derechos de autor.
        Usted es responsable del uso que le pueda dar a dichos sitios, y Usted
        libera de toda responsabilidad a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        por cualquier uso incorrecto o mal intencionado que pudiera hacer de los
        mismos, o por publicaciones, información, comentarios, y material
        diverso que pudiera resultar ofensivo, insidioso, erróneo, pornográfico
        o que pudiera incitar a la violencia, rebelión, huelga, o cualquier
        actividad no permitida por la ley y las buenas costumbres.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">CLIMA.-</span> Este Sitio le
        proporciona a Usted el servicio de información y actualización del
        clima, mismo que se publica única y exclusivamente para fines
        informativos; Usted deslinda a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        será responsable sobre cualquier inconsistencia, inexactitud o
        información publicada dentro de su servicio del Clima,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        se hace responsable por cualquier cambio en las condiciones climáticas,
        ello por encontrarse fuera del control absoluto de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, por
        tanto Usted reconoce y libera de toda responsabilidad a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> de
        manera limitativa, más no enunciativa, sobre cualquier, reclamación,
        reembolso, queja, compensación, crédito, cambio, cancelación,
        inconveniencias, molestias, accidente, heridas, enfermedades, pérdidas
        físicas o materiales, daños, detrimento o afectación en su persona o en
        su patrimonio, muerte y todas aquellas derivadas de las condiciones
        climáticas de cualquiera de los destinos ofertados por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">MAPAS.-</span> Este Sitio le
        proporciona a Usted el enlace exclusivamente para fines informativos de
        Google Maps ©, respecto de la ubicación de diversos servicios
        proporcionados por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>;
        Usted reconoce que los mapas mostrados en el Sitio, así como la
        ubicación de tales servicios, son únicamente para fines de ubicación y
        localización aproximada, no obstante, Usted reconoce y conviene que al
        hacer uso de los mapas, Usted se sujeta a los términos y condiciones de
        uso que establece Google Maps ©, por lo que Usted libera a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> de
        cualquier responsabilidad derivada de cualquier inconsistencia respecto
        a la ubicación o direcciones mostradas en los mapas, libera a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>
        sobre cualquier desorientación, o cualquier pérdida de ubicación que
        pudiera sufrir derivada del uso de los mapas y libera a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span> de
        manera enunciativa más no limitativa sobre cualquier cambio, reembolso,
        queja, cancelación, recargos, no show, reclamo, crédito, compensación y
        cualquier otro que pudiera derivar de las inconsistencias o uso
        inapropiado de los mapas publicados en este Sitio y propiedad exclusiva
        de Google Maps ©.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">INFORMACIÓN VERDADERA.-</span>
        Usted reconoce y acepta su total obligación y responsabilidad de
        proporcionar datos veraces y correctos sobre las edades, sexo, nombres o
        apellidos tanto de Usted como de los demás usuarios-turistas que lo
        acompañen o que lo comisionen para hacer uso de éste Sitio, así como de
        los datos e información completa para la formación del itinerario y la
        reservación de servicios terrestres y marítimos (hoteles, visitas, autos
        de alquiler, restaurantes, cruceros, etc) liberando a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span> de
        cualquier responsabilidad por cambios de itinerario generados por datos
        mal proporcionados, o por cualquier error en los datos proporcionados
        por Usted para la emisión o compra de boletos aéreos como puede ser el
        caso de edades, sexo, nombres, apellidos, fechas, formas de pago, rutas,
        líneas aéreas, horarios, clases, categorías, condiciones especiales,
        etc., apegándose en su caso a las cláusulas de cancelación para
        servicios aéreos, terrestres, marítimos o de cruceros expresadas en
        estos Términos y Condiciones.
      </div>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        <span className="m-b text-[.938rem]">
          RESPETO DE LOS REGLAMENTOS Y CONDICIONES DE LOS SERVICIOS.-
        </span>
        Usted se compromete a apegarse y a respetar los reglamentos y
        condiciones de servicio establecidas por cada uno de los Proveedores y
        prestadores directos de servicios contratados por Usted a través de la
        intermediación de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, por
        lo que
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        debe hacer de su conocimiento las que sean más importantes, no obstante
        el Proveedor podrá hacer de su conocimiento nuevas o adicionales
        condiciones de servicio sobre las cuales
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        tiene responsabilidad alguna y en consecuencia declina cualquier
        responsabilidad que pudiera derivar por su incumplimiento. Así mismo,
        Usted deberá por medios propios proveerse de los pasaportes o documentos
        de migración requeridos por las autoridades de los Estados Unidos
        Mexicanos y de los países de destino ó de tránsito, tales como visas,
        permisos sanitarios, vacunas y todos aquellos documentos requeridos por
        las autoridades Aduaneras, Aéreas, Marítimas, Aeroportuarias, Federales,
        Estatales, Municipales etc., que resulten necesarias para realizar su
        viaje, liberando a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        sobre cualquier problema que llegare a surgir con dichas autoridades,
        así como de la pérdida de boletos de avión, transportación aérea o
        noches de hotel con motivo de dichas omisiones que en ningún caso podrán
        ser imputadas a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span> por
        ser de responsabilidad exclusiva de Usted. En los casos de viajes
        internacionales Usted se compromete a presentarse en los aeropuertos y
        documentarse ante las aerolíneas mínimo con TRES HORAS DE ANTICIPACIÓN
        en vuelos internacionales y DOS HORAS DE ANTICIPACIÓN en vuelos
        nacionales, salvo la instrucción expresa y por escrito que reciba de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y/o
        alguna otra instrucción para presentarse aún antes por parte de dichas
        Autoridades.
      </div>
      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        En caso de reservaciones hoteleras, Usted se compromete a firmar a la
        llegada al establecimiento hotelero reservado, el contrato del servicio
        o la tarjeta de registro correspondiente proporcionado por dicho
        establecimiento.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">
          ANTICIPACIÓN O LIQUIDACIÓN DEL IMPORTE.-
        </span>
        Ambas partes convienen en que el pago de anticipos o liquidación del
        importe de los servicios objeto de los presentes Términos y Condiciones
        por parte de Usted, así como el uso de cupones, boletos, cortesías, o
        cualquier otro documento expedido en su favor, implica de su parte la
        aceptación total de estos Términos y Condiciones.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">
          CONVENIOS ADICIONALES CON PROVEEDORES.-
        </span>
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        queda relevada de cualquier responsabilidad derivada de convenios
        adicionales y fuera de la intermediación con
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        que se hayan celebrado entre Usted y demás Proveedores prestadores
        directos de los servicios, como son transportistas aéreos y terrestres,
        navieras, cruceros, hoteles, arrendadoras de autos, etc.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">
          SERVICIOS POR O PARA TERCERAS PERSONAS.-
        </span>
        En el caso de que Usted contrate los servicios de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span> a
        través del Sitio, por cuenta de diversa agencia de viajes o de cualquier
        tercero, o bien los contrate Usted a favor de terceras personas, Usted
        está de acuerdo que todos los sujetos antes mencionados se sujetarán
        invariablemente a los presentes Términos y Condiciones. Para el caso de
        que Usted contrate los servicios de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> por
        cuenta de diversa agencia de viajes, o cualquier tercero, fungiendo
        estos como intermediarios,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> se
        deslinda de cualquier responsabilidad o problema generado por el
        incumplimiento de la intermediaria o agencia de viajes y en el mismo
        sentido por datos mal proporcionados por la intermediaria o agencia de
        viajes para la reservación de servicios terrestres, aéreos, marítimos,
        de navieras y cruceros, o bien, por la negligencia en que pudiera
        incurrir dicha intermediaria al omitir información al usuario-turista o
        a Usted sobre los procedimientos de contratación, pago y cancelación de
        los servicios que se adquieren.
      </div>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        <span className="m-b text-[.938rem]">
          DESLINDE DE RESPONSABILIDADES.-
        </span>
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        como Agencia de Viajes por internet, presta servicios en calidad de
        agente de reservaciones intermediaria entre Usted y el Proveedor o
        Proveedores directos de los servicios turísticos promocionados en este
        Sitio.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        establece negociaciones comerciales dentro de sus propios estándares de
        calidad y servicio, tales como, pero no limitados a: hospedaje en
        hoteles, transportación terrestre y otras actividades turísticas afines
        como tours y excursiones, eligiendo sólo a los proveedores más
        calificados y de mayor prestigio del mercado. Ahora bien, toda vez que
        el carácter jurídico de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span> es
        el de fungir única y exclusivamente como INTERMEDIARIA y no como
        proveedora directa de los servicios turísticos,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span> no
        asume ni asumirá ninguna responsabilidad generada de relación alguna
        ante Usted y los Prestadores Finales de Servicios y a su vez Usted
        libera a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        sobre cualquier responsabilidad ante cualquier falla o falta de
        cumplimiento por parte del Proveedor o Proveedores directos de los
        servicios turísticos, incluyendo sin limitación alguna cualquier falla o
        cumplimiento por parte de las aerolíneas, hoteles, proveedores de
        hospedaje temporal, navieras y toda clase de embarcaciones, proveedores
        de deportes acuáticos, agencias de renta de autos, agencias de
        transportación, operadores de tours, instructores de buceo, instructores
        de esnórquel, instructores de golf, instructores de nado con delfines,
        instructores de pesca, proveedores de deportes de aventura y deportes
        extremos, parques acuáticos, parques ecológicos, y en general sobre
        cualquier falla o falta de cumplimiento por parte de todos aquellos
        servicios turísticos que sean proporcionados de manera directa por uno o
        varios Proveedores y no de manera directa por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>; Sin
        embargo
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        podrá a su libre discreción proporcionarle datos de contacto y/o
        domicilio del proveedor a efecto de que Usted ejerza la reclamación
        respectiva o vía de reclamación que Usted considere necesaria.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        como Agencia de Viajes y agente INTERMEDIARIA de reservaciones, no
        ofrece, ni ofrecerá ninguna garantía sobre los servicios proporcionados
        de manera directa por los Proveedores, ni garantiza la posición
        financiera de los mismos o cualquier reembolso a Usted ocasionado por
        cualquier pérdida experimentada como resultado de la condición
        financiera de dicho Proveedor, incluyendo sin limitación alguna, la
        insolvencia económica, o Concurso Mercantil en que se llegare a declarar
        dicho Proveedor. En el evento en que el Proveedor falle en el
        cumplimiento de alguno de sus servicios, por los cuales el pago Usted ya
        ha realizado, el solo recurso del reembolso deberá tramitarse
        directamente ante el Proveedor que falló en la prestación de sus
        servicios, o pueda solicitar la cobertura del seguro en el caso de ser
        aplicable o ante cualquier otra tercera parte, a menos que el anterior
        fallo sea ocasionado de manera directa por
        <span className="m-b text-[.875rem]">
          {" "}
          {process.env.NEXT_PUBLIC_NAME_COMPANY}. {process.env.NEXT_PUBLIC_NAME_COMPANY}
        </span>
        , no asume responsabilidad ante Usted y Usted libera de toda
        responsabilidad a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> por
        actos, omisiones o cualquier tipo de queja o insatisfacción derivados de
        los servicios proporcionados por los proveedores directos de servicios
        en el Sitio anunciados, en virtud de que
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        tiene control alguno o relación legal sobre su personal, equipo,
        operación, publicidad o bienes. En aquellas situaciones en que el
        Proveedor falle en la prestación de sus servicios Usted podrá intentar
        cualquier recurso permitido por las leyes aplicables en contra del
        Proveedor.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> le
        garantiza que cuenta con altos estándares de servicio y tomará un
        cuidado especial en la selección de los Proveedores para evitar en todo
        momento la falla de los mismos.
      </div>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        Asimismo{" "}
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        será responsable y Usted libera de toda responsabilidad a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        respecto de:
      </div>

      <ul className="pl-[2rem] mb-[0.5rem] list-disc">
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          La veracidad de las fotografías mostradas en su Sitio ya que las
          mismas son solamente representativas y no garantizan que a su llegada,
          todo sea exactamente igual como en ellas se aprecia y en el Sitio
          describe; ya que las mismas son proporcionadas por los propios
          proveedores directos del servicio, por la que su veracidad es
          responsabilidad única y exclusiva de los proveedores y cualquier
          reclamación sobre supuesta publicidad engañosa Usted reconoce que
          deberá realizarla directamente a los proveedores por no ser
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
          responsable de dichas imágenes con pleno conocimiento de usted desde
          el momento en que contrata su servicio turístico.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          La categoría de estrellas asignada a los hoteles y servicios, ya que
          están basadas en la interpretación de
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y
          de los Proveedores Directos de Servicios y pueden diferir de las
          categorías reportadas en otros lugares.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Las descripciones de los servicios de viaje son actualizadas por
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> a
          su mejor conocimiento, pero no garantizan que todo será exactamente
          igual a su llegada.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Cualquier tipo de falla por parte de Usted en obtener la documentación
          requerida para su viaje tal como, pero no limitada a, pasaportes,
          visas, vacunas, permisos, certificados, etc.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Cualquier tipo de falla por parte de Usted para seguir las
          instrucciones de viaje incluyendo, pero no limitado a, horarios de
          salida de aeropuerto, hora y fecha de entrada y salida en hoteles,
          políticas de canje de cupones, etc.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Por falta de condiciones financieras por parte del Proveedor para
          proporcionar el servicio, en el caso que el proveedor del servicio
          final se declare en quiebra o bancarrota y/o concurso mercantil en
          huelga, suspensión temporal o definitiva de actividades conforme a la
          legislación de México o de los países en donde se encuentre el
          prestador del servicios y que por dichas causas o cualquier otra
          similar tenga que dejar de prestar el servicio, Usted está de acuerdo
          en que tendrá que solicitar la devolución de la cantidad pagada
          directamente al proveedor, toda vez que, el proveedor final del
          servicio es quien tiene en su poder la cantidad pagada por Usted.
        </li>
      </ul>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        Respecto a los términos y condiciones y/o políticas de los Proveedores
        directos de servicios.
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        asumirá responsabilidad alguna y Usted libera de toda responsabilidad a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, así
        como de toda reclamación, costo, gasto o pérdida que Usted pudiera
        sufrir incluyendo cualquier herida personal o de terceras personas,
        accidentes o deceso, daños a pertenencias personales, pérdida de
        diversión, enojo, desilusión, angustia o frustración, ya sea mental o
        física, siempre que sean resultado de:
      </div>

      <ul className="pl-[2rem] mb-[0.5rem] list-disc">
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          O cualquier falla o falta por parte del Proveedor directo al
          proporcionar el servicio.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          O cualquier falla o falta por parte de Usted al momento de disfrutar
          de los servicios contratados.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          O cualquier falla o falta de usted al observar o cumplir los términos
          y condiciones, políticas, instrucciones, recomendaciones, medias de
          seguridad, etc de los Proveedores finales del servicio.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          O casos de fuerza mayor o casos fortuitos como lo son: huelgas,
          atrasos, terremotos, conflictos bélicos, huracanes, nevadas, y en
          general cualquier otro evento legal o de la naturaleza que sea
          impredecible y que no le sea imputables a
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          O actos u omisiones de cualquiera otra persona que no sea
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          O enfermedad, robo, disputas laborales, fallas mecánicas, cuarentena,
          acciones gubernamentales, clima, o cualquier otra causa ajena al
          control directo de
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          O ante la insistencia de Usted para realizar cualquier tipo de viaje,
          actividad turística, tomar un tour, excursión, tomar cualquier tipo de
          transportación aérea, terrestre, marítima y de cualquier tipo, bajo
          condiciones precarias de salud o que no sean óptimas para el
          desarrollo de tales actividades, así como el desarrollo por Usted de
          cualquier tipo de deportes extremos o actividades que puedan implicar
          algún peligro y que fueron realizados bajo su entero conocimiento, o
          cuando padezca algún tipo de enfermedad, condición médica,
          incapacidad, algún tipo de alergia, se encuentre bajo medicación o
          prescripción médica, indicaciones de reposo y/o todas aquellas
          condiciones médicas que bajo su propio riesgo fueron omitidas y que
          pudieran resultar en un deterioro a su salud al momento de realizar
          dichas actividades bajo consciencia de causa, bajo dichas ocasiones
          siempre se considerarán fueron realizadas bajo su propio riesgo,
          liberando Usted a
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
          respecto de cualquier denuncia, demanda, queja, inconformidad,
          recompensa, indemnización, compensación, reclamación por daños
          directos, indirectos, punitivos, cortesía, etc., derivados de
          cualquier incidente ocasionado durante el desarrollo de cualquier
          servicio o actividad y cualquier evento futuro derivado del incidente
          inicial por cualquiera de estas causas.
        </li>
        <li className="m-m text-[.875rem] pl-[0.5rem] pb-[5px]">
          Cualquier otro evento que no se encuentre bajo el control directo de
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>.
          Cualquier reclamación o notificación por escrito en contra de
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
          deberá ser recibida a más tardar con catorce (14) días después del
          regreso de su viaje;
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
          se reserva el derecho de rechazar o realizar una operación comercial
          con algún Usuario- Turista en cualquier momento;
          <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
          se reserva el derecho de cancelar o cambiar los servicios de viaje a
          nuestra discreción, pero se tratará de sustituirlos con servicios
          comparables; Usted será responsable de verificar que el Proveedor
          final cuente con servicios especiales como puede ser acceso,
          comodidades y servicios para personas con capacidades diferentes,
          físicas o de cualquier otro tipo, lo cual se le sugiere lo haga
          previamente a la realización de su reservación. Usted será responsable
          de leer y de sujetarse a los términos y condiciones y/o políticas de
          los Proveedores finales de servicios.
        </li>
      </ul>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        El reembolso total no será procedente en situaciones en las que el viaje
        tenga que ser cancelado, interrumpido y/o pospuesto por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> por
        razones que estén fuera de su control (causas de fuerza mayor, tales
        como, pero no limitadas a, clima, huracán, terremotos, actos de
        terrorismo, huelgas, solicitud de quiebra o concurso mercantil,
        suspensión de actividades, etc.) y en los que las obligaciones
        contractuales de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> con
        sus proveedores no le permitan obtener reembolso de la suma pagada o a
        ser pagada al Proveedor por cuenta del cliente. En cualquier caso, a
        discreción de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>, se
        podrá retener un 10% del total de la cantidad pagada por la reservación
        como gasto administrativo. A pesar de la estrecha comunicación
        establecida por
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> con
        los Proveedores aquí anunciados, existe la posibilidad de que la
        vigencia de algunos precios haya expirado o provenga de información
        erróneamente o imprecisamente proporcionada por dichos Proveedores con
        la que nuestra base de datos es alimentada. No obstante esto,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        toma la precaución de verificar las tarifas que aplican con cada
        reservación. En caso de que el precio correcto sea menor a la cantidad
        cotizada,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        aplicará el monto menor. En caso de que el precio correcto sea mayor a
        la cantidad cotizada, su Asesor de Viajes asignado se pondrá
        oportunamente en contacto con Usted, informándole la cantidad correcta o
        bien registrando la cancelación de la reservación a petición suya por no
        estar de acuerdo con el incremento en precio, deslindando expresamente a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y
        sus Proveedores de cualquier responsabilidad o pago de indemnización por
        inconvenientes causados por dicha cancelación. En el caso de que los
        servicios contratados no pudieran ser proporcionados parcial o
        totalmente por parte del Proveedor,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        sólo podrá en determinadas ocasiones gestionar por cuenta de Usted el
        reembolso del importe que proceda, quedando relevada
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> México de
        cualquier responsabilidad o compromiso mayor en los casos en que el
        reembolso por la cantidad total o restante no sea reembolsada por el
        Proveedor.
      </div>
      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        En casos de que por algún error o manipulación por Usted del sistema de
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        se obtenga una cantidad ilógicamente menor al valor comercial del
        servicio ofertado, a menos que se ofrezca expresamente como una oferta
        extraordinaria o como promoción por ser cliente frecuente,
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        podrá notificar al cliente turista el precio real y verdadero antes de
        la prestación del servicio, a efecto de que el cliente decida si desea
        conservar su reservación y en caso de no ser así, acepta que las
        cantidades que haya pagado, le sean reembolsadas en el mismo método de
        pago que haya realizado, sin responsabilidad para
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">
          Deslinde "U.S. Citizens"/Cuba.-
        </span>
        Si usted es ciudadano de los Estados Unidos de América (EUA), o una
        compañía controlada o bajo la titularidad de una entidad de EUA, y por
        lo tanto le resulta aplicable el programa administrado por The Cuban
        Assets Control Regulations ("CACR"), y bajo la regla 31 C.F.R. § 515, o
        le es prohibido adquirir servicios turísticos hacia Cuba. En caso de
        adquirir cualquier servicio turístico hacia Cuba de los ofertados en el
        presente sitio, usted manifiesta y será responsable de contar con todos
        los requisitos previstos en dicha regla y/o cualquier ley, norma o
        regulación aplicable que para tal efecto le determine EUA y/o el
        Department of Treasury's Office of Foreign Assets Controls ("OFAC").
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">TERMINACIÓN.-</span>{" "}
        <span className="m-b text-[.875rem]">{process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        podrá dar por terminado estos Términos y Condiciones y/o cualquiera de
        sus servicios en cualquier momento sin necesidad de avisar o notificar
        dicha terminación, por cualquier causa o motivo, incluyendo por
        cualquier uso inapropiado de este sitio o su incumplimiento con estos
        Términos y Condiciones. No obstante tal terminación no afectará ningún
        derecho u obligación contraída por {process.env.NEXT_PUBLIC_NAME_COMPANY} ante Usted una
        vez confirmada una reservación.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">CESIÓN.-</span> Usted no podrá
        ceder, subcontratar, o delegar sus derechos, obligaciones o deberes aquí
        contraídos.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">DIVISIBILIDAD.-</span> Estos
        Términos y Condiciones continuarán siendo divisibles. En caso de que
        cualquier término o condición sea considerada prohibida o inejecutable,
        tal disposición no obstante será obligatoria y tal determinación no
        afectará la validez y obligatoriedad de cualquiera otra disposición
        restante.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">TÍTULOS.-</span> Los títulos usados
        en los Términos y Condiciones son sólo utilizados para su conveniencia y
        no limitarán o afectarán de otra manera el contenido de los Términos y
        Condiciones aquí establecidos.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">ACUERDO TOTAL.-</span> Los
        presentes Términos y Condiciones, que aquí se incluyen, o a los cuales
        se haga referencia, constituyen el acuerdo total y completo entre las
        partes en relación con el objeto aquí establecido, y sustituye cualquier
        acuerdo o contrato anterior efectuado entre las partes (ya sea oral o
        escrito) que esté relacionado con el mismo objeto, y no será enmendado o
        modificado excepto si se hace por escrito o haciendo que tales enmiendas
        o modificaciones estén disponibles en este sitio.
      </div>

      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        <span className="m-b text-[.938rem]">LEGISLACIÓN APLICABLE.-</span>
        Estos Términos y Condiciones se regirán por las leyes del estado
        Quintana Roo. Usted manifiesta que conoce los alcances de los presentes
        términos y condiciones, cuyos Términos y Condiciones son la expresión
        fiel de su voluntad y se someten para el caso de incumplimiento o
        interpretación a la competencia de la Procuraduría Federal del
        Consumidor, en la vía administrativa, como instancia conciliatoria, para
        resolver las diferencias que pudieran suscitarse y en caso de subsistir
        las mismas Usted está de acuerdo en someterse a la competencia de las
        Leyes y Tribunales de Cancún, Quintana Roo, México, bajo su jurisdicción
        exclusiva, renunciando a su vez a cualquier otra jurisdicción que en
        razón de sus domicilios presentes o futuros o por la ubicación de sus
        bienes o por su nacionalidad pudiera corresponderle. En la medida que lo
        permita la ley de aplicación, ninguna queja, reclamo o causa de acción
        que esté relacionado con su acceso o uso de este Sitio deberá
        presentarse posterior al término transcurrido de un (1) año siguiente a
        la fecha en que tal queja, reclamo o acción se haya presentado o la
        compra haya sido completada.
      </div>

      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        <span className="m-b text-[.938rem]">
          ACUERDO, RENUNCIA Y EXONERACIÓN SOBRE COVID-19.-
        </span>
        Al reservar con
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span>,
        Usted leyó detenidamente nuestros términos y condiciones y está de
        acuerdo en que
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        fungió únicamente como mera intermediaria de reservación entre Usted y
        el proveedor final del servicio. Ahora bien, derivado de la pandemia por
        COVID-19 que ha afectado el mundo, la mayoría de nuestros proveedores,
        tales como: hoteles, transportadoras, tours, aerolíneas, etc., están
        volcados en seguir garantizando su bienestar para que Usted y aquéllos
        por los que Usted responde (entre otros, los demás Usuarios incluidos en
        su misma reserva) se sientan más cuidados que nunca. Por lo que han
        implementado protocolos de seguridad e higiene con el objetivo de
        brindarle a Usted un servicio de calidad y unas vacaciones seguras.
      </div>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        Por lo anterior, Usted y aquéllos por los que responde entienden que hay
        muchas incógnitas relacionadas con el virus COVID-19, incluidas entre
        otras, sus métodos de transmisión, la presentación de la sintomatología
        y su duración. Además, entienden y conocen los riesgos inherentes
        asociados al COVID-19 y están de acuerdo en reservar y utilizar los
        servicios de los Proveedores finales reconociendo y asumiendo esos
        riesgos. Usted y aquéllos por los que responde eximen de toda
        responsabilidad, mantendrán indemne y se comprometen a no demandar a
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> y/o
        Viajes Bamo, S.A de C.V., y sus predecesores, sucesores, entidades
        filiales, matrices, subsidiarias y demás relacionadas, directores
        pasados o presentes, cesionarios, representantes, agentes, abogados,
        gerentes, administradores, socios comerciales, Proveedores, o
        cualesquiera otras personas de cualquier manera relacionadas con
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY} </span>
        (los “Exonerados”) respecto de cualquier queja, acción judicial o
        reclamación de cualquier daño y/o perjuicio, cualquiera que sea su
        naturaleza, económicos, financieros o de otro tipo, legales,
        contractuales o extracontractuales, relacionadas directa o
        indirectamente con la transmisión, contagio o propagación de COVID-19,
        incluidas aquellas reclamaciones de daños y perjuicios derivados de
        acciones u omisiones de cualquiera de los Proveedores, o de acciones u
        omisiones de Usted al no acatar las medidas o protocolos impuestos por
        los Proveedores.
      </div>
      <div className="pb-[0.5rem] m-m text-[.875rem] text-justify">
        Durante el tiempo en que Usted y aquéllos por los que responde, utilicen
        el servicio de los Proveedores, aceptan cumplir con todos y cada uno de
        los requerimientos de los Proveedores relacionados al COVID-19,
        incluidos, entre otros, el cumplimiento de las órdenes o directrices
        gubernamentales, órdenes de distanciamiento social y/o uso de
        mascarillas, comunicación inmediata al Proveedor de síntomas y/o posible
        infección, normas de higiene personal, aislamiento y cuarentena, y
        cualquier otra orden o directriz emitida por los Proveedores, o
        cualquier agencia o entidad del país de origen o cualquier autoridad
        local.
      </div>
      <div className="m-m text-[.875rem] text-justify pb-[2.5rem]">
        Reiteramos que todos los protocolos de higiene y seguridad adoptados por
        los Proveedores finales, son responsabilidad de estos últimos, por lo
        que
        <span className="m-b text-[.875rem]"> {process.env.NEXT_PUBLIC_NAME_COMPANY}</span> no
        asume responsabilidad por la eficiencia de dichos protocolos.
      </div>
    </div>
  );
}

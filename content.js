/* =====================================================================
   CONTENIDOS DE LA PLATAFORMA  ·  Bases Bioquímicas para Enfermería
   Este es el único archivo que necesitas editar para agregar material.

   MODULES   → módulos (resumen de cada tema)
   all  : (opcional, en un módulo) true = cada ronda muestra todas sus preguntas
   QUESTIONS → banco de preguntas. En cada pregunta:
       m    : id del módulo
       q    : enunciado
       o    : alternativas. LA PRIMERA ES LA CORRECTA (la app las mezcla)
       hint : pista (opcional)
       e    : explicación que se muestra después de responder
       case : texto de la situación o caso (opcional)
       etapa: 1 o 2 (solo en módulos con "desafio": cada etapa tiene sus preguntas)
   ===================================================================== */

const MODULES = [
  {
    id: "enzimas",
    desafio: { need: 9 }, // se necesitan 9 de 10 correctas para abrir la Etapa 2
    facts: [["Km ↑", "inhibidor competitivo"], ["Vmax ↓", "inhibidor no competitivo"], ["Holoenzima", "proteína + cofactor"]],
    title: "Enzimas",
    tag: "Catalizadores biológicos",
    blurb: "Las proteínas que aceleran las reacciones del metabolismo.",
    summary: [
      { h: "¿Qué son las enzimas?", items: [
        "Son moléculas orgánicas, principalmente <b>proteínas</b>, que catalizan reacciones biológicas: aumentan la velocidad de las reacciones de las células.",
        "Casi todas las reacciones de las rutas metabólicas están catalizadas por enzimas.",
        "Disminuyen la energía de activación de la reacción."
      ]},
      { h: "Características", items: [
        "Son <b>muy específicas</b>: reaccionan con pocos sustratos.",
        "Aceleran las reacciones más que los catalizadores químicos.",
        "Se <b>reutilizan</b>: no se consumen en la reacción.",
        "Se pueden <b>regular</b>.",
        "No alteran la constante de equilibrio de la reacción."
      ]},
      { h: "Sitio activo y unión con el sustrato", items: [
        "El <b>sitio activo</b> es la región que reconoce al sustrato y donde ocurre la reacción.",
        "Modelo del <b>ajuste inducido</b>: la enzima cambia de forma al unirse al sustrato."
      ]},
      { h: "Cofactores y coenzimas", items: [
        "Algunas enzimas necesitan moléculas adicionales, distintas del sustrato, para funcionar.",
        "<b>Cofactores</b>: moléculas inorgánicas, como los iones Mg²⁺ y Zn²⁺.",
        "<b>Coenzimas</b>: moléculas orgánicas, como NAD⁺ y FAD.",
        "<b>Apoenzima</b>: la proteína sola. <b>Holoenzima</b>: la proteína con su cofactor; es la forma activa."
      ]},
      { h: "Clasificación según la reacción", items: [
        "<b>Oxidorreductasas</b>: reacciones de oxidación y reducción.",
        "<b>Transferasas</b>: pasan un grupo de una molécula a otra.",
        "<b>Hidrolasas</b>: rompen enlaces usando agua.",
        "<b>Liasas</b>: agregan o quitan grupos sin usar agua.",
        "<b>Isomerasas</b>: cambian la forma de la molécula.",
        "<b>Ligasas</b>: unen dos moléculas, con gasto de ATP."
      ]},
      { h: "Temperatura y pH", items: [
        "Cada enzima tiene una temperatura y un pH óptimos. En las enzimas humanas, la temperatura óptima es cercana a <b>37 °C</b>.",
        "Con temperatura o pH extremos la proteína se <b>desnaturaliza</b> (pierde su forma) y la enzima deja de funcionar."
      ]},
      { h: "Velocidad de la reacción: Vmax y Km", items: [
        "<b>Vmax</b>: la velocidad máxima, cuando la enzima está saturada de sustrato.",
        "<b>Km</b>: la concentración de sustrato a la que la velocidad es la mitad de la Vmax.",
        "Un Km bajo significa <b>alta afinidad</b> por el sustrato."
      ]},
      { h: "Inhibidores enzimáticos", items: [
        "Son sustancias que reducen o detienen la actividad de una enzima.",
        "<b>Irreversibles</b>: se unen por un enlace covalente y la inactivan de forma permanente. La mayoría son tóxicos.",
        "<b>Reversibles</b>: se unen sin enlace covalente, y su efecto se puede revertir.",
        "<b>Competitivo</b>: se parece al sustrato y se une al sitio activo. Aumenta el Km y la Vmax no cambia. Se revierte agregando más sustrato.",
        "<b>No competitivo</b>: se une fuera del sitio activo. Disminuye la Vmax y el Km no cambia.",
        "<b>Acompetitivo</b>: se une solo al complejo enzima-sustrato. Disminuyen el Km y la Vmax en igual proporción."
      ]},
      { h: "Cómo se ve en la gráfica de dobles recíprocos", items: [
        "Se comparan dos rectas: sin inhibidor y con inhibidor.",
        "<b>Competitivo</b>: las rectas se cortan en el mismo punto del eje vertical (la Vmax no cambia).",
        "<b>No competitivo</b>: las rectas se cortan en el mismo punto del eje horizontal (el Km no cambia).",
        "<b>Acompetitivo</b>: las rectas son paralelas."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Muchos fármacos y toxinas actúan como inhibidores de enzimas."
      ]}
    ]
  },
  {
    id: "intro",
    desafio: { need: 8 }, // desafío por etapas: se necesitan 8 de 10 correctas para abrir la Etapa 2
    facts: [["Catabolismo", "degrada y libera ATP"], ["Anabolismo", "sintetiza y usa ATP"], ["Acetil-CoA", "punto de integración"]],
    title: "Introducción al metabolismo",
    tag: "Catabolismo y anabolismo",
    blurb: "Cómo la célula obtiene y usa la energía.",
    summary: [
      { h: "¿Qué es el metabolismo?", items: [
        "Es el conjunto de reacciones químicas que ocurren dentro de un organismo.",
        "Algunas producen energía a partir de los nutrientes; otras usan energía para sintetizar las moléculas que el organismo necesita."
      ]},
      { h: "Cómo obtienen la energía los organismos", items: [
        "<b>Autótrofos</b>: satisfacen por sí mismos todos sus requerimientos de energía, como los organismos fotosintéticos.",
        "<b>Heterótrofos</b>: necesitan un suministro constante de moléculas de las que obtener energía. Los animales, incluidos los seres humanos, son heterótrofos."
      ]},
      { h: "Catabolismo", items: [
        "Degrada moléculas grandes (carbohidratos, lípidos y proteínas) en moléculas simples, por reacciones de <b>oxidación</b>.",
        "Libera energía química, que se guarda como <b>ATP</b>.",
        "Los electrones que se obtienen son recogidos por coenzimas como <b>NADH</b> y <b>FADH₂</b>.",
        "Las moléculas simples que se forman pueden usarse después como precursores de estructuras más complejas."
      ]},
      { h: "Anabolismo (rutas biosintéticas)", items: [
        "Usa la energía del ATP para sintetizar macromoléculas a partir de precursores pequeños.",
        "Son reacciones de <b>reducción</b>."
      ]},
      { h: "Cómo se conectan", items: [
        "La energía liberada por el catabolismo se usa en las reacciones del anabolismo, por medio del ATP.",
        "El <b>acetil-CoA</b> es el punto de integración del metabolismo: participa en las vías de carbohidratos, lípidos y aminoácidos.",
        "Se obtiene del piruvato de la glicólisis, de los ácidos grasos y de los aminoácidos, y es el punto de partida de muchas rutas anabólicas."
      ]},
      { h: "Respiración celular y fermentación", items: [
        "La <b>respiración celular</b> incluye la oxidación del piruvato, el ciclo de Krebs y la fosforilación oxidativa. Ocurre en la mitocondria y necesita oxígeno.",
        "Con oxígeno se obtienen <b>36–38 ATP</b> por glucosa; sin oxígeno, solo <b>2 ATP</b>.",
        "Sin oxígeno, el piruvato va a <b>fermentación</b>: láctica en el músculo y alcohólica en las levaduras.",
        "La <b>fotosíntesis</b> produce la glucosa y el oxígeno que se usan en la respiración celular: los dos procesos se complementan."
      ]}
    ]
  },
  {
    id: "glucolisis",
    facts: [["2", "ATP netos"], ["2", "NADH"], ["2", "piruvato"]],
    title: "Glicólisis",
    tag: "Citosol · 10 reacciones",
    blurb: "Es la vía metabólica que desde glucosa genera dos piruvatos, dos ATP y dos NADH.",
    summary: [
      { h: "Lo esencial", items: [
        "Ocurre en el <b>citosol</b> de todas las células; no necesita oxígeno.",
        "<b>Glucosa (6C) → 2 piruvato (3C) + 2 ATP + 2 NADH</b>, en 10 reacciones enzimáticas.",
        "<b>Fase preparatoria</b>: la glucosa se activa con gasto de 2 ATP y se forman 2 triosas fosfato. <b>Fase oxidativa o de ganancia</b>: se producen 4 ATP y 2 NADH.",
        "<b>Balance neto: 2 ATP + 2 NADH + 2 piruvato</b> por glucosa.",
        "Además de la glucosa, pueden entrar a la vía fructosa, galactosa y glicerol-fosfato."
      ]},
      { h: "Puntos de control (enzimas reguladas)", items: [
        "Se regula en sus <b>3 puntos irreversibles</b>: hexoquinasa, fosfofructoquinasa-1 (PFK-1) y piruvato quinasa.",
        "<b>Hexoquinasa / glucoquinasa</b>: cataliza la conversión de glucosa a glucosa-6-fosfato. La hexoquinasa es inhibida por su producto, la glucosa-6-fosfato; la glucoquinasa (hígado) tiene Km alto y actúa cuando hay mucha glucosa.",
        "<b>Fosfofructoquinasa-1 (PFK-1)</b>: paso limitante. Activada por ADP y AMP; inhibida por ATP y citrato.",
        "<b>Piruvato quinasa</b>: inhibida por ATP y acetil-CoA.",
        "<b>Hormonas</b>: al subir la glicemia, la insulina (que libera el páncreas) activa la vía; el glucagón disminuye su actividad."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Los <b>eritrocitos</b> no tienen mitocondrias: dependen solo de la glicólisis.",
        "El cerebro humano consume aproximadamente 120 a 130 gramos de glucosa al día, lo que equivale a cerca del 20 % al 25 % de la energía total que el cuerpo utiliza en reposo. Por eso la glicemia debe mantenerse estable."
      ]}
    ]
  },
  {
    id: "fermentacion",
    facts: [["2", "ATP netos"], ["LDH", "enzima clave"], ["Cori", "músculo ↔ hígado"]],
    title: "Fermentación láctica",
    tag: "Citosol · sin oxígeno",
    blurb: "Qué hace la célula con el piruvato cuando no hay oxígeno o mitocondrias.",
    summary: [
      { h: "Lo esencial", items: [
        "Piruvato + NADH → <b>lactato + NAD⁺</b>, catalizado por la <b>lactato deshidrogenasa (LDH)</b>. Ocurre en el citosol.",
        "Su función real es <b>regenerar NAD⁺</b>, para que la glicólisis pueda seguir produciendo ATP.",
        "Rendimiento: <b>2 ATP netos por glucosa</b> (solo los de la glicólisis).",
        "Se activa en <b>hipoxia</b>, en el músculo con ejercicio intenso y en células sin mitocondrias (eritrocitos).",
        "El destino del piruvato depende del oxígeno. Sin él: <b>fermentación láctica</b> (músculo esquelético, se excreta lactato) o <b>fermentación alcohólica</b> (levaduras, se forman etanol y CO₂).",
        "El <b>eritrocito</b> termina siempre en lactato, incluso con oxígeno, porque no tiene mitocondrias."
      ]},
      { h: "Ciclo de Cori", items: [
        "El músculo exporta lactato → el hígado lo convierte en glucosa (<b>gluconeogénesis</b>) → la glucosa vuelve al músculo.",
        "El hígado gasta ATP en esta vía, pero así se recicla el lactato."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Acidosis láctica</b>: shock, sepsis o hipoperfusión → hipoxia tisular → lactato ↑ y pH ↓.",
        "El lactato sérico elevado es un marcador de gravedad en pacientes críticos."
      ]}
    ]
  },
  {
    id: "krebs",
    facts: [["3", "NADH por vuelta"], ["1", "FADH₂ y 1 GTP"], ["2", "CO₂"]],
    title: "Ciclo de Krebs",
    tag: "Matriz mitocondrial",
    blurb: "Oxida el acetil-CoA a CO₂ y carga coenzimas para la cadena de transporte.",
    summary: [
      { h: "Del piruvato al ciclo", items: [
        "Con oxígeno, el piruvato entra a la mitocondria por la <b>piruvato translocasa</b> y el <b>complejo piruvato deshidrogenasa (PDH)</b> lo convierte en <b>acetil-CoA + CO₂ + NADH</b> (descarboxilación oxidativa). Es el punto de partida de la respiración celular.",
        "<b>Regulación de la PDH</b>: inhibida por ATP, NADH, acetil-CoA y por fosforilación de la subunidad E1; activada por AMP, NAD⁺ y por desfosforilación de E1.",
        "La PDH necesita cofactores: <b>tiamina (B1)</b>, riboflavina, niacina, ácido pantoténico y ácido lipoico."
      ]},
      { h: "El ciclo (matriz mitocondrial)", items: [
        "Acetil-CoA (2C) + oxaloacetato (4C) → <b>citrato</b> (6C), por la citrato sintasa.",
        "<b>Por vuelta (1 acetil-CoA):</b> 3 NADH + 1 FADH₂ + 1 GTP/ATP + 2 CO₂.",
        "El ciclo tiene <b>8 reacciones</b>; 4 son redox (3 reducen NAD⁺ y 1 reduce FAD).",
        "Por glucosa hay 2 vueltas (2 acetil-CoA).",
        "<b>En presencia de oxígeno</b>, el ciclo funciona con normalidad: no usa O₂ directamente, pero depende de él para reoxidar NADH y FADH₂ en la cadena respiratoria."
      ]},
      { h: "Puntos de control", items: [
        "<b>Citrato sintasa</b>, <b>isocitrato deshidrogenasa</b> y <b>α-cetoglutarato deshidrogenasa</b>.",
        "Se inhiben con alta energía (ATP, NADH) y se activan con baja energía (NAD⁺, FAD, ADP, AMP).",
        "Un NADH alto indica mucho poder reductor disponible y, por lo tanto, alta energía."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Déficit de tiamina</b> (alcoholismo, desnutrición): PDH falla → se acumulan piruvato y lactato."
      ]}
    ]
  },
  {
    id: "fosforilacion",
    facts: [["O₂", "aceptor final"], ["3 · 2", "ATP por NADH · FADH₂"], ["36–38", "ATP por glucosa"]],
    title: "Cadena de transporte y fosforilación oxidativa",
    tag: "Membrana mitocondrial interna",
    blurb: "Donde se produce la mayor parte del ATP, gracias al oxígeno.",
    summary: [
      { h: "Cómo funciona", items: [
        "Ocurre en la <b>membrana mitocondrial interna</b>.",
        "Cuatro complejos:<br><b>I</b> (NADH deshidrogenasa)<br><b>II</b> (succinato deshidrogenasa)<br><b>III</b> (citocromo bc1)<br><b>IV</b> (citocromo oxidasa)",
        "La <b>ubiquinona</b> y el <b>citocromo c</b> llevan los electrones entre los complejos.",
        "NADH entrega electrones al <b>complejo I</b>; FADH₂ al <b>complejo II</b>; luego pasan por III y IV. El <b>O₂ es el aceptor final</b> y se reduce a H₂O (complejo IV).",
        "Los complejos I, III y IV bombean H⁺ al espacio intermembrana → <b>gradiente de protones</b>. El <b>complejo II no bombea</b> protones.",
        "La <b>ATP sintasa</b> (F₁F₀) usa el retorno de H⁺ para fosforilar ADP → ATP: los protones pasan por el canal F₀ y la síntesis ocurre en F₁."
      ]},
      { h: "Rendimiento", items: [
        "Según el material del curso: <b>3 ATP por NADH</b> y <b>2 ATP por FADH₂</b>.",
        "Glucosa en condiciones aerobias: <b>36–38 ATP</b>. En anaerobiosis: <b>2 ATP</b>."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Cianuro</b> y <b>monóxido de carbono</b> inhiben el complejo IV: la célula no puede usar el O₂ aunque haya.",
        "<b>Desacopladores</b> (ej. 2,4-dinitrofenol, termogenina de la grasa parda) disipan el gradiente: se consume O₂ pero se produce calor en vez de ATP."
      ]}
    ]
  },
  {
    id: "glucogeno",
    facts: [["α-1,4", "enlaces lineales"], ["α-1,6", "ramificaciones"], ["Hígado", "tiene glucosa-6-fosfatasa"]],
    title: "Síntesis y degradación de glicógeno",
    tag: "Hígado y músculo",
    blurb: "Cómo se almacena y se moviliza la glucosa según las necesidades.",
    summary: [
      { h: "¿Qué es?", items: [
        "El <b>glicógeno</b> es un homopolisacárido formado por cadenas ramificadas de glucosa.",
        "Se almacena en el <b>hígado</b> y en el <b>músculo</b>."
      ]},
      { h: "Glicogenogénesis (síntesis)", items: [
        "La glucosa que entra a la célula se fosforila a <b>glucosa-6-fosfato</b> (glucoquinasa, una isoenzima de la hexoquinasa).",
        "La <b>fosfoglucomutasa</b> la convierte en glucosa-1-fosfato y luego en <b>UDP-glucosa</b>.",
        "La <b>glicógeno sintasa</b> une las moléculas de UDP-glucosa con enlaces <b>α-1,4</b>; la <b>enzima ramificante</b> agrega los enlaces <b>α-1,6</b> de las ramificaciones.",
        "Este proceso se activa con <b>insulina</b>."
      ]},
      { h: "Glicogenólisis (degradación)", items: [
        "La <b>glicógeno fosforilasa</b> libera glucosa-1-fosfato al romper los enlaces <b>α-1,4</b>; no puede romper los <b>α-1,6</b> de las ramificaciones.",
        "La <b>enzima desramificante</b> traslada 3 glucosas de la rama a la cadena vecina y libera la glucosa que queda unida por el enlace α-1,6, para que la fosforilasa siga trabajando.",
        "La glucosa-1-fosfato se convierte en glucosa-6-fosfato por la fosfoglucomutasa.",
        "<b>Hígado:</b> se activa con glucagón. La <b>glucosa-6-fosfatasa</b> libera glucosa libre a la sangre y restaura la glicemia, por ejemplo en el ayuno (hipoglicemia).",
        "<b>Músculo:</b> no tiene glucosa-6-fosfatasa, por lo que la glucosa se usa en el propio músculo. Se activa con adrenalina (epinefrina)."
      ]},
      { h: "Regulación hormonal", items: [
        "<b>Insulina</b> (después de comer): <b>activa</b> la síntesis de glicógeno e <b>inhibe</b> su degradación.",
        "<b>Glucagón</b> (ayuno): <b>activa</b> la degradación de glicógeno en el hígado e <b>inhibe</b> su síntesis.",
        "<b>Adrenalina</b> (estrés o ejercicio): <b>activa</b> la degradación de glicógeno en el hígado y en el músculo."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Von Gierke</b> (déficit de glucosa-6-fosfatasa): hipoglicemia en ayuno y hepatomegalia.",
        "<b>McArdle</b> (déficit de fosforilasa muscular): calambres con el ejercicio y lactato que no sube."
      ]}
    ]
  },
  {
    id: "hormonas",
    facts: [["70–99", "mg/dL en ayunas"], ["Insulina", "baja la glicemia"], ["Glucagón", "sube la glicemia"]],
    title: "Homeostasis de la glicemia",
    tag: "Regulación por insulina y glucagón",
    blurb: "Dos hormonas opuestas que mantienen la glicemia entre 70 y 99 mg/dL en ayunas.",
    summary: [
      { h: "Insulina", items: [
        "Es una hormona del <b>páncreas</b> que se libera <b>después de comer</b>, cuando la glicemia está alta.",
        "↑ captación de glucosa en músculo y tejido adiposo (<b>GLUT4</b>); ↑ glicólisis; ↑ glicogenogénesis; ↑ síntesis de lípidos.",
        "↓ gluconeogénesis, ↓ glicogenólisis, ↓ lipólisis."
      ]},
      { h: "Glucagón", items: [
        "Es una hormona del <b>páncreas</b> que se libera <b>en el ayuno</b>, cuando la glicemia está baja. Actúa principalmente en el hígado.",
        "↑ glicogenólisis y ↑ gluconeogénesis; ↑ lipólisis y cetogénesis.",
        "↓ glicólisis y ↓ glicogenogénesis hepática."
      ]},
      { h: "Adrenalina", items: [
        "Estrés y ejercicio: ↑ glicogenólisis en hígado y músculo, ↑ glicemia."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Diabetes mellitus tipo 1:</b> falta de insulina → hiperglicemia y, si es grave, cetoacidosis.",
        "<b>Diabetes mellitus tipo 2:</b> resistencia a la insulina.",
        "<b>Hipoglicemia</b> (&lt; 70 mg/dL): sudoración, temblor y taquicardia por liberación de adrenalina."
      ]}
    ]
  },
  {
    id: "digestionlipidos",
    facts: [["Lipasa", "separa los ácidos grasos del glicerol"], ["Bilis", "emulsiona las grasas"], ["Quilomicrones", "llevan las grasas por la linfa"]],
    title: "Digestión y absorción de lípidos (complementario opcional)",
    tag: "Boca · estómago · intestino",
    blurb: "Cómo se descomponen y se absorben las grasas de la dieta.",
    summary: [
      { h: "El desafío de digerir grasas", items: [
        "Los lípidos no se disuelven en agua, y casi todo el tubo digestivo y sus enzimas son acuosos.",
        "El objetivo de la digestión es separar los ácidos grasos del glicerol, con la enzima <b>lipasa</b>."
      ]},
      { h: "Boca y estómago", items: [
        "En la boca, la masticación y la <b>lipasa lingual</b> inician la digestión: las grasas se separan en gotitas pequeñas.",
        "En el estómago, la <b>lipasa gástrica</b> rompe los triglicéridos en diglicéridos y ácidos grasos.",
        "En estos dos lugares se digiere muy poca grasa."
      ]},
      { h: "Intestino delgado: bilis y lipasa pancreática", items: [
        "La <b>bilis</b>, que produce el hígado, <b>emulsiona</b> las grasas: las divide en gotitas y aumenta mucho su superficie, para que las enzimas actúen mejor.",
        "La <b>lipasa pancreática</b> rompe los triglicéridos y diglicéridos en <b>ácidos grasos libres y monoglicéridos</b>.",
        "Aquí ocurre la mayor parte de la digestión de las grasas."
      ]},
      { h: "Micelas: cómo llegan a las células del intestino", items: [
        "Las sales biliares rodean a los ácidos grasos y monoglicéridos y forman <b>micelas</b>.",
        "Las micelas tienen un núcleo graso y un exterior soluble en agua, por eso atraviesan la capa acuosa que cubre el intestino.",
        "Así los lípidos llegan a las células de la pared intestinal, donde se absorben."
      ]},
      { h: "Dentro de las células del intestino", items: [
        "Los ácidos grasos y los monoglicéridos se vuelven a unir y forman <b>triglicéridos</b>.",
        "Los triglicéridos, el colesterol y los fosfolípidos se unen a proteínas y forman los <b>quilomicrones</b>."
      ]},
      { h: "Quilomicrones: transporte en el cuerpo", items: [
        "Son demasiado grandes para entrar a la vena porta, que lleva los nutrientes solubles en agua al hígado.",
        "Pasan al <b>sistema linfático</b> y llegan a la sangre por la vena subclavia.",
        "Llevan los triglicéridos de la dieta al tejido adiposo y al músculo, donde se usan como energía o se almacenan.",
        "El remanente del quilomicrón vuelve al hígado."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "El examen de colesterol (perfil lipídico) se toma después de un ayuno de <b>9 a 12 horas</b>, para que los lípidos de la última comida ya hayan circulado y la medición sea estable."
      ]},
      { h: "Fuente", items: [
        "Adaptado de «6.3 Lipid Digestion, Absorption, and Transport», en <i>Nutrition and Physical Fitness</i> (A. Harter Alger, licencia CC BY-NC-SA 4.0)."
      ]}
    ]
  },
  {
    id: "lipoproteinas",
    facts: [["Quilomicrones", "transportan los lípidos de la dieta"], ["LDL", "lleva colesterol a los tejidos"], ["HDL", "lleva colesterol al hígado"]],
    title: "Lipoproteínas",
    tag: "Transporte de lípidos",
    blurb: "Cómo viajan los lípidos por la sangre.",
    summary: [
      { h: "¿Por qué existen las lipoproteínas?", items: [
        "Los lípidos no se disuelven en agua.",
        "Llegan a la sangre desde la <b>dieta</b>, desde la <b>síntesis en el hígado</b> y desde el <b>tejido adiposo</b>.",
        "Para viajar por la sangre hasta los tejidos que los necesitan, se asocian a proteínas y a otras moléculas y forman las <b>lipoproteínas</b>."
      ]},
      { h: "Las 5 lipoproteínas", items: [
        "<b>Quilomicrones</b>: se forman en el intestino y transportan los lípidos de la dieta.",
        "<b>VLDL</b> (de muy baja densidad): se forman en el hígado y transportan los lípidos propios del organismo, sobre todo triglicéridos.",
        "<b>IDL</b> (de densidad intermedia): se forman a partir de la VLDL, por acción de la lipoproteína lipasa.",
        "<b>LDL</b> (de baja densidad): se forman a partir de la IDL y llevan <b>colesterol del hígado a los tejidos</b>.",
        "<b>HDL</b> (de alta densidad): se forman en el intestino y en el hígado, y llevan <b>colesterol desde los tejidos al hígado</b> (transporte reverso del colesterol)."
      ]},
      { h: "Lipoproteína lipasa", items: [
        "Es una enzima que está en los capilares del tejido adiposo, del músculo y de la glándula mamaria.",
        "Descompone los triglicéridos de los quilomicrones y de las VLDL, y libera <b>ácidos grasos</b> para esos tejidos.",
        "Lo que queda de las partículas (remanentes) vuelve al hígado."
      ]},
      { h: "Densidad y tamaño", items: [
        "Las lipoproteínas se clasifican según su <b>densidad</b>.",
        "A más lípidos, la partícula es <b>más grande y menos densa</b>. De mayor a menor contenido de lípidos: quilomicrón (QM en la figura, 99 %), VLDL (92 %), IDL (89 %), LDL (79 %) y HDL (43 %).",
        "La <b>HDL</b> es la más pequeña y la más densa: tiene 57 % de proteínas."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Un LDL elevado se asocia a mayor riesgo cardiovascular, porque deposita colesterol en los tejidos. La HDL ayuda a retirar el colesterol de los tejidos."
      ]}
    ]
  },
  {
    id: "boxidacion",
    facts: [["Carnitina", "transporta los ácidos grasos"], ["2 C", "se pierden por vuelta"], ["Acetil-CoA", "entra al ciclo de Krebs"]],
    title: "β-oxidación de ácidos grasos",
    tag: "Matriz mitocondrial",
    blurb: "Cómo se degradan los ácidos grasos para obtener energía.",
    summary: [
      { h: "Movilización de los triglicéridos", items: [
        "Cuando la glicemia está baja se libera <b>glucagón</b>.",
        "En el tejido adiposo, el glucagón activa una <b>lipasa</b> que hidroliza los triglicéridos y libera ácidos grasos.",
        "Los ácidos grasos salen del adipocito y viajan por la sangre unidos a la <b>albúmina</b>, porque no son solubles en agua.",
        "Entran a las células que los necesitan, como el músculo, donde se oxidan por <b>β-oxidación</b>."
      ]},
      { h: "Activación y entrada a la mitocondria", items: [
        "En el citosol, los ácidos grasos se <b>activan</b>: se transforman en <b>acil-CoA</b>, con gasto de ATP.",
        "La membrana mitocondrial interna no deja pasar los ácidos grasos. La <b>carnitina</b>, una molécula derivada de aminoácidos, los transporta hacia la matriz."
      ]},
      { h: "β-oxidación", items: [
        "Ocurre en la <b>matriz mitocondrial</b>.",
        "Es un ciclo de 4 reacciones que acorta la cadena del ácido graso en <b>2 carbonos por vuelta</b>.",
        "Cada vuelta produce <b>acetil-CoA, NADH y FADH₂</b>.",
        "Se repite hasta degradar por completo el ácido graso. Por ejemplo, el ácido palmítico tiene 16 carbonos."
      ]},
      { h: "¿Qué pasa con los productos?", items: [
        "El <b>acetil-CoA</b> entra al ciclo de Krebs.",
        "El NADH y el FADH₂ llevan sus electrones a la cadena respiratoria, donde se produce ATP."
      ]},
      { h: "Ácidos grasos de cadena larga: peroxisoma", items: [
        "Los ácidos grasos de cadena muy larga (más de 20 carbonos) se oxidan primero en el <b>peroxisoma</b>. El acetil-CoA que se forma puede pasar a la mitocondria.",
        "En el peroxisoma se produce H₂O₂, una sustancia tóxica que la enzima catalasa convierte en agua y oxígeno."
      ]},
      { h: "Regulación hormonal", items: [
        "<b>Glucagón</b> y <b>adrenalina</b>: <b>activan</b> la degradación de los triglicéridos del tejido adiposo.",
        "<b>Insulina</b>: <b>inhibe</b> esa degradación y favorece el almacenamiento de grasa."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Si falta <b>carnitina</b>, los ácidos grasos no pueden entrar a la mitocondria y no se pueden oxidar. El paciente tolera mal los períodos largos de ayuno y se le suplementa con L-carnitina."
      ]}
    ]
  },
  {
    id: "cetonicos",
    facts: [["Hígado", "órgano que los produce"], ["Acetil-CoA", "molécula de la que se forman"], ["pH ↓", "cetoacidosis si hay exceso"]],
    title: "Cuerpos cetónicos",
    tag: "Hígado · ayuno",
    blurb: "Combustible alternativo que produce el hígado cuando hay poca glucosa.",
    summary: [
      { h: "¿Qué son?", items: [
        "Son tres moléculas: el <b>acetoacetato</b>, el <b>β-hidroxibutirato</b> y la <b>acetona</b>.",
        "Los produce el <b>hígado</b> a partir del <b>acetil-CoA</b>.",
        "Se forman en la <b>matriz mitocondrial</b> de las células del hígado."
      ]},
      { h: "¿Cuándo se forman?", items: [
        "En el <b>ayuno</b>, o cuando la célula no tiene suficiente glucosa, el hígado oxida muchos ácidos grasos por β-oxidación y se produce mucho acetil-CoA.",
        "En los mamíferos, el acetil-CoA no puede convertirse en glucosa. Por eso el hígado lo transforma en cuerpos cetónicos."
      ]},
      { h: "¿Para qué sirven?", items: [
        "Viajan por la sangre hacia otros tejidos, que los oxidan en el ciclo de Krebs para obtener energía.",
        "En el ayuno prolongado son un combustible alternativo a la glucosa."
      ]},
      { h: "La acetona", items: [
        "Se forma por la descarboxilación del acetoacetato.",
        "Se elimina por la respiración y produce un <b>olor afrutado</b> en el aliento de las personas con diabetes."
      ]},
      { h: "Cetoacidosis", items: [
        "El acetoacetato y el β-hidroxibutirato son <b>ácidos</b>.",
        "Si sus niveles en la sangre son muy altos, el <b>pH de la sangre baja</b>: se llama <b>cetoacidosis diabética</b>.",
        "En la diabetes sin insulina, la glucosa no entra a las células. La célula se comporta como si no tuviera glucosa, oxida muchos ácidos grasos y se producen cuerpos cetónicos en exceso."
      ]},
      { h: "Regulación hormonal", items: [
        "<b>Glucagón</b>: favorece su formación, porque activa la degradación de grasa y la β-oxidación en el hígado.",
        "<b>Insulina</b>: la inhibe."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Un paciente diabético con aliento de olor afrutado y pH sanguíneo bajo puede estar en cetoacidosis diabética."
      ]}
    ]
  },
  {
    id: "lipogenesis",
    facts: [["Citosol", "lugar de la síntesis"], ["Palmitato", "producto principal (16 C)"], ["Insulina", "activa la síntesis"]],
    title: "Biosíntesis de ácidos grasos",
    tag: "Citosol · lipogénesis",
    blurb: "Cómo la célula fabrica ácidos grasos a partir del acetil-CoA.",
    summary: [
      { h: "¿Qué es?", items: [
        "Es la síntesis de ácidos grasos (lipogénesis), una vía <b>anabólica</b>.",
        "Ocurre en el <b>citosol</b>, a partir de <b>acetil-CoA</b>.",
        "El producto principal es el <b>ácido palmítico</b> (palmitato), de 16 carbonos, que sirve de precursor de otros ácidos grasos."
      ]},
      { h: "Cómo sale el acetil-CoA de la mitocondria", items: [
        "El acetil-CoA se forma en la mitocondria y no puede salir de ella.",
        "Se une al oxaloacetato y forma <b>citrato</b>, en la primera reacción del ciclo de Krebs.",
        "El citrato sale al citosol, donde se regenera el acetil-CoA, con gasto de ATP."
      ]},
      { h: "Inicio de la síntesis: acetil-CoA → malonil-CoA", items: [
        "La enzima <b>acetil-CoA carboxilasa</b> cataliza el paso de <b>acetil-CoA</b> a <b>malonil-CoA</b>.",
        "A partir del malonil-CoA se inicia la síntesis del ácido graso.",
        "Es el <b>paso limitante</b>: el que controla la velocidad de toda la vía."
      ]},
      { h: "Alargamiento de la cadena", items: [
        "La <b>ácido graso sintasa</b> va agregando 2 carbonos cada vez, por condensación y reducción (7 reacciones).",
        "El malonil-CoA aporta casi todos los carbonos; solo 2 vienen directamente del acetil-CoA inicial.",
        "El proceso necesita <b>NADPH</b>.",
        "El producto que se obtiene es el <b>ácido palmítico</b> (palmitato), de 16 carbonos."
      ]},
      { h: "Otros ácidos grasos", items: [
        "El palmitato puede modificarse para formar ácidos grasos más largos o insaturados."
      ]},
      { h: "Regulación hormonal", items: [
        "<b>Insulina</b>: <b>activa</b> la síntesis de ácidos grasos y de triglicéridos, en el hígado y en el tejido adiposo.",
        "<b>Glucagón</b>: <b>inhibe</b> la síntesis de ácidos grasos en el hígado."
      ]},
      { h: "Síntesis y β-oxidación: lo contrario", items: [
        "<b>Síntesis</b>: citosol, usa NADPH, se activa con insulina (después de comer).",
        "<b>β-oxidación</b>: matriz mitocondrial, produce NADH y FADH₂, se activa con glucagón (ayuno)."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Después de comer, el exceso de carbohidratos puede transformarse en acetil-CoA, luego en ácidos grasos y almacenarse como triglicéridos en el tejido adiposo."
      ]}
    ]
  },
  {
    id: "aacatabolismo",
    facts: [["Hígado", "órgano donde se degradan"], ["Transaminación", "pasa el grupo amino al α-cetoglutarato"], ["Amonio", "se libera al desaminar el glutamato"]],
    title: "Catabolismo de aminoácidos",
    tag: "Hígado · transaminación y desaminación",
    blurb: "Cómo se degradan los aminoácidos y qué pasa con su nitrógeno.",
    summary: [
      { h: "Visión general", items: [
        "Los aminoácidos vienen de las proteínas de la dieta y de las proteínas del propio cuerpo, como las del músculo.",
        "La mayoría se degrada en el <b>hígado</b>.",
        "Primero pierden su <b>grupo amino</b> y quedan como α-cetoácidos.",
        "El <b>esqueleto de carbono</b> se transforma en acetil-CoA o en intermediarios del ciclo de Krebs.",
        "El grupo amino se recicla para sintetizar otras moléculas, y el exceso entra al <b>ciclo de la urea</b> para eliminarse."
      ]},
      { h: "Transaminación", items: [
        "Es el primer paso: se elimina el grupo amino.",
        "Ocurre en el <b>citosol</b> de las células del hígado.",
        "La catalizan las <b>aminotransferasas</b> (transaminasas).",
        "El grupo amino pasa al <b>α-cetoglutarato</b>, que se convierte en <b>glutamato</b>. Así, los grupos amino de distintos aminoácidos se acumulan en el glutamato.",
        "Es una reacción reversible."
      ]},
      { h: "Desaminación oxidativa", items: [
        "El glutamato entra a la mitocondria. La reacción ocurre en la <b>matriz mitocondrial</b>.",
        "La enzima <b>glutamato deshidrogenasa</b> le quita el grupo amino y libera <b>amonio</b> (NH₄⁺). Se regenera el α-cetoglutarato.",
        "Usa NAD⁺ o NADP⁺.",
        "El amonio es tóxico (neurotóxico): se destina al ciclo de la urea."
      ]},
      { h: "¿Qué pasa con el esqueleto de carbono?", items: [
        "<b>Glucogénicos</b>: forman piruvato o intermediarios del ciclo de Krebs (como α-cetoglutarato u oxaloacetato), que pueden usarse para fabricar glucosa.",
        "<b>Cetogénicos</b> (lisina y leucina): forman solo acetil-CoA o acetoacetil-CoA.",
        "Con una buena alimentación, los esqueletos se usan para sintetizar carbohidratos o ácidos grasos. En un ayuno muy prolongado, se usan como fuente de energía."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Fenilcetonuria</b>: falta la primera enzima del metabolismo de la fenilalanina (fenilalanina hidroxilasa). Si se detecta a tiempo, una dieta baja en fenilalanina previene el retraso mental."
      ]}
    ]
  },
  {
    id: "amonio",
    facts: [["Glutamina", "lleva amonio por la sangre"], ["Alanina", "lleva amonio desde el músculo"], ["Hígado", "elimina el amonio como urea"]],
    title: "Transporte del amonio",
    tag: "Glutamina y alanina",
    blurb: "Cómo viaja el amonio, que es tóxico, hasta el hígado.",
    summary: [
      { h: "¿Por qué hay que transportarlo?", items: [
        "El amonio es <b>tóxico</b> para los tejidos animales.",
        "Los tejidos lo transforman en un compuesto no tóxico, que viaja por la sangre hasta el hígado, donde se elimina como urea."
      ]},
      { h: "Glutamina", items: [
        "Es una forma eficiente de transportar el exceso de amonio. En la sangre está en mayor concentración que los otros aminoácidos.",
        "Se forma a partir de <b>glutamato</b> y amonio, con gasto de ATP (enzima glutamina sintetasa).",
        "En el hígado, la enzima <b>glutaminasa</b> libera el amonio en la mitocondria."
      ]},
      { h: "Alanina y ciclo glucosa-alanina", items: [
        "La alanina lleva <b>amonio y esqueletos de carbono</b> desde el músculo en ejercicio hasta el hígado.",
        "En el músculo, el grupo amino del glutamato pasa al piruvato y forma alanina (alanina aminotransferasa).",
        "En el hígado, el amonio se elimina y el <b>piruvato</b> se usa para producir <b>glucosa</b>, que vuelve al músculo.",
        "La alanina es el aminoácido más glucogénico."
      ]}
    ]
  },
  {
    id: "urea",
    facts: [["Hígado", "órgano donde ocurre"], ["Urea", "producto que se elimina"], ["3 ATP", "se gastan por cada urea"]],
    title: "Ciclo de la urea",
    tag: "Hígado · mitocondria y citosol",
    blurb: "La vía que elimina el exceso de amonio como urea.",
    summary: [
      { h: "¿Qué es?", items: [
        "Es la vía que transforma el amonio en <b>urea</b>, que se elimina del cuerpo.",
        "Ocurre en el <b>hígado</b>: una parte en la mitocondria y otra en el citosol.",
        "Gasta ATP."
      ]},
      { h: "Los 4 pasos", items: [
        "<b>1. Síntesis de citrulina</b>: en la mitocondria, el amonio forma carbamoil-fosfato (con ATP), que se une a la <b>ornitina</b> y forma citrulina. La citrulina sale al citosol.",
        "<b>2. Síntesis de arginino-succinato</b>, ya en el citosol.",
        "<b>3. Formación de arginina</b>.",
        "<b>4. Formación de urea</b>: la arginina se rompe, libera la urea y regenera la ornitina, que vuelve a la mitocondria."
      ]},
      { h: "Reacción neta", items: [
        "2 NH₄⁺ + HCO₃⁻ + 3 ATP + H₂O → urea + 2 ADP + 4 Pi + AMP + 5 H⁺",
        "El amonio se transforma en urea, y por cada urea se gastan 3 ATP."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "La urea se elimina por la orina. Si el hígado falla, el amonio se acumula en la sangre y es tóxico para el cerebro."
      ]}
    ]
  },
  {
    id: "casos",
    all: true, // cada ronda muestra todas las preguntas del módulo
    title: "Preguntas de aplicación",
    tag: "Razonamiento analítico",
    blurb: "Situaciones que integran las vías y las hormonas.",
    summary: [
      { h: "Cómo abordar una pregunta de aplicación", items: [
        "1. Identifica <b>qué ocurre en la situación</b> (hipoxia, ayuno, falta de insulina…).",
        "2. Piensa en la <b>vía o enzima</b> comprometida.",
        "3. Deduce la <b>consecuencia fisiológica</b> y qué esperarías en los exámenes o síntomas."
      ]}
    ],
  }
];

const QUESTIONS = [
  /* ---------------- GLUCÓLISIS ---------------- */
  { m: "glucolisis", q: "¿En qué parte de la célula ocurre la glicólisis?",
    o: ["Citosol", "Matriz mitocondrial", "Membrana mitocondrial interna", "Núcleo"],
    hint: "No requiere mitocondrias: los eritrocitos también la realizan.",
    e: "La glicólisis es citosólica. Por eso los eritrocitos, que no tienen mitocondrias, obtienen ATP solo de ella." },
  { m: "glucolisis", q: "¿Cuál es el balance neto de la glicólisis por cada molécula de glucosa?",
    o: ["2 ATP, 2 NADH y 2 piruvato", "4 ATP y 2 piruvato, sin NADH", "2 ATP y 2 FADH₂", "36 ATP y 6 CO₂"],
    hint: "Se invierten 2 ATP y se producen 4.",
    e: "Se gastan 2 ATP y se forman 4 → ganancia neta de 2 ATP, más 2 NADH y 2 piruvato." },
  { m: "glucolisis", q: "¿Cuál de las siguientes enzimas es un punto de control de la glicólisis?",
    o: ["Fosfofructoquinasa-1 (PFK-1)", "Enolasa", "Aldolasa", "Fosfoglicerato mutasa"],
    hint: "Es una de las tres reacciones irreversibles de la vía.",
    e: "La fosfofructoquinasa-1 es una de las enzimas reguladas de la glicólisis, junto con la hexoquinasa y la piruvato quinasa." },
  { m: "glucolisis", q: "Cuando una célula tiene abundante energía (mucho ATP), ¿qué ocurre con la glicólisis?",
    o: ["Disminuye su velocidad", "Aumenta su velocidad", "No se modifica", "Se invierte y forma glucosa"],
    hint: "Si ya hay energía, la célula no necesita producir más.",
    e: "El ATP es una señal de energía abundante: inhibe enzimas de la vía y la glicólisis se frena." },
  { m: "glucolisis", q: "¿Qué consigue la hexoquinasa al fosforilar la glucosa?",
    o: ["La glucosa queda atrapada dentro de la célula", "Se libera ATP", "La glucosa sale de la célula", "Se forma glicógeno"],
    hint: "La glucosa-6-fosfato no puede salir por los transportadores.",
    e: "Al agregar el fosfato, la glucosa queda retenida en la célula y puede continuar por la vía." },
  { m: "glucolisis", q: "Tres enzimas actúan sobre la glucosa y tienen un Km de 0,1 mM, 1 mM y 10 mM. ¿Cuál tiene mayor afinidad por el sustrato?",
    o: ["La de Km 0,1 mM", "La de Km 1 mM", "La de Km 10 mM", "Todas tienen la misma afinidad"],
    hint: "El Km es la concentración de sustrato a la que la enzima alcanza la mitad de su velocidad máxima.",
    e: "A menor Km, mayor afinidad: la enzima necesita menos sustrato para trabajar a media velocidad." },
  { m: "glucolisis", q: "En la glicólisis, ¿cuántos ATP se gastan y cuántos se producen en total, antes de calcular el balance neto?",
    o: ["Se gastan 2 y se producen 4", "Se gastan 4 y se producen 2", "Se gastan 1 y se producen 3", "Se gastan 2 y se producen 2"],
    hint: "El balance neto es de 2 ATP.",
    e: "La fase preparatoria gasta 2 ATP y la fase oxidativa produce 4. La diferencia es la ganancia neta de 2 ATP." },
  { m: "glucolisis", q: "¿Cuál es la fuente de energía de un eritrocito?",
    o: ["Glicólisis anaerobia", "Ciclo de Krebs", "Fosforilación oxidativa", "β-oxidación de ácidos grasos"],
    hint: "Los eritrocitos maduros no tienen mitocondrias.",
    e: "Sin mitocondrias no pueden usar Krebs ni la cadena respiratoria; dependen de la glicólisis y el lactato." },

  /* ---------------- FERMENTACIÓN LÁCTICA ---------------- */
  { m: "fermentacion", q: "¿Cuál es la función principal de convertir piruvato en lactato?",
    o: ["Regenerar NAD⁺ para que la glicólisis continúe", "Producir más ATP", "Generar CO₂", "Almacenar glucosa"],
    hint: "Sin NAD⁺, la glicólisis se detiene.",
    e: "Sin O₂ no se reoxida el NADH en la cadena respiratoria. La LDH lo oxida a NAD⁺ y permite seguir con la glicólisis." },
  { m: "fermentacion", q: "Una célula degrada una glucosa hasta lactato, sin oxígeno. ¿Cuál es su rendimiento neto de ATP?",
    o: ["2 ATP, todos provenientes de la glicólisis", "4 ATP", "36–38 ATP", "Ninguno, porque la fermentación no produce ATP"],
    hint: "Piensa en el rendimiento neto de la glicólisis.",
    e: "El paso de piruvato a lactato no produce ATP, pero la glicólisis que lo antecede sí: 2 ATP netos por glucosa." },
  { m: "fermentacion", q: "¿Qué enzima cataliza la conversión de piruvato en lactato?",
    o: ["Lactato deshidrogenasa (LDH)", "Piruvato deshidrogenasa", "Piruvato quinasa", "Enolasa"],
    e: "La LDH usa NADH como donador de electrones, que pasa a NAD⁺." },
  { m: "fermentacion", q: "¿Entre qué órganos ocurre el ciclo de Cori?",
    o: ["Músculo e hígado", "Cerebro y riñón", "Intestino y pulmón", "Corazón y bazo"],
    e: "El músculo produce lactato y lo envía al hígado, que lo transforma en glucosa por gluconeogénesis. Los eritrocitos, que no tienen mitocondrias, también aportan lactato que el hígado recicla." },
  { m: "fermentacion", q: "¿Cuál de estas células depende de la fermentación láctica incluso en presencia de oxígeno?",
    o: ["Eritrocito", "Hepatocito", "Cardiomiocito", "Neurona"],
    hint: "¿Cuál no tiene mitocondrias?",
    e: "El eritrocito maduro no tiene mitocondrias, así que siempre produce lactato." },
  { m: "fermentacion", q: "En una carrera de 100 m, el lactato aumenta en el músculo. La razón más directa es que…",
    o: ["La demanda de ATP supera el aporte de oxígeno y se acelera la glicólisis anaerobia", "El ciclo de Krebs se acelera y libera lactato", "Se detiene la glicólisis", "El hígado deja de producir glucosa"],
    e: "La glicólisis rápida produce piruvato más rápido de lo que la mitocondria puede oxidar; el exceso pasa a lactato." },

  /* ---------------- KREBS ---------------- */
  { m: "krebs", q: "¿Qué complejo convierte el piruvato en acetil-CoA?",
    o: ["Piruvato deshidrogenasa (PDH)", "Lactato deshidrogenasa", "Citrato sintasa", "Piruvato quinasa"],
    e: "La PDH está en la matriz mitocondrial y libera CO₂ y NADH al formar acetil-CoA." },
  { m: "krebs", q: "¿Cuál de estas moléculas es un intermediario del ciclo de Krebs?",
    o: ["Citrato", "Lactato", "Glucosa-6-fosfato", "Fructosa-1,6-bisfosfato"],
    hint: "Se forma cuando el acetil-CoA entra al ciclo.",
    e: "El citrato es el primer intermediario del ciclo. Los demás son isocitrato, α-cetoglutarato, succinil-CoA, succinato, fumarato, malato y oxaloacetato." },
  { m: "krebs", q: "¿Cuáles son los productos del ciclo de Krebs?",
    o: ["NADH, FADH₂, GTP y CO₂", "NADH, FADH₂, lactato y etanol", "NADH, glucosa, GTP y O₂", "FADH₂, piruvato, lactato y O₂"],
    hint: "Las coenzimas reducidas llevan electrones a la cadena respiratoria.",
    e: "El ciclo produce coenzimas reducidas (NADH y FADH₂), GTP (energéticamente equivalente al ATP) y CO₂. Por cada acetil-CoA son 3 NADH, 1 FADH₂, 1 GTP y 2 CO₂." },
  { m: "krebs", q: "¿Dónde ocurre el ciclo de Krebs?",
    o: ["Matriz mitocondrial", "Citosol", "Espacio intermembrana", "Retículo endoplasmático"],
    e: "Las enzimas del ciclo están en la matriz (la succinato deshidrogenasa en la membrana interna)." },
  { m: "krebs", q: "¿En qué condiciones funciona el ciclo de Krebs?",
    o: ["En presencia de oxígeno", "Solo en ausencia de oxígeno", "Solo en el citosol", "Solo en ayuno"],
    hint: "Forma parte de la respiración celular.",
    e: "El ciclo funciona en presencia de oxígeno, porque este permite reoxidar el NADH y el FADH₂ en la cadena respiratoria." },
  { m: "krebs", q: "Una célula tiene mucho ATP y mucho NADH. ¿Qué pasa con el ciclo de Krebs?",
    o: ["Se inhibe (por ejemplo, la isocitrato deshidrogenasa)", "Se acelera", "No se modifica", "Se revierte"],
    e: "ATP y NADH indican alta energía: inhiben la isocitrato y la α-cetoglutarato deshidrogenasa." },
  { m: "krebs", q: "¿Qué vitamina es necesaria como cofactor de la piruvato deshidrogenasa?",
    o: ["Tiamina (B1)", "Vitamina C", "Vitamina K", "Vitamina D"],
    e: "El pirofosfato de tiamina es cofactor de la PDH y de la α-cetoglutarato deshidrogenasa." },

  /* ---------------- FOSFORILACIÓN OXIDATIVA ---------------- */
  { m: "fosforilacion", q: "¿Cuál es el aceptor final de electrones en la cadena de transporte?",
    o: ["Oxígeno (O₂)", "NAD⁺", "Piruvato", "CO₂"],
    e: "El O₂ se reduce a H₂O en el complejo IV." },
  { m: "fosforilacion", q: "¿Qué energía utiliza la ATP sintasa para fabricar ATP?",
    o: ["El gradiente de protones entre el espacio intermembrana y la matriz", "La transferencia directa de un fosfato desde un sustrato", "El paso directo de los electrones del NADH al oxígeno", "La energía liberada al hidrolizar el GTP del ciclo de Krebs"],
    hint: "Los H⁺ se acumulan en el espacio intermembrana.",
    e: "El retorno de H⁺ a la matriz a través de la ATP sintasa impulsa la fosforilación de ADP." },
  { m: "fosforilacion", q: "¿Dónde se encuentra la cadena de transporte de electrones?",
    o: ["Membrana mitocondrial interna", "Membrana mitocondrial externa", "Citosol", "Matriz mitocondrial"],
    e: "Los complejos I–IV y la ATP sintasa están embebidos en la membrana interna." },
  { m: "fosforilacion", q: "¿A qué complejo entrega electrones el NADH?",
    o: ["Complejo I", "Complejo II", "Complejo III", "Complejo IV"],
    hint: "El FADH₂ entra por el complejo II.",
    e: "NADH → complejo I; FADH₂ → complejo II. Por eso el FADH₂ rinde menos ATP." },
  { m: "fosforilacion", q: "¿Cuántos ATP se obtienen aproximadamente por glucosa en condiciones aerobias?",
    o: ["36–38", "2", "≈ 10", "≈ 100"],
    e: "Suman 2 ATP de la glicólisis, 2 GTP de Krebs y el resto de la fosforilación oxidativa (3 ATP por NADH y 2 por FADH₂). En anaerobiosis solo 2." },
  { m: "fosforilacion", q: "¿Qué ocurre con un desacoplante de la cadena respiratoria?",
    o: ["Se consume O₂ pero se produce calor en lugar de ATP", "Se produce más ATP", "Se bloquea el consumo de O₂", "Aumenta el gradiente de protones"],
    hint: "Disipa el gradiente sin pasar por la ATP sintasa.",
    e: "La energía del gradiente se pierde como calor. Es el mecanismo de la termogenina en la grasa parda." },
  { m: "fosforilacion", q: "¿Por qué el cianuro es tan tóxico?",
    o: ["Inhibe el complejo IV y detiene la producción aerobia de ATP", "Bloquea la glicólisis", "Destruye la hemoglobina", "Activa la ATP sintasa"],
    e: "Aunque haya oxígeno disponible, la célula no puede usarlo. Los tejidos con mayor demanda (cerebro, corazón) fallan primero." },

  /* ---------------- GLUCÓGENO ---------------- */
  { m: "glucogeno", q: "¿Qué tipo de enlaces forma la glicógeno sintasa y cuáles la enzima ramificante?",
    o: ["Sintasa: α-1,4; ramificante: α-1,6", "Sintasa: α-1,6; ramificante: α-1,4", "Ambas forman α-1,4", "Sintasa: β-1,4; ramificante: α-1,6"],
    e: "Las cadenas lineales son α-1,4 y los puntos de ramificación α-1,6." },
  { m: "glucogeno", q: "¿Por qué el glicógeno muscular no sirve para subir la glicemia?",
    o: ["Porque el músculo no tiene glucosa-6-fosfatasa", "Porque no tiene fosforilasa", "Porque el músculo no sintetiza glicógeno", "Porque el glucagón no lo degrada"],
    hint: "¿Qué enzima convierte la glucosa-6-P en glucosa libre?",
    e: "Sin glucosa-6-fosfatasa, la glucosa-6-P queda en el músculo y alimenta su propia glicólisis." },
  { m: "glucogeno", q: "¿Qué enzima libera glucosa-1-fosfato desde el glicógeno?",
    o: ["Glicógeno fosforilasa", "Glicógeno sintasa", "Hexoquinasa", "Glucoquinasa"],
    e: "La fosforilasa rompe enlaces α-1,4 por fosforólisis (usa Pi, no gasta ATP)." },
  { m: "glucogeno", q: "¿Qué ocurre con el glicógeno del hígado cuando baja la glicemia, por ejemplo en el ayuno?",
    o: ["Se degrada y libera glucosa a la sangre", "Se sintetiza más glicógeno para almacenar glucosa", "Se convierte en colesterol", "No se modifica"],
    hint: "Con la glicemia baja se libera glucagón.",
    e: "El glucagón activa la degradación del glicógeno hepático y la glucosa liberada pasa a la sangre, lo que restaura la glicemia." },
  { m: "glucogeno", q: "¿Qué hormona NO actúa sobre el glicógeno muscular?",
    o: ["Glucagón", "Adrenalina", "Insulina", "Todas actúan"],
    e: "El músculo no tiene receptor de glucagón. La adrenalina sí activa la glicogenólisis muscular." },
  { m: "glucogeno", q: "¿Cuál es el efecto de la insulina sobre la glicógeno fosforilasa y la glicógeno sintasa?",
    o: ["Inactiva la fosforilasa y activa la sintasa", "Activa ambas", "Activa la fosforilasa e inactiva la sintasa", "No tiene efecto"],
    e: "La insulina activa fosfatasas que defosforilan ambas enzimas, favoreciendo el almacenamiento." },
  { m: "glucogeno", q: "¿Qué efecto tiene la adrenalina sobre el glicógeno durante el ejercicio o el estrés?",
    o: ["Favorece su degradación y la liberación de glucosa", "Favorece su síntesis y almacenamiento", "Inhibe su degradación", "No tiene efecto sobre el glicógeno"],
    hint: "Prepara al cuerpo para obtener energía rápidamente.",
    e: "La adrenalina activa la degradación del glicógeno en el hígado y en el músculo, lo que aporta glucosa durante el ejercicio o el estrés." },

  /* ---------------- HORMONAS ---------------- */
  { m: "hormonas", q: "¿Qué hormona se libera cuando la glicemia está baja?",
    o: ["Glucagón", "Insulina", "Calcitonina", "Oxitocina"],
    e: "El páncreas libera glucagón cuando la glicemia está baja." },
  { m: "hormonas", q: "¿Qué transportador permite a la insulina aumentar la captación de glucosa en músculo y tejido adiposo?",
    o: ["GLUT4", "GLUT1", "GLUT2", "GLUT3"],
    hint: "Es el único dependiente de insulina.",
    e: "La insulina induce la translocación de GLUT4 a la membrana. Por eso se afecta en la resistencia a la insulina." },
  { m: "hormonas", q: "¿Cuál es el efecto de la insulina sobre la gluconeogénesis hepática?",
    o: ["La inhibe", "La activa", "No tiene efecto", "La invierte"],
    e: "La insulina favorece el uso y almacenamiento de la glucosa, y reduce su producción." },
  { m: "hormonas", q: "¿Cuál de estos efectos corresponde al glucagón?",
    o: ["↑ gluconeogénesis y ↑ glicogenólisis hepática", "↑ glicogenogénesis", "↑ captación de glucosa por GLUT4", "↓ glicemia"],
    e: "El glucagón aumenta la producción hepática de glucosa." },
  { m: "hormonas", q: "¿Qué valor de glicemia en ayunas se considera normal?",
    o: ["70–99 mg/dL", "40–60 mg/dL", "126–180 mg/dL", "200–250 mg/dL"],
    e: "≥ 126 mg/dL en ayunas (confirmado) es criterio de diabetes; < 70 mg/dL es hipoglicemia." },
  { m: "hormonas", q: "¿Por qué en la hipoglicemia aparecen sudoración, temblor y taquicardia?",
    o: ["Por la liberación de adrenalina", "Por exceso de insulina en el cerebro", "Por falta de oxígeno", "Por exceso de glucagón"],
    hint: "Es una respuesta contrarreguladora del sistema simpático.",
    e: "La adrenalina es una hormona contrarreguladora: sube la glicemia, pero causa estos síntomas." },
  { m: "hormonas", q: "En la diabetes tipo 1 sin tratamiento, ¿qué ocurre?",
    o: ["Falta de insulina, hiperglicemia y riesgo de cetoacidosis", "Exceso de insulina e hipoglicemia", "Falta de glucagón", "Exceso de GLUT4"],
    e: "Sin insulina la glucosa no entra a las células, hay lipólisis exagerada y producción de cuerpos cetónicos." },

  /* ---------------- PREGUNTAS DE APLICACIÓN ---------------- */
  { m: "casos",
    case: "Un maratonista de 30 años llega con calambres después de una carrera. Su lactato sérico está elevado.",
    q: "¿Qué explica el aumento de lactato?",
    o: ["Con poco oxígeno, el piruvato se convierte en lactato por fermentación láctica", "El ciclo de Krebs se acelera por exceso de oxígeno", "Aumenta la gluconeogénesis en el músculo", "Hay un déficit de insulina"],
    hint: "¿Qué hace el músculo cuando el oxígeno no alcanza?",
    e: "Cuando el oxígeno no alcanza para la demanda del músculo, el piruvato se convierte en lactato (fermentación láctica). Así la célula sigue obteniendo ATP por glicólisis." },
  { m: "casos",
    case: "Una persona es rescatada de un incendio en un recinto cerrado. Tiene dolor de cabeza, confusión y lactato muy elevado. Se diagnostica intoxicación por monóxido de carbono (CO).",
    q: "¿Por qué aumenta el lactato?",
    o: ["El CO inhibe la citocromo oxidasa: la cadena respiratoria se detiene y el piruvato se convierte en lactato", "El CO inhibe la hexoquinasa: la glucosa se acumula y se convierte en lactato", "El CO activa el ciclo de Krebs: se forma más acetil-CoA y sube el lactato", "El CO aumenta la insulina: se bloquea la glicólisis y sube el lactato"],
    hint: "Piensa en qué ocurre con la cadena respiratoria si se bloquea uno de sus complejos.",
    e: "El monóxido de carbono inhibe la citocromo oxidasa (complejo IV), por lo que la cadena respiratoria se detiene aunque haya oxígeno. Sin poder reoxidar el NADH, el piruvato se convierte en lactato (fermentación láctica) y la célula sigue obteniendo ATP por glicólisis. Además, el CO se une a la hemoglobina y reduce el transporte de oxígeno a los tejidos." },
  { m: "casos",
    case: "Una persona lleva 18 horas en ayunas por una cirugía programada. Su glicemia es de 78 mg/dL.",
    q: "¿Qué mecanismo hormonal y metabólico mantiene su glicemia?",
    o: ["Glucagón: glicogenólisis y gluconeogénesis hepática", "Insulina: glicogenogénesis hepática", "Aumento de GLUT4 en músculo", "Glicólisis hepática acelerada"],
    hint: "¿Hay insulina alta o baja en ayuno?",
    e: "Con insulina baja y glucagón alto, el hígado libera glucosa desde el glicógeno y sintetiza glucosa nueva." },
  { m: "casos",
    case: "Un paciente con diabetes mellitus tipo 1 se administra su dosis habitual de insulina rápida pero omite el almuerzo. A los 40 minutos presenta sudoración, temblor y confusión.",
    q: "¿Qué ocurre en este paciente?",
    o: ["La insulina bajó la glicemia sin aporte de glucosa: hipoglicemia con respuesta de adrenalina", "Falta de insulina: cetoacidosis", "Exceso de glucagón: hiperglicemia", "Aumento de la gluconeogénesis por la insulina"],
    e: "La insulina activa GLUT4 y bloquea la producción hepática de glucosa. La conducta es administrar glucosa de absorción rápida según protocolo." },
  { m: "casos",
    case: "Un adolescente con diabetes mellitus tipo 1 no se ha administrado insulina en los últimos días. Su glicemia es de 400 mg/dL.",
    q: "¿Qué explica la glicemia tan alta?",
    o: ["Sin insulina, la glucosa no entra a las células y se acumula en la sangre", "Hay un exceso de insulina que impide usar la glucosa", "El hígado dejó de producir glucosa", "El glucagón está ausente"],
    hint: "La insulina permite que la glucosa entre a las células.",
    e: "Sin insulina, el músculo y el tejido adiposo no captan glucosa, y el hígado sigue produciéndola. Por eso la glucosa se acumula en la sangre." },
  { m: "casos",
    case: "Un lactante presenta hipoglicemia cuando pasa varias horas sin comer y su hígado está aumentado de tamaño. Tiene la enfermedad de Von Gierke: le falta la enzima glucosa-6-fosfatasa, que permite al hígado liberar glucosa a la sangre.",
    q: "¿Por qué el lactante presenta hipoglicemia en ayuno?",
    o: ["El hígado no puede liberar glucosa a la sangre, aunque degrade el glicógeno", "No puede sintetizar glicógeno", "Tiene exceso de glucagón", "No hay glicólisis"],
    e: "Sin glucosa-6-fosfatasa, la glucosa del glicógeno queda en el hígado y no llega a la sangre. Por eso el hígado crece y la glicemia baja en el ayuno." },
  { m: "casos",
    case: "Una joven presenta calambres y dolor muscular intenso con el ejercicio. Durante la prueba, su lactato no aumenta. Se diagnostica enfermedad de McArdle (déficit de fosforilasa muscular).",
    q: "¿Por qué el lactato no aumenta?",
    o: ["No puede degradar el glicógeno muscular, por lo que no hay sustrato para la glicólisis", "Se forma más ATP por la fosforilación oxidativa", "Su LDH es hiperactiva", "No tiene glicólisis"],
    e: "Sin fosforilasa, el glicógeno muscular no se moviliza. Sin sustrato glicolítico, hay poco piruvato y poco lactato." },

  /* ---------- Ampliación con el libro de aula (agrega siempre al final) ---------- */
  { m: "glucolisis", q: "La glicólisis se divide en dos fases. ¿Qué ocurre en la fase preparatoria?",
    o: ["Se gastan 2 ATP, la glucosa se activa y se forman 2 triosas fosfato", "Se producen 4 ATP y 2 NADH", "El piruvato se convierte en lactato", "Ocurre dentro de la mitocondria"],
    hint: "Es la fase en que la célula invierte energía.",
    e: "La fase preparatoria gasta 2 ATP. La fase oxidativa o de ganancia produce 4 ATP y 2 NADH." },
  { m: "glucolisis", q: "¿Cuáles son los tres puntos irreversibles donde se regula la glicólisis?",
    o: ["Hexoquinasa, fosfofructoquinasa-1 y piruvato quinasa", "Aldolasa, enolasa y fosfoglicerato mutasa", "Fosfoglucosa isomerasa, aldolasa y enolasa", "Gliceraldehído-3-fosfato deshidrogenasa, fosfoglicerato quinasa y mutasa"],
    e: "Las tres reacciones irreversibles son las catalizadas por la hexoquinasa, la fosfofructoquinasa-1 (PFK-1) y la piruvato quinasa." },
  { m: "glucolisis", q: "¿Qué molécula inhibe a la hexoquinasa?",
    o: ["Su producto, la glucosa-6-fosfato", "El piruvato", "El ADP", "La insulina"],
    e: "Es una retroalimentación negativa: si se acumula glucosa-6-fosfato, la hexoquinasa se frena." },
  { m: "glucolisis", q: "La piruvato quinasa se inhibe cuando hay niveles altos de…",
    o: ["ATP y acetil-CoA", "ADP y AMP", "Glucosa", "Insulina"],
    e: "Ambos indican abundancia de energía y de combustible: no hace falta seguir con la vía." },
  { m: "glucolisis", q: "La glicólisis responde a la regulación hormonal de la siguiente manera:",
    o: ["La insulina la activa y el glucagón la disminuye", "El glucagón la activa y la insulina la disminuye", "La insulina y el glucagón la activan por igual", "Ninguna de las dos hormonas la regula"],
    hint: "Después de comer sube la glicemia.",
    e: "Al subir la glucosa en sangre, el páncreas libera insulina, que activa el proceso. El glucagón lo disminuye." },
  { m: "glucolisis", q: "Además de la glucosa, ¿qué otras moléculas pueden entrar a la glicólisis?",
    o: ["Fructosa, galactosa y glicerol-fosfato", "Solo lactato", "Colesterol y triglicéridos", "Urea"],
    e: "Varios azúcares y el glicerol-fosfato se incorporan a la vía en distintos pasos." },
  { m: "fermentacion", q: "¿Qué se forma en la fermentación alcohólica de las levaduras?",
    o: ["Etanol y CO₂", "Lactato", "Acetil-CoA", "Glicógeno"],
    e: "En el músculo esquelético se forma lactato; en las levaduras, etanol y CO₂." },
  { m: "fermentacion", q: "En el músculo esquelético, sin oxígeno, el piruvato se convierte en…",
    o: ["Lactato", "Acetil-CoA", "Etanol", "CO₂ y agua"],
    e: "Es la fermentación láctica. El lactato se excreta de la célula." },
  { m: "krebs", q: "¿Qué transportador introduce el piruvato a la mitocondria?",
    o: ["Piruvato translocasa", "GLUT4", "Carnitina", "ATP sintasa"],
    e: "Una vez en la matriz, la PDH lo convierte en acetil-CoA." },
  { m: "krebs", q: "¿Cuál de estas moléculas inhibe a la piruvato deshidrogenasa?",
    o: ["ATP, NADH y acetil-CoA", "AMP y NAD⁺", "Desfosforilación de la subunidad E1", "ADP"],
    hint: "Los activadores son señales de baja energía.",
    e: "ATP, NADH y acetil-CoA la inhiben, igual que la fosforilación de E1. AMP, NAD⁺ y la desfosforilación la activan." },
  { m: "krebs", q: "¿Qué ocurre con los carbonos del acetil-CoA durante el ciclo de Krebs?",
    o: ["Se oxidan por completo y se liberan como CO₂", "Se convierten en glucosa", "Se convierten en lactato", "Se almacenan como glicógeno"],
    hint: "Es el mismo gas que eliminamos al respirar.",
    e: "Los dos carbonos del acetil-CoA se oxidan por completo y salen de la célula como dióxido de carbono." },
  { m: "fosforilacion", q: "¿Qué complejo de la cadena respiratoria NO bombea protones?",
    o: ["Complejo II (succinato deshidrogenasa)", "Complejo I", "Complejo III", "Complejo IV"],
    hint: "Es el que también participa en el ciclo de Krebs.",
    e: "Los complejos I, III y IV bombean protones. El II solo transfiere electrones desde el FADH₂." },
  { m: "fosforilacion", q: "Según el material del curso, ¿cuántos ATP rinde cada NADH y cada FADH₂ en la cadena?",
    o: ["3 y 2", "2 y 3", "1 y 1", "5 y 4"],
    e: "Con esos valores, la oxidación completa de una glucosa rinde entre 36 y 38 ATP." },
  { m: "fosforilacion", q: "En la ATP sintasa, ¿por dónde pasan los protones y dónde se sintetiza el ATP?",
    o: ["Pasan por el canal F₀ y el ATP se forma en F₁", "Pasan por F₁ y el ATP se forma en F₀", "Pasan por el complejo I", "Pasan por la ubiquinona"],
    e: "El retorno de H⁺ por F₀ impulsa la reacción entre ADP y Pi en la unidad catalítica F₁." },
  /* ---------- Caso con gráfica de dobles recíprocos ---------- */
  { m: "casos",
    case: "En un laboratorio se estudia I-234, un fármaco nuevo que inhibe una enzima del metabolismo. Se midió la velocidad de la reacción con distintas cantidades de sustrato, con y sin el fármaco, y se hizo la gráfica de dobles recíprocos que se muestra.",
    img: "assets/lineweaver-burk.png",
    imgAlt: "Gráfica de dobles recíprocos. Las rectas con y sin inhibidor se cortan en el mismo punto del eje vertical, en 4. La recta sin inhibidor cruza el eje horizontal en menos 3 y la recta con inhibidor, en menos 2.",
    q: "¿Qué tipo de inhibidor es el I-234?",
    o: ["Competitivo", "No competitivo", "Irreversible", "No es un inhibidor"],
    hint: "Fíjate dónde se cortan las dos rectas: si lo hacen en el eje vertical, la velocidad máxima no cambia.",
    e: "Las dos rectas se cortan en el mismo punto del eje vertical, así que la velocidad máxima (Vmax) no cambia. Eso es característico del inhibidor competitivo, que compite con el sustrato por el sitio activo de la enzima." },
  { m: "casos",
    case: "En un laboratorio se estudia I-234, un fármaco nuevo que inhibe una enzima del metabolismo. Se midió la velocidad de la reacción con distintas cantidades de sustrato, con y sin el fármaco, y se hizo la gráfica de dobles recíprocos que se muestra.",
    img: "assets/lineweaver-burk.png",
    imgAlt: "Gráfica de dobles recíprocos. Las rectas con y sin inhibidor se cortan en el mismo punto del eje vertical, en 4. La recta sin inhibidor cruza el eje horizontal en menos 3 y la recta con inhibidor, en menos 2.",
    q: "¿Qué ocurre con el Km de la enzima en presencia de I-234?",
    o: ["Aumenta: la enzima necesita más sustrato para trabajar a la mitad de su velocidad máxima", "Disminuye: la enzima tiene más afinidad por el sustrato", "No cambia", "Se vuelve cero"],
    hint: "La recta con inhibidor cruza el eje horizontal más cerca de cero, y ese valor es el inverso del Km con signo negativo.",
    e: "Sin inhibidor la recta cruza el eje horizontal en −3 (Km ≈ 0,33 mM) y con inhibidor en −2 (Km = 0,5 mM). El Km aumenta, es decir, baja la afinidad aparente por el sustrato, y la Vmax se mantiene." },
  /* ---------- Caso: enfermedad de Hers ---------- */
  { m: "casos",
    case: "La enfermedad de Hers afecta a las células del hígado, que no pueden producir la enzima glicógeno fosforilasa, necesaria para degradar el glicógeno hepático. Los pacientes tienen períodos de glicemia muy baja (hipoglicemia).",
    q: "Después de correr 15 minutos, ¿cómo estará el glicógeno del músculo de un paciente con esta enfermedad, comparado con una persona sana?",
    o: ["Igual que en una persona sana: disminuido, porque la enfermedad solo afecta al hígado", "Más alto, porque el músculo no puede degradar su glicógeno", "Más bajo que en una persona sana, porque el hígado no libera glucosa", "No se puede degradar el glicógeno en ningún tejido"],
    e: "La enfermedad afecta la enzima del hígado. El músculo tiene la suya, por lo que degrada su glicógeno con normalidad al correr. Lo que queda alterado es el glicógeno del hígado, que no se puede degradar." },
  /* ---------- Desafío: Introducción al metabolismo (2 etapas de 10) ---------- */
  { m: "intro", etapa: 1, q: "¿Qué entendemos por metabolismo?",
    o: ["El conjunto de reacciones químicas que ocurren en los seres vivos", "Solo las reacciones que consumen energía", "Reacciones que ocurren solo en mitocondrias", "Todas las reacciones no enzimáticas del cuerpo"],
    e: "El metabolismo abarca todas las reacciones químicas reguladas por enzimas que permiten la vida. Recuerda: incluye tanto procesos que consumen como los que liberan energía." },
  { m: "intro", etapa: 1, q: "¿Cuál es la función principal del metabolismo?",
    o: ["Permitir el crecimiento, reparación y mantenimiento del organismo", "Regular la temperatura corporal sin producir energía", "Convertir toda la energía de los alimentos en calor", "Almacenar energía exclusivamente sin producir precursores"],
    e: "El metabolismo provee energía y materiales para las funciones vitales. Recuerda: no se limita a generar calor, sino que construye y mantiene tejidos vivos." },
  { m: "intro", etapa: 1, q: "¿Qué diferencia existe entre anabolismo y catabolismo?",
    o: ["El anabolismo construye moléculas y el catabolismo las degrada", "Ambos usan las mismas enzimas en la misma dirección", "El anabolismo degrada moléculas para obtener energía", "No hay diferencia entre ambos"],
    e: "El anabolismo requiere energía para formar estructuras; el catabolismo libera energía al degradarlas. Recuerda: son procesos complementarios, no opuestos absolutos." },
  { m: "intro", etapa: 1, q: "¿Qué molécula es la principal fuente de energía celular?",
    o: ["ATP", "NADH", "GTP", "Glucosa"],
    e: "El ATP actúa como moneda energética universal. Recuerda: aunque la glucosa es el combustible, el ATP es quien entrega la energía directamente." },
  { m: "intro", etapa: 1, q: "¿Dónde ocurre principalmente la obtención de energía en las células eucariontes animales?",
    o: ["En la mitocondria", "En el citosol", "En el núcleo", "En los peroxisomas"],
    e: "Las mitocondrias son las 'centrales energéticas' celulares. Recuerda: ahí ocurre la respiración celular aeróbica, donde se genera la mayor parte del ATP." },
  { m: "intro", etapa: 1, q: "¿Qué proceso permite a la célula sobrevivir sin usar oxígeno?",
    o: ["Fermentación", "Gluconeogénesis", "Respiración anaerobia con nitratos", "Respiración aeróbica"],
    e: "La fermentación regenera NAD⁺ para mantener la glicólisis funcionando. Recuerda: la fermentación no produce ATP por sí sola, solo permite que la glicólisis continúe." },
  { m: "intro", etapa: 1, q: "¿Qué gas es necesario para la respiración aeróbica?",
    o: ["Oxígeno", "Ozono", "Óxido nítrico", "Dióxido de carbono"],
    e: "El oxígeno es esencial como aceptor final de electrones. Recuerda: sin oxígeno, la cadena respiratoria se detiene y baja la producción de ATP." },
  { m: "intro", etapa: 1, q: "¿Por qué es importante la glucosa en el metabolismo?",
    o: ["Porque es una fuente inmediata de energía", "Porque es el principal almacén de energía a largo plazo", "Porque aporta nitrógeno a los aminoácidos", "Porque produce oxígeno en la respiración"],
    e: "La glucosa es el combustible principal para obtener ATP. Recuerda: los lípidos almacenan energía, pero la glucosa se usa primero por rapidez." },
  { m: "intro", etapa: 1, q: "¿Qué relación tiene la respiración celular con la fotosíntesis?",
    o: ["La fotosíntesis produce la glucosa usada en la respiración", "La respiración produce oxígeno y la fotosíntesis lo consume", "La fotosíntesis usa oxígeno para fijar CO₂", "La respiración ocurre solo en plantas"],
    e: "Los productos de la fotosíntesis (glucosa y oxígeno) se usan en la respiración. Recuerda: son procesos complementarios en el ciclo de la energía." },
  { m: "intro", etapa: 1, q: "¿Qué ocurre cuando una célula eucarionte animal no recibe suficiente oxígeno?",
    o: ["Recurre a la fermentación para regenerar NAD⁺ y sostener la glicólisis (ATP por nivel de sustrato)", "Detiene completamente la glicólisis", "Aumenta el uso de oxígeno en la mitocondria", "Cambia el ADN para producir más energía"],
    e: "En condiciones de hipoxia, la célula eucarionte animal recurre a la fermentación para regenerar NAD⁺ y mantener la glicólisis activa. Recuerda: la fermentación no genera energía directamente, pero permite sostener la producción de ATP por glicólisis a nivel de sustrato." },
  { m: "intro", etapa: 2, q: "¿Qué sucede con la energía liberada en las reacciones catabólicas?",
    o: ["Se almacena en forma de ATP", "Se disipa completamente como calor", "Se almacena solo como grasa", "Se usa solo para movimiento"],
    e: "El ATP guarda la energía liberada para que la célula la use. Recuerda: el calor es inevitable, pero el ATP conserva parte de esa energía para reacciones futuras." },
  { m: "intro", etapa: 2, q: "¿Qué ocurre cuando la célula necesita fabricar nuevas proteínas?",
    o: ["Utiliza energía del ATP para unir aminoácidos", "Ocurre en la mitocondria sin gasto energético", "No requiere energía si hay suficientes aminoácidos", "Usa solo energía de la glicólisis"],
    e: "La síntesis de proteínas requiere energía del ATP. Recuerda: esta energía impulsa la unión entre aminoácidos para formar cadenas polipeptídicas." },
  { m: "intro", etapa: 2, q: "¿Qué describe mejor la función del ATP en la célula?",
    o: ["Transportar y suministrar energía a reacciones que la necesitan", "Almacenar información genética", "Ser cofactor sin valor energético", "Generar ADN"],
    e: "El ATP transfiere energía a procesos biológicos. Recuerda: actúa como intermediario entre las reacciones que liberan energía y las que la consumen." },
  { m: "intro", etapa: 2, q: "¿Cómo se libera la energía del ATP?",
    o: ["Cuando se rompe un enlace de fosfato", "Cuando se une al ADN", "Cuando se separa en AMP y P sin energía", "Al absorber luz"],
    e: "Al romperse un enlace de fosfato se libera energía útil. Recuerda: ese proceso se llama hidrólisis y permite impulsar funciones celulares." },
  { m: "intro", etapa: 2, q: "¿Qué organismos realizan respiración celular?",
    o: ["Todos los seres vivos que usan oxígeno", "Solo animales", "Solo plantas", "Solo microorganismos"],
    e: "La respiración celular ocurre en animales, plantas y microorganismos. Recuerda: todos necesitan liberar energía de los nutrientes." },
  { m: "intro", etapa: 2, q: "¿Qué relación hay entre la alimentación y el metabolismo?",
    o: ["Los nutrientes aportan materia y energía para las reacciones metabólicas", "Aporta solo vitaminas sin afectar la energía", "Solo aporta energía sin dar materia", "No tiene relación con el metabolismo"],
    e: "Los nutrientes son la base del metabolismo. Recuerda: sin ellos, la célula no tendría ni materiales ni energía para sus funciones." },
  { m: "intro", etapa: 2, q: "¿Qué pasa con el ATP una vez utilizado?",
    o: ["Se regenera a partir del ADP", "Se exporta fuera de la célula", "Se oxida a AMP y no se regenera", "Se almacena para uso futuro"],
    e: "El ADP puede volver a transformarse en ATP mediante la respiración celular. Recuerda: el ciclo ATP↔ADP ocurre constantemente en las células." },
  { m: "intro", etapa: 2, q: "¿Cuál es el papel del oxígeno en la respiración celular?",
    o: ["Aceptar electrones al final de la cadena respiratoria", "Ser donador de electrones al inicio", "Activar enzimas del ciclo de Krebs", "Formar glucosa"],
    e: "El oxígeno acepta electrones al final de la cadena respiratoria. Recuerda: sin oxígeno, el flujo de electrones se detiene y baja el ATP." },
  { m: "intro", etapa: 2, q: "¿Qué importancia tiene el metabolismo en la vida diaria?",
    o: ["Permite obtener energía de los alimentos y mantener funciones vitales", "Funciona solo durante el sueño", "Actúa solo después de comer mucho", "Opera solo en músculos"],
    e: "El metabolismo está activo todo el tiempo. Recuerda: incluso al dormir, tu cuerpo sigue usando energía para mantener la vida." },
  { m: "intro", etapa: 2, q: "¿Qué ocurre si el metabolismo se desequilibra?",
    o: ["Puede causar enfermedades como diabetes o hipotiroidismo", "Se compensa con más apetito", "Solo baja el rendimiento físico", "No hay efectos"],
    e: "Un desequilibrio metabólico puede causar enfermedades. Recuerda: el metabolismo equilibrado es esencial para mantener la salud." },
  /* ---------- Desafío: Enzimas (2 etapas de 10) ---------- */
  { m: "enzimas",
    etapa: 1,
    q: "¿Qué es una enzima?",
    o: ["Una proteína que cataliza reacciones en condiciones fisiológicas", "Una coenzima que se consume en la reacción", "Un metabolito energético (ATP)", "Un polisacárido que cataliza una reacción"],
    e: "Las enzimas aceleran las reacciones porque disminuyen la energía de activación." },
  { m: "enzimas",
    etapa: 1,
    q: "Una enzima tiene un Km bajo por su sustrato. ¿Qué significa?",
    o: ["Tiene alta afinidad por el sustrato", "Tiene baja afinidad por el sustrato", "Su velocidad máxima es muy baja", "Necesita siempre un cofactor"],
    e: "El Km es la concentración de sustrato a la que la enzima alcanza la mitad de su velocidad máxima. A menor Km, la enzima necesita menos sustrato: tiene mayor afinidad." },
  { m: "enzimas",
    etapa: 1,
    q: "Vmax representa…",
    o: ["La velocidad a concentraciones saturantes de sustrato", "La velocidad inicial a [S]→0", "La constante de inhibición (Ki)", "La tasa de degradación de la enzima"],
    e: "La Vmax se alcanza cuando todos los sitios activos están ocupados por sustrato." },
  { m: "enzimas",
    etapa: 1,
    q: "En presencia de un inhibidor competitivo…",
    o: ["Km aumenta y Vmax se mantiene", "Vmax disminuye y Km no cambia", "Disminuyen ambos (Km y Vmax)", "Aumentan ambos (Km y Vmax)"],
    e: "El inhibidor competitivo compite por el sitio activo: aumenta el Km aparente y la Vmax no cambia." },
  { m: "enzimas",
    etapa: 1,
    q: "El sitio activo es…",
    o: ["La región que reconoce sustrato y donde ocurre la catálisis", "El sitio de unión del cofactor", "Exclusivamente un sitio alostérico", "Una zona regulatoria sin función catalítica"],
    e: "Es la región que reconoce al sustrato y donde ocurre la reacción química." },
  { m: "enzimas",
    etapa: 1,
    q: "Modelo de unión para la enzima y el sustrato más aceptado hoy",
    o: ["Ajuste inducido", "Llave-cerradura ", "Ajuste aleatorio", "Reconocimiento estructural"],
    e: "En el ajuste inducido, la enzima cambia de forma al unirse al sustrato." },
  { m: "enzimas",
    etapa: 1,
    q: "Cofactores/coenzimas",
    o: ["Moléculas no proteicas necesarias para la actividad (iones o coenzimas)", "Moléculas proteicas adicionales para la catálisis", "Inhibidores competitivos", "Productos que se consumen en la reacción"],
    e: "Ejemplos de cofactores: Mg²⁺ y Zn²⁺. Ejemplos de coenzimas: NAD⁺ y FAD." },
  { m: "enzimas",
    etapa: 1,
    q: "El pH extremo puede afectar la catálisis porque:",
    o: ["Puede alterar la carga de los residuos del sitio activo y reducir la actividad", "Siempre aumenta la velocidad", "No tiene efecto", "Solo cambia la concentración de H+ de la solución"],
    e: "Cada enzima tiene un pH óptimo. Con pH extremo cambia la carga de los aminoácidos del sitio activo y la enzima funciona peor o se desnaturaliza." },
  { m: "enzimas",
    etapa: 1,
    q: "Temperatura óptima de una enzima humana",
    o: ["≈37 °C", "≈4 °C", "≈60 °C", "depende del clima"],
    e: "Suele estar cerca de la temperatura corporal. Con temperaturas altas la enzima se desnaturaliza." },
  { m: "enzimas",
    etapa: 1,
    q: "Apoenzima vs holoenzima",
    o: ["Holo = proteína + cofactor(es); Apo = proteína sola", "Apo es la activa y holo la inactiva", "Son lo mismo", "Holo es un inhibidor"],
    e: "La holoenzima es la proteína con su cofactor y es la forma activa." },
  { m: "enzimas",
    etapa: 2,
    img: "assets/enz-lb-competitiva.svg",
    imgAlt: "Gráfica de dobles recíprocos. Las dos rectas se cortan en el mismo punto del eje vertical; la recta con inhibidor tiene mayor pendiente y cruza el eje horizontal más cerca de cero.",
    q: "La figura representa un estudio enzimático en presencia de un inhibidor; según los resultados la inhibición es de tipo:",
    o: ["Competitiva", "No competitiva", "Acompetitiva", "Irreversible"],
    e: "Las dos rectas se cortan en el mismo punto del eje vertical: la Vmax no cambia. Es una inhibición competitiva." },
  { m: "enzimas",
    etapa: 2,
    img: "assets/enz-lb-nocompetitiva.svg",
    imgAlt: "Gráfica de dobles recíprocos. Las dos rectas se cortan en el mismo punto del eje horizontal; la recta con inhibidor cruza el eje vertical más arriba.",
    q: "La figura representa un estudio enzimático en presencia de un inhibidor; según los resultados la inhibición es de tipo:",
    o: ["No competitiva", "Competitiva", "Acompetitiva", "Irreversible"],
    e: "Las dos rectas se cortan en el mismo punto del eje horizontal: el Km no cambia y la Vmax disminuye. Es una inhibición no competitiva." },
  { m: "enzimas",
    etapa: 2,
    img: "assets/enz-lb-acompetitiva.svg",
    imgAlt: "Gráfica de dobles recíprocos. Las dos rectas son paralelas; la recta con inhibidor está desplazada hacia arriba.",
    q: "La figura representa un estudio enzimático en presencia de un inhibidor; según los resultados la inhibición es de tipo:",
    o: ["Acompetitiva", "No competitiva", "Competitiva", "Irreversible"],
    e: "Las rectas son paralelas: el Km y la Vmax disminuyen en igual proporción. Es una inhibición acompetitiva." },
  { m: "enzimas",
    etapa: 2,
    img: "assets/enz-mm-competitiva.svg",
    imgAlt: "Gráfica de velocidad inicial frente a concentración de sustrato. Con inhibidor la curva sube más lento, pero ambas llegan a la misma velocidad máxima.",
    q: "El gráfico muestra velocidad inicial (V) vs [S] para una enzima con y sin inhibidor competitivo. Según los resultados, la inhibición es:",
    o: ["Competitiva", "No competitiva", "Acompetitiva", "Irreversible"],
    e: "Con inhibidor, ambas curvas llegan a la misma Vmax, pero se necesita más sustrato para lograrlo (el Km aumenta). Es una inhibición competitiva." },
  { m: "enzimas",
    etapa: 2,
    q: "Si al aumentar [S] se revierte la inhibición, probablemente es…",
    o: ["Competitiva", "No competitiva", "Acompetitiva", "Irreversible"],
    e: "Al agregar más sustrato, este desplaza al inhibidor del sitio activo. Es una inhibición competitiva." },
  { m: "enzimas",
    etapa: 2,
    q: "Si en un ensayo enzimático se observa ↓Vmax con Km igual. Corresponderá a una inhibición:",
    o: ["No competitiva", "Competitiva", "Acompetitiva", "Irreversible"],
    e: "La Vmax disminuye y el Km no cambia. Es una inhibición no competitiva." },
  { m: "enzimas",
    etapa: 2,
    q: "Si Vmax no cambia pero Km aumenta. ¿A qué inhibición corresponde?",
    o: ["Competitiva", "No competitiva", "Acompetitiva", "Irreversible"],
    e: "El Km aumenta y la Vmax no cambia. Es una inhibición competitiva." },
  { m: "enzimas",
    etapa: 2,
    q: "Un inhibidor forma enlace covalente estable e inactiva la enzima. Esto es…",
    o: ["Irreversible", "Acompetitiva", "Competitiva", "No competitiva"],
    e: "Un enlace covalente estable inactiva la enzima de forma permanente. Es una inhibición irreversible." },
  { m: "enzimas",
    etapa: 2,
    q: "Una enzima necesita Mg²⁺ y, sin él, pierde su actividad. ¿Cómo se explica?",
    o: ["El Mg²⁺ es un cofactor necesario para la actividad", "La reacción ocurre sola, sin enzima", "El Mg²⁺ es un inhibidor acompetitivo", "El calor aumenta la Vmax"],
    e: "El Mg²⁺ es un cofactor necesario: sin él la enzima no funciona, aunque conserve su forma." },
  { m: "enzimas",
    etapa: 2,
    q: "En la inhibición acompetitiva, ¿qué ocurre con Km y Vmax?",
    o: ["Disminuyen ambos en igual proporción", "Sólo disminuye Vmax", "Aumenta Km sin cambiar Vmax", "Aumentan ambos"],
    e: "En la inhibición acompetitiva, el Km y la Vmax disminuyen en igual proporción (rectas paralelas)." },
  /* ---------- β-oxidación de ácidos grasos ---------- */
  { m: "boxidacion",
    q: "¿Dónde ocurre la β-oxidación de los ácidos grasos?",
    o: ["En la matriz mitocondrial", "En el citosol", "En el núcleo", "En el aparato de Golgi"],
    hint: "Es el mismo lugar donde ocurre el ciclo de Krebs.",
    e: "La β-oxidación ocurre en la matriz mitocondrial, donde el acetil-CoA que se forma entra directamente al ciclo de Krebs." },
  { m: "boxidacion",
    q: "¿Qué molécula transporta los ácidos grasos al interior de la mitocondria?",
    o: ["La carnitina", "La albúmina", "La insulina", "El acetil-CoA"],
    hint: "Es una molécula derivada de aminoácidos.",
    e: "La carnitina permite que los ácidos grasos activados atraviesen la membrana mitocondrial interna. La albúmina los transporta por la sangre, no dentro de la célula." },
  { m: "boxidacion",
    q: "¿Qué ocurre con un ácido graso en el citosol, antes de entrar a la mitocondria?",
    o: ["Se activa: se transforma en acil-CoA, con gasto de ATP", "Se convierte en glucosa", "Se une a la albúmina dentro de la célula", "Se transforma en colesterol"],
    hint: "La activación consume energía.",
    e: "Antes de entrar a la mitocondria, el ácido graso se activa y se convierte en acil-CoA. Para eso la célula gasta ATP." },
  { m: "boxidacion",
    q: "¿Cuántos carbonos se pierden del ácido graso en cada vuelta de la β-oxidación?",
    o: ["2", "1", "4", "16"],
    hint: "En cada vuelta se libera una molécula de acetil-CoA.",
    e: "Cada vuelta acorta la cadena en 2 carbonos, que salen como acetil-CoA." },
  { m: "boxidacion",
    q: "¿Qué se produce en cada vuelta de la β-oxidación?",
    o: ["Acetil-CoA, NADH y FADH₂", "Piruvato, NADH y FADH₂", "Acetil-CoA, lactato y GTP", "Glucosa, NADH y CO₂"],
    e: "Cada vuelta produce acetil-CoA y dos coenzimas reducidas: NADH y FADH₂, que llevan electrones a la cadena respiratoria." },
  { m: "boxidacion",
    q: "¿Qué hormona activa la degradación de los triglicéridos del tejido adiposo cuando la glicemia está baja?",
    o: ["Glucagón", "Insulina", "Aldosterona", "Tiroxina"],
    hint: "Con la glicemia baja se libera la hormona del ayuno.",
    e: "El glucagón activa la lipasa del tejido adiposo, que libera ácidos grasos. La insulina hace lo contrario: favorece el almacenamiento." },
  { m: "boxidacion",
    q: "¿Cómo viajan los ácidos grasos por la sangre desde el tejido adiposo hasta el músculo?",
    o: ["Unidos a la proteína albúmina", "Disueltos libremente en el plasma, porque son solubles en agua", "Dentro de los glóbulos rojos", "Transformados en glucosa"],
    hint: "Los lípidos no se disuelven en agua.",
    e: "Los ácidos grasos son insolubles en agua, por lo que viajan unidos a la albúmina sérica." },
  { m: "boxidacion",
    q: "¿Qué ocurre con el acetil-CoA que se produce en la β-oxidación?",
    o: ["Entra al ciclo de Krebs", "Se convierte en glucosa en el hígado", "Se transforma en lactato", "Se almacena como glicógeno"],
    e: "El acetil-CoA entra al ciclo de Krebs. Los ácidos grasos no pueden convertirse en glucosa." },
  { m: "boxidacion",
    q: "Un paciente tiene déficit de carnitina. ¿Qué consecuencia tiene?",
    o: ["Los ácidos grasos no entran a la mitocondria y no se pueden oxidar", "Aumenta la β-oxidación porque hay más ácidos grasos libres", "Los ácidos grasos se convierten en glucosa", "No hay ningún efecto sobre el metabolismo"],
    hint: "Piensa en quién transporta los ácidos grasos a la mitocondria.",
    e: "Sin carnitina, los ácidos grasos no atraviesan la membrana mitocondrial interna. La célula no puede obtener energía de ellos." },
  { m: "boxidacion",
    q: "El mismo paciente con déficit de carnitina, ¿puede pasar largos períodos de ayuno?",
    o: ["No: en el ayuno depende de los ácidos grasos y no puede oxidarlos", "Sí: la β-oxidación no se usa en el ayuno", "Sí: los ácidos grasos se convierten en glucosa", "Sí: el músculo no usa ácidos grasos"],
    hint: "¿De dónde obtiene energía el cuerpo en el ayuno?",
    e: "En el ayuno el organismo obtiene mucha energía de los ácidos grasos. Sin carnitina no puede oxidarlos, por eso tolera mal el ayuno y requiere suplemento de L-carnitina." },
  /* ---------- Cuerpos cetónicos ---------- */
  { m: "cetonicos",
    q: "¿Qué órgano produce los cuerpos cetónicos?",
    o: ["El hígado", "El músculo", "El páncreas", "El cerebro"],
    e: "El hígado forma los cuerpos cetónicos en la matriz mitocondrial y los envía por la sangre a los demás tejidos." },
  { m: "cetonicos",
    q: "¿A partir de qué molécula se forman los cuerpos cetónicos?",
    o: ["Acetil-CoA", "Glucosa", "Piruvato", "Lactato"],
    hint: "Es el producto de la β-oxidación.",
    e: "El acetil-CoA que se produce al degradar ácidos grasos es la materia prima de los cuerpos cetónicos." },
  { m: "cetonicos",
    q: "¿Cuál de estas moléculas es un cuerpo cetónico?",
    o: ["Acetoacetato", "Piruvato", "Citrato", "Lactato"],
    e: "Los tres cuerpos cetónicos son el acetoacetato, el β-hidroxibutirato y la acetona." },
  { m: "cetonicos",
    q: "¿En qué situación el hígado forma más cuerpos cetónicos?",
    o: ["En el ayuno prolongado", "Justo después de una comida con carbohidratos", "Cuando la insulina está alta", "Cuando hay exceso de glucosa en la célula"],
    hint: "Piensa en una situación con poca glucosa disponible.",
    e: "En el ayuno hay poca glucosa y se oxidan muchos ácidos grasos. Así se acumula acetil-CoA y el hígado produce cuerpos cetónicos." },
  { m: "cetonicos",
    q: "¿Qué hacen los demás tejidos con los cuerpos cetónicos que llegan por la sangre?",
    o: ["Los oxidan en el ciclo de Krebs para obtener energía", "Los convierten en glucosa", "Los almacenan como glicógeno", "Los eliminan sin usarlos"],
    e: "Los cuerpos cetónicos son un combustible: los tejidos los oxidan para obtener energía." },
  { m: "cetonicos",
    q: "En los mamíferos, ¿por qué el exceso de acetil-CoA del hígado se transforma en cuerpos cetónicos y no en glucosa?",
    o: ["Porque en los mamíferos el acetil-CoA no puede convertirse en glucosa", "Porque el hígado no puede producir glucosa", "Porque los cuerpos cetónicos se forman a partir de glucosa", "Porque el acetil-CoA no entra a la mitocondria"],
    e: "El acetil-CoA no puede dar origen a glucosa. Su destino es el ciclo de Krebs o la formación de cuerpos cetónicos." },
  { m: "cetonicos",
    q: "¿Qué molécula se forma por descarboxilación del acetoacetato y se elimina por la respiración?",
    o: ["Acetona", "Lactato", "Urea", "Piruvato"],
    e: "La acetona se exhala y produce un olor afrutado en el aliento de algunos pacientes diabéticos." },
  { m: "cetonicos",
    q: "¿Qué ocurre cuando hay exceso de cuerpos cetónicos en la sangre?",
    o: ["Baja el pH de la sangre: cetoacidosis", "Sube el pH de la sangre: alcalosis", "Disminuye la producción de acetil-CoA", "Aumenta la captación de glucosa"],
    hint: "El acetoacetato y el β-hidroxibutirato son ácidos.",
    e: "Los cuerpos cetónicos son ácidos. En exceso bajan el pH de la sangre." },
  { m: "cetonicos",
    q: "En la diabetes mellitus tipo 1 sin insulina, ¿por qué aumentan los cuerpos cetónicos?",
    o: ["La glucosa no entra a las células y estas oxidan más ácidos grasos", "Hay exceso de insulina, que activa la formación de cuerpos cetónicos", "El hígado almacena más glicógeno y libera acetil-CoA", "Los eritrocitos producen cuerpos cetónicos en exceso"],
    hint: "La insulina permite que la glucosa entre a las células.",
    e: "Sin insulina la glucosa no entra a las células. Estas obtienen energía de los ácidos grasos, y el hígado produce cuerpos cetónicos en exceso." },
  { m: "cetonicos",
    q: "Un paciente diabético tiene aliento con olor afrutado y pH sanguíneo bajo. ¿Qué se sospecha?",
    o: ["Cetoacidosis diabética", "Hipoglicemia por exceso de insulina", "Déficit de carnitina", "Falta de glucagón"],
    hint: "El olor afrutado se debe a la acetona.",
    e: "El aliento con olor afrutado (acetona) y el pH bajo indican exceso de cuerpos cetónicos: cetoacidosis diabética." },
  /* ---------- Caso: enfermedad de Hers (cuerpos cetónicos) ---------- */
  { m: "casos",
    case: "La enfermedad de Hers afecta a las células del hígado, que no pueden producir la enzima glicógeno fosforilasa, necesaria para degradar el glicógeno hepático. Los pacientes tienen períodos de glicemia muy baja (hipoglicemia).",
    q: "¿Por qué aumentan los cuerpos cetónicos en la sangre de estos pacientes?",
    o: ["El glucagón activa la lipólisis; los ácidos grasos llegan al hígado y se transforman en cuerpos cetónicos", "La insulina aumenta y activa la formación de cuerpos cetónicos en el hígado", "El hígado convierte el glicógeno acumulado en cuerpos cetónicos directamente", "El músculo libera cuerpos cetónicos al degradar su glicógeno"],
    hint: "Con la glicemia baja se libera glucagón.",
    e: "Por la hipoglicemia, el glucagón favorece la lipólisis en el tejido adiposo. Los ácidos grasos libres llegan al hígado, donde se degradan por β-oxidación y se forman cuerpos cetónicos (cetogénesis)." },
  /* ---------- Lipoproteínas ---------- */
  { m: "lipoproteinas",
    q: "¿Por qué los lípidos viajan en la sangre formando lipoproteínas?",
    o: ["Porque los lípidos no se disuelven en agua", "Porque los lípidos son muy pequeños para circular solos", "Porque necesitan oxígeno para llegar a los tejidos", "Porque así se transforman en glucosa"],
    e: "Los lípidos son insolubles en agua. Por eso se asocian a proteínas y a otras moléculas y forman lipoproteínas que sí pueden viajar por la sangre." },
  { m: "lipoproteinas",
    q: "¿Qué lipoproteína transporta los lípidos de la dieta?",
    o: ["Los quilomicrones", "La VLDL", "La LDL", "La HDL"],
    hint: "Se forman en el intestino.",
    e: "Los quilomicrones se forman en el intestino y llevan los lípidos que vienen de los alimentos." },
  { m: "lipoproteinas",
    q: "¿Dónde se forman los quilomicrones?",
    o: ["En el intestino", "En el hígado", "En el músculo", "En el páncreas"],
    e: "Los quilomicrones se forman en el intestino, después de la absorción de los lípidos de la dieta." },
  { m: "lipoproteinas",
    q: "¿Qué lipoproteína transporta sobre todo triglicéridos producidos por el hígado?",
    o: ["La VLDL", "La HDL", "La LDL", "Los quilomicrones"],
    hint: "Su nombre significa lipoproteína de muy baja densidad.",
    e: "La VLDL se forma en el hígado y lleva a los tejidos los triglicéridos que produce el propio organismo." },
  { m: "lipoproteinas",
    q: "¿Qué transporta la LDL?",
    o: ["Colesterol del hígado hacia los tejidos", "Colesterol desde los tejidos hacia el hígado", "Triglicéridos de la dieta desde el intestino", "Ácidos grasos libres unidos a albúmina"],
    hint: "Es la que lleva el colesterol hacia los tejidos.",
    e: "La LDL se forma a partir de la IDL y lleva colesterol del hígado a los tejidos." },
  { m: "lipoproteinas",
    q: "¿Qué transporta la HDL?",
    o: ["Colesterol desde los tejidos hacia el hígado", "Colesterol del hígado hacia los tejidos", "Triglicéridos de la dieta desde el intestino", "Ácidos grasos libres unidos a albúmina"],
    hint: "Hace el transporte reverso del colesterol.",
    e: "La HDL retira el colesterol de los tejidos y lo lleva al hígado: se llama transporte reverso del colesterol." },
  { m: "lipoproteinas",
    q: "¿Qué enzima libera ácidos grasos de los quilomicrones y las VLDL en los capilares?",
    o: ["La lipoproteína lipasa", "La glucógeno fosforilasa", "La citrato sintasa", "La piruvato quinasa"],
    e: "La lipoproteína lipasa hidroliza los triglicéridos de estas partículas y libera ácidos grasos para el tejido adiposo y el músculo." },
  { m: "lipoproteinas",
    q: "¿A partir de qué lipoproteína se forma la IDL?",
    o: ["De la VLDL", "De la HDL", "De los quilomicrones", "De la LDL"],
    e: "La IDL surge de la VLDL por la acción de la lipoproteína lipasa. A su vez, la LDL se forma a partir de la IDL." },
  { m: "lipoproteinas",
    img: "assets/lipoproteinas-densidad.png",
    imgAlt: "Gráfica de densidad frente a diámetro de las lipoproteínas. De menor a mayor tamaño: HDL (43 % lípidos y 57 % proteínas), LDL (79 % y 21 %), IDL (89 % y 11 %), VLDL (92 % y 8 %) y quilomicrón (99 % y 1 %).",
    q: "Según la figura, ¿qué lipoproteína tiene mayor porcentaje de lípidos y es la menos densa?",
    o: ["Los quilomicrones", "La HDL", "La LDL", "La IDL"],
    hint: "Fíjate en el porcentaje de lípidos, en rojo. QM significa quilomicrones.",
    e: "Los quilomicrones tienen 99 % de lípidos. A más lípidos, la partícula es más grande y menos densa." },
  { m: "lipoproteinas",
    img: "assets/lipoproteinas-densidad.png",
    imgAlt: "Gráfica de densidad frente a diámetro de las lipoproteínas. De menor a mayor tamaño: HDL (43 % lípidos y 57 % proteínas), LDL (79 % y 21 %), IDL (89 % y 11 %), VLDL (92 % y 8 %) y quilomicrón (99 % y 1 %).",
    q: "Según la figura, ¿qué lipoproteína tiene mayor porcentaje de proteínas y es la más densa?",
    o: ["La HDL", "La LDL", "La VLDL", "Los quilomicrones"],
    hint: "Fíjate en el porcentaje de proteínas, en azul.",
    e: "La HDL tiene 57 % de proteínas, por eso es la más pequeña y la más densa." },
  /* ---------- Biosíntesis de ácidos grasos ---------- */
  { m: "lipogenesis",
    q: "¿Dónde ocurre la síntesis de ácidos grasos?",
    o: ["En el citosol", "En la matriz mitocondrial", "En el núcleo", "En la membrana mitocondrial interna"],
    e: "La síntesis de ácidos grasos ocurre en el citosol. La β-oxidación, en cambio, ocurre en la matriz mitocondrial." },
  { m: "lipogenesis",
    q: "¿A partir de qué molécula se sintetizan los ácidos grasos?",
    o: ["Acetil-CoA", "Lactato", "Urea", "Colesterol"],
    e: "Los ácidos grasos se construyen a partir de unidades de acetil-CoA." },
  { m: "lipogenesis",
    q: "¿Cuál es el producto principal de la síntesis de ácidos grasos?",
    o: ["El ácido palmítico", "El colesterol", "Los cuerpos cetónicos", "El glicógeno"],
    hint: "Tiene 16 carbonos.",
    e: "El producto principal es el ácido palmítico (palmitato), de 16 carbonos. A partir de él se forman otros ácidos grasos." },
  { m: "lipogenesis",
    q: "¿Cómo sale el acetil-CoA de la mitocondria hacia el citosol?",
    o: ["Formando citrato", "Unido a la carnitina", "Como cuerpo cetónico", "Atravesando libre la membrana"],
    hint: "El acetil-CoA no puede salir solo de la mitocondria.",
    e: "El acetil-CoA se une al oxaloacetato y forma citrato, que sale al citosol. Allí se regenera el acetil-CoA." },
  { m: "lipogenesis",
    q: "¿Qué enzima cataliza el paso limitante de la síntesis de ácidos grasos?",
    o: ["La acetil-CoA carboxilasa", "La hexoquinasa", "La glucógeno fosforilasa", "La lipoproteína lipasa"],
    e: "La acetil-CoA carboxilasa limita la velocidad de la vía y es una de las enzimas que regula la insulina." },
  { m: "lipogenesis",
    q: "¿Qué molécula forma la acetil-CoA carboxilasa?",
    o: ["Malonil-CoA", "Citrato", "Palmitato", "Acetoacetato"],
    e: "La acetil-CoA carboxilasa cataliza el paso de acetil-CoA a malonil-CoA. A partir de él se inicia la síntesis del ácido graso." },
  { m: "lipogenesis",
    q: "¿Cuántos carbonos se agregan a la cadena en cada ciclo de alargamiento?",
    o: ["2", "1", "4", "16"],
    e: "La cadena crece de a 2 carbonos en cada ciclo, hasta llegar a los 16 del palmitato." },
  { m: "lipogenesis",
    q: "¿Qué hormona activa la síntesis de ácidos grasos y de triglicéridos?",
    o: ["La insulina", "El glucagón", "La adrenalina", "Ninguna hormona la regula"],
    hint: "Se activa después de comer.",
    e: "La insulina activa la síntesis de ácidos grasos y triglicéridos. El glucagón la inhibe en el hígado." },
  { m: "lipogenesis",
    q: "¿Qué diferencia a la síntesis de ácidos grasos de la β-oxidación?",
    o: ["La síntesis ocurre en el citosol y la β-oxidación en la matriz mitocondrial", "Ambas ocurren en el citosol", "La síntesis ocurre en la mitocondria y la β-oxidación en el citosol", "Ambas ocurren en la matriz mitocondrial"],
    e: "La síntesis ocurre en el citosol y la β-oxidación en la matriz mitocondrial. Además, la síntesis se activa con insulina y la β-oxidación con glucagón." },
  { m: "lipogenesis",
    q: "Una persona come una comida rica en carbohidratos. ¿Qué ocurre con el exceso de glucosa?",
    o: ["Se transforma en acetil-CoA y luego en ácidos grasos, que se almacenan como triglicéridos", "Se convierte en cuerpos cetónicos que el hígado libera a la sangre", "Se elimina por la orina sin transformarse en otras moléculas", "Se almacena solo como glicógeno, sin ningún límite"],
    hint: "Con la glicemia alta se libera insulina.",
    e: "Con insulina alta, el exceso de glucosa se convierte en acetil-CoA y en ácidos grasos, que se almacenan como triglicéridos en el tejido adiposo." },
  /* ---------- Digestión y absorción de lípidos ---------- */
  { m: "digestionlipidos",
    q: "¿Cuál es el objetivo de la digestión de los lípidos?",
    o: ["Separar los ácidos grasos del glicerol con la enzima lipasa", "Convertir los triglicéridos en glucosa", "Transformar los ácidos grasos en aminoácidos", "Unir los ácidos grasos al glicerol"],
    e: "La digestión de los lípidos busca separar los ácidos grasos del glicerol, y lo hace la lipasa." },
  { m: "digestionlipidos",
    q: "¿Qué enzima rompe los triglicéridos en el estómago?",
    o: ["La lipasa gástrica", "La lipasa pancreática", "La amilasa salival", "La pepsina"],
    e: "La lipasa gástrica rompe triglicéridos en diglicéridos y ácidos grasos, pero en el estómago se digiere muy poca grasa." },
  { m: "digestionlipidos",
    q: "¿Qué función cumple la bilis en la digestión de las grasas?",
    o: ["Emulsiona las grasas: las divide en gotitas pequeñas", "Rompe los enlaces del triglicérido, como una lipasa", "Transforma los lípidos en proteínas", "Absorbe los ácidos grasos en la sangre"],
    hint: "La bilis no es una enzima.",
    e: "La bilis emulsiona las grasas. Al dividirlas en gotitas aumenta su superficie, y las enzimas pueden actuar mejor." },
  { m: "digestionlipidos",
    q: "¿Dónde ocurre la mayor parte de la digestión de las grasas?",
    o: ["En el intestino delgado", "En la boca", "En el estómago", "En el intestino grueso"],
    e: "En el intestino delgado actúan la bilis y la lipasa pancreática, por eso allí se digiere la mayor parte de la grasa." },
  { m: "digestionlipidos",
    q: "¿Qué productos forma la lipasa pancreática al digerir los triglicéridos?",
    o: ["Ácidos grasos libres y monoglicéridos", "Glucosa y aminoácidos", "Colesterol y fosfolípidos", "Quilomicrones y VLDL"],
    e: "La lipasa pancreática rompe los triglicéridos en ácidos grasos libres y monoglicéridos, que ya se pueden absorber." },
  { m: "digestionlipidos",
    q: "¿Qué son las micelas?",
    o: ["Partículas de sales biliares con ácidos grasos y monoglicéridos, que los llevan a las células del intestino", "Enzimas que digieren los lípidos en el estómago", "Lipoproteínas que viajan por la sangre hacia el hígado", "Gotitas de grasa que se forman en la boca"],
    hint: "Tienen un exterior soluble en agua.",
    e: "Las micelas tienen un núcleo graso y un exterior soluble en agua. Así transportan los lípidos hasta las células de la pared intestinal." },
  { m: "digestionlipidos",
    q: "¿Qué ocurre con los ácidos grasos y los monoglicéridos dentro de las células del intestino?",
    o: ["Se vuelven a unir y forman triglicéridos", "Se convierten en glucosa", "Pasan directo a la vena porta", "Se eliminan en las heces"],
    e: "Dentro de las células intestinales se forman de nuevo triglicéridos, que se incorporan a los quilomicrones." },
  { m: "digestionlipidos",
    q: "¿Qué lipoproteína se forma en las células del intestino con los lípidos de la dieta?",
    o: ["Los quilomicrones", "La VLDL", "La LDL", "La IDL"],
    e: "Los quilomicrones se forman en el intestino y transportan los lípidos de la dieta." },
  { m: "digestionlipidos",
    q: "¿Por qué los quilomicrones no entran a la vena porta?",
    o: ["Porque son demasiado grandes, y pasan al sistema linfático", "Porque son demasiado pequeños y se pierden", "Porque la bilis los destruye", "Porque se digieren antes en el estómago"],
    hint: "La vena porta lleva nutrientes solubles en agua.",
    e: "Los quilomicrones son muy grandes. Pasan al sistema linfático y llegan a la sangre por la vena subclavia." },
  { m: "digestionlipidos",
    q: "¿Por qué el examen de colesterol se toma después de 9 a 12 horas de ayuno?",
    o: ["Para que los lípidos de la última comida ya hayan circulado y la medición sea estable", "Para que haya más quilomicrones en la sangre", "Porque en el ayuno el colesterol desaparece de la sangre", "Porque la bilis interfiere con el examen"],
    e: "Tras 9 a 12 horas de ayuno, los lípidos de la comida anterior ya circularon y la concentración de lipoproteínas se estabiliza." },
  /* ---------- Aminoácidos: catabolismo, transporte de amonio y ciclo de la urea ---------- */
  { m: "aacatabolismo",
    q: "¿En qué órgano se degradan la mayoría de los aminoácidos?",
    o: ["El hígado", "El páncreas", "El corazón", "Los eritrocitos"],
    e: "La mayoría de los aminoácidos se metabolizan en el hígado." },
  { m: "aacatabolismo",
    q: "¿Qué pierden primero los aminoácidos al degradarse?",
    o: ["Su grupo amino", "Su esqueleto de carbono", "Su grupo carboxilo", "Su cadena lateral"],
    e: "Los aminoácidos pierden su grupo amino y quedan como α-cetoácidos. El esqueleto de carbono sigue otras vías." },
  { m: "aacatabolismo",
    q: "¿Cómo se llama el primer paso del catabolismo de los aminoácidos?",
    o: ["Transaminación", "Desaminación oxidativa", "β-oxidación", "Glicólisis"],
    hint: "Es el paso en que se elimina el grupo amino.",
    e: "En la transaminación el grupo amino pasa del aminoácido al α-cetoglutarato." },
  { m: "aacatabolismo",
    q: "¿Qué enzimas catalizan la transaminación?",
    o: ["Las aminotransferasas", "Las lipasas", "Las fosfatasas", "Las carboxilasas"],
    e: "Las aminotransferasas, también llamadas transaminasas, transfieren el grupo amino." },
  { m: "aacatabolismo",
    q: "En la transaminación, ¿a qué molécula se transfiere el grupo amino?",
    o: ["Al α-cetoglutarato, que se convierte en glutamato", "Al oxígeno, que forma agua", "Al piruvato, que forma lactato", "Al acetil-CoA, que forma citrato"],
    e: "El grupo amino pasa al α-cetoglutarato y forma glutamato. Así los grupos amino se acumulan en el glutamato." },
  { m: "aacatabolismo",
    q: "¿Dónde ocurre la desaminación oxidativa del glutamato?",
    o: ["En la matriz mitocondrial", "En el citosol", "En el núcleo", "En la membrana plasmática"],
    e: "El glutamato entra a la mitocondria, y allí la glutamato deshidrogenasa lo desamina." },
  { m: "aacatabolismo",
    q: "¿Qué se libera en la desaminación oxidativa del glutamato?",
    o: ["Amonio (NH₄⁺)", "Urea", "Glucosa", "Lactato"],
    hint: "Es una sustancia tóxica que se elimina en el ciclo de la urea.",
    e: "La desaminación libera amonio, que es tóxico y se destina al ciclo de la urea." },
  { m: "aacatabolismo",
    q: "¿Qué enzima realiza la desaminación oxidativa del glutamato?",
    o: ["La glutamato deshidrogenasa", "La aminotransferasa", "La glutaminasa", "La arginasa"],
    e: "La glutamato deshidrogenasa usa NAD⁺ o NADP⁺ y libera el amonio." },
  { m: "aacatabolismo",
    q: "¿Qué es un aminoácido glucogénico?",
    o: ["El que forma piruvato o intermediarios del ciclo de Krebs, que pueden dar glucosa", "El que forma solo acetil-CoA o acetoacetil-CoA", "El que se degrada solo en el músculo", "El que no pierde su grupo amino"],
    e: "Los glucogénicos generan piruvato o intermediarios del ciclo de Krebs, con los que se puede fabricar glucosa." },
  { m: "aacatabolismo",
    q: "¿Cuáles son los aminoácidos cetogénicos que menciona el libro?",
    o: ["Lisina y leucina", "Alanina y glicina", "Glutamato y aspartato", "Arginina y prolina"],
    hint: "Forman solo acetil-CoA o acetoacetil-CoA.",
    e: "La lisina y la leucina generan solo acetil-CoA o acetoacetil-CoA, por eso son cetogénicas." },
  { m: "aacatabolismo",
    q: "En la fenilcetonuria detectada a tiempo, ¿cómo se previene el retraso mental?",
    o: ["Con una dieta baja en fenilalanina", "Con una dieta sin carbohidratos", "Con suplementos de carnitina", "Con una dieta rica en fenilalanina"],
    e: "En la fenilcetonuria falta la fenilalanina hidroxilasa. Una dieta baja en fenilalanina, desde la detección temprana, previene el retraso mental." },
  { m: "amonio",
    q: "¿Por qué hay que transformar el amonio antes de transportarlo por la sangre?",
    o: ["Porque es tóxico para los tejidos", "Porque es muy pesado para circular", "Porque se convierte en glucosa", "Porque no se disuelve en agua"],
    e: "El amonio es tóxico, sobre todo para el cerebro. Por eso se transporta en compuestos no tóxicos." },
  { m: "amonio",
    q: "¿Qué molécula lleva el exceso de amonio de muchos tejidos hacia el hígado?",
    o: ["La glutamina", "La glucosa", "El colesterol", "El lactato"],
    e: "La glutamina es una forma eficiente de transportar el amonio. Está en la sangre en mayor concentración que los otros aminoácidos." },
  { m: "amonio",
    q: "¿Qué enzima forma glutamina a partir de glutamato y amonio, con gasto de ATP?",
    o: ["La glutamina sintetasa", "La glutaminasa", "La aminotransferasa", "La arginasa"],
    e: "La glutamina sintetasa une el amonio al glutamato y gasta ATP." },
  { m: "amonio",
    q: "¿Qué hace la glutaminasa en el hígado?",
    o: ["Libera el amonio de la glutamina, en la mitocondria", "Forma glutamina a partir del amonio", "Forma glucosa a partir del amonio", "Rompe la urea"],
    e: "La glutaminasa libera el amonio de la glutamina, que entra al ciclo de la urea." },
  { m: "amonio",
    q: "¿Qué molécula lleva amonio y esqueletos de carbono desde el músculo en ejercicio hasta el hígado?",
    o: ["La alanina", "La lisina", "El citrato", "El acetil-CoA"],
    e: "La alanina transporta el amonio y los carbonos desde el músculo al hígado." },
  { m: "amonio",
    q: "En el hígado, ¿qué se hace con el piruvato que llega con la alanina?",
    o: ["Se usa para producir glucosa, que vuelve al músculo", "Se convierte en urea", "Se transforma en colesterol", "Se elimina por la orina"],
    e: "El piruvato se usa para fabricar glucosa, que vuelve al músculo. El amonio, en cambio, se elimina como urea." },
  { m: "amonio",
    q: "¿Qué aminoácido es el más glucogénico?",
    o: ["La alanina", "La leucina", "La lisina", "Ninguno es glucogénico"],
    hint: "La leucina y la lisina son cetogénicas.",
    e: "La alanina es el aminoácido más glucogénico: su carbono se convierte en glucosa." },
  { m: "amonio",
    q: "¿Cómo se forma la alanina en el músculo?",
    o: ["El grupo amino del glutamato pasa al piruvato", "El grupo amino del glutamato pasa al oxaloacetato", "Se forma a partir del colesterol", "Se forma a partir de los ácidos grasos"],
    e: "La alanina aminotransferasa pasa el grupo amino del glutamato al piruvato, y se forma alanina." },
  { m: "amonio",
    q: "¿Cómo se llama el ciclo que lleva alanina del músculo al hígado y glucosa de vuelta al músculo?",
    o: ["Ciclo glucosa-alanina", "Ciclo de Cori", "Ciclo de Krebs", "Ciclo de la urea"],
    hint: "El ciclo de Cori lleva lactato, no alanina.",
    e: "El ciclo glucosa-alanina transporta amonio y carbonos del músculo al hígado, y devuelve glucosa al músculo." },
  { m: "urea",
    q: "¿Cuál es la función del ciclo de la urea?",
    o: ["Eliminar el exceso de amonio transformándolo en urea", "Producir glucosa a partir del lactato", "Producir ATP para el músculo", "Sintetizar aminoácidos esenciales"],
    e: "El ciclo de la urea convierte el amonio, que es tóxico, en urea, que se elimina." },
  { m: "urea",
    q: "¿En qué órgano ocurre el ciclo de la urea?",
    o: ["En el hígado", "En el riñón", "En el músculo", "En el cerebro"],
    e: "El ciclo de la urea ocurre en las células del hígado." },
  { m: "urea",
    q: "¿Dónde ocurre el ciclo de la urea dentro de la célula?",
    o: ["Parte en la mitocondria y parte en el citosol", "Solo en el núcleo", "Solo en el citosol", "Solo en la mitocondria"],
    e: "Los primeros pasos ocurren en la mitocondria y los siguientes en el citosol." },
  { m: "urea",
    q: "¿Qué producto del ciclo de la urea se elimina del cuerpo?",
    o: ["La urea", "El amonio", "La glucosa", "El lactato"],
    e: "El ciclo transforma el amonio en urea, que se elimina." },
  { m: "urea",
    q: "¿De dónde proviene el amonio que usa el ciclo de la urea?",
    o: ["De la desaminación del glutamato", "De la glicólisis", "De la β-oxidación", "De la digestión de los lípidos"],
    e: "El amonio se libera cuando el glutamato pierde su grupo amino en la mitocondria." },
  { m: "urea",
    q: "¿Qué molécula se une al carbamoil-fosfato para formar citrulina?",
    o: ["La ornitina", "La arginina", "La glutamina", "El piruvato"],
    e: "El carbamoil-fosfato se une a la ornitina y forma citrulina, que sale de la mitocondria." },
  { m: "urea",
    q: "¿Qué molécula se regenera al final del ciclo y vuelve a la mitocondria?",
    o: ["La ornitina", "La citrulina", "El glutamato", "La urea"],
    hint: "Por eso se llama ciclo.",
    e: "La arginina se rompe, libera urea y regenera ornitina, que inicia una nueva vuelta." },
  { m: "urea",
    q: "¿Qué ocurre con la energía en el ciclo de la urea?",
    o: ["Gasta ATP: 3 por cada urea", "Produce ATP, como la glicólisis", "Produce NADH y FADH₂, como el ciclo de Krebs", "No gasta ni produce energía"],
    e: "El ciclo de la urea gasta energía: 3 ATP por cada molécula de urea." },
  { m: "urea",
    q: "¿Cómo se elimina la urea del cuerpo?",
    o: ["Por la orina", "Por la respiración", "Por las heces", "Solo por el sudor"],
    e: "La urea pasa a la sangre y se elimina por la orina." },
  { m: "urea",
    q: "Si el hígado falla, ¿qué se acumula en la sangre?",
    o: ["Amonio, que es tóxico", "Urea en exceso", "Ornitina", "Glicógeno"],
    hint: "El ciclo de la urea ocurre en el hígado.",
    e: "Si el hígado falla, no se forma urea, y el amonio, que es tóxico, se acumula en la sangre." },
  { m: "casos",
    case: "Un estudiante pasa tres días consumiendo solo carnes y bebidas sin glucosa: su dieta es casi solo proteínas. Al cuarto día se le toman exámenes.",
    q: "¿Cómo se mantiene su glicemia al cuarto día?",
    o: ["El hígado produce glucosa a partir de los esqueletos de carbono de los aminoácidos", "Baja mucho, porque las proteínas no pueden dar glucosa", "Sube mucho, porque las proteínas se convierten en glicógeno al instante", "Se mantiene porque los aminoácidos pasan directo a la sangre como glucosa"],
    hint: "Los aminoácidos glucogénicos pueden dar glucosa.",
    e: "Sin carbohidratos en la dieta, el hígado fabrica glucosa (gluconeogénesis) a partir de los esqueletos de carbono de los aminoácidos. Por eso la glicemia se mantiene. El grupo amino se elimina como urea." },
  { m: "casos",
    case: "Un deportista en preparación llega, después de un ejercicio prolongado, con la glicemia baja y la alanina en sangre alta.",
    q: "¿Qué explica la alanina alta y la glicemia baja?",
    o: ["El músculo libera alanina, que lleva amonio y carbonos al hígado para producir glucosa, mientras el ejercicio consume glucosa", "El hígado libera alanina en exceso y eso bloquea la glucosa", "La insulina convierte la glucosa de la sangre en alanina", "El ejercicio detiene la glicólisis del músculo"],
    e: "Durante el ejercicio prolongado el músculo consume glucosa y libera alanina. Esa alanina viaja al hígado, que fabrica glucosa con su carbono (ciclo glucosa-alanina)." },
  { m: "casos",
    case: "Un deportista en preparación llega, después de un ejercicio prolongado, con la glicemia baja y la alanina en sangre alta.",
    q: "¿Cuál será el destino de la alanina que llega al hígado?",
    o: ["El amonio irá al ciclo de la urea y el piruvato se usará para fabricar glucosa", "Se eliminará directamente por la orina", "Se convertirá en ácidos grasos en el músculo", "Se transformará en glutamina en la sangre"],
    e: "En el hígado, la alanina pierde su grupo amino, que se elimina como urea, y su esqueleto de carbono (piruvato) se usa para producir glucosa." }
];

<script>
const BOT = require('../lib/bot.js')

var kDefaultObj = {
        "class": "go.GraphLinksModel",
        "linkFromPortIdProperty": "fromPort",
        "linkToPortIdProperty": "toPort",
        "nodeDataArray": [ 
      {"key":-1, "category":"Start", "loc":"230.41392499999992 -23.491456249999985", "text":"Start"},
      {"text":"¿Es la primera que realizas el trámite? ::FIRST_TIME", "figure":"Diamond", "key":-3, "loc":"230.52330000000006 102.15538125000003"},
      {"text":"[CURP (url) o Acta de nacimiento (url)]\n\n[Comprobante de domicilio (agua, luz, gas, teléfono)]", "key":-2, "loc":"-174.29536875000005 170.491775"},
      {"text":"¿Tienes una identificación con fotografía? ::HAS_PHOTO_ID", "figure":"Diamond", "key":-5, "loc":"-45.890625 436.97405"},
      {"text":"[Necesitas 2 testigos con identificación oficial]", "key":-6, "loc":"228.4365875000001 531.75854375"},
      {"category":"End", "text":"End", "key":-7, "loc":"225.91095625000003 829.1724687500001"},
      {"text":"DONE CONGRATS", "key":-8, "loc":"215.16981875 701.31044375"},
      {"text":"¿Conservas tu \nIFE/INE anterior? ::HAS_INE", "figure":"Diamond", "key":-9, "loc":"631.109375 215.25"},
      {"text":"¿Qué quieres hacer? ::LOST_INE_CHOICE", "figure":"Diamond", "key":-10, "loc":"537.7979750000002 383.9911375"},
      {"text":"[INE]\n[Comprobante de domicilio]", "key":-11, "loc":"427.77298125000004 559.9136062499999"},
      {"text":"[INE]\n[Acta de nacimiento]", "key":-12, "loc":"640.7729812499999 569.20664375"},
      {"text":"Info: Necesitas una reposición", "key":-13, "loc":"129.27361874999997 292.28417500000006"}
       ],
        "linkDataArray": [ 
      {"from":-1, "to":-3, "fromPort":"B", "toPort":"T", "points":[230.41392499999986,1.2818838421489005,230.41392499999986,11.2818838421489,230.41392499999986,19.65545963347681,230.52330000000006,19.65545963347681,230.52330000000006,28.029035424804718,230.52330000000006,38.02903542480472]},
      {"from":-3, "to":-2, "fromPort":"L", "toPort":"T", "visible":true, "points":[82.01907331542975,102.15538125000003,72.01907331542975,102.15538125000003,-174.29536875000014,102.15538125000003,-174.29536875000014,103.26040521240235,-174.29536875000014,104.36542917480466,-174.29536875000014,114.36542917480466], "text":"YES"},
      {"from":-2, "to":-5, "fromPort":"B", "toPort":"T", "points":[-174.29536875000014,226.6181208251953,-174.29536875000014,236.6181208251953,-174.29536875000014,291.7951881958008,-45.890625,291.7951881958008,-45.890625,346.97225556640626,-45.890625,356.97225556640626]},
      {"from":-5, "to":-6, "fromPort":"R", "toPort":"T", "visible":true, "points":[95.23348999023438,436.97405000000003,105.23348999023438,436.97405000000003,228.4365875000001,436.97405000000003,228.4365875000001,463.20971041870115,228.4365875000001,489.44537083740227,228.4365875000001,499.44537083740227], "text":"NO"},
      {"from":-6, "to":-8, "fromPort":"B", "toPort":"R", "points":[228.4365875000001,564.0717166625976,228.4365875000001,574.0717166625976,228.4365875000001,625.4722180541992,298.28680025634765,625.4722180541992,298.28680025634765,701.31044375,288.28680025634765,701.31044375]},
      {"from":-3, "to":-9, "fromPort":"R", "toPort":"T", "visible":true, "points":[379.0275266845704,102.15538125000003,389.0275266845704,102.15538125000003,631.109375,102.15538125000003,631.109375,121.63951771240237,631.109375,141.1236541748047,631.109375,151.1236541748047], "text":"NO"},
      {"from":-9, "to":-10, "fromPort":"B", "toPort":"T", "visible":true, "points":[631.109375,279.37634582519536,631.109375,289.37634582519536,631.109375,307.5582930541992,537.7979750000002,307.5582930541992,537.7979750000002,325.7402402832031,537.7979750000002,335.7402402832031], "text":"YES"},
      {"from":-10, "to":-11, "fromPort":"L", "toPort":"T", "visible":true, "points":[374.683915551758,383.9911375,364.683915551758,383.9911375,364.683915551758,478.92123402709956,427.77298125000004,478.92123402709956,427.77298125000004,517.6004333374023,427.77298125000004,527.6004333374023], "text":"DOMICILIO"},
      {"from":-10, "to":-12, "fromPort":"R", "toPort":"T", "visible":true, "points":[700.9120344482424,383.9911375,710.9120344482424,383.9911375,710.9120344482424,487.53661492919923,640.7729812499999,487.53661492919923,640.7729812499999,534.8311951416016,640.7729812499999,544.8311951416016], "text":"DATOS"},
      {"from":-5, "to":-8, "fromPort":"B", "toPort":"L", "visible":true, "points":[-45.890625,516.9758444335937,-45.890625,526.9758444335937,-45.890625,701.31044375,43.08110612182617,701.31044375,132.05283724365233,701.31044375,142.05283724365233,701.31044375], "text":"YES"},
      {"from":-11, "to":-8, "fromPort":"B", "toPort":"R", "points":[427.77298125000004,592.2267791625976,427.77298125000004,602.2267791625976,427.77298125000004,701.31044375,363.02989075317385,701.31044375,298.28680025634765,701.31044375,288.28680025634765,701.31044375]},
      {"from":-12, "to":-8, "fromPort":"B", "toPort":"R", "points":[640.7729812499999,593.5820923583984,640.7729812499999,603.5820923583984,640.7729812499999,701.31044375,469.5298907531738,701.31044375,298.28680025634765,701.31044375,288.28680025634765,701.31044375]},
      {"from":-9, "to":-13, "fromPort":"L", "toPort":"R", "visible":true, "points":[495.6831817626953,215.25,485.6831817626953,215.25,350.3325300476074,215.25,350.3325300476074,292.284175,214.9818783325195,292.284175,204.9818783325195,292.284175], "text":"NO"},
      {"from":-13, "to":-5, "fromPort":"L", "toPort":"T", "points":[53.56535916748044,292.284175,43.56535916748044,292.284175,-45.890625,292.284175,-45.890625,319.62821528320313,-45.890625,346.97225556640626,-45.890625,356.97225556640626]},
      {"from":-8, "to":-7, "fromPort":"B", "toPort":"T", "points":[215.16981875,717.7481680541991,215.16981875,727.7481680541991,215.16981875,763.1493149610653,225.91095625000003,763.1493149610653,225.91095625000003,798.5504618679314,225.91095625000003,808.5504618679314]}
       ]}

export default {
  name: 'app',
  mounted() {
    console.log('initialized')

    this.BOT = BOT(this.config, this.io, this.log)

    this.BOT({
      step: -1
    })
  },
  components: {
    Editor: require('./Editor.vue')
  },
  methods: {
    io(question, options, cb) {
      console.log(question, options)
    },
    log(log) {
      console.info(log)
    },
    onEditorInput(newEditorData) {
      console.warn('NEW EDITOR DATA', newEditorData, JSON.stringify(newEditorData).length)
    }
  },
  data() {
    return {
      config: kDefaultObj
    }
  }
}
</script>

<template>
  <div class="pereznino">
    <div class="pereznino_topbar">
      topbar
    </div>

    <div class="pereznino_main">
      <div class="pereznino_design">
        <Editor :data="config" @input="onEditorInput" />
      </div>

      <div class="pereznino_chat">
        <div class="pereznino_chat_body">
          main chat
        </div>

        <input class="pereznino_chat_input" placeholder="¡Prueba tu bot!">
      </div>
    </div><!-- /pereznino_main -->
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    position: relative;
  }

  body, html, .pereznino {
    height: 100vh;
    width: 100vw;
  }

  .pereznino {
    background: #f0f1f2;
    display: flex;
    flex-direction: column;
  }
  .pereznino_topbar {
    padding: 1rem;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0 1px 0, rgba(0, 0, 0, 0.05) 0 1px 5px;
    z-index: 1;
  }
  .pereznino_main {
    flex: 1;
    display: flex;
  }
  .pereznino_design {
    flex: 1;
  }

  .pereznino_chat {
    display: flex;
    flex-direction: column;
    width: 25em;
    background: #e4e5e6;
    box-shadow: inset rgba(0, 0, 0, 0.05) 1px 0 0, inset rgba(0, 0, 0, 0.05) 1px 0 5px;
  }
  .pereznino_chat_body {
    flex: 1;
  }
  .pereznino_chat_input {
    line-height: 1;
    padding: 1rem;
    border: none;
    border-top: 1px solid #ccc;
    background: transparent;
  }
  .pereznino_chat_input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2)
  }
</style>

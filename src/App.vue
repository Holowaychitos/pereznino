<script>
const BOT = require('../lib/bot.js')

var kDefaultObj = {"class":"go.GraphLinksModel","linkFromPortIdProperty":"fromPort","linkToPortIdProperty":"toPort","nodeDataArray":[{"key":-1,"category":"Start","loc":"230.41392499999992 -23.491456249999985","text":"Start"},{"text":"¿Es la primera que realizas el trámite? ::FIRST_TIME","figure":"Diamond","key":-3,"loc":"230.52330000000006 102.15538125000003"},{"text":"[CURP (url) o Acta de nacimiento (url)]\n\n[Comprobante de domicilio (agua, luz, gas, teléfono)]","key":-2,"loc":"-174.29536875000005 170.491775"},{"text":"¿Tienes una identificación con fotografía? ::HAS_PHOTO_ID","figure":"Diamond","key":-5,"loc":"-45.890625 436.97405"},{"text":"[Necesitas 2 testigos con identificación oficial]","key":-6,"loc":"229.91404294378918 522.8938110872654"},{"category":"End","text":"End","key":-7,"loc":"225.91095625000003 829.1724687500001"},{"text":"¿Conservas tu \nIFE/INE anterior? ::HAS_INE","figure":"Diamond","key":-9,"loc":"631.109375 215.25"},{"text":"¿Qué quieres hacer? ::LOST_INE_CHOICE","figure":"Diamond","key":-10,"loc":"537.7979750000002 383.9911375"},{"text":"[INE]\n[Comprobante de domicilio]","key":-11,"loc":"427.77298125000004 559.9136062499999"},{"text":"[INE]\n[Acta de nacimiento]","key":-12,"loc":"640.7729812499999 569.20664375"},{"text":"Info: Necesitas una reposición","key":-13,"loc":"129.27361874999997 292.28417500000006"},{"text":"¡Es todo!","figure":"Diamond","key":-14,"loc":"224.73482414510204 718.0433456814848"}],"linkDataArray":[{"from":-1,"to":-3,"fromPort":"B","toPort":"T","points":[230.41392499999986,1.2818838421489005,230.41392499999986,11.2818838421489,230.41392499999986,19.65545963347681,230.52330000000006,19.65545963347681,230.52330000000006,28.029035424804718,230.52330000000006,38.02903542480472]},{"from":-3,"to":-2,"fromPort":"L","toPort":"T","visible":true,"points":[82.01907331542975,102.15538125000003,72.01907331542975,102.15538125000003,-174.29536875000014,102.15538125000003,-174.29536875000014,103.26040521240235,-174.29536875000014,104.36542917480466,-174.29536875000014,114.36542917480466],"text":"YES"},{"from":-2,"to":-5,"fromPort":"B","toPort":"T","points":[-174.29536875000014,226.6181208251953,-174.29536875000014,236.6181208251953,-174.29536875000014,291.7951881958008,-45.890625,291.7951881958008,-45.890625,346.97225556640626,-45.890625,356.97225556640626]},{"from":-5,"to":-6,"fromPort":"R","toPort":"T","visible":true,"points":[95.23348999023438,436.97405000000003,105.23348999023438,436.97405000000003,229.91404294378913,436.97405000000003,229.91404294378913,458.7773440873339,229.91404294378913,480.5806381746678,229.91404294378913,490.5806381746678],"text":"NO"},{"from":-3,"to":-9,"fromPort":"R","toPort":"T","visible":true,"points":[379.0275266845704,102.15538125000003,389.0275266845704,102.15538125000003,631.109375,102.15538125000003,631.109375,121.63951771240237,631.109375,141.1236541748047,631.109375,151.1236541748047],"text":"NO"},{"from":-9,"to":-10,"fromPort":"B","toPort":"T","visible":true,"points":[631.109375,279.37634582519536,631.109375,289.37634582519536,631.109375,307.5582930541992,537.7979750000002,307.5582930541992,537.7979750000002,325.7402402832031,537.7979750000002,335.7402402832031],"text":"YES"},{"from":-10,"to":-11,"fromPort":"L","toPort":"T","visible":true,"points":[374.683915551758,383.9911375,364.683915551758,383.9911375,364.683915551758,478.92123402709956,427.77298125000004,478.92123402709956,427.77298125000004,517.6004333374023,427.77298125000004,527.6004333374023],"text":"DOMICILIO"},{"from":-10,"to":-12,"fromPort":"R","toPort":"T","visible":true,"points":[700.9120344482424,383.9911375,710.9120344482424,383.9911375,710.9120344482424,487.53661492919923,640.7729812499999,487.53661492919923,640.7729812499999,534.8311951416016,640.7729812499999,544.8311951416016],"text":"DATOS"},{"from":-9,"to":-13,"fromPort":"L","toPort":"R","visible":true,"points":[495.6831817626953,215.25,485.6831817626953,215.25,350.3325300476074,215.25,350.3325300476074,292.284175,214.9818783325195,292.284175,204.9818783325195,292.284175],"text":"NO"},{"from":-13,"to":-5,"fromPort":"L","toPort":"T","points":[53.56535916748044,292.284175,43.56535916748044,292.284175,-45.890625,292.284175,-45.890625,319.62821528320313,-45.890625,346.97225556640626,-45.890625,356.97225556640626]},{"from":-5,"to":-14,"fromPort":"B","toPort":"L","visible":true,"points":[-45.890625,516.9758444335937,-45.890625,526.9758444335937,-45.890625,718.0433456814848,44.41479061259008,718.0433456814848,134.72020622518016,718.0433456814848,144.72020622518016,718.0433456814848],"text":"YES"},{"from":-6,"to":-14,"fromPort":"B","toPort":"T","points":[229.91404294378913,555.2069839998632,229.91404294378913,565.2069839998632,229.91404294378913,620.4374405364747,224.73482414510204,620.4374405364747,224.73482414510204,675.6678970730864,224.73482414510204,685.6678970730864]},{"from":-11,"to":-14,"fromPort":"B","toPort":"R","points":[427.77298125000004,592.2267791625976,427.77298125000004,602.2267791625976,427.77298125000004,718.0433456814848,371.261211657512,718.0433456814848,314.7494420650239,718.0433456814848,304.7494420650239,718.0433456814848]},{"from":-12,"to":-14,"fromPort":"B","toPort":"R","points":[640.7729812499999,593.5820923583984,640.7729812499999,603.5820923583984,640.7729812499999,718.0433456814848,477.7612116575119,718.0433456814848,314.7494420650239,718.0433456814848,304.7494420650239,718.0433456814848]},{"from":-14,"to":-7,"fromPort":"B","toPort":"T","visible":true,"points":[224.73482414510204,750.4187942898832,224.73482414510204,760.4187942898832,224.73482414510204,779.4846280789072,225.91095625000003,779.4846280789072,225.91095625000003,798.5504618679314,225.91095625000003,808.5504618679314],"text":"GRACIAS"}]}

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

      this.chat.push({
        author: 'bot',
        message: question
      })

      this.chatOptions = options
      this.ioInputCallback = cb
    },
    log(log) {
      if (log === 'Start' || log === 'End') return
      this.chat.push({
        author: 'bot',
        message: log
      })
    },

    onEditorInput(newEditorData) {
      this.config = newEditorData
      this.configString = encodeURI(JSON.stringify(newEditorData))

      this.chat = []
      this.chatOptions = null
      this.BOT = BOT(this.config, this.io, this.log)
      this.BOT({
        step: -1
      })
    },
    onUserInput(message) {
      console.warn({message})
      this.chat.push({
        author: 'user',
        message: message
      })
      this.ioInputCallback(message)
    }
  },
  data() {
    return {
      config: kDefaultObj,
      configString: encodeURI(JSON.stringify(kDefaultObj)),
      chat: [],
      chatOptions: null,
      ioInputCallback: () => {}
    }
  }
}
</script>

<template>
  <div class="pereznino">
    <div class="pereznino_topbar">
      <div class="pereznino_topbar_title">Perez Niño <b>Creator</b></div>
      <a class="button -light" href="https://github.com/Holowaychitos/pereznino">
        Más información
      </a>
      <a class="button" :href="'mailto:hi@javier.xyz?subject=Hola! Revisen este diagrama&body=' + configString">
        ¡Enviar!
      </a>
    </div>

    <div class="pereznino_main">
      <div class="pereznino_design">
        <Editor :data="config" @input="onEditorInput" />
      </div>

      <div class="pereznino_chat">
        <div class="pereznino_chat_body">
          <div class="pereznino_chat_header">
            <div class="pereznino_chat_avatar" :style="{backgroundImage: 'url(src/assets/pereznino.jpg)'}"></div>
            <div class="pereznino_chat_header_title">
              Perez Niño
            </div>
          </div><!-- /pereznino_chat_header -->
          <div class="pereznino_chat_body_message_container" v-for="message in chat">
            <div class="pereznino_chat_body_message" :class="'-author-' + message.author">
              {{message.message}}
            </div>
          </div>
        </div>

        <input v-if="!chatOptions" class="pereznino_chat_input" placeholder="¡Prueba tu bot!">

        <div v-if="chatOptions" class="pereznino_chat_options">
          <div class="pereznino_chat_options_button "v-for="option in chatOptions" @click="onUserInput(option)">
            {{option}}
          </div>
        </div>
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

  body, input, textarea {
    font-size: 14px;
    line-height: 1.618;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
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
    font-size: 1.2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    letter-spacing: -1px;
  }
  .pereznino_topbar_title {
    flex: 1;
  }
  .button {
    background: #2980B9;
    columns: #fff;
    font-size: 1rem;
    line-height: 2.2rem;
    height: 2.2rem;
    padding: 0 1rem;
    border-radius: 2px;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
  }
  .button.-light {
    background: #ECF0F1;
    margin-right: 0.5rem;
    color: #000;
  }
  .button.-light:hover {
    background: #BDC3C7;
  }
  .button:hover {
    background: #3498DB;
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
    width: 33vw;
    background: #e4e5e6;
    box-shadow: inset rgba(0, 0, 0, 0.05) 1px 0 0, inset rgba(0, 0, 0, 0.05) 1px 0 5px;
  }
  .pereznino_chat_body {
    flex: 1;
    padding: 0.5rem;
  }
  .pereznino_chat_input {
    line-height: 1;
    padding: 1rem;
    border: none;
    border-top: 1px solid #ccc;
    background: transparent;
  }
  .pereznino_chat_body_message_container {
    display: table;
    width: 100%;
  }
  .pereznino_chat_body_message {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background: #ddd;
    border-radius: 1rem;
    display: inline-block;
  }
  .pereznino_chat_body_message.-author-user {
    background: #ECF0F1;
    float:right;
    box-shadow: rgba(0, 0, 0, 0.05) 0 1px 0, rgba(0, 0, 0, 0.05) 0 1px 4px;
  }
  .pereznino_chat_body_message.-author-bot {
    background: #2980B9;
    color: #fff;
  }
  .pereznino_chat_input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2)
  }

  .pereznino_chat_header {
    text-align: center;
  }
  .pereznino_chat_header_title {
    font-size: 1.2rem;
    font-weight: 300;
    top: -0.5rem;
  }
  .pereznino_chat_avatar {
    margin-top: 1rem;
    height: 5rem;
    width: 5rem;
    background-size: cover;
    border-radius: 5rem;
    display: inline-block;
  }

  .pereznino_chat_options {
    border-top: 1px solid #ccc;
    text-align: center;
    padding: 0.5rem;
  }
  .pereznino_chat_options_button {
    display: inline-block;
    line-height: 1;
    padding: 0.5rem 1rem;
    background: #2980B9;
    color: #fff;
    border-radius: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
  .pereznino_chat_options_button:hover {
    background: #3498DB;
  }
</style>

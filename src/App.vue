<script>
const BOT = require('../lib/bot.js')

var kDefaultObj = require('./data/ine.js')

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
    io(question, options, cb, currentStep) {
      console.log(question, options)

      this.chat.push({
        author: 'bot',
        message: question
      })

      this.chatOptions = options
      this.ioInputCallback = cb
    },
    log(log) {
      // this.addToRequeriments(log)

      // STOP
      if (log === 'Start' || log === 'End') return

      this.chat.push({
        author: 'bot',
        message: log
      })
    },

    addToRequeriments(log) {
      var regex = /\[(.*?)\]/

      function getMatches(string, regex, index) {
        console.log(index)

        index || (index = 1)
        var matches = []
        var match
        while (match = regex.exec(string)) {
          matches.push(match[index])
        }
        return matches;
      }

      var matches = getMatches(log, regex, 1)

      console.warn(matches)
    },

    onEditorInput(newEditorData) {
      this.config = newEditorData
      this.configString = encodeURI(JSON.stringify(newEditorData))

      this.onRestart()
    },
    onUserInput(message) {
      this.chat.push({
        author: 'user',
        message: message
      })
      this.ioInputCallback(message)
    },
    onRestart() {
      this.chat = []
      this.requerimentsState = []
      this.chatOptions = null
      this.BOT = BOT(this.config, this.io, this.log)
      this.BOT({
        step: -1
      })
    }
  },
  data() {
    return {
      chat: [],
      chatOptions: null,
      config: kDefaultObj,
      configString: encodeURI(JSON.stringify(kDefaultObj)),
      ioInputCallback: () => {},
      requerimentsState: []
    }
  }
}
</script>

<template>
  <div class="pereznino">
    <div class="pereznino_topbar">
      <div class="pereznino_topbar_title">Perez Niño <b>Creator</b></div>
      <a class="button -light" href="https://github.com/Holowaychitos/pereznino" target="_blank">
        Más información
      </a>
      <a class="button" :href="'mailto:hi@javier.xyz?subject=Hola! Revisen este diagrama&body=' + configString">
        ¡Enviar!
      </a>
    </div>

    <div class="pereznino_main">
      <div class="pereznino_design">
        <div class="pereznino_description">
          Diseña tu flujo.
        </div>
        <Editor :data="config" @input="onEditorInput" />
      </div>

      <div class="pereznino_chat">
        <div class="pereznino_description">
          Prueba tu flujo.
        </div>
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

        <div v-if="chatOptions && chatOptions[0] !== 'GRACIAS'" class="pereznino_chat_options">
          <div class="pereznino_chat_options_button "v-for="option in chatOptions" @click="onUserInput(option)">
            {{option}}
          </div>
        </div>

        <div v-if="chatOptions && chatOptions[0] === 'GRACIAS'" class="pereznino_chat_options">
          <div class="pereznino_chat_options_button" @click="onRestart">
            Volver a empezar
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
    overflow: hidden;
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

  .pereznino_description {
    z-index: 10;
    position: absolute;
    top: 1rem;
    left: 1rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1;
    opacity: 0.5;
  }
</style>

<template>
  <v-app v-scroll="handleScroll" v-resize="handleResize">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="fc-title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :class="[ offsetTop > 0 ? 'secondary' : 'transparent' ]"
      dark
      elevate-on-scroll
      hide-on-scroll
      elevation="0"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <div class="flex-grow-1" />
      <v-btn icon>
        <v-icon>{{ icon.search }}</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon v-text="icon.translate" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            :to="{ path: item.path }"
          >
            <v-list-item-avatar tile size="26">
              <v-img
                :src="item.flag"
                width="16"
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content ref="content" class="pt-0">
      <div
        ref="parallax"
        class="parallax"
        :style="parallaxStyle()"
        alt=""
      />
      <nuxt />
      <div style="height:100vh;" />
    </v-content>
  </v-app>
</template>

<script>
// TODO: https://toor.co/blog/nuxtjs-smooth-scrolling-with-hash-links/
// themes: https://lmpixels.com/wp/kerge-wp/dark/#resume
//         http://themes.potenzaglobalsolutions.com/sam-martin-wp/
//         https://rscard.px-lab.com/startuper/#about
// resume : https://business.tutsplus.com/series/how-to-make-a-great-personal-resume-website-ultimate-guide--cms-1129
export default {
  data: () => ({
    offsetTop: 0,
    rect: {},
    drawer: false,
    windowSize: {},
    icon: {
      menu: 'mdi-menu',
      search: 'mdi-magnify',
      more: 'mdi-dots-vertical',
      translate: 'mdi-translate'
    },
    items: [
      { title: 'About', route: { path: '/' } }
    ],
    menu: [
      { title: 'US', path: '/', flag: 'https://cdn.vuetifyjs.com/images/flags/us.png' },
      { title: 'FR', path: '/fr', flag: require('@/assets/img/france-flag.png') }
    ]
  }),
  computed: {},
  watch: {
    drawer (newVal, oldVal) {
      const computedStyle = getComputedStyle(this.$refs.content.$el, null)
      this.rect.width = parseInt(computedStyle.width) - 256 + parseInt(computedStyle.paddingLeft)
    }
  },
  created () {
    this.$nextTick(() => {})
  },
  mounted () {
    this.handleScroll()
    this.handleResize()
    this.$nextTick(() => {})
  },
  updated () {},
  destroyed () {},
  methods: {
    handleScroll () {
      this.offsetTop = window.scrollY
    },
    handleResize () {
      this.rect = this.$refs.parallax.getBoundingClientRect()
      console.log(this.rect)
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    parallaxStyle () {
      return {
        height: this.rect.width / (16 / 9) + 'px',
        backgroundPosition: `100% ${-this.scrollRatio() / 2}px`,
        backgroundSize: this.rect.width + 'px ' + this.rect.width / (16 / 9) + 'px', // 'contain',
        backgroundImage: 'url(https://picsum.photos/id/184/1920/1080)' // id/184
      }
    },
    scrollRatio () {
      return this.offsetTop // (this.offsetTop / this.rect.height) * 100
    }
  }
}
</script>

<style lang="scss">
.parallax {
  top: 0;
  right: 0;
  left: 0;
  background: {
    attachment: fixed;
    origin: border-box;
    repeat: no-repeat;
  }
  transition: {
    property: background-size;
    duration: .2s;
    timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>

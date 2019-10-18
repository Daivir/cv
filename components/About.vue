<template>
  <v-container>
    <v-card tile shaped>
      <v-card-text>
        <v-img
          :src="photo"
          :aspect-ratio="1"
          alt="#"
        />
      </v-card-text>
      <v-card-title class="d-flex flex-column py-4">
        <div class="display-1 font-weight-bold" v-text="name" />
        <div class="subtitle-1 text-center" v-text="position" />
      </v-card-title>
      <v-card-text>
        <v-divider />
        <v-list>
          <v-list-item v-for="(item, i) in items()" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-capitalize font-weight-bold" v-text="item.title" />
              <v-list-item-subtitle v-text="item.content" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions class="d-flex flex-stretch grow-1 secondary justify-center">
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          :href="social.src"
          target="_blank"
          dark
          icon
        >
          <v-icon v-text="social.logo" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    name: 'Virgile Dupont',
    position: 'Full stack web developper',
    photo: 'https://picsum.photos/600/700',
    socials: [
      { logo: 'mdi-github-circle', src: 'https://github.com/Daivir' },
      { logo: 'mdi-facebook', src: 'https://www.facebook.com/virgile.dupont' },
      { logo: 'mdi-twitter', src: '' },
      { logo: 'mdi-instagram', src: '' },
      { logo: 'mdi-snapchat', src: '' },
      { logo: 'mdi-stack-overflow', src: '' }
    ]
  }),
  methods: {
    items () {
      return [
        {
          title: this.$t('about.age'),
          content: '23',
          icon: 'mdi-calendar'
        },
        {
          title: this.$t('about.nationality'),
          content: 'France',
          icon: 'mdi-earth'
        },
        {
          title: this.$t('about.address'),
          content: '6 Rue Edmond-Charpentier, 42000 Saint-Étienne',
          icon: 'mdi-map-marker'
        },
        {
          title: this.$t('about.email'),
          content: 'virgile.dupont16@gmail.com',
          icon: 'mdi-email'
        },
        {
          title: this.$t('about.phone'),
          content: '+33 6 42 25 31 61',
          icon: 'mdi-phone'
        }
      ]
    }
  }
}
</script>

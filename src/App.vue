<template>
  <div class="card" v-if="users">
    <h1>Level UP. Final Vue Project</h1>
    <Info :user="users[currentId - 1]" />
    <div class="card__steps">
      <div
        class="step"
        @click="changeIndex(user.id)"
        v-for="user in users"
        :key="user.id"
        :class="{
          active: user.id === currentId,
          prev: user.id < currentId,
          next: user.id > currentId,
        }"
      >
        <div class="step__number">{{ user.id }}</div>
        <div class="step__title">{{ user.username }}</div>
      </div>
    </div>
    <div class="footer">
      <div class="card__buttons">
        <button :disabled="currentId === 1" type="button" class="outline" @click="pressBack">
          <div><BIconArrowLeftCircle font-size="1.4rem" /> <span>Back</span></div>
        </button>
        <button @click="pressForward" type="button">
          <div>
            <span>{{ currentId === users.length ? 'Again' : 'Forward' }}</span>
            <BIconArrowRepeat font-size="1.4rem" v-if="currentId === users.length" />
            <BIconArrowRightCircle font-size="1.4rem" v-else />
          </div>
        </button>
      </div>
      <div class="card__random">
        <BIconShuffle @click="pressRandom" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Info from '@/components/Info.vue';

export default {
  name: 'App',
  components: { Info },
  data() {
    return {
      currentId: 1,
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  mounted() {
    this.$store.dispatch('getUsers');
  },
  methods: {
    changeIndex(index) {
      this.currentId = index;
    },
    pressBack() {
      if (this.currentId > 1) {
        this.currentId -= 1;
      }
    },
    pressForward() {
      if (this.currentId < this.users.length) {
        this.currentId += 1;
      } else if (this.currentId === this.users.length) {
        this.currentId = 1;
      }
    },
    pressRandom() {
      this.currentId = Math.floor((Math.random() * 10) / 2 + 1);
      console.log(this.currentId);
    },
  },
};
</script>

<style lang="scss"></style>

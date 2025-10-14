<script setup>
  import { ref, onMounted } from 'vue';
  import api from '@/plugins/axios';

  const genres = ref([]);

  onMounted(async () => {
    const response = await api.get('genre/tv/list?language=pt-BR');
    genres.value = response.data.genres;
  });

  const tvShows = ref([]);

  const listShows = async (genreId) => {
      const response = await api.get('discover/tv', {
          params: {
              with_genres: genreId,
              language: 'pt-BR'
          }
      });
      tvShows.value = response.data.results
  };
</script>
<template>
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li
    v-for="genre in genres"
    :key="genre.id"
    @click="listShows(genre.id)"
    class="genre-item"
  >
    {{ genre.name }}
  </li>
  </ul>
  <div class="tvshow-list">
  <div v-for="tvshow in tvshows" :key="tvshow.id" class="tvshow-card">
    <img
      :src="`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`"
      :alt="tvshow.title"
    />
    <div class="tvshow-details">
      <p class="tvshow-title">{{ tvshow.title }}</p>
      <p class="tvshow-release-date">{{ tvshow.release_date }}</p>
      <p class="-genres">{{ tvshow.genre_ids }}</p>
    </div>
  </div>
</div>

</template>

<style scoped>
  .genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
  }

  .genre-item {
    background-color: #5d6424;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
  }

  .genre-item:hover {
    cursor: pointer;
    background-color: #7d8a2e;
    box-shadow: 0 0 0.5rem #5d6424;
  }
</style>
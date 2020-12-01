<template>
  <div class="about">
    <div class="mx-3 py-4">
      <h1>Here is weather for <span id="cityName"> {{ cityName }}</span></h1>
    </div>
    <div>
      <table style="margin-left: auto; margin-right: auto">
        <tr>
          <th class="mx-1 py-2 px-4">
            <p><strong>Temperature</strong></p>
          </th>
          <th class="mx-1 py-2 px-4">
            <p><strong>Wind speed</strong></p>
          </th>
          <th class="mx-1 py-2 px-4">
            <p><strong>Humidity</strong></p>
          </th>
          <th class="mx-1 py-2 px-4">
            <p><strong>Time</strong></p>
          </th>
        </tr>
        <tr v-for="row in weatherList">
          <td class="mx-3 py-1"> {{ row.temperatureInCelsius }}</td>
          <td class="mx-3 py-1"> {{ row.windSpeed }}</td>
          <td class="mx-3 py-1"> {{ row.humidity }}</td>
          <td class="mx-3 py-1"> {{ row.timestamp }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

let getCityName = function () {
  let url = 'http://localhost:8080/cities/view/' + this.$route.params.id;
  this.$http.get(url)
      .then(city => {
        this.cityName = city.data;
      })
}

let getWeather = function () {
  let url = 'http://localhost:8080/weather/' + this.$route.params.id;
  this.$http.get(url)
      .then(response => {
        this.weatherList = response.data;
      })
}


export default {
  name: 'Weather',
  methods: {
    getWeather,
    getCityName

  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      weatherList: [],
      cityName: ''
    };
  },
  mounted() {
    this.getWeather();
    this.getCityName();
  }
};

</script>

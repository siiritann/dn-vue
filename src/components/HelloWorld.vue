<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p>
        Please use this search box to find a city
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <input v-model="city" id="city" placeholder="insert city name"><br><br>
    </div>
    <div>
      <div class="py-3">
        <button
            v-on:click="searchCities(city)"
            type="button"
            class="btn btn-outline-primary shadow-sm btn-lg ">
          Search
        </button>
      </div>
      <div v-if="searchResult.length">
        <div class="py-3">
          <table id="result" style="margin-left: auto; margin-right: auto">
            <tr>
              <th >City id</th>
              <th>City name</th>
              <th>Country</th>
              <th>State</th>
            </tr>
            <tr v-for="row in searchResult">
              <td >
              <input v-model="cityId" type="radio" name="selectedCity" :value="row.id"/>
                {{ row.id }}
              </td>
              <td>
                {{ row.name }}
              </td>
              <td>
                {{ row.countryCode }}
              </td>
              <td>
                {{ row.stateCode }}
              </td>
            </tr>
          </table>
        </div>
        <div>
          <button
              v-on:click="addCity()"
              type="button"
              class="btn btn-outline-info shadow-sm btn-lg ">
            Add city
          </button>
        </div>

      </div>

      <div class="py-4">
        <p>You can see the list of your cities
        <router-link to="Cities" >here</router-link><br><br>
        </p>

      </div>
    </div>

  </div>
</template>

<script>

let searchCities = function (city) {
  let url = 'http://localhost:8080/cities?n=' + city;

  this.$http.get(url)
      .then(response => {
        this.searchResult = response.data;
      })

 // fetch('http://localhost:8080/cities?n=' + city)
  //     .then(this.showResponse)
  // console.log(this.showResponse)
  // .then(result => result.json())
  // .then((city) => {
  //   console.log(city);
  // });

// WORKED AT SOME POINT
//   let url = 'http://localhost:8080/cities?n=' + city;
//   this.$http.get(url)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response.data);
//         console.log(response);
//       });

  // this.$http.get(url)
  //     .then((response) => response.json())
  //     .then((city => {
  //       console.log(city);
  //     }))
}

let addCity = function () {
  let url = 'http://localhost:8080/cities/add2?id=' + this.cityId;
  console.log(this.cityId);
  this.$http.post(url)
      // TODO ROUTE TO CITIES LIST
}


export default {
  name: 'HelloWorld',
  methods: {
    searchCities,
    addCity
  },
  props: {
    msg: String,
    citydata: {}
  },
  data: function () {
    return {
      city: '',
      searchResult: [],
      cityId: 0
    };
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

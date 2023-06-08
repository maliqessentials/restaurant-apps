import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-text">
          <h1 class="hero-title">Food Mood !</h1>
          <p class="hero-subtitle">Find your happiness here...</p>
          <a href="#mainContent" class="btn">Explore More</a>
        </div>
      </div>
      
      <div class="content container">
        <div class="explore-restaurant" id="main">
          <h1 class="explore-label">Explore Restaurant ...</h1>
        </div>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ListRestaurant;

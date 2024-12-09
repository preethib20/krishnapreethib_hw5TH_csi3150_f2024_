document.addEventListener("DOMContentLoaded", () => {
  const carContainer = document.querySelector(".car-container");
  const applyButton = document.getElementById("applyFilters");

 
  function showCars(cars) {
    carContainer.innerHTML = "";
    if (cars.length === 0) {
      carContainer.innerHTML = "<p>No cars found. Try again!</p>";
      return;
    }

    cars.forEach(car => {
      const carHTML = `
        <div class="car-card">
          <img src="${car.img}" alt="${car.make} ${car.year}" />
          <h4>${car.year} ${car.make}</h4>
          <p>Mileage: ${car.mileage} miles</p>
          <p>Price: $${car.price}</p>
          <p>Color: ${car.color}</p>
        </div>
      `;
      carContainer.innerHTML += carHTML;
    });
  }

  
  function filterCars() {
    const minYear = parseInt(document.getElementById("minYear").value) || 0;
    const maxYear = parseInt(document.getElementById("maxYear").value) || 9999;
    const maxMileage = parseInt(document.getElementById("maxMileage").value) || 999999;
    
    const filtered = usedCars.filter(car =>
      car.year >= minYear &&
      car.year <= maxYear &&
      car.mileage <= maxMileage
    );

    showCars(filtered);
  }

  applyButton.addEventListener("click", filterCars);
  showCars(usedCars);
});

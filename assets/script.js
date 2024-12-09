document.addEventListener("DOMContentLoaded", () => {
  const carContainer = document.querySelector(".car-container");
  const applyFiltersButton = document.getElementById("applyFilters");

  const renderCars = (cars) => {
    carContainer.innerHTML = "";
    if (cars.length === 0) {
      carContainer.innerHTML = "<p>No cars match the criteria. Please try again.</p>";
      return;
    }

    cars.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <img src="${car.img}" alt="${car.make} ${car.year}" />
        <h4>${car.year} ${car.make}</h4>
        <p>Mileage: ${car.mileage} miles</p>
        <p>Price: $${car.price}</p>
        <p>Color: ${car.color}</p>
      `;
      carContainer.appendChild(carCard);
    });
  };

  const filterCars = () => {
    const minYear = parseInt(document.getElementById("minYear").value) || 0;
    const maxYear = parseInt(document.getElementById("maxYear").value) || 9999;
    const selectedMake = Array.from(document.getElementById("makeFilter").selectedOptions).map(option => option.value);
    const maxMileage = parseInt(document.getElementById("maxMileage").value) || 999999;
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || 999999;
    const selectedColor = Array.from(document.getElementById("colorFilter").selectedOptions).map(option => option.value);

    const filtered = usedCars.filter((car) =>
      car.year >= minYear &&
      car.year <= maxYear &&
      selectedMake.includes(car.make) &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      selectedColor.includes(car.color)
    );

    renderCars(filtered);
  };

  applyFiltersButton.addEventListener("click", filterCars);
  renderCars(usedCars);
});

document.addEventListener("DOMContentLoaded", () => {
  const endpoint = "https://techtrove-tsly.onrender.com/api/all-products";

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const endpoint = "https://techtrove-tsly.onrender.com/api/all-products";
//   const shopBoxesContainer = document.querySelector(".shop-boxes");
//   const loadMoreButton = document.getElementById("loadMore");
//   let displayedProducts = 0;

//   // Fetch the initial set of products
//   fetchProducts();

//   loadMoreButton.addEventListener("click", () => {
//     // Fetch more products when the "Load More" button is clicked
//     fetchProducts();
//   });

//   function fetchProducts() {
//     fetch(endpoint)
//       .then((response) => response.json())
//       .then((data) => {
//         // Display 12 more products each time the function is called
//         const productsToDisplay = data.slice(
//           displayedProducts,
//           displayedProducts + 12
//         );
//         displayedProducts += productsToDisplay.length;

//         displayProducts(productsToDisplay);

//         // Show/hide the "Load More" button based on whether there are more products
//         loadMoreButton.style.display =
//           displayedProducts < data.length ? "block" : "none";
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }

//   function displayProducts(products) {
//     if (products && products.length > 0) {
//       products.forEach((product) => {
//         const productElement = document.createElement("div");
//         productElement.classList.add("product-box"); // Optional: Add a class for styling
//         productElement.innerHTML = `
//           <h3>${product.name}</h3>
//           <p>${product.description}</p>
//           <p>Price: $${product.price}</p>
//           <hr>
//         `;
//         shopBoxesContainer.appendChild(productElement);
//       });
//     } else {
//       if (displayedProducts === 0) {
//         // Display a message if there are no products
//         shopBoxesContainer.innerHTML = "<p>No products available.</p>";
//       }
//     }
//   }
// });

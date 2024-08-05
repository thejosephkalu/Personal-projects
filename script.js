document
  .getElementById("giftFinderForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const preferences = document.getElementById("preferences").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const budget = document.getElementById("budget").value;
    const occasion = document.getElementById("occasion").value;

    // This is where you'd normally make an API call to get gift suggestions
    // For this example, we'll just display the input values
    const results = `
      <h2>Gift Suggestions</h2>
      <p>Based on:</p>
      <ul>
          <li>Preferences: ${preferences}</li>
          <li>Age: ${age}</li>
          <li>Gender: ${gender}</li>
          <li>Budget: $${budget}</li>
          <li>Occasion: ${occasion}</li>
      </ul>
      <p>Gift suggestions would appear here.</p>
  `;

    document.getElementById("results").innerHTML = results;
  });

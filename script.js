countries = document.querySelectorAll("path");
tooltip = document.querySelector(".tooltip");
countries.forEach(country => {
    country.addEventListener("mousemove", (e) => {
        const countryName = country.getAttribute("name");
        tooltip.textContent = countryName;
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.opacity = 1;
    });
    country.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
    });
    country.addEventListener("click", (e) => {
        const countryName = country.getAttribute("name");
        window.alert(countryName)
    });
})
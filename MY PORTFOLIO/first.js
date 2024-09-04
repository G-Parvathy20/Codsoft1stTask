document.getElementById("linkedin-img").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:7182697944444264448/?originTrackingId=LVoiYPVWQuCvMJJrdGeTRA%3D%3D";
});


document.getElementById("linkedin-img1").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:7182695173175271424/?originTrackingId=8lqczb0pQ7uTQu5i8nsNKg%3D%3D";
});


document.getElementById("linkedin-img2").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:7182765376672305152/?originTrackingId=WqoTHLa2SCu94LtNXXvUJQ%3D%3D";
});


document.querySelector("nav a[href='#home']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    document.getElementById("home").scrollIntoView({ behavior: "smooth" }); // Scroll to the first section
});


document.querySelector("nav a[href='#about']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    document.getElementById("about").scrollIntoView({ behavior: "smooth" }); // Scroll to the first section
});



document.querySelector("nav a[href='#project']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    document.getElementById("proj").scrollIntoView({ behavior: "smooth" }); // Scroll to the first section
});




document.querySelector("nav a[href='#Skilled']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    document.getElementByClass("skilled").scrollIntoView({ behavior: "smooth" }); // Scroll to the first section
});



document.querySelector("nav a[href='#certify']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    document.getElementById("certi").scrollIntoView({ behavior: "smooth" }); // Scroll to the first section
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
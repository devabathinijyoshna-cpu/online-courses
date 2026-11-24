
function enroll(courseName) {
    alert("Thank you for choosing " + courseName +
    "! Enrollment feature is coming soon.");
}

const search = document.getElementById("search");

search.addEventListener("input", function() {
    const value = search.value.toLowerCase();

    const courses = document.querySelectorAll(".course");

    courses.forEach(function(course) {
        const name = course.querySelector("h3")
            .textContent.toLowerCase();

        course.style.display =
            name.includes(value) ? "block" : "none";
    });
});

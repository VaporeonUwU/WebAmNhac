document.addEventListener("DOMContentLoaded", () => {
  const LIMIT = 3;

  document.querySelectorAll(".view-all").forEach((btn) => {
    const sectionRow = btn.closest(".section-row");
    const directRow =
      btn.closest(".artist-row") ||
      btn.closest(".video-row") ||
      btn.closest(".song-row") ||
      btn.closest(".card-row");

    const row =
      sectionRow?.querySelector(".song-row") ||
      sectionRow?.querySelector(".card-row") ||
      directRow;

    if (!row) return;

    const items = [...row.children].filter(
      (el) => !el.classList.contains("view-all")
    );

    if (items.length <= LIMIT) return;

    let expanded = false;

    items.slice(LIMIT).forEach((item) => {
      item.style.display = "none";
    });

    btn.style.display = "flex";

    btn.addEventListener("click", () => {
      expanded = !expanded;

      items.slice(LIMIT).forEach((item) => {
        item.style.display = expanded ? "block" : "none";
      });

      btn.querySelector("p").textContent = expanded ? "View Less" : "View All";
      btn.querySelector(".plus").textContent = expanded ? "−" : "+";
    });
  });
});

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

    // 🔴 CHỈ LẤY ITEM THẬT – LOẠI VIEW ALL
    const items = [...row.children].filter(
      (el) => !el.classList.contains("view-all")
    );

    if (items.length <= LIMIT) return;

    let expanded = false;

    // Ẩn item dư
    items.slice(LIMIT).forEach((item) => {
      item.style.display = "none";
    });

    btn.style.display = "flex"; // đảm bảo View All luôn hiện

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

(function () {
  function updateDeviceMode() {
    var isMobile = window.matchMedia("(max-width: 720px)").matches;
    document.documentElement.dataset.device = isMobile ? "mobile" : "desktop";
  }

  function labelResponsiveTables() {
    document.querySelectorAll("table").forEach(function (table) {
      var headers = Array.prototype.map.call(table.querySelectorAll("thead th"), function (header) {
        return header.textContent.trim();
      });

      table.querySelectorAll("tbody tr").forEach(function (row) {
        Array.prototype.forEach.call(row.children, function (cell, index) {
          cell.dataset.label = headers[index] || "";
        });
      });
    });
  }

  updateDeviceMode();
  labelResponsiveTables();
  window.addEventListener("resize", updateDeviceMode);
})();

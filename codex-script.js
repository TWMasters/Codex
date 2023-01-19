var flag = "primary-entries"

window.onload = function () {
  renderMenu();
}

function renderMenu() {
  $.getJSON(
    "codex-data.json", function(result) {
      $.each(result, function(key, value) {
        window.alert(value.category);
      })
    }
  );
}
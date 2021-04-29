new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Grunder i programmering", "Användbarhet och tillg..", "Användargränssnitt", "Utvecklingsmiljöer", "Användning av frameworks", "Dokumentation och testning", "2D/3D objekt", "Animering", "kompilatorprogrammering", "Total"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","purple"],
        data: [2,1,3,3,3,2,3,2,3,22]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Poäng'
      }
    }
});
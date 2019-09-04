$.get('/api/loadSavedItems', function (data){
  console.log(data[0].items);
  for (let i = 0; i < data[0].items.length; i++){
    $("#tableBody").append(`
        <tr id="${data[0].items[i].id}">
        <td>${data[0].items[i].itemName}</td>
        <td>tbd</td>
        <td>tbd</td>
        </tr>
    `)
  }
})

async function fetch_data() {
    const response = await fetch("http://localhost:5000/api/get-data");
    const data = await response.json();
    $('#test_data_fetch').text(data.message);
    // const request = new Request('http://localhost:5000/api/send-data')
}